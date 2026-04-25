# CHANGELOG

## v0.1.0 (2026-04-25)

### Chore

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
