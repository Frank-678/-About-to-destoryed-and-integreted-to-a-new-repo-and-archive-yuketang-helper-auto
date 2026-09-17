import assert from 'node:assert/strict';
import test from 'node:test';
import { installBrowserGlobals, uninstallBrowserGlobals } from '../support/browser-harness.js';

class NativeWebSocket {
  static instances = [];
  static OPEN = 1;
  static CLOSING = 2;
  static CLOSED = 3;

  constructor(url) {
    this.url = url;
    this.listeners = new Map();
    this.sent = [];
    this.readyState = NativeWebSocket.OPEN;
    this.closeCalls = 0;
    NativeWebSocket.instances.push(this);
  }

  addEventListener(type, fn) {
    const list = this.listeners.get(type) || [];
    list.push(fn);
    this.listeners.set(type, list);
  }

  emit(type, event = {}) {
    for (const fn of this.listeners.get(type) || []) fn.call(this, event);
  }

  send(data) { this.sent.push(data); }

  close() {
    this.closeCalls += 1;
    if (this.readyState === NativeWebSocket.CLOSED) return;
    this.readyState = NativeWebSocket.CLOSED;
    this.emit('close', {});
  }
}

const browser = installBrowserGlobals({
  href: 'https://www.yuketang.cn/lesson/fullscreen/v3/lesson-owner',
});
const previousWebSocket = globalThis.WebSocket;
globalThis.WebSocket = NativeWebSocket;
browser.window.WebSocket = NativeWebSocket;

const { repo } = await import('../../src/state/repo.js');
const { actions } = await import('../../src/state/actions.js');
const { installWSInterceptor, connectOrAttachLessonWS } = await import('../../src/net/ws-interceptor.js');

function resetLessonState() {
  repo.listeningLessons.clear();
  repo.lessonTokens.clear();
  repo.lessonSockets.clear();
  repo.activeLessons.clear();
  repo.autoJoinedLessons.clear();
  repo.forceAutoAnswerLessons.clear();
  repo.autoJoinRunning = false;
  NativeWebSocket.instances.length = 0;
}

test('foreground native socket takes ownership without later managed-close deleting it', () => {
  resetLessonState();
  installWSInterceptor({ getRuntimeMode: () => 'desktop' });

  const managed = connectOrAttachLessonWS({ lessonId: 'lesson-owner', auth: 'managed-token' });
  assert.ok(managed);
  repo.markLessonAutoJoined('lesson-owner', true);
  assert.equal(repo.lessonSockets.get('lesson-owner'), managed);

  const native = new browser.window.WebSocket('wss://www.yuketang.cn/wsapp/');

  assert.notEqual(native, managed);
  assert.equal(repo.lessonSockets.get('lesson-owner'), native,
    'foreground native socket should become the current lesson owner');
  assert.equal(repo.autoJoinedLessons.has('lesson-owner'), false,
    'foreground takeover should remove the background auto-join identity');
  assert.equal(managed.closeCalls, 1,
    'the superseded managed socket should be closed once when foreground takes over');

  // The old managed close event may arrive after native ownership is installed.
  managed.emit('close', {});
  assert.equal(repo.lessonSockets.get('lesson-owner'), native,
    'late managed close must not delete the newer native owner');
  assert.equal(repo.listeningLessons.has('lesson-owner'), true);

  actions.stopAutoJoinLoop();
  assert.equal(native.closeCalls, 0,
    'disabling AutoJoin must not close the foreground native socket');
  assert.equal(repo.lessonSockets.get('lesson-owner'), native);
});

test('AutoJoin stop is defensive against a stale autoJoined marker on a native owner', () => {
  resetLessonState();
  const native = new NativeWebSocket('wss://www.yuketang.cn/wsapp/');
  native.__yktLessonId = 'lesson-stale-marker';
  // Deliberately simulate stale persisted/runtime bookkeeping from an older path.
  repo.markLessonConnected('lesson-stale-marker', native, 'native-token');
  repo.markLessonAutoJoined('lesson-stale-marker', true);

  actions.stopAutoJoinLoop();

  assert.equal(native.closeCalls, 0,
    'stopAutoJoinLoop must only close sockets explicitly owned by AutoJoin');
  assert.equal(repo.lessonSockets.get('lesson-stale-marker'), native);
  assert.equal(repo.listeningLessons.has('lesson-stale-marker'), true);
  assert.equal(repo.autoJoinedLessons.has('lesson-stale-marker'), false,
    'stale AutoJoin identity should still be cleared');
});

test.after(() => {
  actions.stopAutoJoinLoop();
  if (previousWebSocket === undefined) delete globalThis.WebSocket;
  else globalThis.WebSocket = previousWebSocket;
  uninstallBrowserGlobals();
});
