<div align="center">

# Finance Learning App

**Application web d'apprentissage pour preparer les entretiens techniques en finance.**

Micro-cartes, repetition espacee, progression gamifiee.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-9-orange.svg)](https://pnpm.io/)
[![CI](https://github.com/MaximeFARRE/finance-learning-app/actions/workflows/ci.yml/badge.svg)](https://github.com/MaximeFARRE/finance-learning-app/actions/workflows/ci.yml)

</div>

---

## Objectif

Apprendre les notions essentielles pour reussir les entretiens techniques en :

- **Finance de marche** (options, pricing, grecs, strategies)
- **Corporate Finance** (DCF, multiples, LBO)
- **Private Equity** (due diligence, valorisation, retours)
- **Comptabilite** (bilan, P&L, cash-flow)
- **Programmation** (Python, SQL, structures de donnees)

Chaque notion est decoupee en **micro-cartes** : definition, intuition, exemple, formule, piege classique, question d'entretien, reponse modele.

---

## Stack

| Outil | Role |
|---|---|
| [TypeScript](https://www.typescriptlang.org/) | Langage |
| [Next.js 15](https://nextjs.org/) | Framework web (App Router) |
| [React 19](https://react.dev/) | UI |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [Turborepo](https://turbo.build/) | Monorepo build system |
| [pnpm](https://pnpm.io/) | Package manager |
| [Vitest](https://vitest.dev/) | Tests unitaires |
| [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) | Lint & format |
| [Husky](https://typicode.github.io/husky/) + lint-staged | Pre-commit hooks |
| [GitHub Actions](https://github.com/features/actions) | CI/CD |
| [semantic-release](https://semantic-release.gitbook.io/) | Versioning automatique |

---

## Architecture

```
apps/
  web/                  → Application Next.js (routes, pages, layout)
packages/
  core/                 → Logique metier pure (progression, niveaux, repetition espacee)
  content/              → Contenus pedagogiques (notions, micro-cartes)
  data/                 → Acces aux donnees (repositories, local storage → Supabase)
  ui/                   → Composants React reutilisables
  config/               → Configs partagees (ESLint, Prettier, TypeScript)
docs/                   → Documentation technique
```

**Regle stricte :**

```
UI → Core/Services → Repositories/Data
```

Voir [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) pour les details.

---

## Demarrage rapide

```bash
# Prerequis : Node.js >= 20, pnpm >= 9
pnpm install
pnpm dev        # Demarre le serveur de dev Next.js
```

Commandes utiles :

```bash
pnpm build      # Build tous les packages
pnpm lint       # Lint tous les packages
pnpm test       # Tests unitaires
pnpm format     # Verifie le formatage
```

Voir [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) pour le workflow complet.

---

## Documentation

| Document | Contenu |
|---|---|
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | Architecture en couches, regles de dependance |
| [DEVELOPMENT.md](docs/DEVELOPMENT.md) | Installation, commandes, workflow de dev |
| [ROADMAP.md](docs/ROADMAP.md) | Plan V1 et prochaines etapes |
| [AI_WORKFLOW.md](docs/AI_WORKFLOW.md) | Regles pour agents IA |

---

## License

MIT — voir [LICENSE](LICENSE).
