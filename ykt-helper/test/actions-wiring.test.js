import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const actionsSource = readFileSync(new URL('../src/state/actions.js', import.meta.url), 'utf8');

test('wires the auto-answer runner to the exported AI profile predicate', () => {
  assert.match(
    actionsSource,
    /const autoAnswerRunner = createAutoAnswerRunner\(\{[\s\S]*?hasActiveProfile:\s*hasActiveAIProfile,/
  );
});

test('marks timeline problem entries as historical before unlock handling', () => {
  assert.match(
    actionsSource,
    /onFetchTimeline\(timeline, options = \{\}\)[\s\S]*?this\.onUnlockProblem\(piece, \{\s*\.\.\.options, source: ['"]timeline['"] \}\)/
  );
});

test('keeps historical problem entries out of reminder and auto-answer paths', () => {
  assert.match(actionsSource, /source = ['"]live['"]/);
  assert.match(actionsSource, /isLiveProblemSource\(source\)/);
  assert.match(
    actionsSource,
    /if \(!isLiveUnlock\)[\s\S]*?return false;/
  );
});

test('uses the per-lesson auto-answer policy instead of only the global switch', () => {
  assert.match(actionsSource, /shouldAutoAnswerForLesson/);
  assert.match(actionsSource, /const autoAnswerEnabled\s*=\s*shouldAutoAnswerForLesson/);
  assert.match(
    actionsSource,
    /if \(autoAnswerEnabled && status\.autoAnswerQueued/
  );
});

test('a live unlock re-arms a status previously hydrated by timeline replay', () => {
  assert.match(
    actionsSource,
    /if \(isLiveUnlock && autoAnswerEnabled\)[\s\S]*?status\.autoAnswerQueued\s*=\s*true/
  );
});
