# GITHUB_CHECKLIST.md

# GitHub Repository Checklist

Use this checklist before making the repository public or sharing it with recruiters, collaborators, or clients.

---

## Repository Name

- [ ] The repository name is clear and professional
- [ ] The repository name uses lowercase and hyphens if needed
- [ ] The repository name reflects the actual project

Examples:

```text id="9lq1za"
good:
portfolio-tracker
finance-dashboard
airbnb-price-prediction

bad:
project-final-v2
test123
school-project-last-version
````

---

## Repository Visibility

* [ ] The correct repositories are public
* [ ] Private or unfinished repositories remain private
* [ ] No confidential client or school material is exposed

---

## README

* [ ] `README.md` exists
* [ ] The README is written in English
* [ ] The project description is clear
* [ ] Features are listed
* [ ] Installation instructions are included
* [ ] Usage instructions are included
* [ ] Screenshots are present if relevant
* [ ] The tech stack is listed
* [ ] The project structure is explained
* [ ] The license is mentioned

---

## Documentation

* [ ] `docs/ARCHITECTURE.md` exists
* [ ] `docs/DEVELOPMENT.md` exists
* [ ] `docs/ROADMAP.md` exists
* [ ] `CHANGELOG.md` exists if relevant
* [ ] Documentation is up to date

---

## Secrets and Sensitive Files

* [ ] No `.env` file is committed
* [ ] No API keys, tokens, passwords, or secrets are present
* [ ] `.env.example` exists
* [ ] Sensitive files are included in `.gitignore`

Recommended:

```text id="gl0d0j"
.env
.env.local
*.pem
*.key
secrets.json
```

---

## .gitignore

* [ ] `.gitignore` exists
* [ ] Local environment files are ignored
* [ ] Build artifacts are ignored
* [ ] IDE files are ignored
* [ ] OS-generated files are ignored

Typical ignored files:

```text id="9ejrmo"
__pycache__/
.venv/
.pytest_cache/
node_modules/
dist/
build/
.vscode/
.idea/
.DS_Store
Thumbs.db
```

---

## Code Quality

* [ ] The project still runs
* [ ] No broken imports remain
* [ ] Dead debug prints or temporary code are removed if possible
* [ ] The architecture is still respected

Architecture reminder:

```text id="55otv9"
UI → Services → Repository / DB
```

---

## Git History

* [ ] Commit messages are clean and readable
* [ ] The latest commits use Conventional Commits
* [ ] There are no commits such as:

```text id="zz7jpv"
fix
update
test
final version
last commit
```

Prefer:

```text id="jrd2qe"
feat: add import validation
fix: correct duplicate detection
docs: improve README
```

---

## Branches

* [ ] `main` is clean and stable
* [ ] Old branches have been deleted if no longer needed
* [ ] Work was not done directly on `main`

---

## Repository Presentation

* [ ] A short description was added on GitHub
* [ ] Relevant topics/tags were added
* [ ] The correct website or demo link is present if available
* [ ] A professional license is included

Examples of useful topics:

```text id="jg9r1r"
python
typescript
finance
machine-learning
react
sqlite
portfolio
```

---

## Final Verification

Before making the repository public:

```bash id="s1ns9g"
git status
git log --oneline -10
```

Final questions:

* [ ] Would another developer understand this project quickly?
* [ ] Would you be comfortable showing this repository during an interview?
* [ ] Does the repository look clean, organized, and intentional?

```
```
