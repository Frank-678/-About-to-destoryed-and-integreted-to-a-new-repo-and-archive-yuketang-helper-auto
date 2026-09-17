# Git history inventory

Main: `ed823033fcc64f65be955935bdb9419332e82bf8`

## Branch topology

| Branch | Tip | Ahead main | Behind main | Reachable commits | Unique vs main |
|---|---|---:|---:|---:|---:|
| `audit/full-regression-20260917` | `aa66525fc57c` | 40 | 0 | 186 | 40 |
| `backup-before-b85ca499` | `b2fa1f5fe5d5` | 2 | 0 | 148 | 2 |
| `backup/pre-core-rebuild-20260917` | `0af2f7fa5ab1` | 30 | 0 | 176 | 30 |
| `backup/pre-restore-20260916` | `bbc690a758bb` | 4 | 0 | 150 | 4 |
| `backup/pre-restore-before-revert-20260916` | `bbc690a758bb` | 4 | 0 | 150 | 4 |
| `backup/pre-stability-fix-20260916` | `ed823033fcc6` | 0 | 0 | 146 | 0 |
| `chrome141` | `8075578d5902` | 0 | 96 | 50 | 0 |
| `dev-2.0` | `799f26a4f11b` | 0 | 60 | 86 | 0 |
| `feat/dev3.0` | `ab0268b8e223` | 4 | 35 | 115 | 4 |
| `feat/recover-auto-answer-1215` | `dd4b0bb3b43e` | 0 | 1 | 145 | 0 |
| `fix/stability-auto-answer-20260916` | `35c5affb86f4` | 37 | 0 | 183 | 37 |
| `main` | `ed823033fcc6` | 0 | 0 | 146 | 0 |
| `restore/pre-revert-ed823033` | `b5f51f47e6ca` | 5 | 0 | 151 | 5 |
| `revert-1-feat/recover-auto-answer-1215` | `922330ddb759` | 1 | 0 | 147 | 1 |
| `zy-dev` | `9c869e119b72` | 0 | 45 | 101 | 0 |

## Unique commits by branch

### `audit/full-regression-20260917`
- `aa66525fc57cb5f8191b58cbae2f184ba63d71cf` — 2026-09-17T09:44:11+08:00 — Jun Zhu — ci(audit): inventory every branch and commit
- `03754204f9555d0438d96ddbd2a25515dd3f168f` — 2026-09-17T09:44:03+08:00 — Jun Zhu — test(audit): add complete Git history inventory generator
- `0f23d5afb3c0da91c2a34c63495c6e55765f6312` — 2026-09-17T09:41:39+08:00 — Jun Zhu — test: define full regression matrix
- `35c5affb86f4be2a2c4c49b236a1c36049ab9bb6` — 2026-09-17T01:00:50Z — github-actions[bot] — fix: restore answer execution and periodic refresh
- `151cfbd3d5ed8ae1eec474df6f433aded5fe4958` — 2026-09-17T09:00:28+08:00 — Jun Zhu — ci: gate answer and refresh stability repair
- `5ca89ee0aff4f0e58ade09133b720965ccc88868` — 2026-09-17T09:00:10+08:00 — Jun Zhu — test: harden periodic reload regression check
- `00b64decf864889dde27279b564f729a96d22f69` — 2026-09-17T08:59:52+08:00 — Jun Zhu — ci: add periodic reload regression repair
- `afa4ec9a1b02c0ba6df6449b6c18d066f8817b79` — 2026-09-17T08:56:49+08:00 — Jun Zhu — ci: add deterministic answer-core repair script
- `789c2c345f1cfaee61a37eb6440b0ed6fc86b655` — 2026-09-17T08:54:27+08:00 — Jun Zhu — test: load answer runner in core repair regressions
- `d003dbd0b34f7cd66115931109c3653fcbe84adf` — 2026-09-17T08:52:06+08:00 — Jun Zhu — ci: gate answer core regression repair
- `0af2f7fa5ab13eb2c9283a741c8586d3d3c4f25b` — 2026-09-16T12:22:07Z — github-actions[bot] — fix: retry live unlock hydration and expose field diagnostics
- `fad901274387dfc0059bf28917a3204e6908bd4a` — 2026-09-16T20:21:41+08:00 — Jun Zhu — ci: gate 1.21.6.3 field diagnostics fix
- `dec1f6a9e76aefac14724bfb3f0968405140cd4d` — 2026-09-16T20:21:28+08:00 — Jun Zhu — ci: add deterministic field diagnostics patch
- `3a5d8a913fe843c43d29332a69f2ec6171be59fc` — 2026-09-16T20:20:56+08:00 — Jun Zhu — test: cover live unlock retry and field diagnostics
- `797922f9db3460401858c65d42903f30a5294e73` — 2026-09-16T11:44:40Z — github-actions[bot] — fix: recover live questions from timeline deltas
- `4e48b73cad8d82765a1d1df7b38d3b3333a072c5` — 2026-09-16T19:44:19+08:00 — Jun Zhu — ci: rerun timeline fix after contract update
- `43b73693e2034e8f2ffabba23a8a0b12707145e6` — 2026-09-16T19:44:01+08:00 — Jun Zhu — test: validate delegated timeline live source
- `dddf052399d70158a00d009f66fef7e280a927d1` — 2026-09-16T19:43:52+08:00 — Jun Zhu — test: align timeline contract with live deltas
- `2a054b284fc396b49ca58b6bfe558a642a0cbc32` — 2026-09-16T19:42:23+08:00 — Jun Zhu — ci: apply and verify timeline live fix
- `4b4afb504d896293f5eac81c3509a2da51764b23` — 2026-09-16T19:42:10+08:00 — Jun Zhu — ci: add deterministic timeline live patch
- `42ac3e63d20defa4567a24dc97d52b7a536bb96a` — 2026-09-16T19:41:54+08:00 — Jun Zhu — test: require timeline live-delta wiring
- `a8a1169825fe487bf291cdc82b36e123cad27b0b` — 2026-09-16T19:41:43+08:00 — Jun Zhu — test: cover timeline baseline and live deltas
- `fe0c6453e552f916df0a307c5f439ec4f3b5a621` — 2026-09-16T19:41:30+08:00 — Jun Zhu — test: add timeline problem delta tracker
- `ba1215bc177327ddc5a85a983b11d8d55fa86632` — 2026-09-16T09:05:53Z — github-actions[bot] — fix: restore reliable auto-answer scheduling
- `227f9358bfc7d1ca2da7870d088edf814c181207` — 2026-09-16T17:05:30+08:00 — Jun Zhu — ci: ignore generated bundle whitespace in source check
- `b1bd9f0a8f119c12e24941c6e8610100cda57b22` — 2026-09-16T17:03:53+08:00 — Jun Zhu — ci: make bundle verification formatting-independent
- `a7e54760f45c7601ed4868b0dad43521f59a496a` — 2026-09-16T17:02:16+08:00 — Jun Zhu — ci: rerun stability gate after assertion fix
- `6cc56c7d7bd1dc96be7f05c718cee98bf269efe6` — 2026-09-16T17:01:57+08:00 — Jun Zhu — test: accept guarded live-unlock rearm
- `6d86664641ab49e6a231f8e78580c6e79dbd55cd` — 2026-09-16T16:59:36+08:00 — Jun Zhu — ci: apply deterministic stability fixes
- `3466c7b72d5bddb36ffb92d5f92f89afcd44c0f0` — 2026-09-16T16:59:21+08:00 — Jun Zhu — chore: add deterministic stability patch script
- `0cfe4d1c4cec9c2f093c5d435e035306f90fe677` — 2026-09-16T16:29:33+08:00 — Jun Zhu — chore: apply stability patch from verified workflow source
- `ec3eef340637e89d651627a9ff59133d75b636b3` — 2026-09-16T16:26:43+08:00 — Jun Zhu — chore: retry stability fixes with verified patch contexts
- `635da2f694b384050258e2595b62c147955cca19` — 2026-09-16T16:26:08+08:00 — Jun Zhu — test: fix auto-join lifecycle assertion syntax
- `cc624bc13791a62a32cda10a91e2358d1aa2b673` — 2026-09-16T16:25:16+08:00 — Jun Zhu — chore: prepare guarded stability fix application
- `4acb79e6a9533d878cb5d931f82da677765688c1` — 2026-09-16T16:23:47+08:00 — Jun Zhu — test: reproduce auto-join lifecycle regressions
- `81c42b5428a10586d31ac85d925467d3e15778f7` — 2026-09-16T16:18:06+08:00 — Jun Zhu — test: require opt-in for expired retry route
- `82ca511b49fe356eb4e3d9b4e681770d749d2965` — 2026-09-16T16:17:59+08:00 — Jun Zhu — test: reproduce duplicate wait and correction failure handling
- `910f0283a334aff6bc97da55321653ad6e291af7` — 2026-09-16T16:17:34+08:00 — Jun Zhu — test: reproduce live unlock auto-answer rearm regression
- `c78446a5bd6d24af147d30f78a552759d091ac58` — 2026-09-16T16:16:51+08:00 — Jun Zhu — ci: add stability test and build workflow
- `26c072bfa93323d7a19ea4c986ff8f4653dec987` — 2026-09-16T16:13:21+08:00 — Jun Zhu — chore: checkpoint before stability audit

### `backup-before-b85ca499`
- `b2fa1f5fe5d56f672e5d2049e257b8ae009c2d2f` — 2026-09-14T19:06:59+08:00 — Jun Zhu — Merge pull request #2 from HITweihai/revert-1-feat/recover-auto-answer-1215
- `922330ddb759224617fa59b8e2e47a20c1cf55a7` — 2026-09-14T19:05:39+08:00 — Jun Zhu — Revert "Feat/recover auto answer 1215"

### `backup/pre-core-rebuild-20260917`
- `0af2f7fa5ab13eb2c9283a741c8586d3d3c4f25b` — 2026-09-16T12:22:07Z — github-actions[bot] — fix: retry live unlock hydration and expose field diagnostics
- `fad901274387dfc0059bf28917a3204e6908bd4a` — 2026-09-16T20:21:41+08:00 — Jun Zhu — ci: gate 1.21.6.3 field diagnostics fix
- `dec1f6a9e76aefac14724bfb3f0968405140cd4d` — 2026-09-16T20:21:28+08:00 — Jun Zhu — ci: add deterministic field diagnostics patch
- `3a5d8a913fe843c43d29332a69f2ec6171be59fc` — 2026-09-16T20:20:56+08:00 — Jun Zhu — test: cover live unlock retry and field diagnostics
- `797922f9db3460401858c65d42903f30a5294e73` — 2026-09-16T11:44:40Z — github-actions[bot] — fix: recover live questions from timeline deltas
- `4e48b73cad8d82765a1d1df7b38d3b3333a072c5` — 2026-09-16T19:44:19+08:00 — Jun Zhu — ci: rerun timeline fix after contract update
- `43b73693e2034e8f2ffabba23a8a0b12707145e6` — 2026-09-16T19:44:01+08:00 — Jun Zhu — test: validate delegated timeline live source
- `dddf052399d70158a00d009f66fef7e280a927d1` — 2026-09-16T19:43:52+08:00 — Jun Zhu — test: align timeline contract with live deltas
- `2a054b284fc396b49ca58b6bfe558a642a0cbc32` — 2026-09-16T19:42:23+08:00 — Jun Zhu — ci: apply and verify timeline live fix
- `4b4afb504d896293f5eac81c3509a2da51764b23` — 2026-09-16T19:42:10+08:00 — Jun Zhu — ci: add deterministic timeline live patch
- `42ac3e63d20defa4567a24dc97d52b7a536bb96a` — 2026-09-16T19:41:54+08:00 — Jun Zhu — test: require timeline live-delta wiring
- `a8a1169825fe487bf291cdc82b36e123cad27b0b` — 2026-09-16T19:41:43+08:00 — Jun Zhu — test: cover timeline baseline and live deltas
- `fe0c6453e552f916df0a307c5f439ec4f3b5a621` — 2026-09-16T19:41:30+08:00 — Jun Zhu — test: add timeline problem delta tracker
- `ba1215bc177327ddc5a85a983b11d8d55fa86632` — 2026-09-16T09:05:53Z — github-actions[bot] — fix: restore reliable auto-answer scheduling
- `227f9358bfc7d1ca2da7870d088edf814c181207` — 2026-09-16T17:05:30+08:00 — Jun Zhu — ci: ignore generated bundle whitespace in source check
- `b1bd9f0a8f119c12e24941c6e8610100cda57b22` — 2026-09-16T17:03:53+08:00 — Jun Zhu — ci: make bundle verification formatting-independent
- `a7e54760f45c7601ed4868b0dad43521f59a496a` — 2026-09-16T17:02:16+08:00 — Jun Zhu — ci: rerun stability gate after assertion fix
- `6cc56c7d7bd1dc96be7f05c718cee98bf269efe6` — 2026-09-16T17:01:57+08:00 — Jun Zhu — test: accept guarded live-unlock rearm
- `6d86664641ab49e6a231f8e78580c6e79dbd55cd` — 2026-09-16T16:59:36+08:00 — Jun Zhu — ci: apply deterministic stability fixes
- `3466c7b72d5bddb36ffb92d5f92f89afcd44c0f0` — 2026-09-16T16:59:21+08:00 — Jun Zhu — chore: add deterministic stability patch script
- `0cfe4d1c4cec9c2f093c5d435e035306f90fe677` — 2026-09-16T16:29:33+08:00 — Jun Zhu — chore: apply stability patch from verified workflow source
- `ec3eef340637e89d651627a9ff59133d75b636b3` — 2026-09-16T16:26:43+08:00 — Jun Zhu — chore: retry stability fixes with verified patch contexts
- `635da2f694b384050258e2595b62c147955cca19` — 2026-09-16T16:26:08+08:00 — Jun Zhu — test: fix auto-join lifecycle assertion syntax
- `cc624bc13791a62a32cda10a91e2358d1aa2b673` — 2026-09-16T16:25:16+08:00 — Jun Zhu — chore: prepare guarded stability fix application
- `4acb79e6a9533d878cb5d931f82da677765688c1` — 2026-09-16T16:23:47+08:00 — Jun Zhu — test: reproduce auto-join lifecycle regressions
- `81c42b5428a10586d31ac85d925467d3e15778f7` — 2026-09-16T16:18:06+08:00 — Jun Zhu — test: require opt-in for expired retry route
- `82ca511b49fe356eb4e3d9b4e681770d749d2965` — 2026-09-16T16:17:59+08:00 — Jun Zhu — test: reproduce duplicate wait and correction failure handling
- `910f0283a334aff6bc97da55321653ad6e291af7` — 2026-09-16T16:17:34+08:00 — Jun Zhu — test: reproduce live unlock auto-answer rearm regression
- `c78446a5bd6d24af147d30f78a552759d091ac58` — 2026-09-16T16:16:51+08:00 — Jun Zhu — ci: add stability test and build workflow
- `26c072bfa93323d7a19ea4c986ff8f4653dec987` — 2026-09-16T16:13:21+08:00 — Jun Zhu — chore: checkpoint before stability audit

### `backup/pre-restore-20260916`
- `bbc690a758bb346ece9be45e07a3301b73c89999` — 2026-09-14T19:31:02+08:00 — Jun Zhu — Add project inheritance information to README
- `3d8e01558bd21ae4a361f88ecce9e99db18351bb` — 2026-09-14T19:24:50+08:00 — Jun Zhu — Restore repository to b85ca499
- `b2fa1f5fe5d56f672e5d2049e257b8ae009c2d2f` — 2026-09-14T19:06:59+08:00 — Jun Zhu — Merge pull request #2 from HITweihai/revert-1-feat/recover-auto-answer-1215
- `922330ddb759224617fa59b8e2e47a20c1cf55a7` — 2026-09-14T19:05:39+08:00 — Jun Zhu — Revert "Feat/recover auto answer 1215"

### `backup/pre-restore-before-revert-20260916`
- `bbc690a758bb346ece9be45e07a3301b73c89999` — 2026-09-14T19:31:02+08:00 — Jun Zhu — Add project inheritance information to README
- `3d8e01558bd21ae4a361f88ecce9e99db18351bb` — 2026-09-14T19:24:50+08:00 — Jun Zhu — Restore repository to b85ca499
- `b2fa1f5fe5d56f672e5d2049e257b8ae009c2d2f` — 2026-09-14T19:06:59+08:00 — Jun Zhu — Merge pull request #2 from HITweihai/revert-1-feat/recover-auto-answer-1215
- `922330ddb759224617fa59b8e2e47a20c1cf55a7` — 2026-09-14T19:05:39+08:00 — Jun Zhu — Revert "Feat/recover auto answer 1215"

### `backup/pre-stability-fix-20260916`
- No commits unique versus main.

### `chrome141`
- No commits unique versus main.

### `dev-2.0`
- No commits unique versus main.

### `feat/dev3.0`
- `ab0268b8e223af59e76944b2f4d10774df9480b3` — 2026-08-30T23:53:10+08:00 — Alchuang22-dev — feat: add websocket viewer
- `67de0d58ed132711b2bd68245915677e2dbc71f2` — 2026-08-30T22:46:39+08:00 — Alchuang22-dev — feat: add ui
- `16679e68d3d22a4760272c1a3175fbd5d211eca5` — 2026-08-30T22:27:35+08:00 — Alchuang22-dev — feat: add yuketang-win base framework
- `e9a1de8787e9860b23b522de4a74851acc212a83` — 2026-08-30T21:32:48+08:00 — Alchuang22-dev — fix: remove outdated code

### `feat/recover-auto-answer-1215`
- No commits unique versus main.

