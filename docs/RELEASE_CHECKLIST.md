````md id="o3z7hq"
# RELEASE_CHECKLIST.md

# Release Checklist

Use this checklist before creating a release, publishing the project, or sharing it with recruiters, collaborators, or clients.

---

## Code State

- [ ] The project builds and runs correctly
- [ ] No major bugs are known
- [ ] No temporary code remains
- [ ] No unfinished experimental files remain
- [ ] No debug code remains

Examples to remove if possible:

```text id="b6h9yo"
console.log(...)
print(...)
TODO temporary
test_final_v2.py
````

---

## Branches and Commits

* [ ] Work was done on a dedicated branch
* [ ] The branch was merged cleanly into `main`
* [ ] Commits are small and readable
* [ ] Commit messages follow Conventional Commits

Good examples:

```text id="3d7e9q"
feat: add CSV import service
fix: correct date parsing
docs: improve README installation section
```

Bad examples:

```text id="c3a7o5"
update
last version
fix stuff
```

---

## Tests

* [ ] Existing tests pass
* [ ] Critical features were tested manually
* [ ] No obvious regression was introduced

Recommended commands:

```bash id="0c4r5w"
# Python
pytest

# Node.js
npm test

# Linting
ruff check .
black .
npm run lint
```

Adapt the commands to the current stack.

---

## Documentation

* [ ] `README.md` is complete and up to date
* [ ] Screenshots are recent
* [ ] `docs/ARCHITECTURE.md` is correct
* [ ] `docs/ROADMAP.md` is updated
* [ ] `CHANGELOG.md` is updated if relevant
* [ ] Installation instructions still work

---

## Secrets and Sensitive Data

* [ ] No `.env` file is committed
* [ ] No API keys, tokens, or passwords are present
* [ ] `.env.example` exists and is up to date
* [ ] Sensitive files are ignored by `.gitignore`

Quick check:

```bash id="lk3c3w"
git status
git diff
```

---

## Repository Presentation

* [ ] The repository name is professional
* [ ] A repository description is set on GitHub
* [ ] Topics/tags are configured
* [ ] The correct license is included
* [ ] The latest commit history looks clean

---

## Optional Release Tag

If you want to create a versioned release:

```bash id="3l7d0i"
git tag -a v1.0.0 -m "First stable release"
git push origin v1.0.0
```

Suggested version format:

```text id="m7h8vz"
v1.0.0
v1.1.0
v2.0.0
```

* Major version = breaking change
* Minor version = new feature
* Patch version = bug fix

---

## Final Question

Before publishing or sharing the project:

* [ ] Would you be comfortable showing this repository to a recruiter or senior developer?
* [ ] Does the repository look clean, documented, and maintainable?
* [ ] Could another developer understand the project in less than 5 minutes?

```
```
