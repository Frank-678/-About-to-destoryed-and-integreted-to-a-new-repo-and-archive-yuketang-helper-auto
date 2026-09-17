from pathlib import Path

ROOT = Path('ykt-helper/src')


def replace_once(path: Path, old: str, new: str, label: str):
    text = path.read_text(encoding='utf-8-sig')
    count = text.count(old)
    if count != 1:
        raise SystemExit(f'{label}: expected exactly 1 match in {path}, got {count}')
    path.write_text(text.replace(old, new), encoding='utf-8')


# 1) Make ui-api a one-way aggregator over the stable low-level UI context.
ui_api = ROOT / 'ui' / 'ui-api.js'
text = ui_api.read_text(encoding='utf-8-sig')
for old, new, label in [
    ("import { storage } from '../core/storage.js';\n", '', 'remove ui-api storage import'),
    ("import { toast } from './toast.js';\n", "import { ui } from './ui-context.js';\n", 'replace ui-api toast import'),
    ("import { PROBLEM_TYPE_MAP } from '../core/types.js'\n", '', 'remove ui-api type import'),
]:
    count = text.count(old)
    if count != 1:
        raise SystemExit(f'{label}: expected exactly 1 match, got {count}')
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
if text.count(old_init) != 1:
    raise SystemExit(f'ui-api init block: expected 1 match, got {text.count(old_init)}')
text = text.replace(old_init, '')
old_decl = """export const ui = {
  get config() { return _config; },
  saveConfig,

"""
if text.count(old_decl) != 1:
    raise SystemExit(f'ui-api declaration: expected 1 match, got {text.count(old_decl)}')
text = text.replace(old_decl, 'Object.assign(ui, {\n')
if text.count('  toast,\n') != 1:
    raise SystemExit(f'ui-api toast property: expected 1 match, got {text.count("  toast,\\n")}')
text = text.replace('  toast,\n', '')
if text.count('_config.autoAnswer') != 1:
    raise SystemExit(f'ui-api _config use: expected 1 match, got {text.count("_config.autoAnswer")}')
text = text.replace('_config.autoAnswer', 'this.config.autoAnswer')
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

# 3) Unify auto-answer policy in actions with the canonical core policy.
actions = ROOT / 'state' / 'actions.js'
text = actions.read_text(encoding='utf-8-sig')
anchor = "import { createNavigationArbiter, pickLatestActiveLesson } from '../core/navigation-arbiter.js';\n"
policy_import = "import { shouldAutoAnswerForLesson as evaluateAutoAnswerPolicy } from '../core/auto-answer-policy.js';\n"
if text.count(anchor) != 1:
    raise SystemExit(f'actions policy import anchor: expected 1, got {text.count(anchor)}')
text = text.replace(anchor, anchor + policy_import)
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
if text.count(old_policy) != 1:
    raise SystemExit(f'actions local policy block: expected 1, got {text.count(old_policy)}')
text = text.replace(old_policy, new_policy)
old_result = '  if (status.done || problem?.result) {\n'
new_result = '  if (status.done || hasSubmittedAnswer(problem?.result)) {\n'
if text.count(old_result) != 1:
    raise SystemExit(f'actions recovery result check: expected 1, got {text.count(old_result)}')
text = text.replace(old_result, new_result)
actions.write_text(text, encoding='utf-8')

print('final consolidation patch applied')