### `fix/stability-auto-answer-20260916`
- `35c5affb86f4be2a2c4c49b236a1c36049ab9bb6` — 2026-09-17T01:00:50Z — github-actions[bot] — fix: restore answer execution and periodic refresh
- `151cfbd3d5ed8ae1eec474df6f433aded5fe4958` — 2026-09-17T09:00:28+08:00 — Jun Zhu — ci: gate answer and refresh stability repair
- `5ca89ee0aff4f0e58ade09133b720965ccc88868` — 2026-09-17T09:00:10+08:00 — Jun Zhu — test: harden periodic reload regression check
- `00b64decf864889dde27279b564f729a96d22f69` — 2026-09-17T08:59:52+08:00 — Jun Zhu — ci: add periodic reload regression repair
- `afa4ec9a1b02c0ba6df6449b6c18d066f8817b79` — 2026-09-17T08:56:49+08:00 — Jun Zhu — ci: add deterministic answer-core repair script
- `789c2c345f1cfaee61a37eb6440b0ed6fc86b655` — 2026-09-17T08:54:27+08:00 — Jun Zhu — test: load answer runner in core repair regressions
- `d003dbd0b34f7cd66115931109c3653fcbe84adf` — 2026-09-17T08:52:06+08:00 — Jun Zhu — ci: gate answer core regression repair
- `0af2f7fa5ab13eb2c9283a741c8586d3d3c4f25b` — 2026-09-16T12:22:07Z — github-actions[bot] — fix: retry live unlock hydration and expose field diagnostics
- `fad901274387dfc0059bf28917a3204e6908bd4a` — 2026-09-16T20:21:41+08:00 — Jun Zhu — ci: gate 1.21.6.3 field diagnostics fix
- `dec1f6a9e76aefac14724bfb3f0968405140cd4d` — 2026-09-16T20:21:28+08:00 — Jun Zhu — ci: add deterministic field diagnostics patch
- `3a5d8a913fe843c43d29332a69f2ec6171be59fc` — 2026-09-16T20:20:56+08:00 — Jun Zhu — test: cover live unlock retry and field diagnostics
- `797922f9db3460401858c65d42903f30a5294e73` — 2026-09-16T11:44:40Z — github-actions[bot] — fix: recover live questions from timeline deltas
- `4e48b73cad8d82765a1d1df7b38d3b3333a072c5` — 2026-09-16T19:44:19+08:00 — Jun Zhu — ci: rerun timeline fix after contract update
- `43b73693e2034e8f2ffabba23a8a0b12707145e6` — 2026-09-16T19:44:01+08:00 — Jun Zhu — test: validate delegated timeline live source
- `dddf052399d70158a00d009f66fef7e280a927d1` — 2026-09-16T19:43:52+08:00 — Jun Zhu — test: align timeline contract with live deltas
- `2a054b284fc396b49ca58b6bfe558a642a0cbc32` — 2026-09-16T19:42:23+08:00 — Jun Zhu — ci: apply and verify timeline live fix
- `4b4afb504d896293f5eac81c3509a2da51764b23` — 2026-09-16T19:42:10+08:00 — Jun Zhu — ci: add deterministic timeline live patch
- `42ac3e63d20defa4567a24dc97d52b7a536bb96a` — 2026-09-16T19:41:54+08:00 — Jun Zhu — test: require timeline live-delta wiring
- `a8a1169825fe487bf291cdc82b36e123cad27b0b` — 2026-09-16T19:41:43+08:00 — Jun Zhu — test: cover timeline baseline and live deltas
- `fe0c6453e552f916df0a307c5f439ec4f3b5a621` — 2026-09-16T19:41:30+08:00 — Jun Zhu — test: add timeline problem delta tracker
- `ba1215bc177327ddc5a85a983b11d8d55fa86632` — 2026-09-16T09:05:53Z — github-actions[bot] — fix: restore reliable auto-answer scheduling
- `227f9358bfc7d1ca2da7870d088edf814c181207` — 2026-09-16T17:05:30+08:00 — Jun Zhu — ci: ignore generated bundle whitespace in source check
- `b1bd9f0a8f119c12e24941c6e8610100cda57b22` — 2026-09-16T17:03:53+08:00 — Jun Zhu — ci: make bundle verification formatting-independent
- `a7e54760f45c7601ed4868b0dad43521f59a496a` — 2026-09-16T17:02:16+08:00 — Jun Zhu — ci: rerun stability gate after assertion fix
- `6cc56c7d7bd1dc96be7f05c718cee98bf269efe6` — 2026-09-16T17:01:57+08:00 — Jun Zhu — test: accept guarded live-unlock rearm
- `6d86664641ab49e6a231f8e78580c6e79dbd55cd` — 2026-09-16T16:59:36+08:00 — Jun Zhu — ci: apply deterministic stability fixes
- `3466c7b72d5bddb36ffb92d5f92f89afcd44c0f0` — 2026-09-16T16:59:21+08:00 — Jun Zhu — chore: add deterministic stability patch script
- `0cfe4d1c4cec9c2f093c5d435e035306f90fe677` — 2026-09-16T16:29:33+08:00 — Jun Zhu — chore: apply stability patch from verified workflow source
- `ec3eef340637e89d651627a9ff59133d75b636b3` — 2026-09-16T16:26:43+08:00 — Jun Zhu — chore: retry stability fixes with verified patch contexts
- `635da2f694b384050258e2595b62c147955cca19` — 2026-09-16T16:26:08+08:00 — Jun Zhu — test: fix auto-join lifecycle assertion syntax
- `cc624bc13791a62a32cda10a91e2358d1aa2b673` — 2026-09-16T16:25:16+08:00 — Jun Zhu — chore: prepare guarded stability fix application
- `4acb79e6a9533d878cb5d931f82da677765688c1` — 2026-09-16T16:23:47+08:00 — Jun Zhu — test: reproduce auto-join lifecycle regressions
- `81c42b5428a10586d31ac85d925467d3e15778f7` — 2026-09-16T16:18:06+08:00 — Jun Zhu — test: require opt-in for expired retry route
- `82ca511b49fe356eb4e3d9b4e681770d749d2965` — 2026-09-16T16:17:59+08:00 — Jun Zhu — test: reproduce duplicate wait and correction failure handling
- `910f0283a334aff6bc97da55321653ad6e291af7` — 2026-09-16T16:17:34+08:00 — Jun Zhu — test: reproduce live unlock auto-answer rearm regression
- `c78446a5bd6d24af147d30f78a552759d091ac58` — 2026-09-16T16:16:51+08:00 — Jun Zhu — ci: add stability test and build workflow
- `26c072bfa93323d7a19ea4c986ff8f4653dec987` — 2026-09-16T16:13:21+08:00 — Jun Zhu — chore: checkpoint before stability audit

### `main`
- No commits unique versus main.

### `restore/pre-revert-ed823033`
- `b5f51f47e6ca5b8fb632cdc32922a9f6448969a7` — 2026-09-16T15:53:34+08:00 — Jun Zhu — restore: return repository to pre-revert snapshot ed823033
- `bbc690a758bb346ece9be45e07a3301b73c89999` — 2026-09-14T19:31:02+08:00 — Jun Zhu — Add project inheritance information to README
- `3d8e01558bd21ae4a361f88ecce9e99db18351bb` — 2026-09-14T19:24:50+08:00 — Jun Zhu — Restore repository to b85ca499
- `b2fa1f5fe5d56f672e5d2049e257b8ae009c2d2f` — 2026-09-14T19:06:59+08:00 — Jun Zhu — Merge pull request #2 from HITweihai/revert-1-feat/recover-auto-answer-1215
- `922330ddb759224617fa59b8e2e47a20c1cf55a7` — 2026-09-14T19:05:39+08:00 — Jun Zhu — Revert "Feat/recover auto answer 1215"

### `revert-1-feat/recover-auto-answer-1215`
- `922330ddb759224617fa59b8e2e47a20c1cf55a7` — 2026-09-14T19:05:39+08:00 — Jun Zhu — Revert "Feat/recover auto answer 1215"

### `zy-dev`
- No commits unique versus main.

## All reachable commits

### `aa66525fc57cb5f8191b58cbae2f184ba63d71cf` — ci(audit): inventory every branch and commit
- Date: 2026-09-17T09:44:11+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `03754204f9555d0438d96ddbd2a25515dd3f168f`
- Branches: `audit/full-regression-20260917`
- Files:
  - `A	.github/workflows/history-inventory.yml`

### `03754204f9555d0438d96ddbd2a25515dd3f168f` — test(audit): add complete Git history inventory generator
- Date: 2026-09-17T09:44:03+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `0f23d5afb3c0da91c2a34c63495c6e55765f6312`
- Branches: `audit/full-regression-20260917`
- Files:
  - `A	.github/scripts/history_inventory.py`

### `0f23d5afb3c0da91c2a34c63495c6e55765f6312` — test: define full regression matrix
- Date: 2026-09-17T09:41:39+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `35c5affb86f4be2a2c4c49b236a1c36049ab9bb6`
- Branches: `audit/full-regression-20260917`
- Files:
  - `A	docs/testing/full-regression-matrix.md`

### `35c5affb86f4be2a2c4c49b236a1c36049ab9bb6` — fix: restore answer execution and periodic refresh
- Date: 2026-09-17T01:00:50Z
- Author: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>
- Parents: `151cfbd3d5ed8ae1eec474df6f433aded5fe4958`
- Branches: `audit/full-regression-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `M	release/ykt-helper-1216-stability-test.user.js`
  - `A	ykt-helper/src/core/answer-state.js`
  - `M	ykt-helper/src/index.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/state/auto-answer-runner.js`
  - `M	ykt-helper/src/ui/panels/problem-list.js`
  - `A	ykt-helper/test/answer-core-wiring.test.js`
  - `A	ykt-helper/test/answer-state.test.js`
  - `M	ykt-helper/test/auto-answer-runner.test.js`
  - `A	ykt-helper/test/periodic-reload-wiring.test.js`

### `151cfbd3d5ed8ae1eec474df6f433aded5fe4958` — ci: gate answer and refresh stability repair
- Date: 2026-09-17T09:00:28+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `5ca89ee0aff4f0e58ade09133b720965ccc88868`
- Branches: `audit/full-regression-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `A	.github/workflows/apply-stability-repair-v4.yml`

### `5ca89ee0aff4f0e58ade09133b720965ccc88868` — test: harden periodic reload regression check
- Date: 2026-09-17T09:00:10+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `00b64decf864889dde27279b564f729a96d22f69`
- Branches: `audit/full-regression-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `M	.github/scripts/apply_periodic_reload_fix.py`

### `00b64decf864889dde27279b564f729a96d22f69` — ci: add periodic reload regression repair
- Date: 2026-09-17T08:59:52+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `afa4ec9a1b02c0ba6df6449b6c18d066f8817b79`
- Branches: `audit/full-regression-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `A	.github/scripts/apply_periodic_reload_fix.py`

### `afa4ec9a1b02c0ba6df6449b6c18d066f8817b79` — ci: add deterministic answer-core repair script
- Date: 2026-09-17T08:56:49+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `789c2c345f1cfaee61a37eb6440b0ed6fc86b655`
- Branches: `audit/full-regression-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `A	.github/scripts/apply_answer_core_fix.py`

### `789c2c345f1cfaee61a37eb6440b0ed6fc86b655` — test: load answer runner in core repair regressions
- Date: 2026-09-17T08:54:27+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `d003dbd0b34f7cd66115931109c3653fcbe84adf`
- Branches: `audit/full-regression-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `M	.github/workflows/apply-answer-core-rebuild.yml`

### `d003dbd0b34f7cd66115931109c3653fcbe84adf` — ci: gate answer core regression repair
- Date: 2026-09-17T08:52:06+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `0af2f7fa5ab13eb2c9283a741c8586d3d3c4f25b`
- Branches: `audit/full-regression-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `A	.github/workflows/apply-answer-core-rebuild.yml`

### `0af2f7fa5ab13eb2c9283a741c8586d3d3c4f25b` — fix: retry live unlock hydration and expose field diagnostics
- Date: 2026-09-16T12:22:07Z
- Author: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>
- Parents: `fad901274387dfc0059bf28917a3204e6908bd4a`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `M	release/ykt-helper-1216-stability-test.user.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/state/auto-answer-runner.js`

### `fad901274387dfc0059bf28917a3204e6908bd4a` — ci: gate 1.21.6.3 field diagnostics fix
- Date: 2026-09-16T20:21:41+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `dec1f6a9e76aefac14724bfb3f0968405140cd4d`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `A	.github/workflows/apply-field-diagnostics-fix.yml`

### `dec1f6a9e76aefac14724bfb3f0968405140cd4d` — ci: add deterministic field diagnostics patch
- Date: 2026-09-16T20:21:28+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `3a5d8a913fe843c43d29332a69f2ec6171be59fc`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `A	.github/scripts/apply-field-diagnostics-fix.py`

### `3a5d8a913fe843c43d29332a69f2ec6171be59fc` — test: cover live unlock retry and field diagnostics
- Date: 2026-09-16T20:20:56+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `797922f9db3460401858c65d42903f30a5294e73`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `A	ykt-helper/test/field-diagnostics-wiring.test.js`

### `797922f9db3460401858c65d42903f30a5294e73` — fix: recover live questions from timeline deltas
- Date: 2026-09-16T11:44:40Z
- Author: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>
- Parents: `4e48b73cad8d82765a1d1df7b38d3b3333a072c5`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `M	release/ykt-helper-1216-stability-test.user.js`
  - `M	ykt-helper/src/state/actions.js`

### `4e48b73cad8d82765a1d1df7b38d3b3333a072c5` — ci: rerun timeline fix after contract update
- Date: 2026-09-16T19:44:19+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `43b73693e2034e8f2ffabba23a8a0b12707145e6`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `M	.github/workflows/apply-timeline-live-fix.yml`

### `43b73693e2034e8f2ffabba23a8a0b12707145e6` — test: validate delegated timeline live source
- Date: 2026-09-16T19:44:01+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `dddf052399d70158a00d009f66fef7e280a927d1`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `M	ykt-helper/test/timeline-actions-wiring.test.js`

### `dddf052399d70158a00d009f66fef7e280a927d1` — test: align timeline contract with live deltas
- Date: 2026-09-16T19:43:52+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `2a054b284fc396b49ca58b6bfe558a642a0cbc32`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `M	ykt-helper/test/actions-wiring.test.js`

### `2a054b284fc396b49ca58b6bfe558a642a0cbc32` — ci: apply and verify timeline live fix
- Date: 2026-09-16T19:42:23+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `4b4afb504d896293f5eac81c3509a2da51764b23`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `A	.github/workflows/apply-timeline-live-fix.yml`

### `4b4afb504d896293f5eac81c3509a2da51764b23` — ci: add deterministic timeline live patch
- Date: 2026-09-16T19:42:10+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `42ac3e63d20defa4567a24dc97d52b7a536bb96a`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `A	.github/scripts/apply-timeline-live-fix.py`

### `42ac3e63d20defa4567a24dc97d52b7a536bb96a` — test: require timeline live-delta wiring
- Date: 2026-09-16T19:41:54+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `a8a1169825fe487bf291cdc82b36e123cad27b0b`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `A	ykt-helper/test/timeline-actions-wiring.test.js`

### `a8a1169825fe487bf291cdc82b36e123cad27b0b` — test: cover timeline baseline and live deltas
- Date: 2026-09-16T19:41:43+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `fe0c6453e552f916df0a307c5f439ec4f3b5a621`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `A	ykt-helper/test/timeline-problem-tracker.test.js`

### `fe0c6453e552f916df0a307c5f439ec4f3b5a621` — test: add timeline problem delta tracker
- Date: 2026-09-16T19:41:30+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `ba1215bc177327ddc5a85a983b11d8d55fa86632`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `A	ykt-helper/src/core/timeline-problem-tracker.js`

### `ba1215bc177327ddc5a85a983b11d8d55fa86632` — fix: restore reliable auto-answer scheduling
- Date: 2026-09-16T09:05:53Z
- Author: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>
- Parents: `227f9358bfc7d1ca2da7870d088edf814c181207`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `A	release/ykt-helper-1216-stability-test.user.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/state/auto-answer-runner.js`
  - `M	ykt-helper/src/state/repo.js`
  - `M	ykt-helper/src/tsm/answer-routing.js`

### `227f9358bfc7d1ca2da7870d088edf814c181207` — ci: ignore generated bundle whitespace in source check
- Date: 2026-09-16T17:05:30+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `b1bd9f0a8f119c12e24941c6e8610100cda57b22`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `M	.github/workflows/apply-stability-fixes-v3.yml`

### `b1bd9f0a8f119c12e24941c6e8610100cda57b22` — ci: make bundle verification formatting-independent
- Date: 2026-09-16T17:03:53+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `a7e54760f45c7601ed4868b0dad43521f59a496a`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `M	.github/workflows/apply-stability-fixes-v3.yml`

### `a7e54760f45c7601ed4868b0dad43521f59a496a` — ci: rerun stability gate after assertion fix
- Date: 2026-09-16T17:02:16+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `6cc56c7d7bd1dc96be7f05c718cee98bf269efe6`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `M	.github/workflows/apply-stability-fixes-v3.yml`

### `6cc56c7d7bd1dc96be7f05c718cee98bf269efe6` — test: accept guarded live-unlock rearm
- Date: 2026-09-16T17:01:57+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `6d86664641ab49e6a231f8e78580c6e79dbd55cd`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `M	ykt-helper/test/actions-wiring.test.js`

### `6d86664641ab49e6a231f8e78580c6e79dbd55cd` — ci: apply deterministic stability fixes
- Date: 2026-09-16T16:59:36+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `3466c7b72d5bddb36ffb92d5f92f89afcd44c0f0`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `M	.github/workflows/apply-stability-fixes-v3.yml`

### `3466c7b72d5bddb36ffb92d5f92f89afcd44c0f0` — chore: add deterministic stability patch script
- Date: 2026-09-16T16:59:21+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `0cfe4d1c4cec9c2f093c5d435e035306f90fe677`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `A	.github/scripts/apply-stability-fixes.py`

### `0cfe4d1c4cec9c2f093c5d435e035306f90fe677` — chore: apply stability patch from verified workflow source
- Date: 2026-09-16T16:29:33+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `ec3eef340637e89d651627a9ff59133d75b636b3`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `A	.github/workflows/apply-stability-fixes-v3.yml`

### `ec3eef340637e89d651627a9ff59133d75b636b3` — chore: retry stability fixes with verified patch contexts
- Date: 2026-09-16T16:26:43+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `635da2f694b384050258e2595b62c147955cca19`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `A	.github/workflows/apply-stability-fixes-v2.yml`

### `635da2f694b384050258e2595b62c147955cca19` — test: fix auto-join lifecycle assertion syntax
- Date: 2026-09-16T16:26:08+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `cc624bc13791a62a32cda10a91e2358d1aa2b673`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `M	ykt-helper/test/actions-wiring.test.js`

### `cc624bc13791a62a32cda10a91e2358d1aa2b673` — chore: prepare guarded stability fix application
- Date: 2026-09-16T16:25:16+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `4acb79e6a9533d878cb5d931f82da677765688c1`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `A	.github/workflows/apply-stability-fixes.yml`

### `4acb79e6a9533d878cb5d931f82da677765688c1` — test: reproduce auto-join lifecycle regressions
- Date: 2026-09-16T16:23:47+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `81c42b5428a10586d31ac85d925467d3e15778f7`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `M	ykt-helper/test/actions-wiring.test.js`

### `81c42b5428a10586d31ac85d925467d3e15778f7` — test: require opt-in for expired retry route
- Date: 2026-09-16T16:18:06+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `82ca511b49fe356eb4e3d9b4e681770d749d2965`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `M	ykt-helper/test/answer-routing.test.js`

### `82ca511b49fe356eb4e3d9b4e681770d749d2965` — test: reproduce duplicate wait and correction failure handling
- Date: 2026-09-16T16:17:59+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `910f0283a334aff6bc97da55321653ad6e291af7`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `M	ykt-helper/test/auto-answer-runner.test.js`

### `910f0283a334aff6bc97da55321653ad6e291af7` — test: reproduce live unlock auto-answer rearm regression
- Date: 2026-09-16T16:17:34+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `c78446a5bd6d24af147d30f78a552759d091ac58`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `M	ykt-helper/test/actions-wiring.test.js`

### `c78446a5bd6d24af147d30f78a552759d091ac58` — ci: add stability test and build workflow
- Date: 2026-09-16T16:16:51+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `26c072bfa93323d7a19ea4c986ff8f4653dec987`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files:
  - `A	.github/workflows/stability-audit.yml`

### `26c072bfa93323d7a19ea4c986ff8f4653dec987` — chore: checkpoint before stability audit
- Date: 2026-09-16T16:13:21+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `ed823033fcc64f65be955935bdb9419332e82bf8`
- Branches: `audit/full-regression-20260917`, `backup/pre-core-rebuild-20260917`, `fix/stability-auto-answer-20260916`
- Files: none

### `b5f51f47e6ca5b8fb632cdc32922a9f6448969a7` — restore: return repository to pre-revert snapshot ed823033
- Date: 2026-09-16T15:53:34+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `bbc690a758bb346ece9be45e07a3301b73c89999`
- Branches: `restore/pre-revert-ed823033`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	docs/superpowers/plans/2026-09-11-classroom-orchestration-plan.md`
  - `A	docs/superpowers/specs/2026-09-11-classroom-orchestration-design.md`
  - `A	release/ykt-helper-1216.user.js`
  - `M	ykt-helper/debug/index.html`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ai/openai.js`
  - `A	ykt-helper/src/core/active-lessons.js`
  - `A	ykt-helper/src/core/answer-priority.js`
  - `M	ykt-helper/src/core/danmu-follow.js`
  - `M	ykt-helper/src/core/danmu-sender.js`
  - `A	ykt-helper/src/core/navigation-arbiter.js`
  - `M	ykt-helper/src/core/publish-events.js`
  - `M	ykt-helper/src/core/realtime-dispatch.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/state/auto-answer-runner.js`
  - `M	ykt-helper/src/state/repo.js`
  - `A	ykt-helper/src/tsm/answer-routing.js`
  - `M	ykt-helper/src/tsm/answer.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `A	ykt-helper/test/active-lessons.test.js`
  - `A	ykt-helper/test/answer-priority.test.js`
  - `A	ykt-helper/test/answer-routing.test.js`
  - `M	ykt-helper/test/auto-answer-runner.test.js`
  - `M	ykt-helper/test/danmu-follow.test.js`
  - `A	ykt-helper/test/navigation-arbiter.test.js`
  - `M	ykt-helper/test/profile-temperature.test.js`
  - `M	ykt-helper/test/publish-events.test.js`
  - `M	ykt-helper/test/realtime-dispatch.test.js`
  - `A	ykt-helper/test/release-version.test.js`
  - `M	ykt-helper/userscript.meta.js`

