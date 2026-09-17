from pathlib import Path

ROOT = Path('ykt-helper/src')


def require_count(text: str, needle: str, expected: int, label: str) -> str:
    count = text.count(needle)
    if count != expected:
        raise SystemExit(f'{label}: expected {expected} matches, got {count}')
    return text


def replace_exact(text: str, old: str, new: str, expected: int, label: str) -> str:
    require_count(text, old, expected, label)
    return text.replace(old, new)


# 1) Make ui-api a one-way aggregator over the stable low-level UI context.
ui_api = ROOT / 'ui' / 'ui-api.js'
text = ui_api.read_text(encoding='utf-8-sig')
for old, new, label in [
    ("import { storage } from '../core/storage.js';\n", '', 'remove ui-api storage import'),
    ("import { toast } from './toast.js';\n", "import { ui } from './ui-context.js';\n", 'replace ui-api toast import'),
    ("import { PROBLEM_TYPE_MAP } from '../core/types.js'\n", '', 'remove ui-api type import'),
]:
    text = replace_exact(text, old, new, 1, label)

old_init = """const _config = storage.get('config', {});
_config.TYPE_MAP = _config.TYPE_MAP || PROBLEM_TYPE_MAP;

function saveConfig() { 
  try {
      storage.set('config', {
        ...this.config,
        autoJoinEnabled: !!this.config.autoJoinEnabled,
        autoAnswerOnAutoJoin: !!this.config.autoAnswerOnAutoJoin,
      });
      if (typeof window !== 'undefined') {
        window.dispatchEvent?.(new CustomEvent('ykt:auto-answer-config-changed'));
      }
    } catch (e) { console.warn('[ui.saveConfig] failed', e); }
}

"""
text = replace_exact(text, old_init, '', 1, 'ui-api init block')
old_decl = """export const ui = {
  get config() { return _config; },
  saveConfig,

"""
text = replace_exact(text, old_decl, 'Object.assign(ui, {\n', 1, 'ui-api declaration')
text = replace_exact(text, '  toast,\n', '', 1, 'ui-api toast property')
text = replace_exact(text, '_config.autoAnswer', 'this.config.autoAnswer', 1, 'ui-api _config use')
if not text.rstrip().endswith('};'):
    raise SystemExit('ui-api does not end with expected object literal terminator')
text = text.rstrip()[:-2] + '});\n\nexport { ui };\n'
ui_api.write_text(text, encoding='utf-8')

# 2) Every production module except the bootstrap aggregator imports the stable context,
#    so panels/state/services cannot create a cycle back through ui-api.
changed_import_files = []
for path in ROOT.rglob('*.js'):
    if path in {ROOT / 'index.js', ui_api, ROOT / 'ui' / 'ui-context.js'}:
        continue
    source = path.read_text(encoding='utf-8-sig')
    if 'ui-api.js' not in source:
        continue
    updated = source.replace('ui-api.js', 'ui-context.js')
    path.write_text(updated, encoding='utf-8')
    changed_import_files.append(path.as_posix())
if not changed_import_files:
    raise SystemExit('expected at least one production ui-api import to migrate')
print('migrated ui imports:', *changed_import_files, sep='\n - ')

# 3) Unify auto-answer policy/recovery semantics and self-register the actions object.
actions = ROOT / 'state' / 'actions.js'
text = actions.read_text(encoding='utf-8-sig')
anchor = "import { createNavigationArbiter, pickLatestActiveLesson } from '../core/navigation-arbiter.js';\n"
extra_imports = (
    "import { shouldAutoAnswerForLesson as evaluateAutoAnswerPolicy } from '../core/auto-answer-policy.js';\n"
    "import { registerRuntimeActions } from '../core/runtime-dispatch.js';\n"
)
text = replace_exact(text, anchor, anchor + extra_imports, 1, 'actions import anchor')
old_policy = """function shouldAutoAnswerForLesson(lessonId) {
  if (ui?.config?.autoAnswer === true) return true;
  const key = String(lessonId || '').trim();
  if (!key) return false;
  if (repo?.autoJoinedLessons?.has(key) && ui?.config?.autoAnswerOnAutoJoin === true) return true;
  if (repo?.forceAutoAnswerLessons?.has(key)) return true;
  return false;
}
"""
new_policy = """function shouldAutoAnswerForLesson(lessonId) {
  return evaluateAutoAnswerPolicy({
    lessonId,
    config: ui?.config,
    autoJoinedLessons: repo?.autoJoinedLessons,
    forceAutoAnswerLessons: repo?.forceAutoAnswerLessons,
  });
}
"""
text = replace_exact(text, old_policy, new_policy, 1, 'actions local policy block')
text = replace_exact(
    text,
    '  if (status.done || problem?.result) {\n',
    '  if (status.done || hasSubmittedAnswer(problem?.result)) {\n',
    1,
    'actions recovery result check',
)
if not text.rstrip().endswith('};'):
    raise SystemExit('actions does not end with expected exported object terminator')
text = text.rstrip() + '\n\nregisterRuntimeActions(actions);\n'
actions.write_text(text, encoding='utf-8')

# 4) Network interceptors dispatch through the core action registry instead of
#    importing actions back, breaking the two remaining net <-> state cycles.
xhr = ROOT / 'net' / 'xhr-interceptor.js'
text = xhr.read_text(encoding='utf-8-sig')
text = replace_exact(
    text,
    "import { actions } from '../state/actions.js';\n",
    "import { runtimeActionRef } from '../core/runtime-dispatch.js';\n",
    1,
    'xhr actions import',
)
text = replace_exact(
    text,
    'actions.onPresentationLoaded(',
    'runtimeActionRef.current?.onPresentationLoaded(',
    1,
    'xhr presentation dispatch',
)
text = replace_exact(
    text,
    'actions.onAnswerProblem(',
    'runtimeActionRef.current?.onAnswerProblem(',
    2,
    'xhr answer dispatch',
)
xhr.write_text(text, encoding='utf-8')

ws = ROOT / 'net' / 'ws-interceptor.js'
text = ws.read_text(encoding='utf-8-sig')
text = replace_exact(
    text,
    "import { actions } from '../state/actions.js';\n",
    "import { runtimeActionRef } from '../core/runtime-dispatch.js';\n",
    1,
    'ws actions import',
)
for old, new, label in [
    ('actions.onFetchTimeline(', 'runtimeActionRef.current?.onFetchTimeline(', 'ws timeline dispatch'),
    ('actions.onUnlockProblem(', 'runtimeActionRef.current?.onUnlockProblem(', 'ws unlock dispatch'),
    ('actions.onDanmu(', 'runtimeActionRef.current?.onDanmu(', 'ws danmu dispatch'),
    ('actions.onPublishEvent(', 'runtimeActionRef.current?.onPublishEvent(', 'ws publish dispatch'),
    ('actions.onLessonFinished(', 'runtimeActionRef.current?.onLessonFinished(', 'ws finish dispatch'),
]:
    text = replace_exact(text, old, new, 1, label)
ws.write_text(text, encoding='utf-8')

print('final consolidation patch applied')
