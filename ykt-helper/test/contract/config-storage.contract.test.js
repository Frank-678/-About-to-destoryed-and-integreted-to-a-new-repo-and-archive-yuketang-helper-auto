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