### `bbc690a758bb346ece9be45e07a3301b73c89999` — Add project inheritance information to README
- Date: 2026-09-14T19:31:02+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `3d8e01558bd21ae4a361f88ecce9e99db18351bb`
- Branches: `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `restore/pre-revert-ed823033`
- Files:
  - `M	README.md`

### `3d8e01558bd21ae4a361f88ecce9e99db18351bb` — Restore repository to b85ca499
- Date: 2026-09-14T19:24:50+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `b2fa1f5fe5d56f672e5d2049e257b8ae009c2d2f`
- Branches: `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `restore/pre-revert-ed823033`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	release/ykt-helper-1215.user.js`
  - `M	ykt-helper/debug/index.html`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/core/danmu-follow.js`
  - `A	ykt-helper/src/core/problem-event-source.js`
  - `M	ykt-helper/src/core/realtime-dispatch.js`
  - `M	ykt-helper/src/core/reminder-preferences.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/state/actions.js`
  - `A	ykt-helper/src/state/answer-editor.js`
  - `A	ykt-helper/src/state/auto-answer-recovery.js`
  - `A	ykt-helper/src/state/auto-answer-runner.js`
  - `M	ykt-helper/src/state/repo.js`
  - `M	ykt-helper/src/ui/panels/active-problems.html`
  - `M	ykt-helper/src/ui/panels/active-problems.js`
  - `M	ykt-helper/src/ui/panels/ai.html`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/panels/problem-list.html`
  - `M	ykt-helper/src/ui/panels/problem-list.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/styles.css`
  - `M	ykt-helper/src/ui/ui-api.js`
  - `A	ykt-helper/test/actions-wiring.test.js`
  - `A	ykt-helper/test/answer-editor.test.js`
  - `A	ykt-helper/test/auto-answer-recovery.test.js`
  - `A	ykt-helper/test/auto-answer-runner.test.js`
  - `M	ykt-helper/test/danmu-follow.test.js`
  - `A	ykt-helper/test/problem-action-visibility.test.js`
  - `A	ykt-helper/test/problem-event-source.test.js`
  - `M	ykt-helper/test/realtime-dispatch.test.js`
  - `M	ykt-helper/test/reminder-preferences.test.js`
  - `M	ykt-helper/test/settings-form.test.js`
  - `M	ykt-helper/userscript.meta.js`

### `b2fa1f5fe5d56f672e5d2049e257b8ae009c2d2f` — Merge pull request #2 from HITweihai/revert-1-feat/recover-auto-answer-1215
- Date: 2026-09-14T19:06:59+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `ed823033fcc64f65be955935bdb9419332e82bf8`, `922330ddb759224617fa59b8e2e47a20c1cf55a7`
- Branches: `backup-before-b85ca499`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `restore/pre-revert-ed823033`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `D	docs/superpowers/plans/2026-09-11-classroom-orchestration-plan.md`
  - `D	docs/superpowers/specs/2026-09-11-classroom-orchestration-design.md`
  - `D	release/ykt-helper-1215.user.js`
  - `D	release/ykt-helper-1216.user.js`
  - `M	ykt-helper/debug/index.html`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ai/openai.js`
  - `D	ykt-helper/src/core/active-lessons.js`
  - `D	ykt-helper/src/core/answer-priority.js`
  - `M	ykt-helper/src/core/danmu-follow.js`
  - `M	ykt-helper/src/core/danmu-sender.js`
  - `D	ykt-helper/src/core/navigation-arbiter.js`
  - `D	ykt-helper/src/core/problem-event-source.js`
  - `M	ykt-helper/src/core/publish-events.js`
  - `M	ykt-helper/src/core/realtime-dispatch.js`
  - `M	ykt-helper/src/core/reminder-preferences.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/src/state/actions.js`
  - `D	ykt-helper/src/state/answer-editor.js`
  - `D	ykt-helper/src/state/auto-answer-recovery.js`
  - `D	ykt-helper/src/state/auto-answer-runner.js`
  - `M	ykt-helper/src/state/repo.js`
  - `D	ykt-helper/src/tsm/answer-routing.js`
  - `M	ykt-helper/src/tsm/answer.js`
  - `M	ykt-helper/src/ui/panels/active-problems.html`
  - `M	ykt-helper/src/ui/panels/active-problems.js`
  - `M	ykt-helper/src/ui/panels/ai.html`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/panels/problem-list.html`
  - `M	ykt-helper/src/ui/panels/problem-list.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/styles.css`
  - `M	ykt-helper/src/ui/ui-api.js`
  - `D	ykt-helper/test/actions-wiring.test.js`
  - `D	ykt-helper/test/active-lessons.test.js`
  - `D	ykt-helper/test/answer-editor.test.js`
  - `D	ykt-helper/test/answer-priority.test.js`
  - `D	ykt-helper/test/answer-routing.test.js`
  - `D	ykt-helper/test/auto-answer-recovery.test.js`
  - `D	ykt-helper/test/auto-answer-runner.test.js`
  - `M	ykt-helper/test/danmu-follow.test.js`
  - `D	ykt-helper/test/navigation-arbiter.test.js`
  - `D	ykt-helper/test/problem-action-visibility.test.js`
  - `D	ykt-helper/test/problem-event-source.test.js`
  - `M	ykt-helper/test/profile-temperature.test.js`
  - `M	ykt-helper/test/publish-events.test.js`
  - `M	ykt-helper/test/realtime-dispatch.test.js`
  - `D	ykt-helper/test/release-version.test.js`
  - `M	ykt-helper/test/reminder-preferences.test.js`
  - `M	ykt-helper/test/settings-form.test.js`
  - `M	ykt-helper/userscript.meta.js`

### `922330ddb759224617fa59b8e2e47a20c1cf55a7` — Revert "Feat/recover auto answer 1215"
- Date: 2026-09-14T19:05:39+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `ed823033fcc64f65be955935bdb9419332e82bf8`
- Branches: `backup-before-b85ca499`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `D	docs/superpowers/plans/2026-09-11-classroom-orchestration-plan.md`
  - `D	docs/superpowers/specs/2026-09-11-classroom-orchestration-design.md`
  - `D	release/ykt-helper-1215.user.js`
  - `D	release/ykt-helper-1216.user.js`
  - `M	ykt-helper/debug/index.html`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ai/openai.js`
  - `D	ykt-helper/src/core/active-lessons.js`
  - `D	ykt-helper/src/core/answer-priority.js`
  - `M	ykt-helper/src/core/danmu-follow.js`
  - `M	ykt-helper/src/core/danmu-sender.js`
  - `D	ykt-helper/src/core/navigation-arbiter.js`
  - `D	ykt-helper/src/core/problem-event-source.js`
  - `M	ykt-helper/src/core/publish-events.js`
  - `M	ykt-helper/src/core/realtime-dispatch.js`
  - `M	ykt-helper/src/core/reminder-preferences.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/src/state/actions.js`
  - `D	ykt-helper/src/state/answer-editor.js`
  - `D	ykt-helper/src/state/auto-answer-recovery.js`
  - `D	ykt-helper/src/state/auto-answer-runner.js`
  - `M	ykt-helper/src/state/repo.js`
  - `D	ykt-helper/src/tsm/answer-routing.js`
  - `M	ykt-helper/src/tsm/answer.js`
  - `M	ykt-helper/src/ui/panels/active-problems.html`
  - `M	ykt-helper/src/ui/panels/active-problems.js`
  - `M	ykt-helper/src/ui/panels/ai.html`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/panels/problem-list.html`
  - `M	ykt-helper/src/ui/panels/problem-list.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/styles.css`
  - `M	ykt-helper/src/ui/ui-api.js`
  - `D	ykt-helper/test/actions-wiring.test.js`
  - `D	ykt-helper/test/active-lessons.test.js`
  - `D	ykt-helper/test/answer-editor.test.js`
  - `D	ykt-helper/test/answer-priority.test.js`
  - `D	ykt-helper/test/answer-routing.test.js`
  - `D	ykt-helper/test/auto-answer-recovery.test.js`
  - `D	ykt-helper/test/auto-answer-runner.test.js`
  - `M	ykt-helper/test/danmu-follow.test.js`
  - `D	ykt-helper/test/navigation-arbiter.test.js`
  - `D	ykt-helper/test/problem-action-visibility.test.js`
  - `D	ykt-helper/test/problem-event-source.test.js`
  - `M	ykt-helper/test/profile-temperature.test.js`
  - `M	ykt-helper/test/publish-events.test.js`
  - `M	ykt-helper/test/realtime-dispatch.test.js`
  - `D	ykt-helper/test/release-version.test.js`
  - `M	ykt-helper/test/reminder-preferences.test.js`
  - `M	ykt-helper/test/settings-form.test.js`
  - `M	ykt-helper/userscript.meta.js`

### `ed823033fcc64f65be955935bdb9419332e82bf8` — Merge pull request #1 from HITweihai/feat/recover-auto-answer-1215
- Date: 2026-09-12T20:33:54+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `cb98ed09a772c5c8d361d178b7a9b3146712e952`, `dd4b0bb3b43ed4b2bacd4791d92299bfe15e129e`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	docs/superpowers/plans/2026-09-11-classroom-orchestration-plan.md`
  - `A	docs/superpowers/specs/2026-09-11-classroom-orchestration-design.md`
  - `A	release/ykt-helper-1215.user.js`
  - `A	release/ykt-helper-1216.user.js`
  - `M	ykt-helper/debug/index.html`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ai/openai.js`
  - `A	ykt-helper/src/core/active-lessons.js`
  - `A	ykt-helper/src/core/answer-priority.js`
  - `M	ykt-helper/src/core/danmu-follow.js`
  - `M	ykt-helper/src/core/danmu-sender.js`
  - `A	ykt-helper/src/core/navigation-arbiter.js`
  - `A	ykt-helper/src/core/problem-event-source.js`
  - `M	ykt-helper/src/core/publish-events.js`
  - `M	ykt-helper/src/core/realtime-dispatch.js`
  - `M	ykt-helper/src/core/reminder-preferences.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/src/state/actions.js`
  - `A	ykt-helper/src/state/answer-editor.js`
  - `A	ykt-helper/src/state/auto-answer-recovery.js`
  - `A	ykt-helper/src/state/auto-answer-runner.js`
  - `M	ykt-helper/src/state/repo.js`
  - `A	ykt-helper/src/tsm/answer-routing.js`
  - `M	ykt-helper/src/tsm/answer.js`
  - `M	ykt-helper/src/ui/panels/active-problems.html`
  - `M	ykt-helper/src/ui/panels/active-problems.js`
  - `M	ykt-helper/src/ui/panels/ai.html`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/panels/problem-list.html`
  - `M	ykt-helper/src/ui/panels/problem-list.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/styles.css`
  - `M	ykt-helper/src/ui/ui-api.js`
  - `A	ykt-helper/test/actions-wiring.test.js`
  - `A	ykt-helper/test/active-lessons.test.js`
  - `A	ykt-helper/test/answer-editor.test.js`
  - `A	ykt-helper/test/answer-priority.test.js`
  - `A	ykt-helper/test/answer-routing.test.js`
  - `A	ykt-helper/test/auto-answer-recovery.test.js`
  - `A	ykt-helper/test/auto-answer-runner.test.js`
  - `M	ykt-helper/test/danmu-follow.test.js`
  - `A	ykt-helper/test/navigation-arbiter.test.js`
  - `A	ykt-helper/test/problem-action-visibility.test.js`
  - `A	ykt-helper/test/problem-event-source.test.js`
  - `M	ykt-helper/test/profile-temperature.test.js`
  - `M	ykt-helper/test/publish-events.test.js`
  - `M	ykt-helper/test/realtime-dispatch.test.js`
  - `A	ykt-helper/test/release-version.test.js`
  - `M	ykt-helper/test/reminder-preferences.test.js`
  - `M	ykt-helper/test/settings-form.test.js`
  - `M	ykt-helper/userscript.meta.js`

### `dd4b0bb3b43ed4b2bacd4791d92299bfe15e129e` — release: publish yuketang helper 1.21.6
- Date: 2026-09-11T00:21:37-07:00
- Author: Codex <codex@openai.com>
- Parents: `b85ca4992ca12bc39719519c0b5cbd59db61bdbe`, `9194df39c0e25a0e6b9048d9db5f6ef64df97cfe`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	docs/superpowers/plans/2026-09-11-classroom-orchestration-plan.md`
  - `A	docs/superpowers/specs/2026-09-11-classroom-orchestration-design.md`
  - `A	release/ykt-helper-1216.user.js`
  - `M	ykt-helper/debug/index.html`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ai/openai.js`
  - `A	ykt-helper/src/core/active-lessons.js`
  - `A	ykt-helper/src/core/answer-priority.js`
  - `M	ykt-helper/src/core/danmu-follow.js`
  - `M	ykt-helper/src/core/danmu-sender.js`
  - `A	ykt-helper/src/core/navigation-arbiter.js`
  - `M	ykt-helper/src/core/publish-events.js`
  - `M	ykt-helper/src/core/realtime-dispatch.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/state/auto-answer-runner.js`
  - `M	ykt-helper/src/state/repo.js`
  - `A	ykt-helper/src/tsm/answer-routing.js`
  - `M	ykt-helper/src/tsm/answer.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `A	ykt-helper/test/active-lessons.test.js`
  - `A	ykt-helper/test/answer-priority.test.js`
  - `A	ykt-helper/test/answer-routing.test.js`
  - `M	ykt-helper/test/auto-answer-runner.test.js`
  - `M	ykt-helper/test/danmu-follow.test.js`
  - `A	ykt-helper/test/navigation-arbiter.test.js`
  - `M	ykt-helper/test/profile-temperature.test.js`
  - `M	ykt-helper/test/publish-events.test.js`
  - `M	ykt-helper/test/realtime-dispatch.test.js`
  - `A	ykt-helper/test/release-version.test.js`
  - `M	ykt-helper/userscript.meta.js`
  - `M	README.md`
  - `M	changelog.md`
  - `M	docs/superpowers/plans/2026-09-11-classroom-orchestration-plan.md`
  - `M	docs/superpowers/specs/2026-09-11-classroom-orchestration-design.md`
  - `M	release/ykt-helper-1215.user.js`
  - `A	release/ykt-helper-1216.user.js`
  - `M	ykt-helper/debug/index.html`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/core/danmu-follow.js`
  - `M	ykt-helper/src/core/navigation-arbiter.js`
  - `A	ykt-helper/src/core/problem-event-source.js`
  - `M	ykt-helper/src/core/realtime-dispatch.js`
  - `M	ykt-helper/src/core/reminder-preferences.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/state/actions.js`
  - `A	ykt-helper/src/state/answer-editor.js`
  - `A	ykt-helper/src/state/auto-answer-recovery.js`
  - `A	ykt-helper/src/state/auto-answer-runner.js`
  - `M	ykt-helper/src/state/repo.js`
  - `M	ykt-helper/src/ui/panels/active-problems.html`
  - `M	ykt-helper/src/ui/panels/active-problems.js`
  - `M	ykt-helper/src/ui/panels/ai.html`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/panels/problem-list.html`
  - `M	ykt-helper/src/ui/panels/problem-list.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/styles.css`
  - `M	ykt-helper/src/ui/ui-api.js`
  - `A	ykt-helper/test/actions-wiring.test.js`
  - `A	ykt-helper/test/answer-editor.test.js`
  - `A	ykt-helper/test/auto-answer-recovery.test.js`
  - `A	ykt-helper/test/auto-answer-runner.test.js`
  - `M	ykt-helper/test/danmu-follow.test.js`
  - `M	ykt-helper/test/navigation-arbiter.test.js`
  - `A	ykt-helper/test/problem-action-visibility.test.js`
  - `A	ykt-helper/test/problem-event-source.test.js`
  - `M	ykt-helper/test/realtime-dispatch.test.js`
  - `A	ykt-helper/test/release-version.test.js`
  - `M	ykt-helper/test/reminder-preferences.test.js`
  - `M	ykt-helper/test/settings-form.test.js`
  - `M	ykt-helper/userscript.meta.js`

### `9194df39c0e25a0e6b9048d9db5f6ef64df97cfe` — fix: reuse the foreground classroom socket
- Date: 2026-09-11T04:52:21Z
- Author: Codex <codex@openai.com>
- Parents: `faf8f45ee5c32c39303a47d6d9e227b1b77fa604`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	release/ykt-helper-1215.user.js`
  - `M	ykt-helper/src/net/ws-interceptor.js`

### `faf8f45ee5c32c39303a47d6d9e227b1b77fa604` — release: bump userscript to 1.21.5
- Date: 2026-09-11T04:49:04Z
- Author: Codex <codex@openai.com>
- Parents: `9ff3a3b4ee6dbf4c292b1af454b9e3e79102bdf7`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	release/ykt-helper-1215.user.js`
  - `M	ykt-helper/debug/index.html`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/userscript.meta.js`

### `9ff3a3b4ee6dbf4c292b1af454b9e3e79102bdf7` — feat: add fast answer verification and navigation arbitration
- Date: 2026-09-11T04:47:07Z
- Author: Codex <codex@openai.com>
- Parents: `349b5e635bc5439057120b555fb4bae6e96dbc0a`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	ykt-helper/src/ai/openai.js`
  - `A	ykt-helper/src/core/answer-priority.js`
  - `A	ykt-helper/src/core/navigation-arbiter.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `A	ykt-helper/test/answer-priority.test.js`
  - `A	ykt-helper/test/navigation-arbiter.test.js`
  - `M	ykt-helper/test/profile-temperature.test.js`

### `349b5e635bc5439057120b555fb4bae6e96dbc0a` — feat: allow opt-in deadline retry
- Date: 2026-09-11T04:33:49Z
- Author: Codex <codex@openai.com>
- Parents: `f0437ea53c0f65e999670d4b51be3e111717c092`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/state/actions.js`
  - `A	ykt-helper/src/tsm/answer-routing.js`
  - `M	ykt-helper/src/tsm/answer.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `A	ykt-helper/test/answer-routing.test.js`

### `f0437ea53c0f65e999670d4b51be3e111717c092` — fix: verify automatic barrage follows
- Date: 2026-09-11T04:31:01Z
- Author: Codex <codex@openai.com>
- Parents: `520a520e09e309c6dfdb1ab8d1ddc8d865c9d6c0`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	ykt-helper/src/core/danmu-follow.js`
  - `M	ykt-helper/src/core/danmu-sender.js`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/test/danmu-follow.test.js`

### `520a520e09e309c6dfdb1ab8d1ddc8d865c9d6c0` — fix: scope classroom publication reminders
- Date: 2026-09-11T04:24:26Z
- Author: Codex <codex@openai.com>
- Parents: `3a1ebfa6cd36ca6e6498103219703472ce1ae727`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	ykt-helper/src/core/publish-events.js`
  - `M	ykt-helper/src/core/realtime-dispatch.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/test/publish-events.test.js`
  - `M	ykt-helper/test/realtime-dispatch.test.js`

### `3a1ebfa6cd36ca6e6498103219703472ce1ae727` — feat: track active classroom connections
- Date: 2026-09-11T04:21:46Z
- Author: Codex <codex@openai.com>
- Parents: `f1b005dde442da846b8a6ee453fd2e7bc7467ae0`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `A	ykt-helper/src/core/active-lessons.js`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/state/repo.js`
  - `A	ykt-helper/test/active-lessons.test.js`

### `f1b005dde442da846b8a6ee453fd2e7bc7467ae0` — docs: define 1.21.5 classroom orchestration
- Date: 2026-09-11T04:18:08Z
- Author: Codex <codex@openai.com>
- Parents: `cb98ed09a772c5c8d361d178b7a9b3146712e952`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `A	docs/superpowers/plans/2026-09-11-classroom-orchestration-plan.md`
  - `A	docs/superpowers/specs/2026-09-11-classroom-orchestration-design.md`

### `b85ca4992ca12bc39719519c0b5cbd59db61bdbe` — fix: keep problem actions on the current page
- Date: 2026-09-09T20:31:32+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `41b023ca3c5b93395f04cca8502fb5c2bcbd3b24`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `M	release/ykt-helper-1215.user.js`
  - `M	ykt-helper/readme.md`
  - `D	ykt-helper/src/core/active-problem-dismissal.js`
  - `M	ykt-helper/src/ui/panels/active-problems.html`
  - `M	ykt-helper/src/ui/panels/active-problems.js`
  - `M	ykt-helper/src/ui/panels/problem-list.html`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/styles.css`
  - `D	ykt-helper/test/active-problem-dismissal.test.js`
  - `A	ykt-helper/test/problem-action-visibility.test.js`

### `41b023ca3c5b93395f04cca8502fb5c2bcbd3b24` — fix: synchronize rebuilt release artifact
- Date: 2026-09-09T20:03:32+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `64acaf4db00884cf20fb42fd2c0025414acf43f7`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	release/ykt-helper-1215.user.js`

### `64acaf4db00884cf20fb42fd2c0025414acf43f7` — docs: clarify burst and timeline behavior
- Date: 2026-09-09T20:01:01+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `d0b3c03df4cd9ce041b1d390980ba837dee88429`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	release/ykt-helper-1215.user.js`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/src/ui/panels/tutorial.html`

