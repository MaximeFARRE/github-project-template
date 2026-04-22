# AI_WORKFLOW.md

# AI Workflow

This project may use AI coding assistants such as :contentReference[oaicite:0]{index=0}, :contentReference[oaicite:1]{index=1}, or similar tools.

AI is used to accelerate development, not to replace architectural decisions or code review.

Every AI-generated change must follow the rules below.

---

## Required Reading

Before making any change, the AI agent must read:

- `AGENTS.md`
- `CLAUDE.md`
- `docs/ARCHITECTURE.md`
- `docs/DEVELOPMENT.md`

The agent must follow these files as the source of truth.

---

## Mandatory Rules

- Never work on `main`
- Always create or use a dedicated branch
- Make the smallest possible change
- Preserve the existing architecture
- Reuse existing files before creating new ones
- Never rewrite a file entirely if a small edit is enough
- Never mix unrelated changes

Allowed branch names:

```text id="9x0o73"
feat/<description>
fix/<description>
docs/<description>
chore/<description>
test/<description>
refactor/<description>
````

---

## Architecture Rule

The project must always follow:

```text id="h5kgch"
UI → Services → Repository / DB
```

AI agents must never:

* Put business logic in UI files
* Put SQL or API calls in UI files
* Put business logic in repositories
* Duplicate existing logic

When unsure:

* UI = display and interaction
* Service = business rules and decisions
* Repository = data access

---

## Preferred AI Workflow

Recommended process:

1. Read the relevant files
2. Understand the architecture
3. Make one small change
4. Test it
5. Commit it
6. Continue with the next step

Example:

```text id="wzwihm"
1. Create branch feat/add-import-service
2. Add import_service.py
3. Commit
4. Update README
5. Commit
6. Add tests
7. Commit
```

---

## Commit Discipline

AI agents must commit frequently.

One logical change = one commit.

Examples:

```text id="j8e4it"
feat: add transaction import service
fix: prevent duplicate email validation
docs: update README setup section
refactor: move calculation logic into service layer
```

Avoid:

```text id="0qgmzq"
feat: add feature, update docs, refactor services, fix tests
```

---

## Allowed Modifications

The AI agent may:

* Update documentation
* Add missing files
* Improve project structure
* Add tests
* Refactor small isolated sections
* Update `.gitignore`, `requirements.txt`, `package.json`, etc.

The AI agent must not:

* Perform large uncontrolled refactors
* Rename many files unnecessarily
* Delete code unless explicitly requested
* Modify unrelated files
* Change the project's business behavior without clear instruction

---

## Before Finishing

The AI agent must:

```bash id="j57b0h"
git status
git diff
```

Then verify:

* Only intended files were modified
* No secrets are included
* The branch is correct
* The code still works
* Documentation is up to date

Recommended checks:

```bash id="tt86p7"
pytest
npm test
npm run lint
```

Adapt to the project stack.

---

## If the Project Is a School or Legacy Project

For school projects or archived projects:

* Do not rewrite the project
* Keep the original code structure
* Only improve documentation and repository quality
* Avoid deleting dead code unless explicitly requested
* Prefer small, non-invasive improvements

Typical allowed changes:

* Better `README.md`
* Better `.gitignore`
* Better `requirements.txt`
* Add `CONTRIBUTING.md`
* Add screenshots
* Add architecture documentation

The goal is to make the repository look professional without changing the original work.

```
```
