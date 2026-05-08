# Development Workflow

---

## Prerequis

- Node.js >= 20
- pnpm >= 9 (`npm install -g pnpm`)

---

## Installation

```bash
git clone https://github.com/MaximeFARRE/finance-learning-app.git
cd finance-learning-app
pnpm install
```

---

## Commandes

| Commande | Action |
|---|---|
| `pnpm dev` | Demarre le serveur de dev Next.js |
| `pnpm build` | Build tous les packages |
| `pnpm lint` | Lint tous les packages (ESLint) |
| `pnpm lint:fix` | Lint + auto-fix |
| `pnpm format` | Verifie le formatage (Prettier) |
| `pnpm format:fix` | Formate tous les fichiers |
| `pnpm test` | Lance les tests (Vitest) |
| `pnpm type-check` | Verifie les types TypeScript |
| `pnpm clean` | Nettoie les builds |

---

## Workflow de developpement

### 1. Jamais sur `main`

```bash
git checkout -b feat/ma-feature
```

Patterns de branche autorises :
- `feat/<description>`
- `fix/<description>`
- `docs/<description>`
- `chore/<description>`
- `test/<description>`

### 2. Lire avant de modifier

Avant de toucher a un fichier :
- Lire l'implementation existante
- Verifier si la logique existe deja ailleurs
- Consulter `docs/ARCHITECTURE.md`

### 3. Petits commits logiques

```bash
git add packages/core/src/learning/progression.ts
git commit -m "feat: add streak bonus calculation"
```

### 4. Verifier avant de push

```bash
pnpm lint
pnpm test
pnpm build
git diff
```

---

## Structure du monorepo

```
finance-learning-app/
  apps/
    web/                → Application Next.js
  packages/
    core/               → Logique metier pure
    content/            → Contenus pedagogiques
    data/               → Acces aux donnees (repositories)
    ui/                 → Composants React partages
    config/             → Configs partagees (ESLint, Prettier, TS)
  docs/                 → Documentation technique
  turbo.json            → Pipeline Turborepo
  pnpm-workspace.yaml   → Definition du workspace pnpm
  package.json          → Scripts racine, devDependencies
  tsconfig.base.json    → Config TypeScript de base
```

---

## Conventions de nommage

| Element | Convention | Exemple |
|---|---|---|
| Fichiers TS | kebab-case | `spaced-repetition.ts` |
| Composants React | PascalCase | `FlipCard.tsx` → `flip-card.tsx` |
| Types/Interfaces | PascalCase | `UserProgress`, `CardProgress` |
| Fonctions | camelCase | `computeXpGain`, `selectSessionCards` |
| Constantes | UPPER_SNAKE_CASE | `DEFAULT_SESSION_SIZE` |
| Branches | prefix/kebab-case | `feat/add-straddle-notion` |
| Commits | Conventional Commits | `feat: add streak bonus calculation` |

---

## Commits conventionnels

| Prefix | Usage | Bump |
|---|---|---|
| `feat:` | Nouvelle feature | minor |
| `fix:` | Bug fix | patch |
| `docs:` | Documentation | aucun |
| `chore:` | Maintenance | aucun |
| `test:` | Ajout de tests | aucun |
| `refactor:` | Refactoring | aucun |

---

## Pre-commit hooks

Husky + lint-staged executent automatiquement avant chaque commit :
- ESLint (fix automatique)
- Prettier (formatage automatique)
- Blocage des commits directs sur `main`/`master`
