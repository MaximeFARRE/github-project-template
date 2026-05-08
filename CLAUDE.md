# CLAUDE.md

Read `AGENTS.md` before any change.

## Principles

- **Think first** — state assumptions explicitly. If uncertain, ask. If a simpler approach exists, say so.
- **Minimum code** — no features beyond what was asked. Nothing speculative. If it could be 50 lines, don't write 200.
- **Surgical changes** — touch only what the task requires. Don't improve adjacent code, don't fix unrelated things.
- **Verify goals** — define what "done" looks like before starting. Loop until verified.

## Workflow

1. `git branch` — never work on `main`.
2. Branch: `feat/`, `fix/`, `docs/`, `chore/`, `test/`.
3. Read existing files before editing.
4. Smallest possible change. No unrelated edits.
5. Commit after each logical step.
6. `git diff` before finishing.

## Stack

- **Language**: TypeScript 5.7
- **Framework**: Next.js 15 (App Router)
- **UI**: React 19 + Tailwind CSS
- **Monorepo**: pnpm workspaces + Turborepo
- **Tests**: Vitest
- **Lint**: ESLint + Prettier
- **Package manager**: pnpm

## Architecture

```
UI (apps/web) → Core/Services (packages/core) → Repositories/Data (packages/data)
```

- UI = display and interaction only. No business logic in React components.
- Core = all business logic, calculations, decisions. Pure TypeScript, no React dependencies.
- Data = all persistence. Repository pattern. Local storage now, Supabase later.
- Content = pedagogical content, separate from app code.
- Never cross layers. Never duplicate logic.

## Monorepo packages

| Package | Role |
|---|---|
| `apps/web` | Next.js application (routes, pages, layout) |
| `packages/core` | Business logic (progression, spaced repetition, levels) |
| `packages/content` | Notions and micro-cards data |
| `packages/data` | Repository interfaces + implementations |
| `packages/ui` | Shared React components |
| `packages/config` | ESLint, Prettier, TypeScript shared configs |

## Code quality

- Explicit types. No `any` unless justified. No magic values — use named constants.
- No empty catch blocks, no silent failures.
- No `console.log()` in committed code.
- One responsibility per function. Explicit names. Functions <= 40 lines.
- Validate only at system boundaries (user input, external APIs).
- No hardcoded credentials. No TODO/FIXME in committed code.

## Commands

```bash
pnpm install          # Install all dependencies
pnpm dev              # Start dev server
pnpm build            # Build all packages
pnpm lint             # Lint all packages
pnpm test             # Run all tests
pnpm format           # Check formatting
pnpm format:fix       # Fix formatting
```

## Commits

`feat|fix|docs|chore|test: <what and why>`
One logical change = one commit. Never batch unrelated changes.

## Before finishing

- [ ] Tests pass (`pnpm test`).
- [ ] Lint passes (`pnpm lint`).
- [ ] `git diff` reviewed — no unrelated changes, no debug code, no secrets.
- [ ] Documentation updated if behavior changed.
