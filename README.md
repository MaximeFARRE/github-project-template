<div align="center">

# 🧱 GitHub Project Template

**A professional, batteries-included project template for Python projects.**
Built to work seamlessly with AI coding agents (Claude, Codex, Cursor) and human developers alike.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.11+-blue.svg)](https://www.python.org/)
[![Ruff](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/astral-sh/ruff/main/assets/badge/v2.json)](https://github.com/astral-sh/ruff)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit)](https://pre-commit.com)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://python-semantic-release.readthedocs.io/)
[![CI](https://github.com/MaximeFARRE/github-project-template/actions/workflows/ci.yml/badge.svg)](https://github.com/MaximeFARRE/github-project-template/actions/workflows/ci.yml)

</div>

---

## 🎯 Purpose

This template enforces a consistent, professional project structure across all your Python projects. It is specifically designed for **vibe coding workflows** — where AI agents (Claude, Codex, Cursor) do most of the heavy lifting — while keeping quality high and supervision low.

**Goals:**
- 🤖 Give AI agents clear, unambiguous instructions so they don't go off the rails
- ✅ Enforce code quality automatically (lint, format, type check) before every commit
- 🚀 Automate versioning and releases via Conventional Commits
- 🏗️ Maintain a clean 3-layer architecture from day one

---

## 📦 What's Included

| Tool | Purpose |
|---|---|
| [Ruff](https://github.com/astral-sh/ruff) | Lightning-fast linter (replaces flake8, isort, pyupgrade) |
| [Black](https://github.com/psf/black) | Opinionated code formatter |
| [Mypy](https://mypy-lang.org/) | Static type checker |
| [pre-commit](https://pre-commit.com) | Runs ruff + black + mypy automatically before every commit |
| [python-semantic-release](https://python-semantic-release.readthedocs.io/) | Auto version bumps, CHANGELOG, and GitHub Releases |
| [pytest](https://pytest.org) + pytest-cov | Test runner with coverage reporting |
| [GitHub Actions](https://github.com/features/actions) | CI (lint + type check + tests) and CD (automated releases) |
| [Dependabot](https://docs.github.com/en/code-security/dependabot) | Weekly auto-updates for pip and GitHub Actions dependencies |
| `Makefile` | Shortcuts: `make lint` / `make test` / `make fix` / `make all` |
| `AGENTS.md` | Instructions for AI agents (Claude, Codex, Cursor…) |
| `CLAUDE.md` | Claude-specific instructions with Karpathy principles |
| `CODEX.md` | Codex-specific instructions + Windows git fix |
| `STACK.md` | Project tech stack — read by agents before any change |

---

## 🏗️ Architecture Convention

All projects using this template follow a strict 3-layer architecture:

```
src/ui/               → pages, components, views (display only)
        ↓
src/services/         → business logic, calculations, decisions
        ↓
src/repositories/     → DB queries, external API calls
```

**Rules enforced in `AGENTS.md`:**
- No business logic in UI files
- No DB/API access outside `repositories/`
- No cross-layer calls (UI → repository is forbidden)
- Reuse existing services before creating new ones

---

## ⚙️ Design Choices

### Why Ruff + Black together?

Ruff handles linting (errors, warnings, imports, upgrades). Black handles formatting. They cover different concerns and are configured with matching `line-length = 120` to avoid conflicts.

### Why Mypy?

AI agents regularly generate untyped code. Mypy catches type errors before runtime and forces `def func(x: int) -> str:` annotations. Configured in `pyproject.toml` with `disallow_untyped_defs = true`.

### Why pre-commit instead of just CI?

CI catches errors after the push — pre-commit catches them **before**. Faster feedback loop, and it prevents bad commits from ever entering the history. Both run in this template.

### Why python-semantic-release?

Versioning should be a byproduct of good commit messages, not a manual step. With [Conventional Commits](https://www.conventionalcommits.org/), every `feat:` or `fix:` automatically determines the next version, updates the CHANGELOG, and creates a GitHub Release — no human action needed.

### Why separate AGENTS.md, CLAUDE.md, and CODEX.md?

Each AI agent reads a different file at startup:
- `AGENTS.md` — universal rules, read by all agents
- `CLAUDE.md` — Claude-specific (read automatically by Claude Code)
- `CODEX.md` — Codex-specific (read automatically by OpenAI Codex)

Keeping them separate avoids token waste — each agent only loads what it needs.

---

## 🚀 Using This Template

### Step 1 — Create your repository

Click **"Use this template"** on GitHub, or clone and re-init:

```bash
git clone https://github.com/MaximeFARRE/github-project-template.git my-project
cd my-project
git remote set-url origin https://github.com/YOUR_USERNAME/my-project.git
```

### Step 2 — Configure the template

**a) Fill `STACK.md`** with your project's tech stack, language, framework, DB, and commands. Agents read this before touching any code.

**b) Update `pyproject.toml`** — replace the project name and version:
```toml
[project]
name = "your-project-name"
version = "0.1.0"
```

**c) Update `README.md`** — use `README.example.md` as a starting point.

**d) Fill `requirements.txt`** with your runtime dependencies.

### Step 3 — Local setup

```bash
# Create and activate a virtual environment
python -m venv .venv
.\.venv\Scripts\Activate.ps1      # Windows
source .venv/bin/activate          # macOS / Linux

# Install all dev dependencies (ruff, black, mypy, pytest, pre-commit, semantic-release…)
pip install -r requirements-dev.txt

# Install pre-commit hooks (runs ruff + black + mypy before every commit)
pre-commit install
```

### Step 4 — GitHub setup (required once per project)

> These settings are required for CI and automated releases to work.

**1. Enable write permissions for Actions**

`Settings → Actions → General → Workflow permissions`
→ Select **"Read and write permissions"**
→ Check **"Allow GitHub Actions to create and approve pull requests"**
→ Save

**2. Protect the main branch**

`Settings → Branches → Add branch protection rule`
→ Branch name pattern: `main` (or `master`)
→ ✅ Require a pull request before merging
→ ✅ Require status checks to pass → add `Lint & Format` and `Tests`
→ ✅ Do not allow bypassing the above settings
→ Save

---

## 📋 How Releases Work

This template uses **Conventional Commits** to drive automatic versioning:

| Commit prefix | Version bump | Example |
|---|---|---|
| `feat:` | minor `0.1.0 → 0.2.0` | `feat: add user authentication` |
| `fix:` / `perf:` | patch `0.1.0 → 0.1.1` | `fix: prevent duplicate records` |
| `BREAKING CHANGE` footer | major `0.1.0 → 1.0.0` | `feat!: redesign API` |
| `chore:`, `docs:`, `test:` | no bump | `docs: update README` |

On every push to `main`/`master`:
1. GitHub Actions runs CI (lint + tests)
2. `semantic-release version` calculates the next version from commits
3. `pyproject.toml` is updated, a tag is created, `CHANGELOG.md` is generated
4. A GitHub Release is published automatically

---

## 🤖 AI Agent Instructions

This template ships with ready-to-use instruction files for AI coding agents:

| File | Agent | Key rules |
|---|---|---|
| `AGENTS.md` | All agents | Architecture, code quality, commits, "never do" list |
| `CLAUDE.md` | Claude Code | Same rules, Claude-specific format |
| `CODEX.md` | OpenAI Codex | Same rules + git `safe.directory` fix for Windows |
| `STACK.md` | All agents | **Fill this first** — tech stack, commands, conventions |
| `PROMPTS.md` | You | Reusable prompt templates for common tasks |

> **For Codex on Windows:** If Codex can't commit due to a git permission error, add this to `~/.codex/config.toml`:
> ```toml
> setup_commands = ["git config --global --add safe.directory '*'"]
> ```

---

## 📁 Project Structure

```
.
├── .github/
│   ├── workflows/
│   │   ├── ci.yml              # Lint + type check + tests on every PR and push
│   │   └── release.yml         # Automated release on push to main
│   ├── ISSUE_TEMPLATE/
│   ├── pull_request_template.md
│   └── dependabot.yml          # Weekly auto-updates for pip + GitHub Actions
├── .githooks/
│   └── pre-commit              # Blocks direct commits to main/master (Unix)
├── src/
│   ├── ui/                     # Display and interaction only
│   ├── services/               # Business logic
│   └── repositories/           # DB and API access
├── tests/
│   └── conftest.py             # Shared pytest fixtures
├── docs/
│   └── ARCHITECTURE.md         # Layered architecture rules and examples
├── AGENTS.md                   # AI agent instructions (universal)
├── CLAUDE.md                   # Claude-specific instructions + Karpathy principles
├── CODEX.md                    # Codex-specific instructions + Windows git fix
├── STACK.md                    # ← Fill this for every project
├── PROMPTS.md                  # Reusable prompts for AI tasks
├── CONTRIBUTING.md
├── CHANGELOG.md                # Auto-generated by semantic-release
├── Makefile                    # make lint / test / fix / all
├── pyproject.toml              # Ruff, black, mypy, pytest, semantic-release config
├── .pre-commit-config.yaml     # pre-commit hooks (ruff, black, whitespace…)
├── .editorconfig               # Consistent indent/charset across editors
├── requirements.txt            # Runtime dependencies
└── requirements-dev.txt        # Dev dependencies
```

---

## 📄 License

MIT — see [LICENSE](LICENSE).
