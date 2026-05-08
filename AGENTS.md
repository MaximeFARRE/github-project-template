# AGENTS.md — Agent Operating Manual

Read this file before making any change.

---

## Stack

- TypeScript 5.7, Next.js 15 (App Router), React 19, Tailwind CSS
- pnpm workspaces + Turborepo monorepo
- Vitest for tests, ESLint + Prettier for linting/formatting
- Packages: `apps/web`, `packages/core`, `packages/content`, `packages/data`, `packages/ui`, `packages/config`

---

## Workflow

1. Read existing code and docs before touching anything.
2. `git branch` — never work on `main`.
3. Create a branch: `feat/`, `fix/`, `docs/`, `chore/`, `test/`.
4. Make small, focused changes. One concern per task.
5. Commit after each logical step.
6. Review `git diff` before finishing.

---

## Architecture

```
apps/web (UI / Pages / Components)
        ↓
packages/core (Services / Business Logic)
        ↓
packages/data (Repositories / Storage)
```

- **UI** (`apps/web`) = display and user interaction only. No business logic in React components.
- **Core** (`packages/core`) = all business logic, calculations, decisions. Pure TypeScript.
- **Data** (`packages/data`) = all persistence. Repository interfaces. Local storage → Supabase.
- **Content** (`packages/content`) = pedagogical content. Notions and micro-cards.
- **UI components** (`packages/ui`) = shared presentational components. No business logic.
- Never cross layers. Never put logic in UI. Never mix persistence and business logic.
- Reuse an existing service before creating a new one.
- Do not duplicate logic across files.

---

## Code quality

- Use explicit TypeScript types. No `any` unless justified.
- No magic strings or numbers — use named constants.
- No silent error handling: no empty `catch {}`, no swallowed exceptions.
- No `console.log()` in committed code.
- Functions do one thing. Max ~40 lines per function.
- Explicit, descriptive names. Avoid abbreviations.
- Validate inputs only at system boundaries (user input, external APIs). Trust internal code.
- No hardcoded credentials or secrets. Use environment variables.
- No TODO or FIXME in committed code — create a tracked issue instead.

---

## Changes

- Prefer targeted edits over full rewrites.
- Do not rewrite a file if a small edit is enough.
- Do not perform broad refactors unless explicitly requested.
- Do not modify unrelated files.
- Create a new file only if no existing file is suitable.
- Never rename or delete files without a clear reason.

---

## Commits

Format: `feat|fix|docs|chore|test: <what and why in one line>`

- One logical change = one commit.
- Never batch unrelated changes in one commit.
- Never leave many modified files uncommitted.

---

## Commands

```bash
pnpm install          # Install all dependencies
pnpm dev              # Start dev server
pnpm build            # Build all packages
pnpm lint             # Lint all packages
pnpm test             # Run all tests
pnpm format           # Check formatting
```

---

## Never do

- Commit directly to `main`.
- Invent implementation details without reading the code first.
- Silently change architecture.
- Create unnecessary files.
- Mix unrelated fixes in one task.
- Claim something was tested if it was not actually run.
- Put business logic in React components.
- Access data/storage directly from UI code.

---

## Definition of done

Before finishing:

- [ ] Correct branch used.
- [ ] Small logical commits made.
- [ ] `pnpm lint` passes.
- [ ] `pnpm test` passes.
- [ ] `git diff` reviewed — no unrelated changes, no debug code, no secrets.
- [ ] Documentation updated if behavior changed.
- [ ] No business logic in UI.
- [ ] No duplicated logic.