### `d0b3c03df4cd9ce041b1d390980ba837dee88429` — fix: repair release script encoding
- Date: 2026-09-09T19:58:23+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `7356b613fd91ffeb55fdb208f9356a3cbc5a621b`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	release/ykt-helper-1215.user.js`

### `7356b613fd91ffeb55fdb208f9356a3cbc5a621b` — fix: use burst winner and ignore timeline reminders
- Date: 2026-09-09T19:56:17+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `72836b3042c1613f649775d29211b9475c80f1af`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `M	release/ykt-helper-1215.user.js`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/src/core/danmu-follow.js`
  - `A	ykt-helper/src/core/problem-event-source.js`
  - `M	ykt-helper/src/core/realtime-dispatch.js`
  - `M	ykt-helper/src/core/reminder-preferences.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/test/actions-wiring.test.js`
  - `M	ykt-helper/test/danmu-follow.test.js`
  - `A	ykt-helper/test/problem-event-source.test.js`
  - `M	ykt-helper/test/realtime-dispatch.test.js`

### `72836b3042c1613f649775d29211b9475c80f1af` — feat: publish 1.21.5 classroom reminders and card dismissal
- Date: 2026-09-09T19:31:46+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `c670f5f5d7203af4660caaca4ecf3d7555cc0a6f`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `M	release/ykt-helper-1215.user.js`
  - `M	ykt-helper/readme.md`
  - `A	ykt-helper/src/core/active-problem-dismissal.js`
  - `M	ykt-helper/src/core/danmu-follow.js`
  - `M	ykt-helper/src/core/reminder-preferences.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/ui/panels/active-problems.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/styles.css`
  - `A	ykt-helper/test/actions-wiring.test.js`
  - `A	ykt-helper/test/active-problem-dismissal.test.js`
  - `M	ykt-helper/test/danmu-follow.test.js`
  - `M	ykt-helper/test/reminder-preferences.test.js`
  - `M	ykt-helper/test/settings-form.test.js`

### `c670f5f5d7203af4660caaca4ecf3d7555cc0a6f` — feat: recover interrupted auto answers
- Date: 2026-09-09T11:26:55+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `cb98ed09a772c5c8d361d178b7a9b3146712e952`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	release/ykt-helper-1215.user.js`
  - `M	ykt-helper/debug/index.html`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/state/actions.js`
  - `A	ykt-helper/src/state/answer-editor.js`
  - `A	ykt-helper/src/state/auto-answer-recovery.js`
  - `A	ykt-helper/src/state/auto-answer-runner.js`
  - `M	ykt-helper/src/state/repo.js`
  - `M	ykt-helper/src/ui/panels/active-problems.js`
  - `M	ykt-helper/src/ui/panels/ai.html`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/panels/problem-list.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/styles.css`
  - `M	ykt-helper/src/ui/ui-api.js`
  - `A	ykt-helper/test/answer-editor.test.js`
  - `A	ykt-helper/test/auto-answer-recovery.test.js`
  - `A	ykt-helper/test/auto-answer-runner.test.js`
  - `M	ykt-helper/userscript.meta.js`

### `cb98ed09a772c5c8d361d178b7a9b3146712e952` — feat: add opt-in repeated danmu follow
- Date: 2026-09-08T10:52:34+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `a9c899d369d45a02cf1cd82ad39b2a07745d3740`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `M	release/ykt-helper-1214.user.js`
  - `M	ykt-helper/readme.md`
  - `A	ykt-helper/src/core/danmu-follow.js`
  - `A	ykt-helper/src/core/danmu-sender.js`
  - `M	ykt-helper/src/core/publish-events.js`
  - `M	ykt-helper/src/core/realtime-dispatch.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `A	ykt-helper/test/danmu-follow.test.js`
  - `M	ykt-helper/test/realtime-dispatch.test.js`

### `a9c899d369d45a02cf1cd82ad39b2a07745d3740` — docs: order 1.21.4 changelog entry
- Date: 2026-09-08T08:27:21+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `773eaba626a46712299220fa7cbbb62a8aed4054`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	changelog.md`

### `773eaba626a46712299220fa7cbbb62a8aed4054` — release: publish 1.21.4
- Date: 2026-09-08T08:25:19+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `22831470cff7f51275eec12b245347da260e9aa9`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	release/ykt-helper-1214.user.js`
  - `M	ykt-helper/debug/index.html`
  - `M	ykt-helper/flat/readme.md`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/userscript.meta.js`

### `22831470cff7f51275eec12b245347da260e9aa9` — fix: keep untimed problems answerable
- Date: 2026-09-08T08:25:08+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `b4044006a02d0fdcaa4da20c93fb238f0037adf2`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	ykt-helper/src/state/actions.js`
  - `A	ykt-helper/src/state/problem-timing.js`
  - `M	ykt-helper/src/ui/panels/active-problems.js`
  - `A	ykt-helper/test/problem-timing.test.js`

### `b4044006a02d0fdcaa4da20c93fb238f0037adf2` — revert: keep portrait desktop routes active
- Date: 2026-09-07T18:09:54+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `16c089dc1baa199f3cd41b98d525087e579225c7`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `M	release/ykt-helper-1213.user.js`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/src/core/runtime-mode.js`
  - `M	ykt-helper/src/index.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/test/runtime-mode.test.js`
  - `M	ykt-helper/test/userscript-entry-match.test.js`
  - `M	ykt-helper/userscript.meta.js`

### `16c089dc1baa199f3cd41b98d525087e579225c7` — fix: keep portrait desktop routes active
- Date: 2026-09-07T17:44:41+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `ce3419c344dfc31293a8b43798a286981586b8fe`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `M	release/ykt-helper-1213.user.js`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/src/core/runtime-mode.js`
  - `M	ykt-helper/src/index.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/test/runtime-mode.test.js`
  - `M	ykt-helper/test/userscript-entry-match.test.js`
  - `M	ykt-helper/userscript.meta.js`

### `ce3419c344dfc31293a8b43798a286981586b8fe` — fix: force desktop routes from mobile entries
- Date: 2026-09-07T17:04:41+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `d3eff638959d7be21a9d7e4321646c092b4c6dd5`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `M	release/ykt-helper-1213.user.js`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/src/core/realtime-dispatch.js`
  - `M	ykt-helper/src/core/runtime-mode.js`
  - `M	ykt-helper/src/index.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/test/runtime-mode.test.js`
  - `M	ykt-helper/test/userscript-entry-match.test.js`
  - `M	ykt-helper/userscript.meta.js`

### `d3eff638959d7be21a9d7e4321646c092b4c6dd5` — fix: distinguish scalar problem publish events
- Date: 2026-09-06T09:53:28+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `d9cbd970ad0401e92b2295953f0a90098e04f686`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	release/ykt-helper-1213.user.js`
  - `M	ykt-helper/src/core/publish-events.js`
  - `M	ykt-helper/test/publish-events.test.js`

### `d9cbd970ad0401e92b2295953f0a90098e04f686` — fix: consolidate 1.21.3 classroom reminder follow-ups
- Date: 2026-09-05T21:41:06+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `d0454b5343f67147736ff4565d83bcd987f21b24`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `M	release/ykt-helper-1213.user.js`
  - `D	release/ykt-helper-1214.user.js`
  - `D	release/ykt-helper-1215.user.js`
  - `D	release/ykt-helper-1216.user.js`
  - `M	ykt-helper/debug/index.html`
  - `M	ykt-helper/flat/readme.md`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/core/env.js`
  - `M	ykt-helper/src/core/publish-events.js`
  - `A	ykt-helper/src/core/realtime-dispatch.js`
  - `A	ykt-helper/src/core/reminder-preferences.js`
  - `A	ykt-helper/src/core/runtime-mode.js`
  - `M	ykt-helper/src/core/screen-wake-lock.js`
  - `A	ykt-helper/src/core/settings-form.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/index.js`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/state/publish-reminder.js`
  - `A	ykt-helper/src/ui/mobile-reminder-panel.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/ui-api.js`
  - `A	ykt-helper/test/env-notify.test.js`
  - `M	ykt-helper/test/publish-events.test.js`
  - `M	ykt-helper/test/publish-reminder.test.js`
  - `A	ykt-helper/test/realtime-dispatch.test.js`
  - `A	ykt-helper/test/reminder-preferences.test.js`
  - `A	ykt-helper/test/runtime-mode.test.js`
  - `M	ykt-helper/test/screen-wake-lock.test.js`
  - `A	ykt-helper/test/settings-form.test.js`
  - `M	ykt-helper/test/userscript-entry-match.test.js`
  - `M	ykt-helper/userscript.meta.js`

### `d0454b5343f67147736ff4565d83bcd987f21b24` — release: publish 1.21.6
- Date: 2026-09-05T10:47:59+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `815bf4cde194ae3b9c042e8ba19263bf38031802`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	release/ykt-helper-1216.user.js`
  - `M	ykt-helper/debug/index.html`
  - `M	ykt-helper/flat/readme.md`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/userscript.meta.js`

### `815bf4cde194ae3b9c042e8ba19263bf38031802` — fix: ignore courseware display events
- Date: 2026-09-05T10:46:29+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `a29600b2ccf3d55e089c1d970bf949d1a8e4d969`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	ykt-helper/src/core/publish-events.js`
  - `M	ykt-helper/test/publish-events.test.js`

### `a29600b2ccf3d55e089c1d970bf949d1a8e4d969` — release: publish 1.21.5
- Date: 2026-09-03T11:36:32+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `cff76014915183f6a01b57a4e3452f3cc6391ea2`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	release/ykt-helper-1215.user.js`
  - `M	ykt-helper/debug/index.html`
  - `M	ykt-helper/flat/readme.md`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/userscript.meta.js`

### `cff76014915183f6a01b57a4e3452f3cc6391ea2` — feat: expose classroom wake lock setting
- Date: 2026-09-03T11:35:03+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `ec365437c1f599a33745c2ccd2278f1d1c2c6a64`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`

### `ec365437c1f599a33745c2ccd2278f1d1c2c6a64` — feat: add classroom screen wake lock core
- Date: 2026-09-03T11:34:14+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `9e676b1ddc69763de39e4e6d518260d6c6f03e0c`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `A	ykt-helper/src/core/screen-wake-lock.js`
  - `A	ykt-helper/test/screen-wake-lock.test.js`

### `9e676b1ddc69763de39e4e6d518260d6c6f03e0c` — feat: add configurable publish reminders
- Date: 2026-09-03T11:33:44+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `89cee237fb4d2d039f22d63c6351b00cc0ba4202`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `A	ykt-helper/src/core/publish-events.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/src/state/actions.js`
  - `A	ykt-helper/src/state/publish-reminder.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/ui-api.js`
  - `A	ykt-helper/test/publish-events.test.js`
  - `A	ykt-helper/test/publish-reminder.test.js`

### `89cee237fb4d2d039f22d63c6351b00cc0ba4202` — fix: inject on root classroom URLs
- Date: 2026-09-02T13:17:59+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `db8732d5f9c9b998bcf728241b44308d39eff50d`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	release/ykt-helper-1214.user.js`
  - `M	ykt-helper/debug/index.html`
  - `M	ykt-helper/flat/readme.md`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `A	ykt-helper/test/userscript-entry-match.test.js`
  - `M	ykt-helper/userscript.meta.js`

### `db8732d5f9c9b998bcf728241b44308d39eff50d` — docs: synchronize 1.21.3 release
- Date: 2026-09-02T12:19:46+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `28a3b02c6cbdb98bbe33a064bdd25a5c67838776`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `M	release/ykt-helper-1213.user.js`
  - `M	ykt-helper/debug/index.html`
  - `M	ykt-helper/flat/readme.md`
  - `M	ykt-helper/package.json`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ui/panels/tutorial.html`

### `28a3b02c6cbdb98bbe33a064bdd25a5c67838776` — feat: add per-profile temperature settings
- Date: 2026-09-02T12:04:28+08:00
- Author: Jun Zhu <172104042+Frank-678@users.noreply.github.com>
- Parents: `98b70e022746c72046b9e679dcb7d03304d71e04`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `A	release/ykt-helper-1213.user.js`
  - `M	ykt-helper/package.json`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ai/openai.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `A	ykt-helper/test/profile-temperature.test.js`
  - `M	ykt-helper/userscript.meta.js`

### `ab0268b8e223af59e76944b2f4d10774df9480b3` — feat: add websocket viewer
- Date: 2026-08-30T23:53:10+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `67de0d58ed132711b2bd68245915677e2dbc71f2`
- Branches: `feat/dev3.0`
- Files:
  - `M	ykt-helper-win/README.md`
  - `M	ykt-helper-win/apps/desktop/main/browser-controller.ts`
  - `A	ykt-helper-win/apps/desktop/main/electron-network-observer.ts`
  - `M	ykt-helper-win/apps/desktop/main/index.ts`
  - `A	ykt-helper-win/apps/desktop/main/network-lab-controller.ts`
  - `M	ykt-helper-win/apps/desktop/package.json`
  - `M	ykt-helper-win/apps/desktop/preload/index.ts`
  - `M	ykt-helper-win/apps/desktop/renderer/src/App.vue`
  - `A	ykt-helper-win/apps/desktop/renderer/src/components/NetworkLab.vue`
  - `M	ykt-helper-win/apps/desktop/renderer/src/style.css`
  - `M	ykt-helper-win/eslint.config.js`
  - `M	ykt-helper-win/package-lock.json`
  - `M	ykt-helper-win/package.json`
  - `M	ykt-helper-win/packages/contracts/src/index.ts`
  - `M	ykt-helper-win/packages/contracts/src/ipc.ts`
  - `A	ykt-helper-win/packages/contracts/src/network.ts`
  - `A	ykt-helper-win/packages/routing/src/fixture.ts`
  - `M	ykt-helper-win/packages/routing/src/index.ts`
  - `A	ykt-helper-win/packages/routing/src/normalizer.ts`
  - `A	ykt-helper-win/packages/routing/src/recorder.ts`
  - `A	ykt-helper-win/packages/routing/src/redactor.ts`
  - `M	ykt-helper-win/scripts/check-boundaries.mjs`
  - `A	ykt-helper-win/scripts/replay-fixture.mjs`
  - `A	ykt-helper-win/tests/contract/network-lab.test.ts`
  - `A	ykt-helper-win/tests/fixtures/network-sample.json`

### `67de0d58ed132711b2bd68245915677e2dbc71f2` — feat: add ui
- Date: 2026-08-30T22:46:39+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `16679e68d3d22a4760272c1a3175fbd5d211eca5`
- Branches: `feat/dev3.0`
- Files:
  - `M	ykt-helper-win/README.md`
  - `A	ykt-helper-win/apps/desktop/main/browser-controller.ts`
  - `A	ykt-helper-win/apps/desktop/main/browser-policy.ts`
  - `M	ykt-helper-win/apps/desktop/main/index.ts`
  - `M	ykt-helper-win/apps/desktop/preload/index.ts`
  - `M	ykt-helper-win/apps/desktop/renderer/src/App.vue`
  - `M	ykt-helper-win/apps/desktop/renderer/src/style.css`
  - `A	ykt-helper-win/packages/contracts/src/browser.ts`
  - `M	ykt-helper-win/packages/contracts/src/index.ts`
  - `M	ykt-helper-win/packages/contracts/src/ipc.ts`
  - `A	ykt-helper-win/tests/contract/browser-policy.test.ts`

### `16679e68d3d22a4760272c1a3175fbd5d211eca5` — feat: add yuketang-win base framework
- Date: 2026-08-30T22:27:35+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `e9a1de8787e9860b23b522de4a74851acc212a83`
- Branches: `feat/dev3.0`
- Files:
  - `A	ykt-helper-win/.gitignore`
  - `A	ykt-helper-win/.prettierignore`
  - `A	ykt-helper-win/.prettierrc.json`
  - `A	ykt-helper-win/README.md`
  - `A	ykt-helper-win/apps/cli/package.json`
  - `A	ykt-helper-win/apps/cli/src/index.ts`
  - `A	ykt-helper-win/apps/cli/tsconfig.json`
  - `A	ykt-helper-win/apps/desktop/main/index.ts`
  - `A	ykt-helper-win/apps/desktop/package.json`
  - `A	ykt-helper-win/apps/desktop/preload/index.ts`
  - `A	ykt-helper-win/apps/desktop/renderer/env.d.ts`
  - `A	ykt-helper-win/apps/desktop/renderer/index.html`
  - `A	ykt-helper-win/apps/desktop/renderer/src/App.vue`
  - `A	ykt-helper-win/apps/desktop/renderer/src/main.ts`
  - `A	ykt-helper-win/apps/desktop/renderer/src/style.css`
  - `A	ykt-helper-win/apps/desktop/tsconfig.node.json`
  - `A	ykt-helper-win/apps/desktop/tsconfig.renderer.json`
  - `A	ykt-helper-win/apps/desktop/vite.config.ts`
  - `A	ykt-helper-win/coding_plan.md`
  - `A	ykt-helper-win/docs/adr/0001-framework.md`
  - `A	ykt-helper-win/docs/adr/0002-process-model.md`
  - `A	ykt-helper-win/docs/adr/0003-auth-storage.md`
  - `A	ykt-helper-win/docs/adr/0004-ipc-permissions.md`
  - `A	ykt-helper-win/docs/adr/0005-logging.md`
  - `A	ykt-helper-win/eslint.config.js`
  - `A	ykt-helper-win/package-lock.json`
  - `A	ykt-helper-win/package.json`
  - `A	ykt-helper-win/packages/backend/package.json`
  - `A	ykt-helper-win/packages/backend/src/index.ts`
  - `A	ykt-helper-win/packages/backend/src/runtime.test.ts`
  - `A	ykt-helper-win/packages/backend/src/runtime.ts`
  - `A	ykt-helper-win/packages/backend/tsconfig.json`
  - `A	ykt-helper-win/packages/contracts/package.json`
  - `A	ykt-helper-win/packages/contracts/src/dto.ts`
  - `A	ykt-helper-win/packages/contracts/src/errors.ts`
  - `A	ykt-helper-win/packages/contracts/src/events.ts`
  - `A	ykt-helper-win/packages/contracts/src/facade.ts`
  - `A	ykt-helper-win/packages/contracts/src/index.ts`
  - `A	ykt-helper-win/packages/contracts/src/ipc.ts`
  - `A	ykt-helper-win/packages/contracts/tsconfig.json`
  - `A	ykt-helper-win/packages/routing/package.json`
  - `A	ykt-helper-win/packages/routing/src/index.ts`
  - `A	ykt-helper-win/packages/routing/tsconfig.json`
  - `A	ykt-helper-win/packages/storage/package.json`
  - `A	ykt-helper-win/packages/storage/src/index.ts`
  - `A	ykt-helper-win/packages/storage/tsconfig.json`
  - `A	ykt-helper-win/scripts/check-boundaries.mjs`
  - `A	ykt-helper-win/tests/contract/facade.contract.test.ts`
  - `A	ykt-helper-win/tsconfig.base.json`
  - `A	ykt-helper-win/vitest.config.ts`

