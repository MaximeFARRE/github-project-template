# Contributing

Merci de contribuer a ce projet.

---

## Setup

```bash
git clone https://github.com/MaximeFARRE/finance-learning-app.git
cd finance-learning-app
pnpm install
```

Prerequis : Node.js >= 20, pnpm >= 9.

---

## Branches

Jamais sur `main`. Utiliser une branche dediee :

| Type | Pattern |
|---|---|
| Feature | `feat/<description>` |
| Bug fix | `fix/<description>` |
| Documentation | `docs/<description>` |
| Maintenance | `chore/<description>` |
| Tests | `test/<description>` |

---

## Commits

Conventional Commits :

```
feat: add streak bonus calculation
fix: correct XP gain for quality 2
docs: update ROADMAP with V2 plans
test: add spaced repetition unit tests
```

Un commit = un changement logique.

---

## Architecture

```
apps/web (UI) → packages/core (Logique) → packages/data (Donnees)
```

- Pas de logique metier dans les composants React
- Pas d'acces direct au stockage depuis l'UI
- Voir `docs/ARCHITECTURE.md`

---

## Avant de soumettre

```bash
pnpm lint
pnpm test
pnpm build
```

- [ ] Branche correcte (pas `main`)
- [ ] Commits propres
- [ ] Pas de fichiers non lies modifies
- [ ] Documentation mise a jour si necessaire
- [ ] Architecture respectee
