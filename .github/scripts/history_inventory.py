#!/usr/bin/env python3
import json, subprocess, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[2]
OUT_DIR = ROOT / 'docs' / 'audit'
OUT_DIR.mkdir(parents=True, exist_ok=True)

def sh(*args):
    return subprocess.check_output(args, cwd=ROOT, text=True, stderr=subprocess.DEVNULL).strip()

def lines(*args):
    out = sh(*args)
    return [x for x in out.splitlines() if x.strip()] if out else []

# Make every remote branch available as a local audit ref.
subprocess.run(['git','fetch','origin','+refs/heads/*:refs/remotes/origin/*','--prune'], cwd=ROOT, check=True)
remote_branches = []
for ref in lines('git','for-each-ref','--format=%(refname:short)','refs/remotes/origin'):
    if ref == 'origin/HEAD':
        continue
    remote_branches.append(ref)

main_ref = 'origin/main'
branches = {}
all_commits = set()
for ref in sorted(remote_branches):
    name = ref.removeprefix('origin/')
    tip = sh('git','rev-parse',ref)
    left, right = sh('git','rev-list','--left-right','--count',f'{main_ref}...{ref}').split()
    reachable = lines('git','rev-list','--topo-order','--date-order',ref)
    unique = lines('git','rev-list','--topo-order','--date-order',f'{main_ref}..{ref}') if ref != main_ref else []
    all_commits.update(reachable)
    branches[name] = {
        'ref': ref,
        'tip': tip,
        'behind_main': int(left),
        'ahead_main': int(right),
        'reachable_commits': reachable,
        'unique_vs_main': unique,
    }

commit_rows = {}
for sha in sorted(all_commits):
    meta = sh('git','show','-s','--format=%H%x00%P%x00%aI%x00%an%x00%ae%x00%s',sha).split('\x00')
    changed = lines('git','diff-tree','--no-commit-id','--name-status','-r','-m',sha)
    containing = []
    for name, info in branches.items():
        if sha in info['reachable_commits']:
            containing.append(name)
    commit_rows[sha] = {
        'sha': meta[0],
        'parents': meta[1].split() if meta[1] else [],
        'author_date': meta[2],
        'author_name': meta[3],
        'author_email': meta[4],
        'subject': meta[5],
        'changed_files': changed,
        'branches': sorted(containing),
    }

inventory = {'main': sh('git','rev-parse',main_ref), 'branches': branches, 'commits': commit_rows}
(OUT_DIR/'git-history-inventory.json').write_text(json.dumps(inventory, ensure_ascii=False, indent=2), encoding='utf-8')

md = ['# Git history inventory', '', f"Main: `{inventory['main']}`", '', '## Branch topology', '', '| Branch | Tip | Ahead main | Behind main | Reachable commits | Unique vs main |', '|---|---|---:|---:|---:|---:|']
for name, info in sorted(branches.items()):
    md.append(f"| `{name}` | `{info['tip'][:12]}` | {info['ahead_main']} | {info['behind_main']} | {len(info['reachable_commits'])} | {len(info['unique_vs_main'])} |")
md += ['', '## Unique commits by branch', '']
for name, info in sorted(branches.items()):
    md.append(f'### `{name}`')
    if not info['unique_vs_main']:
        md.append('- No commits unique versus main.')
    else:
        for sha in info['unique_vs_main']:
            c = commit_rows[sha]
            md.append(f"- `{sha}` — {c['author_date']} — {c['author_name']} — {c['subject']}")
    md.append('')
md += ['## All reachable commits', '']
ordered = lines('git','rev-list','--all','--topo-order','--date-order')
for sha in ordered:
    if sha not in commit_rows:
        continue
    c = commit_rows[sha]
    md.append(f"### `{sha}` — {c['subject']}")
    md.append(f"- Date: {c['author_date']}")
    md.append(f"- Author: {c['author_name']} <{c['author_email']}>")
    md.append(f"- Parents: {', '.join('`'+p+'`' for p in c['parents']) if c['parents'] else '(root)'}")
    md.append(f"- Branches: {', '.join('`'+b+'`' for b in c['branches'])}")
    if c['changed_files']:
        md.append('- Files:')
        for row in c['changed_files']:
            md.append(f'  - `{row}`')
    else:
        md.append('- Files: none')
    md.append('')
(OUT_DIR/'git-history-inventory.md').write_text('\n'.join(md)+'\n', encoding='utf-8')
print(f"branches={len(branches)} commits={len(commit_rows)}")
