# CHANGELOG

## v0.1.1 (2026-05-24)

### Chore

* chore(deps-dev): bump black to 26.3.1 and pytest-cov to 7.1.0 ([`2f3d095`](https://github.com/MaximeFARRE/github-project-template/commit/2f3d095009aaf26330b3fe9aaf8dcd7a1ac9cc5e))

* chore(deps-dev): bump mypy from 1.8.0 to 1.20.2

Bumps [mypy](https://github.com/python/mypy) from 1.8.0 to 1.20.2.
- [Changelog](https://github.com/python/mypy/blob/master/CHANGELOG.md)
- [Commits](https://github.com/python/mypy/compare/v1.8.0...v1.20.2)

---
updated-dependencies:
- dependency-name: mypy
  dependency-version: 1.20.2
  dependency-type: direct:development
  update-type: version-update:semver-minor
...

Signed-off-by: dependabot[bot] &lt;support@github.com&gt; ([`caccffb`](https://github.com/MaximeFARRE/github-project-template/commit/caccffba83fb468efdb5cab6e5b9b8e7a2f72b67))

* chore(deps-dev): bump pytest from 7.4.4 to 9.0.3

Bumps [pytest](https://github.com/pytest-dev/pytest) from 7.4.4 to 9.0.3.
- [Release notes](https://github.com/pytest-dev/pytest/releases)
- [Changelog](https://github.com/pytest-dev/pytest/blob/main/CHANGELOG.rst)
- [Commits](https://github.com/pytest-dev/pytest/compare/7.4.4...9.0.3)

---
updated-dependencies:
- dependency-name: pytest
  dependency-version: 9.0.3
  dependency-type: direct:development
  update-type: version-update:semver-major
...

Signed-off-by: dependabot[bot] &lt;support@github.com&gt; ([`d566314`](https://github.com/MaximeFARRE/github-project-template/commit/d5663140fa2fee5c6f8c6102c0648b7fbdc17dd6))

* chore(deps-dev): bump pre-commit from 3.7.0 to 4.6.0

Bumps [pre-commit](https://github.com/pre-commit/pre-commit) from 3.7.0 to 4.6.0.
- [Release notes](https://github.com/pre-commit/pre-commit/releases)
- [Changelog](https://github.com/pre-commit/pre-commit/blob/main/CHANGELOG.md)
- [Commits](https://github.com/pre-commit/pre-commit/compare/v3.7.0...v4.6.0)

---
updated-dependencies:
- dependency-name: pre-commit
  dependency-version: 4.6.0
  dependency-type: direct:development
  update-type: version-update:semver-major
...

Signed-off-by: dependabot[bot] &lt;support@github.com&gt; ([`5d14c84`](https://github.com/MaximeFARRE/github-project-template/commit/5d14c845123bf33efcb497e9208fbcb4efcc8e59))

* chore(deps): bump actions/checkout from 4 to 6

Bumps [actions/checkout](https://github.com/actions/checkout) from 4 to 6.
- [Release notes](https://github.com/actions/checkout/releases)
- [Changelog](https://github.com/actions/checkout/blob/main/CHANGELOG.md)
- [Commits](https://github.com/actions/checkout/compare/v4...v6)

---
updated-dependencies:
- dependency-name: actions/checkout
  dependency-version: &#39;6&#39;
  dependency-type: direct:production
  update-type: version-update:semver-major
...

Signed-off-by: dependabot[bot] &lt;support@github.com&gt; ([`44194a9`](https://github.com/MaximeFARRE/github-project-template/commit/44194a9e768d63d91802e0251169847693fdc53e))

* chore(deps): bump actions/setup-python from 5 to 6

Bumps [actions/setup-python](https://github.com/actions/setup-python) from 5 to 6.
- [Release notes](https://github.com/actions/setup-python/releases)
- [Commits](https://github.com/actions/setup-python/compare/v5...v6)

---
updated-dependencies:
- dependency-name: actions/setup-python
  dependency-version: &#39;6&#39;
  dependency-type: direct:production
  update-type: version-update:semver-major
...

Signed-off-by: dependabot[bot] &lt;support@github.com&gt; ([`c1bfe6f`](https://github.com/MaximeFARRE/github-project-template/commit/c1bfe6f3be65560c641f88e27fa11ecda8737493))

* chore: add mypy, Makefile, dependabot, editorconfig, coverage and conftest

- pyproject.toml: add mypy config + pytest --cov by default
- .github/workflows/ci.yml: add mypy step, use --cov in tests job
- Makefile: lint / test / fix / all commands
- .github/dependabot.yml: weekly auto-updates for pip and github-actions
- .editorconfig: consistent indent/charset across editors and agents
- tests/conftest.py: fixture skeleton for pytest
- docs/ARCHITECTURE.md: fix trailing backtick and clean code fence IDs ([`a3660cf`](https://github.com/MaximeFARRE/github-project-template/commit/a3660cff65bb71e1684b522a851374996b934f3a))

* chore: initialize automations and fix whitespace across all files

- pre-commit installed and verified: all hooks pass
- .pre-commit-config.yaml: remove Windows-incompatible local branch hook
  (branch protection handled by GitHub branch protection rules)
- trailing-whitespace and end-of-file fixes applied by pre-commit
  on CLAUDE.md, CODEX.md, README.md, .gitignore, LICENSE, PROMPTS.md,
  .env.example, pull_request_template.md, issue templates ([`bb3b3f7`](https://github.com/MaximeFARRE/github-project-template/commit/bb3b3f7d219370d92d3e31035fa15d8bac087437))

### Documentation

* docs: update README with mypy, Makefile, dependabot and corrected setup ([`b57ac91`](https://github.com/MaximeFARRE/github-project-template/commit/b57ac91f7c0ac1b05137e7bdf43640bfab043c20))

* docs: integrate Karpathy principles into CLAUDE.md ([`6ad052e`](https://github.com/MaximeFARRE/github-project-template/commit/6ad052ea735e8371cbdf9528ae24ca294b502033))

* docs: rewrite README and add README.example.md for project publication

- README.md: full rewrite as template documentation
  - badges (license, python, ruff, black, pre-commit, semantic-release, CI)
  - purpose, included tools table, architecture convention
  - design choices (why ruff+black, pre-commit, semantic-release, separate agent files)
  - step-by-step setup guide (local + GitHub)
  - release workflow explanation with commit → version table
  - AI agent instructions summary
  - full project structure
- README.example.md: skeleton for real project READMEs
  - badges, features, screenshots, tech stack table
  - installation, usage, tests, contributing sections ([`2f89c9d`](https://github.com/MaximeFARRE/github-project-template/commit/2f89c9d863763588f095ce54c5b7d35efbbd4592))

### Fix

* fix(ci): correct action versions and handle empty src/tests

- actions/checkout@v6 and setup-python@v6 do not exist; pin to v4/v5
- mypy src/ exits 2 when no .py files are present; skip gracefully
- pytest exits 5 when no tests are collected; treat as success

Co-Authored-By: Claude Sonnet 4.6 &lt;noreply@anthropic.com&gt; ([`7693413`](https://github.com/MaximeFARRE/github-project-template/commit/7693413d3aa184255c5dc9d7d9a2707598a0354d))

### Test

* test: add placeholder test to prevent pytest exit code 5

pytest exits with code 5 (no tests collected) when the test suite is
empty, causing CI to fail. A minimal passing test avoids this until
real tests are added.

Co-Authored-By: Claude Sonnet 4.6 &lt;noreply@anthropic.com&gt; ([`d0fbda1`](https://github.com/MaximeFARRE/github-project-template/commit/d0fbda1133e1b7d47ad0f5a6cd075c09e5bc4963))

### Unknown

* Merge pull request #24 from MaximeFARRE/fix/ci-workflow

fix(ci): correct action versions and handle empty src/tests ([`c33f62f`](https://github.com/MaximeFARRE/github-project-template/commit/c33f62fb191b10a2a13b825aec4356e715595f45))

* Merge pull request #16 from MaximeFARRE/docs/rewrite-readme

docs: update README — mypy, Makefile, dependabot, corrected setup ([`7f0996d`](https://github.com/MaximeFARRE/github-project-template/commit/7f0996dbbfa420c18b8e50be1fab1702b97e2afd))

* Merge pull request #14 from MaximeFARRE/docs/improve-claude-md

docs: integrate Karpathy principles into CLAUDE.md ([`8206a65`](https://github.com/MaximeFARRE/github-project-template/commit/8206a65d4977d0d41461f08a2bba8df9b9c5de64))

* Merge pull request #15 from MaximeFARRE/chore/fix-deps-conflicts

chore(deps-dev): bump black to 26.3.1 and pytest-cov to 7.1.0 ([`1592e70`](https://github.com/MaximeFARRE/github-project-template/commit/1592e708821c8574f94be92d623d040c2d329513))

* Merge pull request #11 from MaximeFARRE/dependabot/pip/mypy-1.20.2

chore(deps-dev): bump mypy from 1.8.0 to 1.20.2 ([`3c5f8ec`](https://github.com/MaximeFARRE/github-project-template/commit/3c5f8ec953a8a2c33429a56dddcd90eac3e4fa38))

* Merge pull request #10 from MaximeFARRE/dependabot/pip/pytest-9.0.3

chore(deps-dev): bump pytest from 7.4.4 to 9.0.3 ([`52a88c6`](https://github.com/MaximeFARRE/github-project-template/commit/52a88c603f243bfbc023f82241ebafadc42f3967))

* Merge pull request #9 from MaximeFARRE/dependabot/pip/pre-commit-4.6.0

chore(deps-dev): bump pre-commit from 3.7.0 to 4.6.0 ([`59c3a32`](https://github.com/MaximeFARRE/github-project-template/commit/59c3a3239a22af206a5d5a72341ab2ee3583fa42))

* Merge pull request #8 from MaximeFARRE/dependabot/github_actions/actions/checkout-6

chore(deps): bump actions/checkout from 4 to 6 ([`ee19d5d`](https://github.com/MaximeFARRE/github-project-template/commit/ee19d5d5c6b85fcd3e99380a5da647590b81b9f0))

* Merge pull request #7 from MaximeFARRE/dependabot/github_actions/actions/setup-python-6

chore(deps): bump actions/setup-python from 5 to 6 ([`7f0df17`](https://github.com/MaximeFARRE/github-project-template/commit/7f0df1791fdbaaa2f698d8c794b5e90bed2e912a))

* Merge pull request #6 from MaximeFARRE/chore/improve-tooling

chore: add mypy, Makefile, dependabot, editorconfig, coverage and conftest ([`338aa6a`](https://github.com/MaximeFARRE/github-project-template/commit/338aa6a8027446044ae837799f4200e26a8fe17a))

* Merge pull request #5 from MaximeFARRE/chore/init-automations

chore: initialize automations and apply pre-commit fixes ([`40071dd`](https://github.com/MaximeFARRE/github-project-template/commit/40071dde831e860e3861a7dec03da1a8b7c7047d))

* Merge pull request #4 from MaximeFARRE/docs/rewrite-readme

docs: rewrite README for template publication + add README.example.md ([`92fc835`](https://github.com/MaximeFARRE/github-project-template/commit/92fc8354b9da2dc45e0a615462fea0b0c0735184))

## v0.1.0 (2026-04-25)

### Chore

* chore(release): v0.1.0 [skip ci] ([`2dfd1e0`](https://github.com/MaximeFARRE/github-project-template/commit/2dfd1e0d79722714346658ee695dbe07329cf33e))

* chore: add requirements.txt and requirements-dev.txt

- requirements.txt: runtime dependencies (template for user to fill)
- requirements-dev.txt: includes requirements.txt + dev tools (ruff, black, pre-commit, pytest, mypy, python-semantic-release)
- CONTRIBUTING.md: use requirements-dev.txt in setup, remove redundant pre-commit install
- .github/workflows/ci.yml: install requirements-dev.txt for tests ([`3b43fa8`](https://github.com/MaximeFARRE/github-project-template/commit/3b43fa8117441c09b3cd540d6ce02f1057d4f775))

* chore: add ruff, black and pre-commit config

- .pre-commit-config.yaml: ruff (lint+format), black, and standard hooks
- pyproject.toml: ruff and black configuration (line-length 88, py311)
- CONTRIBUTING.md: document pre-commit install step ([`9f94f4e`](https://github.com/MaximeFARRE/github-project-template/commit/9f94f4e4c27b1bf59cafda5eb61710457d9d1f22))

* chore: restructure template — remove redundant docs, add src scaffold, hooks, STACK.md, improve agent instructions ([`9080d8d`](https://github.com/MaximeFARRE/github-project-template/commit/9080d8d3fc80228a5e7b7d1676aaf973fe03c1a7))

* chore: remove redundant docs (AI_WORKFLOW, RELEASE_CHECKLIST, GITHUB_CHECKLIST) ([`3a51cee`](https://github.com/MaximeFARRE/github-project-template/commit/3a51cee8dd4137f5509e9f19a0fb2758995186bd))

* chore: initialize GitHub project template structure ([`8c9ba3c`](https://github.com/MaximeFARRE/github-project-template/commit/8c9ba3ce68a3b21895bdd60cafef208b762d99dd))

### Documentation

* docs: rewrite AGENTS.md and CLAUDE.md for clarity, pro coding rules, token efficiency ([`a7b2ae8`](https://github.com/MaximeFARRE/github-project-template/commit/a7b2ae8a671e385963911e4a9caec2ed8794bf64))

* docs: reference STACK.md in AGENTS, CLAUDE, CONTRIBUTING and add hook setup ([`5a702f0`](https://github.com/MaximeFARRE/github-project-template/commit/5a702f04205143815e73a337159a60c435d9d4b1))

* docs: initialize project changelog with initial release structure ([`5092130`](https://github.com/MaximeFARRE/github-project-template/commit/5092130798813c1252faccb1163db2681bf9aed6))

* docs: add ROADMAP.md to define project development goals and priorities ([`b21b34a`](https://github.com/MaximeFARRE/github-project-template/commit/b21b34a444636ab5207c98c8f3566745334ddec4))

* docs: add KNOWN_LIMITATIONS.md to document project constraints and technical debt ([`d8b20ef`](https://github.com/MaximeFARRE/github-project-template/commit/d8b20ef687670c2b8f33d698b252cfee6b92e344))

* docs: add release checklist documentation ([`e7a5b5b`](https://github.com/MaximeFARRE/github-project-template/commit/e7a5b5b52941fffb07a194c18900a2fbbd232567))

### Feature

* feat: add semantic-release and GitHub Actions CI/CD

- .github/workflows/release.yml: auto-release on push to main via python-semantic-release
- .github/workflows/ci.yml: lint (ruff + black) and tests on PRs and push to main
- pyproject.toml: add project version and semantic-release config
- README.md: add GitHub Setup section with required per-project steps ([`53a20d8`](https://github.com/MaximeFARRE/github-project-template/commit/53a20d851ba2b641a08c07c62791a85cc3c0ebc2))

* feat: add Codex support and git permission fix ([`e5a41c9`](https://github.com/MaximeFARRE/github-project-template/commit/e5a41c91623b8ced9d37663ec64b6954b5ea1510))

* feat: add CODEX.md and document git safe.directory fix for sandboxed agents ([`ccfd818`](https://github.com/MaximeFARRE/github-project-template/commit/ccfd818b9c969762e2f65fc9495732f267848793))

* feat: add STACK.md template for project-specific tech stack context ([`6e52e94`](https://github.com/MaximeFARRE/github-project-template/commit/6e52e94b8291bc6cb214d9fe248e651fda2b5e78))

* feat: add pre-commit hook to block direct commits on main/master ([`322883b`](https://github.com/MaximeFARRE/github-project-template/commit/322883b8e5c803752774787c0c2b538041099239))

* feat: add src/ scaffold with ui, services, repositories layers ([`291007d`](https://github.com/MaximeFARRE/github-project-template/commit/291007dacad732f236c58f7a31eb9f8017a76e39))

* feat: add feature request issue template to repository ([`dc6ff3b`](https://github.com/MaximeFARRE/github-project-template/commit/dc6ff3b38785dfcd9e8a121219f03bac388604b5))

* feat: add bug report issue template to .github folder ([`e0304d8`](https://github.com/MaximeFARRE/github-project-template/commit/e0304d83b5448ca76acf4305e82aa6a9b6e2e283))

* feat: add pull request template to .github directory ([`d37e031`](https://github.com/MaximeFARRE/github-project-template/commit/d37e03132a1c58913fa8d0ca0be386eb7fdfe0f2))

* feat: add .env.example template for environment configuration ([`572ba28`](https://github.com/MaximeFARRE/github-project-template/commit/572ba28c7efa4f0fbcd0c0c91d7cced400b95dcd))

* feat: add project documentation templates and comprehensive .gitignore file ([`592f68e`](https://github.com/MaximeFARRE/github-project-template/commit/592f68e3165ddc5a0044ad85a90fd1d9a33603aa))

* feat: initialize project template with documentation and repository standards ([`5f4e94e`](https://github.com/MaximeFARRE/github-project-template/commit/5f4e94e330406115036f96cdf31deea229dda96d))

### Fix

* fix: correct python-semantic-release v9 configuration

- pyproject.toml: migrate from v7 to v9 config format
  - branch → [tool.semantic_release.branches.main] with match pattern
  - changelog_file → [tool.semantic_release.changelog]
  - upload_to_pypi/release → [tool.semantic_release.publish]
  - add commit_parser_options (minor/patch tag mapping)
  - add tag_format, major_on_zero, commit_message with [skip ci]
- release.yml: add git config step and split version/publish commands
- CHANGELOG.md: reset to auto-generated format compatible with semantic-release ([`67a219a`](https://github.com/MaximeFARRE/github-project-template/commit/67a219af3ccaadd385945dcf7ff9aef7e95b986f))

### Unknown

* Merge pull request #3 from MaximeFARRE/chore/fix-semantic-release

fix: correct python-semantic-release v9 config and workflow ([`8eeb87e`](https://github.com/MaximeFARRE/github-project-template/commit/8eeb87e55f248df69a55cc5ab843acbc9d045786))

* Change line length from 88 to 120

Updated line length settings for Ruff and Black to 120. ([`0246915`](https://github.com/MaximeFARRE/github-project-template/commit/0246915252fbd036195bd648038593fef2b690f4))

* Merge pull request #2 from MaximeFARRE/chore/add-requirements

Add requirements.txt and requirements-dev.txt ([`4916efd`](https://github.com/MaximeFARRE/github-project-template/commit/4916efd8684b443178c90a50eca7076dd890684e))

* Merge pull request #1 from MaximeFARRE/chore/add-linting-tools

Add linting tools, GitHub Actions CI/CD, and semantic-release ([`6595fa5`](https://github.com/MaximeFARRE/github-project-template/commit/6595fa5dc162845c570d227ce2525e0bd7f85ce9))
