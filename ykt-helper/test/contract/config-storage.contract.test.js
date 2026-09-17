import assert from 'node:assert/strict';
import test from 'node:test';
import { createMemoryStorage } from '../support/browser-harness.js';
import { StorageManager } from '../../src/core/storage.js';

function withStorage(entries, fn) {
  const previous = globalThis.localStorage;
  globalThis.localStorage = createMemoryStorage(entries);
  try { return fn(); } finally {
    if (previous === undefined) delete globalThis.localStorage;
    else globalThis.localStorage = previous;
  }
}

function clone(value) {
  return value == null ? value : JSON.parse(JSON.stringify(value));
}

function createPrivateStore(entries = {}) {
  const values = new Map(Object.entries(entries).map(([key, value]) => [key, clone(value)]));
  return {
    available: () => true,
    get(key, dv = null) {
      return values.has(key) ? clone(values.get(key)) : dv;
    },
    set(key, value) {
      values.set(key, clone(value));
      return true;
    },
    remove(key) {
      values.delete(key);
      return true;
    },
  };
}

const prefix = 'ykt-helper:';

test('legacy top-level profile is available under ai immediately after storage read', () => withStorage({
  [`${prefix}config`]: JSON.stringify({
    profiles: [{ id: 'legacy', name: 'Legacy', baseUrl: 'https://example.test', apiKey: 'secret', model: 'm', visionModel: 'v' }],
    activeProfileId: 'legacy',
    autoAnswer: true,
  }),
}, () => {
  const storage = new StorageManager(prefix);
  const cfg = storage.get('config', {});
  assert.equal(cfg.autoAnswer, true);
  assert.equal(cfg.ai.activeProfileId, 'legacy');
  assert.equal(cfg.ai.profiles[0].apiKey, 'secret');
}));

test('new ai profile remains authoritative when legacy mirrors disagree', () => withStorage({
  [`${prefix}config`]: JSON.stringify({
    profiles: [{ id: 'old', apiKey: 'old' }],
    activeProfileId: 'old',
    ai: {
      profiles: [{ id: 'new', name: 'New', baseUrl: 'https://new.test', apiKey: 'new-key', model: 'm', visionModel: 'v' }],
      activeProfileId: 'new',
    },
  }),
}, () => {
  const cfg = new StorageManager(prefix).get('config', {});
  assert.equal(cfg.ai.activeProfileId, 'new');
  assert.equal(cfg.ai.profiles[0].apiKey, 'new-key');
}));

test('separate legacy kimiApiKey is visible to runtime without settings panel mount', () => withStorage({
  [`${prefix}config`]: JSON.stringify({ autoAnswer: true }),
  [`${prefix}kimiApiKey`]: JSON.stringify('legacy-kimi-key'),
}, () => {
  const cfg = new StorageManager(prefix).get('config', {});
  assert.equal(cfg.ai.kimiApiKey, 'legacy-kimi-key');
  assert.equal(cfg.ai.profiles[0].apiKey, 'legacy-kimi-key');
}));

test('partial persisted ai config keeps all nested defaults after storage read', () => withStorage({
  [`${prefix}config`]: JSON.stringify({ ai: { model: 'custom' } }),
}, () => {
  const cfg = new StorageManager(prefix).get('config', {});
  assert.equal(cfg.ai.model, 'custom');
  assert.equal(typeof cfg.ai.ocrApi, 'string');
  assert.equal(typeof cfg.ai.translateApi, 'string');
  assert.ok(Array.isArray(cfg.ai.profiles));
}));

test('malformed persisted JSON falls back to a complete normalized config', () => withStorage({
  [`${prefix}config`]: '{bad json',
}, () => {
  const cfg = new StorageManager(prefix).get('config', {});
  assert.equal(typeof cfg.autoAnswer, 'boolean');
  assert.ok(cfg.ai);
  assert.ok(cfg.ai.profiles.length >= 1);
}));

test('non-config storage keys keep ordinary StorageManager semantics', () => withStorage({
  [`${prefix}other`]: JSON.stringify({ x: 1 }),
}, () => {
  const storage = new StorageManager(prefix);
  assert.deepEqual(storage.get('other'), { x: 1 });
  assert.equal(storage.get('missing', 42), 42);
}));