### `e9a1de8787e9860b23b522de4a74851acc212a83` — fix: remove outdated code
- Date: 2026-08-30T21:32:48+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `98b70e022746c72046b9e679dcb7d03304d71e04`
- Branches: `feat/dev3.0`
- Files:
  - `M	README.md`
  - `D	ykt-helper-allinone/old/README-vite.md`
  - `D	ykt-helper-allinone/old/jsconfig.json`
  - `D	ykt-helper-allinone/old/package.json`
  - `D	ykt-helper-allinone/old/src/App.vue`
  - `D	ykt-helper-allinone/old/src/api.js`
  - `D	ykt-helper-allinone/old/src/components/ActiveProblem.vue`
  - `D	ykt-helper-allinone/old/src/components/problem-ui/AnswerReveal.vue`
  - `D	ykt-helper-allinone/old/src/components/problem-ui/PresentationView.vue`
  - `D	ykt-helper-allinone/old/src/components/problem-ui/ProblemUI.vue`
  - `D	ykt-helper-allinone/old/src/components/problem-ui/ProblemView.vue`
  - `D	ykt-helper-allinone/old/src/main.js`
  - `D	ykt-helper-allinone/old/src/network.js`
  - `D	ykt-helper-allinone/old/src/storage.js`
  - `D	ykt-helper-allinone/old/src/style.css`
  - `D	ykt-helper-allinone/old/src/util.js`
  - `D	ykt-helper-allinone/old/src/vite-env.d.ts`
  - `D	ykt-helper-allinone/old/vite.config.js`
  - `D	ykt-helper-allinone/old/yarn.lock`
  - `D	ykt-helper-allinone/old/ykt-helper-1167.user.js`
  - `D	ykt-helper-allinone/old/ykt-helper-1168.user.js`
  - `D	ykt-helper-allinone/old/ykt-helper-1170.user.js`
  - `D	ykt-helper-allinone/old/ykt-helper-1171.user.js`
  - `D	ykt-helper-allinone/old/ykt-helper-1172.user.js`
  - `D	ykt-helper-allinone/old/ykt-helper-1180.user.js`
  - `D	ykt-helper-allinone/old/ykt-helper-1181.user.js`
  - `D	ykt-helper-allinone/old/ykt-helper-1182.user.js`
  - `D	ykt-helper-allinone/old/ykt-helper-1183.user.js`
  - `D	ykt-helper-allinone/old/yuketang-helper-old.js`
  - `D	ykt-helper/flat/.npmrc`
  - `D	ykt-helper/flat/actions.js`
  - `D	ykt-helper/flat/active-problems.html`
  - `D	ykt-helper/flat/active-problems.js`
  - `D	ykt-helper/flat/ai-format.js`
  - `D	ykt-helper/flat/ai.html`
  - `D	ykt-helper/flat/ai.js`
  - `D	ykt-helper/flat/answer.js`
  - `D	ykt-helper/flat/auto-answer-popup.js`
  - `D	ykt-helper/flat/deepseek.js`
  - `D	ykt-helper/flat/env.js`
  - `D	ykt-helper/flat/gpt.ts`
  - `D	ykt-helper/flat/index.js`
  - `D	ykt-helper/flat/kimi.js`
  - `D	ykt-helper/flat/package-lock.json`
  - `D	ykt-helper/flat/package.json`
  - `D	ykt-helper/flat/presentation.html`
  - `D	ykt-helper/flat/presentation.js`
  - `D	ykt-helper/flat/problem-list.html`
  - `D	ykt-helper/flat/problem-list.js`
  - `D	ykt-helper/flat/readme.md`
  - `D	ykt-helper/flat/repo.js`
  - `D	ykt-helper/flat/rollup.config.mjs`
  - `D	ykt-helper/flat/screenshoot.js`
  - `D	ykt-helper/flat/settings.html`
  - `D	ykt-helper/flat/settings.js`
  - `D	ykt-helper/flat/storage.js`
  - `D	ykt-helper/flat/styles.css`
  - `D	ykt-helper/flat/styles.js`
  - `D	ykt-helper/flat/toast.js`
  - `D	ykt-helper/flat/toolbar.js`
  - `D	ykt-helper/flat/tutorial.html`
  - `D	ykt-helper/flat/tutorial.js`
  - `D	ykt-helper/flat/types.js`
  - `D	ykt-helper/flat/ui-api.js`
  - `D	ykt-helper/flat/userscript.meta.js`
  - `D	ykt-helper/flat/ws-interceptor.js`
  - `D	ykt-helper/flat/xhr-interceptor.js`

### `98b70e022746c72046b9e679dcb7d03304d71e04` — Merge remote-tracking branch 'origin/main'
- Date: 2026-08-30T21:03:51+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: `9c869e119b721ae9dd8dd5d11ec7aebfefb6f9c7`, `465f86c76f1b3b3c1d920fabda1d7abbc6f443b2`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	release/ykt-helper-1212.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/userscript.meta.js`
  - `M	todolist.md`
  - `A	ykt-helper/debug/index.html`
  - `A	ykt-helper/debug/mock-data.js`
  - `A	ykt-helper/debug/mock-gm.js`
  - `M	ykt-helper/readme.md`

### `465f86c76f1b3b3c1d920fabda1d7abbc6f443b2` — Merge pull request #26 from Frank-678/main
- Date: 2026-05-22T10:11:54+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `0936098fc9d2742a1d0fe3371a9ec84ab6e64fcd`, `7c896aeb2d7ba8f7aca7500a477d6015812ec8df`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	changelog.md`
  - `A	release/ykt-helper-1212.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/userscript.meta.js`

### `7c896aeb2d7ba8f7aca7500a477d6015812ec8df` — 1.21.2: 动态适配所有雨课堂服务器网页
- Date: 2026-05-22T01:57:31Z
- Author: Frank <172104042+Frank-678@users.noreply.github.com>
- Parents: `f8593277184f96e3e86f068a45b8ae486fa072df`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	release/ykt-helper-1212.user.js`

### `f8593277184f96e3e86f068a45b8ae486fa072df` — 1.21.2: 动态适配所有雨课堂服务器网页
- Date: 2026-05-22T09:35:30+08:00
- Author: Frank <172104042+Frank-678@users.noreply.github.com>
- Parents: `92a1c36999fb30670240ebcaccfb5949518f3872`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	ykt-helper/rollup.config.mjs`

### `92a1c36999fb30670240ebcaccfb5949518f3872` — 1.21.2: 动态适配所有雨课堂服务器网页
- Date: 2026-05-22T09:34:23+08:00
- Author: Frank <172104042+Frank-678@users.noreply.github.com>
- Parents: `969a311526355f1a60a85332535965144d7f57ed`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	ykt-helper/userscript.meta.js`

### `969a311526355f1a60a85332535965144d7f57ed` — 1.21.2: 动态适配所有雨课堂服务器网页
- Date: 2026-05-22T09:32:56+08:00
- Author: Frank <172104042+Frank-678@users.noreply.github.com>
- Parents: `06383692e5221236fc919ed1f51fc863fa9f1846`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	ykt-helper/src/net/ws-interceptor.js`

### `06383692e5221236fc919ed1f51fc863fa9f1846` — 1.21.2: 动态适配所有雨课堂服务器网页
- Date: 2026-05-21T10:35:06+08:00
- Author: Frank <172104042+Frank-678@users.noreply.github.com>
- Parents: `56d465471dda9f830a5c4e2a465f8d76300e3f33`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	changelog.md`

### `56d465471dda9f830a5c4e2a465f8d76300e3f33` — 1.21.2: 动态适配当前域名
- Date: 2026-05-21T10:33:17+08:00
- Author: Frank <172104042+Frank-678@users.noreply.github.com>
- Parents: `7614c6c3059b6396af53e30e701f2ad12f49a312`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	release/ykt-helper-1212.user.js`

### `7614c6c3059b6396af53e30e701f2ad12f49a312` — 动态适配当前域名
- Date: 2026-05-21T10:30:45+08:00
- Author: Frank <172104042+Frank-678@users.noreply.github.com>
- Parents: `0936098fc9d2742a1d0fe3371a9ec84ab6e64fcd`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `A	release/ykt-helper-1212.user.js`

### `0936098fc9d2742a1d0fe3371a9ec84ab6e64fcd` — update readme
- Date: 2026-05-14T09:30:04+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `c8f8ae4bf91a03b852cb73643c2899e15117d291`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`
- Files:
  - `M	README.md`

### `9c869e119b721ae9dd8dd5d11ec7aebfefb6f9c7` — feat: 新增前端调试的脚本
- Date: 2026-05-13T13:10:37+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: `c8f8ae4bf91a03b852cb73643c2899e15117d291`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	todolist.md`
  - `A	ykt-helper/debug/index.html`
  - `A	ykt-helper/debug/mock-data.js`
  - `A	ykt-helper/debug/mock-gm.js`
  - `M	ykt-helper/readme.md`

### `c8f8ae4bf91a03b852cb73643c2899e15117d291` — Merge pull request #25 from ZaytsevZY/dev-2.0
- Date: 2026-03-19T08:59:39+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `ad0f04f8de62beac128818ef42a5e863b74fa89b`, `799f26a4f11b18a9cd799a7e0a80a2c8d9b06022`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	release/ykt-helper-1211.user.js`
  - `M	ykt-helper/src/ui/panels/active-problems.js`
  - `M	ykt-helper/src/ui/ui-api.js`

### `799f26a4f11b18a9cd799a7e0a80a2c8d9b06022` — 1.21.1: 修改UIbug
- Date: 2026-03-19T08:57:56+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `90586654087a68a8468f1b4fa1e6d3069407778f`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	release/ykt-helper-1211.user.js`
  - `M	ykt-helper/src/ui/ui-api.js`

### `90586654087a68a8468f1b4fa1e6d3069407778f` — revert active-problems to 1.20.2
- Date: 2026-03-19T08:48:44+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `2ebe3b4d4acf9257aacbe9d09659d3e915d740ef`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	release/ykt-helper-1211.user.js`
  - `M	ykt-helper/src/ui/panels/active-problems.js`

### `ad0f04f8de62beac128818ef42a5e863b74fa89b` — Merge pull request #24 from ZaytsevZY/dev-2.0
- Date: 2026-03-12T09:31:34+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `af2ede1be19282a051556ea58d53f47ab1a1771e`, `2ebe3b4d4acf9257aacbe9d09659d3e915d740ef`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	release/ykt-helper-1211.user.js`
  - `A	static/tr.png`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ai/openai.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/ui/panels/presentation.html`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/styles.css`
  - `M	ykt-helper/src/ui/ui-api.js`
  - `M	ykt-helper/userscript.meta.js`

### `2ebe3b4d4acf9257aacbe9d09659d3e915d740ef` — 1.21.1: 课件内容翻译
- Date: 2026-03-12T09:29:45+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `21afa49db2277eba4983b60c3501f36ccdf2cea3`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	release/ykt-helper-1211.user.js`
  - `A	static/tr.png`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ai/openai.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/ui/panels/presentation.html`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/styles.css`
  - `M	ykt-helper/src/ui/ui-api.js`
  - `M	ykt-helper/userscript.meta.js`

### `af2ede1be19282a051556ea58d53f47ab1a1771e` — Merge pull request #23 from ZaytsevZY/dev-2.0
- Date: 2026-03-10T15:47:53+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `2347df8c1e086b617806b6c6c2f4784d6bde0bbf`, `21afa49db2277eba4983b60c3501f36ccdf2cea3`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `M	release/ykt-helper-1203.user.js`
  - `A	release/ykt-helper-1210.user.js`
  - `A	static/ocr.png`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ai/openai.js`
  - `M	ykt-helper/src/capture/screenshoot.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/ui/panels/active-problems.js`
  - `M	ykt-helper/src/ui/panels/presentation.html`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/styles.css`
  - `M	ykt-helper/src/ui/ui-api.js`
  - `M	ykt-helper/userscript.meta.js`

### `21afa49db2277eba4983b60c3501f36ccdf2cea3` — 1.21.0: 课件OCR
- Date: 2026-03-10T15:45:58+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `477d67fe521911a938beeecbdc82a0a9f444d1f0`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	release/ykt-helper-1210.user.js`
  - `A	static/ocr.png`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ai/openai.js`
  - `M	ykt-helper/src/capture/screenshoot.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/ui/panels/presentation.html`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/styles.css`
  - `M	ykt-helper/src/ui/ui-api.js`
  - `M	ykt-helper/userscript.meta.js`

### `477d67fe521911a938beeecbdc82a0a9f444d1f0` — 1.20.3: 题目提醒消息可关闭
- Date: 2026-03-06T14:06:41+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `d3d4fa2300c4589a4bb32db57358526a92618bea`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	release/ykt-helper-1203.user.js`
  - `M	ykt-helper/src/ui/panels/active-problems.js`
  - `M	ykt-helper/src/ui/styles.css`

### `2347df8c1e086b617806b6c6c2f4784d6bde0bbf` — Merge pull request #22 from ZaytsevZY/dev-2.0
- Date: 2026-03-03T15:35:49+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `9508179ac2cd840fddada824ae426962bc2a2125`, `d3d4fa2300c4589a4bb32db57358526a92618bea`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	release/ykt-helper-1203.user.js`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/styles.css`

### `d3d4fa2300c4589a4bb32db57358526a92618bea` — 1.20.3: 题干预览可关闭
- Date: 2026-03-03T15:33:36+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `0230cb89497b57ab09ae85f3c3228ee3d7b3d93c`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	release/ykt-helper-1203.user.js`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/styles.css`

### `9508179ac2cd840fddada824ae426962bc2a2125` — Merge pull request #21 from ZaytsevZY/dev-2.0
- Date: 2026-02-28T16:05:51+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `25d5cb26e2f7745d38229e56fa567d96a76199cd`, `0230cb89497b57ab09ae85f3c3228ee3d7b3d93c`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	release/ykt-helper-1203.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/userscript.meta.js`

### `0230cb89497b57ab09ae85f3c3228ee3d7b3d93c` — 1.20.3: 修复图片显示和下载
- Date: 2026-02-28T16:03:57+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `7d0332730b27214f0163327bcba77b7f87a695ad`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	release/ykt-helper-1203.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/userscript.meta.js`

### `25d5cb26e2f7745d38229e56fa567d96a76199cd` — Merge pull request #20 from ZaytsevZY/dev-2.0
- Date: 2025-12-25T10:46:03+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `0319eebb7ec0a4fe67844665c229667140ad6196`, `7d0332730b27214f0163327bcba77b7f87a695ad`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `M	release/ykt-helper-1202.user.js`
  - `M	ykt-helper/src/ai/openai.js`
  - `M	ykt-helper/src/index.js`
  - `M	ykt-helper/src/tsm/ai-format.js`
  - `M	ykt-helper/src/ui/panels/ai.js`

### `7d0332730b27214f0163327bcba77b7f87a695ad` — 1.20.2: 更新readme
- Date: 2025-12-25T10:44:01+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `437612b4a09d90a9da07200b139fbef5651820cf`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`

### `437612b4a09d90a9da07200b139fbef5651820cf` — 1.20.2: 修复题目类型解析和答案解析问题
- Date: 2025-12-24T10:48:02+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `11ecd06df49b2d1a0b24262b01b9159e9842fd06`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	changelog.md`
  - `M	release/ykt-helper-1202.user.js`
  - `M	ykt-helper/src/ai/openai.js`
  - `M	ykt-helper/src/tsm/ai-format.js`
  - `M	ykt-helper/src/ui/panels/ai.js`

### `11ecd06df49b2d1a0b24262b01b9159e9842fd06` — 1.20.2: 修改触发参数
- Date: 2025-12-23T16:22:00+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `234a341dc5f9a03d3e8d06888e6c501448e66647`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	release/ykt-helper-1202.user.js`
  - `M	ykt-helper/src/index.js`

### `0319eebb7ec0a4fe67844665c229667140ad6196` — Merge pull request #19 from ZaytsevZY/dev-2.0
- Date: 2025-12-23T15:43:50+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `0b60a7eee34d87adb98a495fcfd5fd0f2bbd97c9`, `234a341dc5f9a03d3e8d06888e6c501448e66647`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `M	release/ykt-helper-1202.user.js`
  - `M	ykt-helper/src/index.js`

### `234a341dc5f9a03d3e8d06888e6c501448e66647` — 1.20.2: 修复自动刷新问题
- Date: 2025-12-23T15:40:50+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `ad9984d2f53ed92f7245628c60f4cf8bef496493`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `M	release/ykt-helper-1202.user.js`
  - `M	ykt-helper/src/index.js`

### `0b60a7eee34d87adb98a495fcfd5fd0f2bbd97c9` — Merge pull request #17 from ZaytsevZY/dev-2.0
- Date: 2025-12-18T15:02:48+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `212d3b8fdad1adf78216718850e0bf3b323cb4b6`, `ad9984d2f53ed92f7245628c60f4cf8bef496493`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `A	release/ykt-helper-1202.user.js`
  - `A	static/agent.png`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ai/openai.js`
  - `M	ykt-helper/src/index.js`
  - `M	ykt-helper/src/ui/panels/ai.html`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/presentation.html`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/userscript.meta.js`

### `ad9984d2f53ed92f7245628c60f4cf8bef496493` — 1.20.2: 后台挂载时自动刷新页面
- Date: 2025-12-17T15:52:59+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `60a8e7c892f3b6a5ff5768705beee9e8f8d1a2f2`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	release/ykt-helper-1202.user.js`
  - `M	ykt-helper/src/index.js`

### `60a8e7c892f3b6a5ff5768705beee9e8f8d1a2f2` — 1.20.2: 输入多张图片
- Date: 2025-12-16T15:51:27+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `9870f7a547aae6e61f291f1800cbfc11b9639657`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `A	release/ykt-helper-1202.user.js`
  - `A	static/agent.png`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ai/openai.js`
  - `M	ykt-helper/src/ui/panels/ai.html`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/presentation.html`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/userscript.meta.js`

### `212d3b8fdad1adf78216718850e0bf3b323cb4b6` — Merge pull request #16 from ZaytsevZY/dev-2.0
- Date: 2025-12-10T10:24:20+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `6639de926df21a41461a7d80e0c8ae7f08fd9be9`, `9870f7a547aae6e61f291f1800cbfc11b9639657`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	release/ykt-helper-1201.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ai/openai.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/userscript.meta.js`

### `9870f7a547aae6e61f291f1800cbfc11b9639657` — 1.21.1: 更新文档，增加说明
- Date: 2025-12-10T10:23:18+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `3a9f30113790ffa52abb2bffddda9c0aa9691d37`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	release/ykt-helper-1201.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ai/openai.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/userscript.meta.js`

### `3a9f30113790ffa52abb2bffddda9c0aa9691d37` — 1.21.1: 测试两步解题工作流
- Date: 2025-12-09T17:26:49+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `04d63f8014a0feb2d99b895800cedb23a3fc61ff`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	ykt-helper/src/ai/openai.js`

### `6639de926df21a41461a7d80e0c8ae7f08fd9be9` — Merge pull request #15 from ZaytsevZY/dev-2.0
- Date: 2025-12-03T20:16:44+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `cde7b0943c61a6fd28702b86a04789732e4bee4f`, `04d63f8014a0feb2d99b895800cedb23a3fc61ff`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	release/ykt-helper-1200.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ai/openai.js`
  - `M	ykt-helper/src/capture/screenshoot.js`
  - `M	ykt-helper/src/core/env.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/core/vuex-helper.js`
  - `M	ykt-helper/src/index.js`
  - `M	ykt-helper/src/net/fetch-interceptor.js`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/src/net/xhr-interceptor.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/state/repo.js`
  - `M	ykt-helper/src/tsm/ai-format.js`
  - `M	ykt-helper/src/tsm/answer.js`
  - `M	ykt-helper/src/ui/panels/active-problems.js`
  - `M	ykt-helper/src/ui/panels/ai.html`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/auto-answer-popup.js`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/panels/problem-list.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/panels/tutorial.js`
  - `M	ykt-helper/src/ui/styles.css`
  - `M	ykt-helper/src/ui/toolbar.js`
  - `M	ykt-helper/src/ui/ui-api.js`

### `04d63f8014a0feb2d99b895800cedb23a3fc61ff` — 1.20.0: 修改readme
- Date: 2025-12-03T19:57:21+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `faa58c0f8d6ee7281ea919640fffc2468164c3b1`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`

### `faa58c0f8d6ee7281ea919640fffc2468164c3b1` — 1.20.0: 整理代码
- Date: 2025-11-26T18:42:58+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `7ec3e9cd2970e31dd1891d8a0cac7049fb331e43`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	release/ykt-helper-1200.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ai/openai.js`
  - `M	ykt-helper/src/capture/screenshoot.js`
  - `M	ykt-helper/src/core/env.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/core/vuex-helper.js`
  - `M	ykt-helper/src/index.js`
  - `M	ykt-helper/src/net/fetch-interceptor.js`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/src/net/xhr-interceptor.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/state/repo.js`
  - `M	ykt-helper/src/tsm/ai-format.js`
  - `M	ykt-helper/src/tsm/answer.js`
  - `M	ykt-helper/src/ui/panels/active-problems.js`
  - `M	ykt-helper/src/ui/panels/ai.html`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/auto-answer-popup.js`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/panels/problem-list.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/panels/tutorial.js`
  - `M	ykt-helper/src/ui/styles.css`
  - `M	ykt-helper/src/ui/toolbar.js`
  - `M	ykt-helper/src/ui/ui-api.js`

### `cde7b0943c61a6fd28702b86a04789732e4bee4f` — 1.20.0: 增加更多VLM支持
- Date: 2025-11-25T16:56:14+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `3dd9fa2e6493d7634545567dcf8876f5c98fc2b3`, `7ec3e9cd2970e31dd1891d8a0cac7049fb331e43`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	release/ykt-helper-1200.user.js`
  - `A	static/7.png`
  - `M	ykt-helper/rollup.config.mjs`
  - `D	ykt-helper/src/ai/gpt.ts`
  - `A	ykt-helper/src/ai/openai.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/src/net/xhr-interceptor.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/tsm/answer.js`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/problem-list.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/userscript.meta.js`

### `7ec3e9cd2970e31dd1891d8a0cac7049fb331e43` — 1.20.0: 修复文件
- Date: 2025-11-25T16:54:08+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `89061234c2cd8133709776a876defaa63fc60db6`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	release/ykt-helper-1200.user.js`

