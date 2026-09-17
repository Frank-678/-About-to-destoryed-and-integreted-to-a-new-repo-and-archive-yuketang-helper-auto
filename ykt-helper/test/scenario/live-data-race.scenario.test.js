import assert from 'node:assert/strict';
import test from 'node:test';
import { installBrowserGlobals, uninstallBrowserGlobals } from '../support/browser-harness.js';

installBrowserGlobals({ href: 'https://www.yuketang.cn/lesson/fullscreen/v3/race-lesson' });
const { repo } = await import('../../src/state/repo.js');
const { ui } = await import('../../src/ui/ui-api.js');
const { actions } = await import('../../src/state/actions.js');

const toasts = [];
const notifications = [];
ui.toast = message => toasts.push(String(message));
ui.updateActiveProblems = () => {};
ui.updateProblemList = () => {};
ui.notifyClassroomEvent = event => { notifications.push(event); return true; };

function reset() {
  repo.presentations.clear();
  repo.slides.clear();
  repo.problems.clear();
  repo.problemStatus.clear();
  repo.encounteredProblems.length = 0;
  repo.currentLessonId = `race-${Math.random()}`;
  toasts.length = 0;
  notifications.length = 0;
  Object.assign(ui.config, {
    autoAnswer: true,
    autoAnswerDelay: 1000,
    autoAnswerRandomDelay: 0,
    notifyProblems: true,
    notifyNative: false,
    notifyPopup: false,
    notifySound: false,
  });
  return repo.currentLessonId;
}

function installQuestion(problemId, slideId) {
  const problem = { problemId, problemType: 1, body: 'late data', options: [{ key: 'A', value: 'x' }], result: null };
  repo.upsertProblem(problem);
  repo.upsertSlide({ id: slideId, problem });
  return problem;
}

test.after(() => uninstallBrowserGlobals());

test('live event with missing data schedules a bounded retry instead of being lost', () => {
  const lessonId = reset();
  const scheduled = [];
  const realSetTimeout = globalThis.setTimeout;
  globalThis.setTimeout = (fn, ms) => { scheduled.push({ fn, ms }); return scheduled.length; };
  try {
    const result = actions.onUnlockProblem({ prob: 'late-q', sid: 'late-s', pres: 'p1' }, { source: 'live', lessonId });
    assert.equal(result, true, 'live event should still produce its initial notification');
    assert.equal(scheduled.length, 1);
    assert.equal(scheduled[0].ms, 500);
    assert.equal(repo.problemStatus.has('late-q'), false);
  } finally {
    globalThis.setTimeout = realSetTimeout;
  }
});

test('once late problem data arrives, scheduled retry resumes normal auto-answer scheduling', () => {
  const lessonId = reset();
  let retry;
  const realSetTimeout = globalThis.setTimeout;
  globalThis.setTimeout = fn => { retry = fn; return 1; };
  try {
    actions.onUnlockProblem({ prob: 'late-q2', sid: 'late-s2', pres: 'p2', dt: Date.now(), limit: 60 }, { source: 'live', lessonId });
    assert.equal(typeof retry, 'function');
    installQuestion('late-q2', 'late-s2');
    retry();
    const status = repo.problemStatus.get('late-q2');
    assert.ok(status);
    assert.equal(status.autoAnswerQueued, true);
    assert.equal(status.phase, 'queued');
    assert.ok(status.autoAnswerTime !== null);
  } finally {
    globalThis.setTimeout = realSetTimeout;
  }
});

test('after retry limit the failure becomes visible and no further retry is scheduled', () => {
  const lessonId = reset();
  let scheduled = 0;
  const realSetTimeout = globalThis.setTimeout;
  globalThis.setTimeout = () => { scheduled += 1; return scheduled; };
  try {
    actions.onUnlockProblem({ prob: 'missing-q', sid: 'missing-s' }, {
      source: 'live', lessonId, liveRetryCount: 20,
    });
    assert.equal(scheduled, 0);
    assert.ok(toasts.some(message => message.includes('10 秒内仍未加载')));
  } finally {
    globalThis.setTimeout = realSetTimeout;
  }
});

test('notificationOnly live event never starts the data retry machinery', () => {
  const lessonId = reset();
  let scheduled = 0;
  const realSetTimeout = globalThis.setTimeout;
  globalThis.setTimeout = () => { scheduled += 1; return scheduled; };
  try {
    actions.onUnlockProblem({ prob: 'notify-q', sid: 'notify-s' }, {
      source: 'live', lessonId, notificationOnly: true,
    });
    assert.equal(scheduled, 0);
    assert.equal(repo.problemStatus.has('notify-q'), false);
  } finally {
    globalThis.setTimeout = realSetTimeout;
  }
});

test('historical timeline event with missing data is silent and never retries', () => {
  const lessonId = reset();
  let scheduled = 0;
  const beforeNotifications = notifications.length;
  const realSetTimeout = globalThis.setTimeout;
  globalThis.setTimeout = () => { scheduled += 1; return scheduled; };
  try {
    const result = actions.onUnlockProblem({ prob: 'history-q', sid: 'history-s' }, { source: 'timeline', lessonId });
    assert.equal(result, false);
    assert.equal(scheduled, 0);
    assert.equal(notifications.length, beforeNotifications);
  } finally {
    globalThis.setTimeout = realSetTimeout;
  }
});

const aliasCases = [
  [{ problemId: 'alias-1', slideId: 'slide-1' }, 'alias-1', 'slide-1'],
  [{ problemid: 'alias-2', slide: { id: 'slide-2' } }, 'alias-2', 'slide-2'],
  [{ problem: { problemId: 'alias-3' }, sid: 'slide-3' }, 'alias-3', 'slide-3'],
  [{ id: 'alias-4', sid: 'slide-4' }, 'alias-4', 'slide-4'],
];
for (const [payload, problemId, slideId] of aliasCases) {
  test(`live unlock resolves id aliases ${problemId}/${slideId}`, () => {
    const lessonId = reset();
    installQuestion(problemId, slideId);
    actions.onUnlockProblem({ ...payload, dt: Date.now(), limit: 60 }, { source: 'live', lessonId });
    const status = repo.problemStatus.get(problemId);
    assert.ok(status);
    assert.equal(status.slideId, slideId);
    assert.equal(status.lessonId, lessonId);
    assert.equal(status.autoAnswerQueued, true);
  });
}