test('saving config stores AI secrets privately and keeps localStorage sanitized', () => withStorage({}, () => {
  const privateStore = createPrivateStore();
  const storage = new StorageManager(prefix, { privateStore });
  storage.set('config', {
    autoAnswer: true,
    ai: {
      activeProfileId: 'p1',
      kimiApiKey: 'legacy-secret',
      apiKey: 'legacy-api-secret',
      ocrApiKey: 'ocr-secret',
      translateApiKey: 'translate-secret',
      profiles: [
        { id: 'p1', name: 'Primary', baseUrl: 'https://example.test', apiKey: 'profile-secret', model: 'm' },
      ],
    },
    profiles: [
      { id: 'p1', name: 'Primary', baseUrl: 'https://example.test', apiKey: 'profile-secret', model: 'm' },
    ],
  });

  const persistedText = globalThis.localStorage.getItem(`${prefix}config`);
  assert.ok(persistedText);
  for (const secret of ['legacy-secret', 'legacy-api-secret', 'ocr-secret', 'translate-secret', 'profile-secret']) {
    assert.equal(persistedText.includes(secret), false, `localStorage leaked ${secret}`);
  }

  const reloaded = new StorageManager(prefix, { privateStore }).get('config', {});
  assert.equal(reloaded.ai.profiles[0].apiKey, 'profile-secret');
  assert.equal(reloaded.ai.ocrApiKey, 'ocr-secret');
  assert.equal(reloaded.ai.translateApiKey, 'translate-secret');
}));

test('legacy localStorage secrets migrate to private storage before local copies are scrubbed', () => withStorage({
  [`${prefix}config`]: JSON.stringify({
    ai: {
      activeProfileId: 'p1',
      kimiApiKey: 'legacy-in-config',
      ocrApiKey: 'legacy-ocr',
      translateApiKey: 'legacy-translate',
      profiles: [{ id: 'p1', apiKey: 'legacy-profile', model: 'm' }],
    },
  }),
  [`${prefix}kimiApiKey`]: JSON.stringify('legacy-separate'),
}, () => {
  const privateStore = createPrivateStore();
  const firstRead = new StorageManager(prefix, { privateStore }).get('config', {});
  assert.equal(firstRead.ai.profiles[0].apiKey, 'legacy-profile');
  assert.equal(firstRead.ai.ocrApiKey, 'legacy-ocr');
  assert.equal(firstRead.ai.translateApiKey, 'legacy-translate');

  const persistedText = globalThis.localStorage.getItem(`${prefix}config`);
  for (const secret of ['legacy-in-config', 'legacy-ocr', 'legacy-translate', 'legacy-profile']) {
    assert.equal(persistedText.includes(secret), false, `migration left ${secret} in config localStorage`);
  }
  assert.equal(globalThis.localStorage.getItem(`${prefix}kimiApiKey`), null);

  const secondRead = new StorageManager(prefix, { privateStore }).get('config', {});
  assert.equal(secondRead.ai.profiles[0].apiKey, 'legacy-profile');
  assert.equal(secondRead.ai.ocrApiKey, 'legacy-ocr');
  assert.equal(secondRead.ai.translateApiKey, 'legacy-translate');
}));

test('failed private migration never deletes the only local copy of a legacy secret', () => withStorage({
  [`${prefix}config`]: JSON.stringify({
    ai: { profiles: [{ id: 'p1', apiKey: 'must-survive' }], activeProfileId: 'p1' },
  }),
  [`${prefix}kimiApiKey`]: JSON.stringify('must-also-survive'),
}, () => {
  const privateStore = {
    available: () => true,
    get: (_key, dv = null) => dv,
    set: () => { throw new Error('private store unavailable'); },
    remove: () => true,
  };
  const cfg = new StorageManager(prefix, { privateStore }).get('config', {});
  assert.equal(cfg.ai.profiles[0].apiKey, 'must-survive');
  assert.match(globalThis.localStorage.getItem(`${prefix}config`), /must-survive/);
  assert.match(globalThis.localStorage.getItem(`${prefix}kimiApiKey`), /must-also-survive/);
}));