### `89061234c2cd8133709776a876defaa63fc60db6` — 1.20.0: 增加更多VLM支持
- Date: 2025-11-25T16:53:17+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `237f5e4893f551f4e3b4c6e96d36941fb55858d6`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `M	release/ykt-helper-1200.user.js`
  - `A	static/7.png`
  - `M	ykt-helper/src/tsm/answer.js`
  - `M	ykt-helper/src/ui/panels/problem-list.js`
  - `M	ykt-helper/src/ui/panels/settings.html`

### `237f5e4893f551f4e3b4c6e96d36941fb55858d6` — 1.20.0: 为长江雨课堂添加识别头（#13）
- Date: 2025-11-24T20:09:21+08:00
- Author: alanchuang22-dev <2584829494@qq.com>
- Parents: `bc435c4d784300a7c2c0177f0a6e387ce662311b`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/src/net/xhr-interceptor.js`
  - `M	ykt-helper/userscript.meta.js`

### `bc435c4d784300a7c2c0177f0a6e387ce662311b` — 1.20.0: 预留更新VLM接口
- Date: 2025-11-24T18:44:30+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `31a6c36632bb28fed5d684f350b96b6219e2c2c0`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `A	release/ykt-helper-1200.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `D	ykt-helper/src/ai/gpt.ts`
  - `A	ykt-helper/src/ai/openai.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/userscript.meta.js`

### `3dd9fa2e6493d7634545567dcf8876f5c98fc2b3` — Merge pull request #12 from ZaytsevZY/dev-2.0
- Date: 2025-11-13T19:45:25+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `f7b952e262e9b738564634b1b1c9daab2860e225`, `31a6c36632bb28fed5d684f350b96b6219e2c2c0`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	release/ykt-helper-1192.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/core/vuex-helper.js`
  - `M	ykt-helper/src/net/fetch-interceptor.js`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/src/net/xhr-interceptor.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/tsm/ai-format.js`
  - `M	ykt-helper/src/tsm/answer.js`
  - `M	ykt-helper/src/ui/panels/active-problems.js`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/panels/problem-list.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/styles.css`
  - `M	ykt-helper/userscript.meta.js`

### `31a6c36632bb28fed5d684f350b96b6219e2c2c0` — 1.19.2: 优化了ppt的获取方式
- Date: 2025-11-13T19:41:35+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `063dacc231517877ade8c322d1d890d94cc92076`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `M	release/ykt-helper-1192.user.js`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/styles.css`

### `063dacc231517877ade8c322d1d890d94cc92076` — 1.19.2: 更改日志格式
- Date: 2025-11-12T19:58:10+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `dabf87dd802509fe58482218c5ddf2296c4ff033`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	release/ykt-helper-1192.user.js`
  - `M	ykt-helper/src/core/vuex-helper.js`
  - `M	ykt-helper/src/net/fetch-interceptor.js`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/src/net/xhr-interceptor.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/tsm/ai-format.js`
  - `M	ykt-helper/src/tsm/answer.js`
  - `M	ykt-helper/src/ui/panels/active-problems.js`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/panels/problem-list.js`
  - `M	ykt-helper/userscript.meta.js`

### `dabf87dd802509fe58482218c5ddf2296c4ff033` — 1.19.2: 更改补交逻辑
- Date: 2025-11-11T18:37:55+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `d1f8f4c1d2876d91f1c63eff880637197e1eb606`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `A	release/ykt-helper-1192.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/tsm/answer.js`
  - `M	ykt-helper/src/ui/panels/problem-list.js`
  - `M	ykt-helper/userscript.meta.js`

### `f7b952e262e9b738564634b1b1c9daab2860e225` — 1.19.1: 修复一些bug，更新了文件结构
- Date: 2025-11-04T16:23:41+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `595d4100d4edcff5de5fd633ecb150d9f543fc3d`, `d1f8f4c1d2876d91f1c63eff880637197e1eb606`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `D	flat/.npmrc`
  - `D	flat/actions.js`
  - `D	flat/active-problems.html`
  - `D	flat/active-problems.js`
  - `D	flat/ai-format.js`
  - `D	flat/ai.html`
  - `D	flat/ai.js`
  - `D	flat/answer.js`
  - `D	flat/auto-answer-popup.js`
  - `D	flat/deepseek.js`
  - `D	flat/env.js`
  - `D	flat/gpt.ts`
  - `D	flat/index.js`
  - `D	flat/kimi.js`
  - `D	flat/package-lock.json`
  - `D	flat/package.json`
  - `D	flat/presentation.html`
  - `D	flat/presentation.js`
  - `D	flat/problem-list.html`
  - `D	flat/problem-list.js`
  - `D	flat/readme.md`
  - `D	flat/repo.js`
  - `D	flat/rollup.config.mjs`
  - `D	flat/screenshoot.js`
  - `D	flat/settings.html`
  - `D	flat/settings.js`
  - `D	flat/storage.js`
  - `D	flat/styles.css`
  - `D	flat/styles.js`
  - `D	flat/toast.js`
  - `D	flat/toolbar.js`
  - `D	flat/tutorial.html`
  - `D	flat/tutorial.js`
  - `D	flat/types.js`
  - `D	flat/ui-api.js`
  - `D	flat/userscript.meta.js`
  - `D	flat/ws-interceptor.js`
  - `D	flat/xhr-interceptor.js`
  - `A	release/ykt-helper-1180.user.js`
  - `A	release/ykt-helper-1181.user.js`
  - `A	release/ykt-helper-1182.user.js`
  - `A	release/ykt-helper-1183.user.js`
  - `A	release/ykt-helper-1184.user.js`
  - `A	release/ykt-helper-1185.user.js`
  - `A	release/ykt-helper-1186.user.js`
  - `A	release/ykt-helper-1187.user.js`
  - `A	release/ykt-helper-1188.user.js`
  - `A	release/ykt-helper-1190.user.js`
  - `A	release/ykt-helper-1191.user.js`
  - `D	ykt-helper-1183.user.js`
  - `A	ykt-helper/flat/.npmrc`
  - `A	ykt-helper/flat/actions.js`
  - `A	ykt-helper/flat/active-problems.html`
  - `A	ykt-helper/flat/active-problems.js`
  - `A	ykt-helper/flat/ai-format.js`
  - `A	ykt-helper/flat/ai.html`
  - `A	ykt-helper/flat/ai.js`
  - `A	ykt-helper/flat/answer.js`
  - `A	ykt-helper/flat/auto-answer-popup.js`
  - `A	ykt-helper/flat/deepseek.js`
  - `A	ykt-helper/flat/env.js`
  - `A	ykt-helper/flat/gpt.ts`
  - `A	ykt-helper/flat/index.js`
  - `A	ykt-helper/flat/kimi.js`
  - `A	ykt-helper/flat/package-lock.json`
  - `A	ykt-helper/flat/package.json`
  - `A	ykt-helper/flat/presentation.html`
  - `A	ykt-helper/flat/presentation.js`
  - `A	ykt-helper/flat/problem-list.html`
  - `A	ykt-helper/flat/problem-list.js`
  - `A	ykt-helper/flat/readme.md`
  - `A	ykt-helper/flat/repo.js`
  - `A	ykt-helper/flat/rollup.config.mjs`
  - `A	ykt-helper/flat/screenshoot.js`
  - `A	ykt-helper/flat/settings.html`
  - `A	ykt-helper/flat/settings.js`
  - `A	ykt-helper/flat/storage.js`
  - `A	ykt-helper/flat/styles.css`
  - `A	ykt-helper/flat/styles.js`
  - `A	ykt-helper/flat/toast.js`
  - `A	ykt-helper/flat/toolbar.js`
  - `A	ykt-helper/flat/tutorial.html`
  - `A	ykt-helper/flat/tutorial.js`
  - `A	ykt-helper/flat/types.js`
  - `A	ykt-helper/flat/ui-api.js`
  - `A	ykt-helper/flat/userscript.meta.js`
  - `A	ykt-helper/flat/ws-interceptor.js`
  - `A	ykt-helper/flat/xhr-interceptor.js`
  - `D	ykt-helper/release/ykt-helper-1180.user.js`
  - `D	ykt-helper/release/ykt-helper-1181.user.js`
  - `D	ykt-helper/release/ykt-helper-1182.user.js`
  - `D	ykt-helper/release/ykt-helper-1183.user.js`
  - `D	ykt-helper/release/ykt-helper-1184.user.js`
  - `D	ykt-helper/release/ykt-helper-1185.user.js`
  - `D	ykt-helper/release/ykt-helper-1186.user.js`
  - `D	ykt-helper/release/ykt-helper-1187.user.js`
  - `D	ykt-helper/release/ykt-helper-1188.user.js`
  - `D	ykt-helper/release/ykt-helper-1190.user.js`
  - `D	ykt-helper/release/ykt-helper-1191.user.js`
  - `D	ykt-helper/release/ykt-helper.user.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/styles.css`
  - `M	ykt-helper/src/ui/ui-api.js`
  - `M	ykt-helper/userscript.meta.js`

### `d1f8f4c1d2876d91f1c63eff880637197e1eb606` — 1.19.1: 修复渲染bug，调整文件结构
- Date: 2025-11-04T16:21:22+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `bf42d8956f9022822ea211f50a9978c276cef67d`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `D	flat/.npmrc`
  - `D	flat/actions.js`
  - `D	flat/active-problems.html`
  - `D	flat/active-problems.js`
  - `D	flat/ai-format.js`
  - `D	flat/ai.html`
  - `D	flat/ai.js`
  - `D	flat/answer.js`
  - `D	flat/auto-answer-popup.js`
  - `D	flat/deepseek.js`
  - `D	flat/env.js`
  - `D	flat/gpt.ts`
  - `D	flat/index.js`
  - `D	flat/kimi.js`
  - `D	flat/package-lock.json`
  - `D	flat/package.json`
  - `D	flat/presentation.html`
  - `D	flat/presentation.js`
  - `D	flat/problem-list.html`
  - `D	flat/problem-list.js`
  - `D	flat/readme.md`
  - `D	flat/repo.js`
  - `D	flat/rollup.config.mjs`
  - `D	flat/screenshoot.js`
  - `D	flat/settings.html`
  - `D	flat/settings.js`
  - `D	flat/storage.js`
  - `D	flat/styles.css`
  - `D	flat/styles.js`
  - `D	flat/toast.js`
  - `D	flat/toolbar.js`
  - `D	flat/tutorial.html`
  - `D	flat/tutorial.js`
  - `D	flat/types.js`
  - `D	flat/ui-api.js`
  - `D	flat/userscript.meta.js`
  - `D	flat/ws-interceptor.js`
  - `D	flat/xhr-interceptor.js`
  - `A	release/ykt-helper-1180.user.js`
  - `A	release/ykt-helper-1181.user.js`
  - `A	release/ykt-helper-1182.user.js`
  - `A	release/ykt-helper-1183.user.js`
  - `A	release/ykt-helper-1184.user.js`
  - `A	release/ykt-helper-1185.user.js`
  - `A	release/ykt-helper-1186.user.js`
  - `A	release/ykt-helper-1187.user.js`
  - `A	release/ykt-helper-1188.user.js`
  - `A	release/ykt-helper-1190.user.js`
  - `A	release/ykt-helper-1191.user.js`
  - `D	ykt-helper-1183.user.js`
  - `A	ykt-helper/flat/.npmrc`
  - `A	ykt-helper/flat/actions.js`
  - `A	ykt-helper/flat/active-problems.html`
  - `A	ykt-helper/flat/active-problems.js`
  - `A	ykt-helper/flat/ai-format.js`
  - `A	ykt-helper/flat/ai.html`
  - `A	ykt-helper/flat/ai.js`
  - `A	ykt-helper/flat/answer.js`
  - `A	ykt-helper/flat/auto-answer-popup.js`
  - `A	ykt-helper/flat/deepseek.js`
  - `A	ykt-helper/flat/env.js`
  - `A	ykt-helper/flat/gpt.ts`
  - `A	ykt-helper/flat/index.js`
  - `A	ykt-helper/flat/kimi.js`
  - `A	ykt-helper/flat/package-lock.json`
  - `A	ykt-helper/flat/package.json`
  - `A	ykt-helper/flat/presentation.html`
  - `A	ykt-helper/flat/presentation.js`
  - `A	ykt-helper/flat/problem-list.html`
  - `A	ykt-helper/flat/problem-list.js`
  - `A	ykt-helper/flat/readme.md`
  - `A	ykt-helper/flat/repo.js`
  - `A	ykt-helper/flat/rollup.config.mjs`
  - `A	ykt-helper/flat/screenshoot.js`
  - `A	ykt-helper/flat/settings.html`
  - `A	ykt-helper/flat/settings.js`
  - `A	ykt-helper/flat/storage.js`
  - `A	ykt-helper/flat/styles.css`
  - `A	ykt-helper/flat/styles.js`
  - `A	ykt-helper/flat/toast.js`
  - `A	ykt-helper/flat/toolbar.js`
  - `A	ykt-helper/flat/tutorial.html`
  - `A	ykt-helper/flat/tutorial.js`
  - `A	ykt-helper/flat/types.js`
  - `A	ykt-helper/flat/ui-api.js`
  - `A	ykt-helper/flat/userscript.meta.js`
  - `A	ykt-helper/flat/ws-interceptor.js`
  - `A	ykt-helper/flat/xhr-interceptor.js`
  - `D	ykt-helper/release/ykt-helper-1180.user.js`
  - `D	ykt-helper/release/ykt-helper-1181.user.js`
  - `D	ykt-helper/release/ykt-helper-1182.user.js`
  - `D	ykt-helper/release/ykt-helper-1183.user.js`
  - `D	ykt-helper/release/ykt-helper-1184.user.js`
  - `D	ykt-helper/release/ykt-helper-1185.user.js`
  - `D	ykt-helper/release/ykt-helper-1186.user.js`
  - `D	ykt-helper/release/ykt-helper-1187.user.js`
  - `D	ykt-helper/release/ykt-helper-1188.user.js`
  - `D	ykt-helper/release/ykt-helper-1190.user.js`
  - `D	ykt-helper/release/ykt-helper-1191.user.js`
  - `D	ykt-helper/release/ykt-helper.user.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/userscript.meta.js`

### `bf42d8956f9022822ea211f50a9978c276cef67d` — 1.19.1: 增加tex渲染，修复异常字体色 (#9)
- Date: 2025-10-30T17:08:15+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `4be57f4837020970f29c58bd4e1245c02aad8802`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	ykt-helper/release/ykt-helper-1191.user.js`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/styles.css`
  - `M	ykt-helper/src/ui/ui-api.js`

### `595d4100d4edcff5de5fd633ecb150d9f543fc3d` — 1.19.1: 增加markdown渲染，并修复了一些bug
- Date: 2025-10-28T18:42:38+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `cd5d001e1f798512fc5f809621c73d3f7bfbd229`, `4be57f4837020970f29c58bd4e1245c02aad8802`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `D	ykt-helper/release/ykt-helper-1170.user.js`
  - `D	ykt-helper/release/ykt-helper-1171.user.js`
  - `D	ykt-helper/release/ykt-helper-1172.user.js`
  - `A	ykt-helper/release/ykt-helper-1191.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/problem-list.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/styles.css`
  - `M	ykt-helper/userscript.meta.js`

### `4be57f4837020970f29c58bd4e1245c02aad8802` — 1.19.1: 修复高版本chrome看不到题目列表的bug（没修复补交）
- Date: 2025-10-28T16:13:24+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `b809941d9d4078e78ff03f15182301c33b4e25a7`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	ykt-helper/release/ykt-helper-1191.user.js`
  - `M	ykt-helper/src/ui/panels/problem-list.js`

### `b809941d9d4078e78ff03f15182301c33b4e25a7` — 1.19.1: 增加markdown渲染器
- Date: 2025-10-28T15:35:38+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `ef7034deba1cb1a1f6d85db92ebaab72dbf0875c`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `D	ykt-helper/release/ykt-helper-1170.user.js`
  - `D	ykt-helper/release/ykt-helper-1171.user.js`
  - `D	ykt-helper/release/ykt-helper-1172.user.js`
  - `A	ykt-helper/release/ykt-helper-1191.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/styles.css`
  - `M	ykt-helper/userscript.meta.js`

### `ef7034deba1cb1a1f6d85db92ebaab72dbf0875c` — Merge pull request #8 from ZaytsevZY/main
- Date: 2025-10-21T21:35:16+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `690bf68ba17b8f759284004db7dba17c692da738`, `cd5d001e1f798512fc5f809621c73d3f7bfbd229`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`

### `cd5d001e1f798512fc5f809621c73d3f7bfbd229` — 1.19.0: 修改readme格式
- Date: 2025-10-21T21:34:48+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `e401dbc7300c47f814094e33c75dc5d688cd8482`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`

### `e401dbc7300c47f814094e33c75dc5d688cd8482` — 1.19.0: 更新版本（#7）
- Date: 2025-10-21T21:04:53+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `6327b1bc7d40ff323c70173ac29f91da1617da34`, `690bf68ba17b8f759284004db7dba17c692da738`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	ykt-helper/release/ykt-helper-1188.user.js`
  - `A	ykt-helper/release/ykt-helper-1190.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/core/vuex-helper.js`
  - `M	ykt-helper/src/index.js`
  - `A	ykt-helper/src/net/fetch-interceptor.js`
  - `M	ykt-helper/src/tsm/answer.js`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/ui-api.js`
  - `M	ykt-helper/userscript.meta.js`

### `690bf68ba17b8f759284004db7dba17c692da738` — 1.19.0: 更新readme
- Date: 2025-10-21T21:01:45+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `8075578d5902afa563cc579dbb8d116bc1208e54`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `M	ykt-helper/release/ykt-helper-1190.user.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/ui-api.js`

### `8075578d5902afa563cc579dbb8d116bc1208e54` — 1.19.0: 增加fetch接口
- Date: 2025-10-21T20:04:07+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `486f22391e037444aa7c3652177b3020359971b3`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `A	ykt-helper/release/ykt-helper-1190.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/core/vuex-helper.js`
  - `M	ykt-helper/src/index.js`
  - `A	ykt-helper/src/net/fetch-interceptor.js`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/userscript.meta.js`

### `486f22391e037444aa7c3652177b3020359971b3` — 1.18.8:: 预留自定义习题提醒接口
- Date: 2025-10-16T18:25:45+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `79bb3f70c73e9e80a916b26bba56a3d382106f0c`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `A	ykt-helper/release/ykt-helper-1188.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/ui-api.js`
  - `M	ykt-helper/userscript.meta.js`

### `79bb3f70c73e9e80a916b26bba56a3d382106f0c` — 1.18.7: 修复无法拿到lessonId的bug
- Date: 2025-10-16T11:44:20+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `8f50a1e8798682d8ac736aa209275f2fe62b4dd1`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	ykt-helper/src/tsm/answer.js`

### `6327b1bc7d40ff323c70173ac29f91da1617da34` — 1.18.7: 增加自动进入课堂功能
- Date: 2025-10-15T11:06:53+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `e12793ae956ef78c488f840a60da8883b46026bd`, `8f50a1e8798682d8ac736aa209275f2fe62b4dd1`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	LICENSE`
  - `M	README.md`
  - `M	changelog.md`
  - `D	ykt-helper/release/ykt-helper-1168.user.js`
  - `A	ykt-helper/release/ykt-helper-1187.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ai/kimi.js`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/src/net/xhr-interceptor.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/state/repo.js`
  - `M	ykt-helper/src/tsm/answer.js`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/problem-list.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/ui-api.js`
  - `M	ykt-helper/userscript.meta.js`

### `8f50a1e8798682d8ac736aa209275f2fe62b4dd1` — 1.18.7: 更新readme
- Date: 2025-10-15T11:04:26+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `37ae4f142a693baf88953c5cb0bd250c401b6fa8`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`

