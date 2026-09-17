from pathlib import Path

ROOT = Path('ykt-helper/src')


def require_once(text: str, needle: str, label: str) -> str:
    count = text.count(needle)
    if count != 1:
        raise SystemExit(f'{label}: expected exactly 1 match, got {count}')
    return text


# 1) Make ui-api a one-way aggregator over the stable low-level UI context.
ui_api = ROOT / 'ui' / 'ui-api.js'
text = ui_api.read_text(encoding='utf-8-sig')
for old, new, label in [
    ("import { storage } from '../core/storage.js';\n", '', 'remove ui-api storage import'),
    ("import { toast } from './toast.js';\n", "import { ui } from './ui-context.js';\n", 'replace ui-api toast import'),
    ("import { PROBLEM_TYPE_MAP } from '../core/types.js'\n", '', 'remove ui-api type import'),
]:
    require_once(text, old, label)
    text = text.replace(old, new)

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
require_once(text, old_init, 'ui-api init block')
text = text.replace(old_init, '')
old_decl = """export const ui = {
  get config() { return _config; },
  saveConfig,

"""
require_once(text, old_decl, 'ui-api declaration')
text = text.replace(old_decl, 'Object.assign(ui, {\n')

toast_property = '  toast,\n'
require_once(text, toast_property, 'ui-api toast property')
text = text.replace(toast_property, '')
config_use = '_config.autoAnswer'
require_once(text, config_use, 'ui-api _config use')
text = text.replace(config_use, 'this.config.autoAnswer')
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
require_once(text, anchor, 'actions import anchor')
text = text.replace(anchor, anchor + extra_imports)
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
require_once(text, old_policy, 'actions local policy block')
text = text.replace(old_policy, new_policy)
old_result = '  if (status.done || problem?.result) {\n'
new_result = '  if (status.done || hasSubmittedAnswer(problem?.result)) {\n'
require_once(text, old_result, 'actions recovery result check')
text = text.replace(old_result, new_result)
if not text.rstrip().endswith('};'):
    raise SystemExit('actions does not end with expected exported object terminator')
text = text.rstrip() + '\n\nregisterRuntimeActions(actions);\n'
actions.write_text(text, encoding='utf-8')

# 4) Network interceptors dispatch through the core action registry instead of
#    importing actions back, breaking the two remaining net <-> state cycles.
xhr = ROOT / 'net' / 'xhr-interceptor.js'
text = xhr.read_text(encoding='utf-8-sig')
old = "import { actions } from '../state/actions.js';\n"
new = "import { runtimeActionRef } from '../core/runtime-dispatch.js';\n"
require_once(text, old, 'xhr actions import')
text = text.replace(old, new)
if text.count('actions.') != 3:
    raise SystemExit(f'xhr actions calls: expected 3, got {text.count("actions.")}')
text = text.replace('actions.', 'runtimeActionRef.current?.')
xhr.write_text(text, encoding='utf-8')

ws = ROOT / 'net' / 'ws-interceptor.js'
text = ws.read_text(encoding='utf-8-sig')
old = "import { actions } from '../state/actions.js';\n"
new = "import { runtimeActionRef } from '../core/runtime-dispatch.js';\n"
require_once(text, old, 'ws actions import')
expected_ws_calls = text.count('actions.')
if expected_ws_calls != 5:
    raise SystemExit(f'ws actions calls: expected 5, got {expected_ws_calls}')
text = text.replace('actions.', 'runtimeActionRef.current?.')
ws.write_text(text, encoding='utf-8')

print('final consolidation patch applied')
