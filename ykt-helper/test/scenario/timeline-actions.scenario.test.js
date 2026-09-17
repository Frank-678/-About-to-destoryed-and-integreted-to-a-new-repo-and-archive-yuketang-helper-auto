import assert from 'node:assert/strict';
import test from 'node:test';
import {
  createXMLHttpRequestRecorder,
  installBrowserGlobals,
  uninstallBrowserGlobals,
} from '../support/browser-harness.js';

const xhrRecorder = createXMLHttpRequestRecorder();
installBrowserGlobals({ href: 'https://www.yuketang.cn/lesson/fullscreen/v3/lesson-timeline' });
globalThis.XMLHttpRequest = xhrRecorder.FakeXMLHttpRequest;

const { repo } = await import('../../src/state/repo.js');
const { ui } = await import('../../src/ui/ui-api.js');
const { actions } = await import('../../src/state/actions.js');

ui.updateActiveProblems = () => {};
ui.updateProblemList = () => {};
ui.updatePresentationList = () => {};
ui.toast = () => {};
ui.notifyClassroomEvent = () => true;

let lessonSeq = 0;
function reset() {
  repo.presentations.clear();
  repo.slides.clear();
  repo.problems.clear();
  repo.problemStatus.clear();
  repo.encounteredProblems.length = 0;
  const lessonId = `lesson-timeline-${++lessonSeq}`;
  repo.currentLessonId = lessonId;
  Object.assign(ui.config, {
    autoAnswer: true,
    autoAnswerDelay: 0,
    autoAnswerRandomDelay: 0,
    autoForceRetry: false,
    notifyProblems: false,
  });
  // Deliberately exercise the explicit no-profile fallback here; the separate
  // L4 AI scenario covers the full model request path.
  ui.config.ai = { ...ui.config.ai, profiles: [{ id: 'none', apiKey: '' }], activeProfileId: 'none' };
  return lessonId;
}

function addProblem(id, slideId) {
  const problem = {
    problemId: id,
    problemType: 1,
    body: `${id}?`,
    options: [{ key: 'A', value: 'yes' }, { key: 'B', value: 'no' }],
    result: null,
  };
  repo.upsertProblem(problem);
  repo.upsertSlide({ id: slideId, problem });
  return problem;
}

async function waitFor(predicate, timeoutMs = 200) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    if (predicate()) return true;
    await new Promise(resolve => setTimeout(resolve, 5));
  }
  return false;
}

test.after(() => uninstallBrowserGlobals());

test('first timeline snapshot is historical baseline and never queues submission', async () => {
  const lessonId = reset();
  addProblem('baseline-q', 'baseline-s');
  const before = xhrRecorder.calls.length;

  actions.onFetchTimeline([
    { type: 'problem', prob: 'baseline-q', sid: 'baseline-s', pres: 'p1', dt: Date.now(), limit: 60 },
  ], { lessonId });

  const status = repo.problemStatus.get('baseline-q');
  assert.ok(status);
  assert.equal(status.autoAnswerQueued, false);
  assert.equal(status.autoAnswerTime, null);
  actions.tickAutoAnswer();
  await new Promise(resolve => setTimeout(resolve, 10));
  assert.equal(xhrRecorder.calls.length, before);
});

test('a problem first appearing in a later timeline snapshot becomes live and reaches submit', async () => {
  const lessonId = reset();
  addProblem('old-q', 'old-s');
  actions.onFetchTimeline([
    { type: 'problem', prob: 'old-q', sid: 'old-s', pres: 'p1', dt: Date.now(), limit: 60 },
  ], { lessonId });

  const newProblem = addProblem('new-q', 'new-s');
  xhrRecorder.respond({ code: 0, data: {} });
  const before = xhrRecorder.calls.length;
  actions.onFetchTimeline([
    { type: 'problem', prob: 'old-q', sid: 'old-s', pres: 'p1', dt: Date.now(), limit: 60 },
    { type: 'problem', prob: 'new-q', sid: 'new-s', pres: 'p1', dt: Date.now(), limit: 60 },
  ], { lessonId });

  const status = repo.problemStatus.get('new-q');
  assert.ok(status);
  assert.equal(status.autoAnswerQueued, true);
  assert.ok(status.autoAnswerTime !== null);
  actions.tickAutoAnswer();
  assert.equal(await waitFor(() => repo.problemStatus.get('new-q')?.done === true), true);
  assert.equal(xhrRecorder.calls.length - before, 1);
  assert.equal(xhrRecorder.calls.at(-1).url, '/api/v3/lesson/problem/answer');
  assert.deepEqual(newProblem.result, ['A']);
});

test('the same timeline problem is never promoted twice', async () => {
  const lessonId = reset();
  addProblem('same-q', 'same-s');
  actions.onFetchTimeline([], { lessonId });
  xhrRecorder.respond({ code: 0, data: {} });

  const entry = { type: 'problem', prob: 'same-q', sid: 'same-s', pres: 'p1', dt: Date.now(), limit: 60 };
  actions.onFetchTimeline([entry], { lessonId });
  actions.tickAutoAnswer();
  assert.equal(await waitFor(() => repo.problemStatus.get('same-q')?.done === true), true);
  const afterFirst = xhrRecorder.calls.length;

  actions.onFetchTimeline([entry], { lessonId });
  actions.tickAutoAnswer();
  await new Promise(resolve => setTimeout(resolve, 10));
  assert.equal(xhrRecorder.calls.length, afterFirst);
});

test('timeline baseline state is isolated per lesson', () => {
  reset();
  addProblem('a1', 'sa1');
  addProblem('b1', 'sb1');
  addProblem('a2', 'sa2');
  const lessonA = `lesson-a-${++lessonSeq}`;
  const lessonB = `lesson-b-${++lessonSeq}`;
  actions.onFetchTimeline([{ type: 'problem', prob: 'a1', sid: 'sa1' }], { lessonId: lessonA });
  actions.onFetchTimeline([{ type: 'problem', prob: 'b1', sid: 'sb1' }], { lessonId: lessonB });
  actions.onFetchTimeline([
    { type: 'problem', prob: 'a1', sid: 'sa1' },
    { type: 'problem', prob: 'a2', sid: 'sa2' },
  ], { lessonId: lessonA });

  assert.equal(repo.problemStatus.get('a2')?.autoAnswerQueued, true);
  assert.equal(repo.problemStatus.get('b1')?.autoAnswerQueued, false);
});