### `37ae4f142a693baf88953c5cb0bd250c401b6fa8` — 1.18.7: 增加雨课堂主页面自动跳转
- Date: 2025-10-15T10:58:16+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `46eea7ce547dfb3e93f547a0086c3a25ccc81c51`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	LICENSE`
  - `M	ykt-helper/release/ykt-helper-1187.user.js`
  - `M	ykt-helper/src/net/xhr-interceptor.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/ui-api.js`
  - `M	ykt-helper/userscript.meta.js`

### `46eea7ce547dfb3e93f547a0086c3a25ccc81c51` — 1.18.7: 尝试更新跳转逻辑未果
- Date: 2025-10-14T19:52:00+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `abd8e072ceee1582b021b0dee0ae48ab9985be3d`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	ykt-helper/src/ai/kimi.js`
  - `M	ykt-helper/src/net/xhr-interceptor.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/userscript.meta.js`

### `abd8e072ceee1582b021b0dee0ae48ab9985be3d` — 1.18.7: 添加自动进入课堂，修改了设置
- Date: 2025-10-14T12:55:13+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `d10e73619bbdd5670f6c1d6a541c1f5121f7fc6b`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `D	ykt-helper/release/ykt-helper-1168.user.js`
  - `A	ykt-helper/release/ykt-helper-1187.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/src/net/xhr-interceptor.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/state/repo.js`
  - `M	ykt-helper/src/tsm/answer.js`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/problem-list.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/ui-api.js`
  - `M	ykt-helper/userscript.meta.js`

### `d10e73619bbdd5670f6c1d6a541c1f5121f7fc6b` — 1.18.7：更新readme
- Date: 2025-10-14T10:53:14+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `8dd9cbe39eebfc50815c8983e49a832989f6d767`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`

### `e12793ae956ef78c488f840a60da8883b46026bd` — 1.18.6: 重构提示词，修改了readme和todolist (Pull Request #4)
- Date: 2025-10-13T14:57:56+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `8273817443c83f5af663f62e16eff9c35dd6545d`, `8dd9cbe39eebfc50815c8983e49a832989f6d767`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	static/ai.png`
  - `A	static/auto.png`
  - `A	static/ppt.png`
  - `M	todolist.md`
  - `A	ykt-helper/release/ykt-helper-1186.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `A	ykt-helper/src/ai/gemini.js`
  - `M	ykt-helper/src/ai/gpt.ts`
  - `M	ykt-helper/src/ai/kimi.js`
  - `A	ykt-helper/src/ai/openrouter.js`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/userscript.meta.js`

### `8dd9cbe39eebfc50815c8983e49a832989f6d767` — 1.18.6: 更新todolist，预留了一些文件
- Date: 2025-10-13T14:31:13+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `4980656ab81a161ff9f038dcba8f8c4c2b0530ec`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	todolist.md`
  - `A	ykt-helper/src/ai/gemini.js`
  - `M	ykt-helper/src/ai/gpt.ts`
  - `A	ykt-helper/src/ai/openrouter.js`

### `4980656ab81a161ff9f038dcba8f8c4c2b0530ec` — 1.18.6：更新版本文件
- Date: 2025-10-11T13:15:21+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `78b046cfdfdc5ae219175483795a23834d6dcf47`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	ykt-helper/release/ykt-helper-1186.user.js`

### `78b046cfdfdc5ae219175483795a23834d6dcf47` — 1.18.6：修正AI回答格式
- Date: 2025-10-11T11:21:33+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `1d7004be74bca3e149e36f7e209cd3493a2edaaa`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	ykt-helper/src/ai/kimi.js`
  - `M	ykt-helper/src/ui/panels/ai.js`

### `1d7004be74bca3e149e36f7e209cd3493a2edaaa` — 1.18.6：重新整理prompt
- Date: 2025-10-11T10:51:08+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `fbb215f2b3f03e082e5c5c2ef0514b17e4fda07d`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ai/kimi.js`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/userscript.meta.js`

### `fbb215f2b3f03e082e5c5c2ef0514b17e4fda07d` — 1.18.6：修改提示词，修改了readme
- Date: 2025-10-11T10:20:34+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `8eff331fb235bc8360d57550d9944d6b3a5bb92c`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `A	static/ai.png`
  - `A	static/auto.png`
  - `A	static/ppt.png`
  - `M	todolist.md`
  - `M	ykt-helper/src/ai/kimi.js`

### `8273817443c83f5af663f62e16eff9c35dd6545d` — 1.18.5：增加无AI随机作答，支持修改AI答案
- Date: 2025-10-05T23:53:06+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `f74c07c85c32a48a0dfad9b96d02ce345bf83e36`, `8eff331fb235bc8360d57550d9944d6b3a5bb92c`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `A	static/5.png`
  - `D	ykt-helper/release/ykt-helper-1167.user.js`
  - `A	ykt-helper/release/ykt-helper-1185.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/ui/panels/ai.html`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/userscript.meta.js`

### `8eff331fb235bc8360d57550d9944d6b3a5bb92c` — 1.18.5： 更新文档和readme
- Date: 2025-10-05T12:02:32+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `5dcbf219c4a8bf3862c6104b8a4be90419671458`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	changelog.md`
  - `M	ykt-helper/src/ui/panels/tutorial.html`

### `5dcbf219c4a8bf3862c6104b8a4be90419671458` — 1.18.5：兼容原版1.5.1，顺便添加了正常的答题和随机答题
- Date: 2025-10-04T16:43:26+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `116c30f923de0a0e32f0f02520015e13146c22bf`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `A	static/5.png`
  - `D	ykt-helper/release/ykt-helper-1167.user.js`
  - `A	ykt-helper/release/ykt-helper-1185.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/ui/panels/ai.html`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/userscript.meta.js`

### `f74c07c85c32a48a0dfad9b96d02ce345bf83e36` — feat: update 1.18.4
- Date: 2025-10-04T13:51:58+08:00
- Author: Zeyu Zhang <111627783+Alchuang22-dev@users.noreply.github.com>
- Parents: `b312e8bc19d543ed8474b511a86cc9ec6b4c2812`, `116c30f923de0a0e32f0f02520015e13146c22bf`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `A	LICENSE`
  - `M	README.md`
  - `M	changelog.md`
  - `A	static/1.png`
  - `A	static/2.png`
  - `A	static/3.png`
  - `A	static/4.png`
  - `M	todolist.md`
  - `A	ykt-helper/release/ykt-helper-1184.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/src/state/repo.js`
  - `M	ykt-helper/src/ui/panels/ai.html`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/presentation.html`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/userscript.meta.js`

### `116c30f923de0a0e32f0f02520015e13146c22bf` — 1.18.4：更新websocket和readme
- Date: 2025-10-04T13:50:12+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `d3e9672d69e67c88469e678b97c2ca1dedec5882`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `A	LICENSE`
  - `M	README.md`
  - `M	changelog.md`
  - `A	static/1.png`
  - `A	static/2.png`
  - `A	static/3.png`
  - `A	static/4.png`
  - `M	ykt-helper/release/ykt-helper-1184.user.js`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/src/state/repo.js`
  - `M	ykt-helper/src/ui/panels/ai.js`

### `d3e9672d69e67c88469e678b97c2ca1dedec5882` — 1.18.4：revert
- Date: 2025-10-03T17:31:32+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `d40caa3a9d52d53d533aefca9dbd0d789673ac77`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	ykt-helper/src/ui/panels/ai.js`

### `d40caa3a9d52d53d533aefca9dbd0d789673ac77` — 1.18.4：更新脚本
- Date: 2025-10-03T17:30:13+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `01eb3c01ae5505169c17f28f5b7775675cc2f8d4`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	ykt-helper/release/ykt-helper-1184.user.js`

### `01eb3c01ae5505169c17f28f5b7775675cc2f8d4` — 1.18.4：（fix）分离主界面检测和用户选择PPT检测
- Date: 2025-10-03T17:29:40+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `8279277174a084a3ac57ce3ff80208e88d1f7674`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`

### `8279277174a084a3ac57ce3ff80208e88d1f7674` — 1.18.4：优化答题逻辑，支持用户对任意单页PPT进行提问
- Date: 2025-10-03T16:12:48+08:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `b312e8bc19d543ed8474b511a86cc9ec6b4c2812`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	todolist.md`
  - `A	ykt-helper/release/ykt-helper-1184.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ui/panels/ai.html`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/presentation.html`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/userscript.meta.js`

### `b312e8bc19d543ed8474b511a86cc9ec6b4c2812` — 更新了文件结构
- Date: 2025-10-01T00:04:49+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: `2f86136d702f5d1a7f877db811f14a415446c9d7`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `A	ykt-helper-1183.user.js`
  - `A	ykt-helper-allinone/old/ykt-helper-1167.user.js`
  - `A	ykt-helper-allinone/old/ykt-helper-1168.user.js`
  - `A	ykt-helper-allinone/old/ykt-helper-1170.user.js`
  - `A	ykt-helper-allinone/old/ykt-helper-1171.user.js`
  - `A	ykt-helper-allinone/old/ykt-helper-1172.user.js`
  - `A	ykt-helper-allinone/old/ykt-helper-1180.user.js`
  - `A	ykt-helper-allinone/old/ykt-helper-1181.user.js`
  - `A	ykt-helper-allinone/old/ykt-helper-1182.user.js`
  - `A	ykt-helper-allinone/old/ykt-helper-1183.user.js`
  - `D	ykt-helper-allinone/yuketang-helper-ai-1120.js`
  - `D	ykt-helper-allinone/yuketang-helper-ai-1152.js`
  - `D	ykt-helper-allinone/yuketang-helper-ai-1161.js`
  - `D	ykt-helper-allinone/yuketang-helper-ai-working.js`
  - `D	yuketang-helper-ai-1161.js`

### `2f86136d702f5d1a7f877db811f14a415446c9d7` — 1.18.3：优化了ui，弹窗自动消失
- Date: 2025-09-30T23:55:51+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: `bfc82df5cdc14c4a5f50b449df9f5ced61285928`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	todolist.md`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/release/ykt-helper-1181.user.js`
  - `A	ykt-helper/release/ykt-helper-1182.user.js`
  - `A	ykt-helper/release/ykt-helper-1183.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `A	ykt-helper/src/core/vuex-helper.js`
  - `M	ykt-helper/src/tsm/ai-format.js`
  - `M	ykt-helper/src/ui/panels/active-problems.js`
  - `M	ykt-helper/src/ui/panels/ai.html`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/ui-api.js`
  - `M	ykt-helper/userscript.meta.js`

### `bfc82df5cdc14c4a5f50b449df9f5ced61285928` — 1.18.1：题目图片改为了ppt，而不是截图
- Date: 2025-09-30T19:27:27+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: `d7ffcf53e479f53c6424495eb2f7cf8d38bedac6`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/release/ykt-helper-1180.user.js`
  - `A	ykt-helper/release/ykt-helper-1181.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/capture/screenshoot.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/ui/panels/ai.html`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/auto-answer-popup.js`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/src/ui/styles.css`
  - `M	ykt-helper/userscript.meta.js`

### `d7ffcf53e479f53c6424495eb2f7cf8d38bedac6` — 1.18.0: vision模式全覆盖
- Date: 2025-09-30T16:11:06+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: `3fd96e599db1c7089d189e4320a82680e135b856`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `A	ykt-helper/release/ykt-helper-1180.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/tsm/ai-format.js`
  - `M	ykt-helper/src/ui/panels/ai.html`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/styles.css`
  - `M	ykt-helper/userscript.meta.js`

### `3fd96e599db1c7089d189e4320a82680e135b856` — update
- Date: 2025-09-24T23:14:31+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: `f8922d331a459adcffad7880e3681c01fcb15bba`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	todolist.md`
  - `M	ykt-helper/release/ykt-helper-1172.user.js`
  - `M	ykt-helper/userscript.meta.js`

### `f8922d331a459adcffad7880e3681c01fcb15bba` — 1.17.2：尝试把retry代码加回来
- Date: 2025-09-24T00:48:43-07:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `5283d7307c6054f708ad29e1831ce91d40ca9d68`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	changelog.md`
  - `M	flat/answer.js`
  - `M	flat/problem-list.js`
  - `A	ykt-helper/release/ykt-helper-1172.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/tsm/answer.js`
  - `M	ykt-helper/src/ui/panels/problem-list.js`

### `5283d7307c6054f708ad29e1831ce91d40ca9d68` — 1.17.1：尝试修改多模态未果，顺手改了tutorial
- Date: 2025-09-23T23:46:43-07:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `72f5f66d5daadf2b5bead178908aa8515da8f431`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	changelog.md`
  - `M	todolist.md`
  - `M	ykt-helper/src/ui/panels/tutorial.html`
  - `M	ykt-helper/userscript.meta.js`

### `72f5f66d5daadf2b5bead178908aa8515da8f431` — 1.17.1：允许用户编辑问题，更改了自动调用API的逻辑
- Date: 2025-09-23T19:34:05-07:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `59d0b69ff1b4d7d5314eae2e4267a1032dae41d6`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	flat/ai.html`
  - `M	flat/ai.js`
  - `M	flat/rollup.config.mjs`
  - `M	flat/settings.html`
  - `M	flat/settings.js`
  - `M	flat/toolbar.js`
  - `D	ykt-helper/release/ykt-helper-1166.user.js`
  - `A	ykt-helper/release/ykt-helper-1171.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ui/panels/ai.html`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/toolbar.js`

### `59d0b69ff1b4d7d5314eae2e4267a1032dae41d6` — 1.17.0: 加入了kimi vision
- Date: 2025-09-23T20:57:11+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: `58ed1c2bdb8de74fd7f5ac1176193bedf058379c`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `A	flat/.npmrc`
  - `A	flat/actions.js`
  - `A	flat/active-problems.html`
  - `A	flat/active-problems.js`
  - `A	flat/ai-format.js`
  - `A	flat/ai.html`
  - `A	flat/ai.js`
  - `A	flat/answer.js`
  - `A	flat/auto-answer-popup.js`
  - `A	flat/deepseek.js`
  - `A	flat/env.js`
  - `A	flat/gpt.ts`
  - `A	flat/index.js`
  - `A	flat/kimi.js`
  - `A	flat/package-lock.json`
  - `A	flat/package.json`
  - `A	flat/presentation.html`
  - `A	flat/presentation.js`
  - `A	flat/problem-list.html`
  - `A	flat/problem-list.js`
  - `A	flat/readme.md`
  - `A	flat/repo.js`
  - `A	flat/rollup.config.mjs`
  - `A	flat/screenshoot.js`
  - `A	flat/settings.html`
  - `A	flat/settings.js`
  - `A	flat/storage.js`
  - `A	flat/styles.css`
  - `A	flat/styles.js`
  - `A	flat/toast.js`
  - `A	flat/toolbar.js`
  - `A	flat/tutorial.html`
  - `A	flat/tutorial.js`
  - `A	flat/types.js`
  - `A	flat/ui-api.js`
  - `A	flat/userscript.meta.js`
  - `A	flat/ws-interceptor.js`
  - `A	flat/xhr-interceptor.js`
  - `A	ykt-helper/release/ykt-helper-1170.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ai/kimi.js`
  - `M	ykt-helper/src/capture/screenshoot.js`
  - `M	ykt-helper/src/core/types.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/ui/panels/ai.html`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/userscript.meta.js`

### `58ed1c2bdb8de74fd7f5ac1176193bedf058379c` — 1.16.8：更新todo
- Date: 2025-09-23T05:25:06-07:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `ea09bd4f616ac31cddbed35b48d334cc433da5bd`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	todolist.md`

### `ea09bd4f616ac31cddbed35b48d334cc433da5bd` — 1.16.8：改成kimi
- Date: 2025-09-23T20:10:00+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: `12585aa518e7ec0d3293505b4494f57eb8a4a1dd`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	todolist.md`
  - `M	ykt-helper/readme.md`
  - `M	ykt-helper/release/ykt-helper-1166.user.js`
  - `A	ykt-helper/release/ykt-helper-1168.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `A	ykt-helper/src/ai/kimi.js`
  - `D	ykt-helper/src/ai/kimi.ts`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/settings.html`
  - `M	ykt-helper/src/ui/panels/settings.js`
  - `M	ykt-helper/src/ui/ui-api.js`
  - `M	ykt-helper/userscript.meta.js`

### `12585aa518e7ec0d3293505b4494f57eb8a4a1dd` — update: readme
- Date: 2025-09-23T15:48:13+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: `32bf94d16b7b0a03901e085dd899b23d52f3bd78`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	todolist.md`

### `32bf94d16b7b0a03901e085dd899b23d52f3bd78` — 1.16.7: 更新了交互和ui
- Date: 2025-09-22T16:42:24+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: `e8d86217bc3fd7aca33ede714e27a86544fe7ce8`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	changelog.md`
  - `M	todolist.md`
  - `M	ykt-helper/readme.md`
  - `A	ykt-helper/release/ykt-helper-1167.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/styles.css`
  - `M	ykt-helper/src/ui/toolbar.js`
  - `M	ykt-helper/src/ui/ui-api.js`
  - `M	ykt-helper/userscript.meta.js`

### `e8d86217bc3fd7aca33ede714e27a86544fe7ce8` — 删除或移动了不相关文件
- Date: 2025-09-22T16:17:17+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: `f7d2c7f09cd23b9c0eaa56885270eac907010c43`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `D	README-vite.md`
  - `D	jsconfig.json`
  - `D	old.js`
  - `D	package.json`
  - `D	src/App.vue`
  - `D	src/api.js`
  - `D	src/components/ActiveProblem.vue`
  - `D	src/components/problem-ui/AnswerReveal.vue`
  - `D	src/components/problem-ui/PresentationView.vue`
  - `D	src/components/problem-ui/ProblemUI.vue`
  - `D	src/components/problem-ui/ProblemView.vue`
  - `D	src/main.js`
  - `D	src/network.js`
  - `D	src/storage.js`
  - `D	src/style.css`
  - `D	src/util.js`
  - `D	src/vite-env.d.ts`
  - `M	todolist.md`
  - `D	vite.config.js`
  - `D	yarn.lock`
  - `A	ykt-helper-allinone/old/README-vite.md`
  - `A	ykt-helper-allinone/old/jsconfig.json`
  - `A	ykt-helper-allinone/old/package.json`
  - `A	ykt-helper-allinone/old/src/App.vue`
  - `A	ykt-helper-allinone/old/src/api.js`
  - `A	ykt-helper-allinone/old/src/components/ActiveProblem.vue`
  - `A	ykt-helper-allinone/old/src/components/problem-ui/AnswerReveal.vue`
  - `A	ykt-helper-allinone/old/src/components/problem-ui/PresentationView.vue`
  - `A	ykt-helper-allinone/old/src/components/problem-ui/ProblemUI.vue`
  - `A	ykt-helper-allinone/old/src/components/problem-ui/ProblemView.vue`
  - `A	ykt-helper-allinone/old/src/main.js`
  - `A	ykt-helper-allinone/old/src/network.js`
  - `A	ykt-helper-allinone/old/src/storage.js`
  - `A	ykt-helper-allinone/old/src/style.css`
  - `A	ykt-helper-allinone/old/src/util.js`
  - `A	ykt-helper-allinone/old/src/vite-env.d.ts`
  - `A	ykt-helper-allinone/old/vite.config.js`
  - `A	ykt-helper-allinone/old/yarn.lock`
  - `A	ykt-helper-allinone/old/yuketang-helper-old.js`

### `f7d2c7f09cd23b9c0eaa56885270eac907010c43` — update sth
- Date: 2025-09-22T16:10:08+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: `31092aae010fa6dc15cba4856256543acfb8f9c7`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `D	ykt-helper-2.0.0/.npmrc`
  - `D	ykt-helper-2.0.0/file.txt`
  - `D	ykt-helper-2.0.0/package-lock.json`
  - `D	ykt-helper-2.0.0/package.json`
  - `D	ykt-helper-2.0.0/readme.md`
  - `D	ykt-helper-2.0.0/release/ykt-helper-1162.user.js`
  - `D	ykt-helper-2.0.0/release/ykt-helper-1164.user.js`
  - `D	ykt-helper-2.0.0/release/ykt-helper.user.js`
  - `D	ykt-helper-2.0.0/rollup.config.mjs`
  - `D	ykt-helper-2.0.0/src/ai/deepseek.js`
  - `D	ykt-helper-2.0.0/src/ai/gpt.ts`
  - `D	ykt-helper-2.0.0/src/ai/kimi.ts`
  - `D	ykt-helper-2.0.0/src/capture/screenshoot.js`
  - `D	ykt-helper-2.0.0/src/core/env.js`
  - `D	ykt-helper-2.0.0/src/core/storage.js`
  - `D	ykt-helper-2.0.0/src/core/types.js`
  - `D	ykt-helper-2.0.0/src/index.js`
  - `D	ykt-helper-2.0.0/src/net/ws-interceptor.js`
  - `D	ykt-helper-2.0.0/src/net/xhr-interceptor.js`
  - `D	ykt-helper-2.0.0/src/state/actions.js`
  - `D	ykt-helper-2.0.0/src/state/repo.js`
  - `D	ykt-helper-2.0.0/src/tsm/ai-format.js`
  - `D	ykt-helper-2.0.0/src/tsm/answer.js`
  - `D	ykt-helper-2.0.0/src/ui/panels/active-problems.html`
  - `D	ykt-helper-2.0.0/src/ui/panels/active-problems.js`
  - `D	ykt-helper-2.0.0/src/ui/panels/ai.html`
  - `D	ykt-helper-2.0.0/src/ui/panels/ai.js`
  - `D	ykt-helper-2.0.0/src/ui/panels/auto-answer-popup.js`
  - `D	ykt-helper-2.0.0/src/ui/panels/presentation.html`
  - `D	ykt-helper-2.0.0/src/ui/panels/presentation.js`
  - `D	ykt-helper-2.0.0/src/ui/panels/problem-list.html`
  - `D	ykt-helper-2.0.0/src/ui/panels/problem-list.js`
  - `D	ykt-helper-2.0.0/src/ui/panels/settings.html`
  - `D	ykt-helper-2.0.0/src/ui/panels/settings.js`
  - `D	ykt-helper-2.0.0/src/ui/panels/tutorial.html`
  - `D	ykt-helper-2.0.0/src/ui/panels/tutorial.js`
  - `D	ykt-helper-2.0.0/src/ui/styles.css`
  - `D	ykt-helper-2.0.0/src/ui/styles.js`
  - `D	ykt-helper-2.0.0/src/ui/toast.js`
  - `D	ykt-helper-2.0.0/src/ui/toolbar.js`
  - `D	ykt-helper-2.0.0/src/ui/ui-api.js`
  - `D	ykt-helper-2.0.0/userscript.meta.js`

### `31092aae010fa6dc15cba4856256543acfb8f9c7` — Merge branch 'main' into dev-2.0
- Date: 2025-09-22T15:56:32+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: `184b30d538ed4aeeded98921a6835039730ad8fb`, `958ef144e1ba5825cf395faf991464c75693c846`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `A	changelog.md`
  - `D	ykt-helper/release/ykt-helper-1162.user.js`
  - `D	ykt-helper/release/ykt-helper-1164.user.js`
  - `A	ykt-helper/release/ykt-helper-1166.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/tsm/ai-format.js`
  - `M	ykt-helper/src/ui/panels/auto-answer-popup.js`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/styles.css`
  - `M	todolist.md`
  - `A	ykt-helper-2.0.0/.npmrc`
  - `A	ykt-helper-2.0.0/file.txt`
  - `A	ykt-helper-2.0.0/package-lock.json`
  - `A	ykt-helper-2.0.0/package.json`
  - `A	ykt-helper-2.0.0/readme.md`
  - `A	ykt-helper-2.0.0/release/ykt-helper-1162.user.js`
  - `A	ykt-helper-2.0.0/release/ykt-helper-1164.user.js`
  - `A	ykt-helper-2.0.0/release/ykt-helper.user.js`
  - `A	ykt-helper-2.0.0/rollup.config.mjs`
  - `A	ykt-helper-2.0.0/src/ai/deepseek.js`
  - `A	ykt-helper-2.0.0/src/ai/gpt.ts`
  - `A	ykt-helper-2.0.0/src/ai/kimi.ts`
  - `A	ykt-helper-2.0.0/src/capture/screenshoot.js`
  - `A	ykt-helper-2.0.0/src/core/env.js`
  - `A	ykt-helper-2.0.0/src/core/storage.js`
  - `A	ykt-helper-2.0.0/src/core/types.js`
  - `A	ykt-helper-2.0.0/src/index.js`
  - `A	ykt-helper-2.0.0/src/net/ws-interceptor.js`
  - `A	ykt-helper-2.0.0/src/net/xhr-interceptor.js`
  - `A	ykt-helper-2.0.0/src/state/actions.js`
  - `A	ykt-helper-2.0.0/src/state/repo.js`
  - `A	ykt-helper-2.0.0/src/tsm/ai-format.js`
  - `A	ykt-helper-2.0.0/src/tsm/answer.js`
  - `A	ykt-helper-2.0.0/src/ui/panels/active-problems.html`
  - `A	ykt-helper-2.0.0/src/ui/panels/active-problems.js`
  - `A	ykt-helper-2.0.0/src/ui/panels/ai.html`
  - `A	ykt-helper-2.0.0/src/ui/panels/ai.js`
  - `A	ykt-helper-2.0.0/src/ui/panels/auto-answer-popup.js`
  - `A	ykt-helper-2.0.0/src/ui/panels/presentation.html`
  - `A	ykt-helper-2.0.0/src/ui/panels/presentation.js`
  - `A	ykt-helper-2.0.0/src/ui/panels/problem-list.html`
  - `A	ykt-helper-2.0.0/src/ui/panels/problem-list.js`
  - `A	ykt-helper-2.0.0/src/ui/panels/settings.html`
  - `A	ykt-helper-2.0.0/src/ui/panels/settings.js`
  - `A	ykt-helper-2.0.0/src/ui/panels/tutorial.html`
  - `A	ykt-helper-2.0.0/src/ui/panels/tutorial.js`
  - `A	ykt-helper-2.0.0/src/ui/styles.css`
  - `A	ykt-helper-2.0.0/src/ui/styles.js`
  - `A	ykt-helper-2.0.0/src/ui/toast.js`
  - `A	ykt-helper-2.0.0/src/ui/toolbar.js`
  - `A	ykt-helper-2.0.0/src/ui/ui-api.js`
  - `A	ykt-helper-2.0.0/userscript.meta.js`

### `184b30d538ed4aeeded98921a6835039730ad8fb` — init dev 2.0
- Date: 2025-09-22T15:51:42+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: `780fca19732de90f06128f9d1406531ef734bfa9`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	todolist.md`
  - `A	ykt-helper-2.0.0/.npmrc`
  - `A	ykt-helper-2.0.0/file.txt`
  - `A	ykt-helper-2.0.0/package-lock.json`
  - `A	ykt-helper-2.0.0/package.json`
  - `A	ykt-helper-2.0.0/readme.md`
  - `A	ykt-helper-2.0.0/release/ykt-helper-1162.user.js`
  - `A	ykt-helper-2.0.0/release/ykt-helper-1164.user.js`
  - `A	ykt-helper-2.0.0/release/ykt-helper.user.js`
  - `A	ykt-helper-2.0.0/rollup.config.mjs`
  - `A	ykt-helper-2.0.0/src/ai/deepseek.js`
  - `A	ykt-helper-2.0.0/src/ai/gpt.ts`
  - `A	ykt-helper-2.0.0/src/ai/kimi.ts`
  - `A	ykt-helper-2.0.0/src/capture/screenshoot.js`
  - `A	ykt-helper-2.0.0/src/core/env.js`
  - `A	ykt-helper-2.0.0/src/core/storage.js`
  - `A	ykt-helper-2.0.0/src/core/types.js`
  - `A	ykt-helper-2.0.0/src/index.js`
  - `A	ykt-helper-2.0.0/src/net/ws-interceptor.js`
  - `A	ykt-helper-2.0.0/src/net/xhr-interceptor.js`
  - `A	ykt-helper-2.0.0/src/state/actions.js`
  - `A	ykt-helper-2.0.0/src/state/repo.js`
  - `A	ykt-helper-2.0.0/src/tsm/ai-format.js`
  - `A	ykt-helper-2.0.0/src/tsm/answer.js`
  - `A	ykt-helper-2.0.0/src/ui/panels/active-problems.html`
  - `A	ykt-helper-2.0.0/src/ui/panels/active-problems.js`
  - `A	ykt-helper-2.0.0/src/ui/panels/ai.html`
  - `A	ykt-helper-2.0.0/src/ui/panels/ai.js`
  - `A	ykt-helper-2.0.0/src/ui/panels/auto-answer-popup.js`
  - `A	ykt-helper-2.0.0/src/ui/panels/presentation.html`
  - `A	ykt-helper-2.0.0/src/ui/panels/presentation.js`
  - `A	ykt-helper-2.0.0/src/ui/panels/problem-list.html`
  - `A	ykt-helper-2.0.0/src/ui/panels/problem-list.js`
  - `A	ykt-helper-2.0.0/src/ui/panels/settings.html`
  - `A	ykt-helper-2.0.0/src/ui/panels/settings.js`
  - `A	ykt-helper-2.0.0/src/ui/panels/tutorial.html`
  - `A	ykt-helper-2.0.0/src/ui/panels/tutorial.js`
  - `A	ykt-helper-2.0.0/src/ui/styles.css`
  - `A	ykt-helper-2.0.0/src/ui/styles.js`
  - `A	ykt-helper-2.0.0/src/ui/toast.js`
  - `A	ykt-helper-2.0.0/src/ui/toolbar.js`
  - `A	ykt-helper-2.0.0/src/ui/ui-api.js`
  - `A	ykt-helper-2.0.0/userscript.meta.js`

### `958ef144e1ba5825cf395faf991464c75693c846` — 1.16.6(mod)：修改了幻灯片视图，修复了一些构建bug
- Date: 2025-09-22T00:48:07-07:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `780fca19732de90f06128f9d1406531ef734bfa9`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `A	changelog.md`
  - `D	ykt-helper/release/ykt-helper-1162.user.js`
  - `D	ykt-helper/release/ykt-helper-1164.user.js`
  - `A	ykt-helper/release/ykt-helper-1166.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/tsm/ai-format.js`
  - `M	ykt-helper/src/ui/panels/auto-answer-popup.js`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/src/ui/styles.css`

### `780fca19732de90f06128f9d1406531ef734bfa9` — 1.16.4(mod)：兼容allinone 1.16.4版本更新，修改了readme
- Date: 2025-09-17T21:54:55-07:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `377d863f3d299585c23c6b6bee4ffc9fc16a0d73`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	ykt-helper/readme.md`
  - `A	ykt-helper/release/ykt-helper-1164.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/index.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/state/repo.js`
  - `M	ykt-helper/src/ui/panels/presentation.js`
  - `M	ykt-helper/userscript.meta.js`

### `377d863f3d299585c23c6b6bee4ffc9fc16a0d73` — 1.16.2(mod)：兼容allinone版1.16.2更新
- Date: 2025-09-17T20:49:37-07:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `0c41e00098b0eea932d465d4c404aa806677062f`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `A	ykt-helper/release/ykt-helper-1162.user.js`
  - `M	ykt-helper/rollup.config.mjs`
  - `M	ykt-helper/src/ai/deepseek.js`
  - `M	ykt-helper/src/net/ws-interceptor.js`
  - `M	ykt-helper/src/net/xhr-interceptor.js`
  - `M	ykt-helper/userscript.meta.js`

### `0c41e00098b0eea932d465d4c404aa806677062f` — 更新了readme，更新了文件结构
- Date: 2025-09-17T19:28:09+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: `92fe2782055a02d76f285a847e1bada7f98b01ee`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	todolist.md`
  - `A	ykt-helper-allinone/yuketang-helper-ai-1120.js`
  - `A	ykt-helper-allinone/yuketang-helper-ai-1152.js`
  - `A	ykt-helper-allinone/yuketang-helper-ai-1161.js`
  - `A	ykt-helper-allinone/yuketang-helper-ai-working.js`
  - `D	yuketang-helper-ai-1120.js`
  - `D	yuketang-helper-ai-1152.js`
  - `D	yuketang-helper-ai-working.js`

### `92fe2782055a02d76f285a847e1bada7f98b01ee` — 1.16.0(mod): 兼容发布版ai对话弹窗
- Date: 2025-09-16T23:32:29-07:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `9f8737633b42e7d1bc1f879a12941cf4c50bebf2`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	ykt-helper/release/ykt-helper.user.js`
  - `M	ykt-helper/src/state/actions.js`
  - `M	ykt-helper/src/ui/panels/ai.js`
  - `A	ykt-helper/src/ui/panels/auto-answer-popup.js`
  - `M	ykt-helper/src/ui/styles.css`

### `9f8737633b42e7d1bc1f879a12941cf4c50bebf2` — Merge branch 'main' of https://github.com/ZaytsevZY/yuketang-helper
- Date: 2025-09-16T23:02:56-07:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `3f25f1ebb042c37dcc89b32c60e0790a1bbaf265`, `e6ababb1133b3a646da2cbdf7dde27a0bef33236`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `A	todolist.md`
  - `A	yuketang-helper-ai-1161.js`
  - `A	yuketang-helper-ai-working.js`
  - `M	README.md`
  - `A	ykt-helper/.npmrc`
  - `A	ykt-helper/package-lock.json`
  - `A	ykt-helper/package.json`
  - `A	ykt-helper/readme.md`
  - `A	ykt-helper/release/ykt-helper.user.js`
  - `A	ykt-helper/rollup.config.mjs`
  - `A	ykt-helper/src/ai/deepseek.js`
  - `A	ykt-helper/src/ai/gpt.ts`
  - `A	ykt-helper/src/ai/kimi.ts`
  - `A	ykt-helper/src/capture/screenshoot.js`
  - `A	ykt-helper/src/core/env.js`
  - `A	ykt-helper/src/core/storage.js`
  - `A	ykt-helper/src/core/types.js`
  - `A	ykt-helper/src/index.js`
  - `A	ykt-helper/src/net/ws-interceptor.js`
  - `A	ykt-helper/src/net/xhr-interceptor.js`
  - `A	ykt-helper/src/state/actions.js`
  - `A	ykt-helper/src/state/repo.js`
  - `A	ykt-helper/src/tsm/ai-format.js`
  - `A	ykt-helper/src/tsm/answer.js`
  - `A	ykt-helper/src/ui/panels/active-problems.html`
  - `A	ykt-helper/src/ui/panels/active-problems.js`
  - `A	ykt-helper/src/ui/panels/ai.html`
  - `A	ykt-helper/src/ui/panels/ai.js`
  - `A	ykt-helper/src/ui/panels/presentation.html`
  - `A	ykt-helper/src/ui/panels/presentation.js`
  - `A	ykt-helper/src/ui/panels/problem-list.html`
  - `A	ykt-helper/src/ui/panels/problem-list.js`
  - `A	ykt-helper/src/ui/panels/settings.html`
  - `A	ykt-helper/src/ui/panels/settings.js`
  - `A	ykt-helper/src/ui/panels/tutorial.html`
  - `A	ykt-helper/src/ui/panels/tutorial.js`
  - `A	ykt-helper/src/ui/styles.css`
  - `A	ykt-helper/src/ui/styles.js`
  - `A	ykt-helper/src/ui/toast.js`
  - `A	ykt-helper/src/ui/toolbar.js`
  - `A	ykt-helper/src/ui/ui-api.js`
  - `A	ykt-helper/userscript.meta.js`

### `3f25f1ebb042c37dcc89b32c60e0790a1bbaf265` — feat: module version
- Date: 2025-09-16T23:02:50-07:00
- Author: Alchuang22-dev <2584829494@qq.com>
- Parents: `ae3d07dcac6b717e7d6ea6e0c1c68e5c30f9e949`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `A	ykt-helper/.npmrc`
  - `A	ykt-helper/package-lock.json`
  - `A	ykt-helper/package.json`
  - `A	ykt-helper/readme.md`
  - `A	ykt-helper/release/ykt-helper.user.js`
  - `A	ykt-helper/rollup.config.mjs`
  - `A	ykt-helper/src/ai/deepseek.js`
  - `A	ykt-helper/src/ai/gpt.ts`
  - `A	ykt-helper/src/ai/kimi.ts`
  - `A	ykt-helper/src/capture/screenshoot.js`
  - `A	ykt-helper/src/core/env.js`
  - `A	ykt-helper/src/core/storage.js`
  - `A	ykt-helper/src/core/types.js`
  - `A	ykt-helper/src/index.js`
  - `A	ykt-helper/src/net/ws-interceptor.js`
  - `A	ykt-helper/src/net/xhr-interceptor.js`
  - `A	ykt-helper/src/state/actions.js`
  - `A	ykt-helper/src/state/repo.js`
  - `A	ykt-helper/src/tsm/ai-format.js`
  - `A	ykt-helper/src/tsm/answer.js`
  - `A	ykt-helper/src/ui/panels/active-problems.html`
  - `A	ykt-helper/src/ui/panels/active-problems.js`
  - `A	ykt-helper/src/ui/panels/ai.html`
  - `A	ykt-helper/src/ui/panels/ai.js`
  - `A	ykt-helper/src/ui/panels/presentation.html`
  - `A	ykt-helper/src/ui/panels/presentation.js`
  - `A	ykt-helper/src/ui/panels/problem-list.html`
  - `A	ykt-helper/src/ui/panels/problem-list.js`
  - `A	ykt-helper/src/ui/panels/settings.html`
  - `A	ykt-helper/src/ui/panels/settings.js`
  - `A	ykt-helper/src/ui/panels/tutorial.html`
  - `A	ykt-helper/src/ui/panels/tutorial.js`
  - `A	ykt-helper/src/ui/styles.css`
  - `A	ykt-helper/src/ui/styles.js`
  - `A	ykt-helper/src/ui/toast.js`
  - `A	ykt-helper/src/ui/toolbar.js`
  - `A	ykt-helper/src/ui/ui-api.js`
  - `A	ykt-helper/userscript.meta.js`

### `e6ababb1133b3a646da2cbdf7dde27a0bef33236` — 1.16.4: 优化了课件存储，现在只会呈现对应的课件
- Date: 2025-09-17T10:46:16+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: `2f57c7752b4faaa7ae700d98de405f5a1af28c41`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `M	yuketang-helper-ai-working.js`

### `2f57c7752b4faaa7ae700d98de405f5a1af28c41` — 1.16.2: 尝试修复普通雨课堂不能获取文案的bug未果
- Date: 2025-09-16T21:00:25+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: `00918ec32a8c951ea13021a838d8c37887b24024`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `M	README.md`
  - `A	yuketang-helper-ai-1161.js`
  - `M	yuketang-helper-ai-working.js`

### `00918ec32a8c951ea13021a838d8c37887b24024` — 1.16.0: 增加ai对话弹窗，以及定时关闭
- Date: 2025-09-16T20:20:31+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: `ae3d07dcac6b717e7d6ea6e0c1c68e5c30f9e949`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `A	todolist.md`
  - `A	yuketang-helper-ai-working.js`

### `ae3d07dcac6b717e7d6ea6e0c1c68e5c30f9e949` — update: README
- Date: 2025-09-16T19:50:26+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: `235076d905c18fb541d9ed438130fd8342f2ea84`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `D	README copy.md`
  - `M	README.md`

### `235076d905c18fb541d9ed438130fd8342f2ea84` — init
- Date: 2025-09-16T19:49:18+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: `9c210eb7831b4acf77fe3b0198f1e3c5e82741dd`
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files:
  - `A	.gitignore`
  - `A	.vscode/extensions.json`
  - `A	README copy.md`
  - `A	README-vite.md`
  - `A	jsconfig.json`
  - `A	old.js`
  - `A	package.json`
  - `A	src/App.vue`
  - `A	src/api.js`
  - `A	src/components/ActiveProblem.vue`
  - `A	src/components/problem-ui/AnswerReveal.vue`
  - `A	src/components/problem-ui/PresentationView.vue`
  - `A	src/components/problem-ui/ProblemUI.vue`
  - `A	src/components/problem-ui/ProblemView.vue`
  - `A	src/main.js`
  - `A	src/network.js`
  - `A	src/storage.js`
  - `A	src/style.css`
  - `A	src/util.js`
  - `A	src/vite-env.d.ts`
  - `A	vite.config.js`
  - `A	yarn.lock`
  - `A	yuketang-helper-ai-1120.js`
  - `A	yuketang-helper-ai-1152.js`

### `9c210eb7831b4acf77fe3b0198f1e3c5e82741dd` — first commit
- Date: 2025-09-16T19:48:26+08:00
- Author: ZaytsevZY <690862225@qq.com>
- Parents: (root)
- Branches: `audit/full-regression-20260917`, `backup-before-b85ca499`, `backup/pre-core-rebuild-20260917`, `backup/pre-restore-20260916`, `backup/pre-restore-before-revert-20260916`, `backup/pre-stability-fix-20260916`, `chrome141`, `dev-2.0`, `feat/dev3.0`, `feat/recover-auto-answer-1215`, `fix/stability-auto-answer-20260916`, `main`, `restore/pre-revert-ed823033`, `revert-1-feat/recover-auto-answer-1215`, `zy-dev`
- Files: none

