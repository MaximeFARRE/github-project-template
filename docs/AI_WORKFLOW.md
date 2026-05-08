# AI Workflow

Regles pour les agents IA (Claude, Codex, Cursor) travaillant sur ce projet.

---

## Avant de commencer

1. Lire `AGENTS.md` (regles universelles).
2. Lire `CLAUDE.md` (regles specifiques Claude Code).
3. Lire `docs/ARCHITECTURE.md` (architecture en couches).
4. Verifier la branche : `git branch` — jamais `main`.

---

## Regles strictes

### Architecture
- **UI → Core → Data** : respecter la direction des dependances.
- **Pas de logique metier dans les composants React.**
- **Pas d'acces direct au stockage depuis l'UI.**
- Utiliser les fonctions de `packages/core` pour toute logique.
- Utiliser `packages/data` pour toute persistence.

### Code
- TypeScript strict. Pas de `any` sauf justification.
- Fonctions pures dans `packages/core`.
- Un fichier = une responsabilite.
- Pas de `console.log()` dans le code commite.

### Changements
- Lire le code existant avant de modifier.
- Plus petit changement possible.
- Un commit = un changement logique.
- Pas de refactor non demande.
- Pas de fichier inutile.

---

## Ou mettre le code

| Type de code | Package |
|---|---|
| Route, page, layout | `apps/web/src/app/` |
| Composant React reutilisable | `packages/ui/src/` |
| Logique metier (calcul, validation, algorithme) | `packages/core/src/` |
| Type metier (Card, Notion, UserProgress) | `packages/core/src/types/` |
| Notion pedagogique | `packages/content/src/notions/<category>/` |
| Interface de repository | `packages/data/src/` |
| Implementation de stockage | `packages/data/src/` |
| Config ESLint/Prettier/TS | `packages/config/` |

---

## Ajouter une nouvelle notion

1. Creer un fichier dans `packages/content/src/notions/<category>/<slug>.ts`.
2. Definir un objet `Notion` avec ses micro-cartes (7 types).
3. Exporter depuis `packages/content/src/index.ts`.
4. Les types `Notion` et `Card` sont dans `@finance-app/core`.

---

## Ajouter une feature au core

1. Creer le fichier dans `packages/core/src/<module>/`.
2. Exporter depuis `packages/core/src/index.ts`.
3. Ecrire les tests dans `packages/core/src/<module>/<nom>.test.ts`.
4. Verifier : `pnpm test`, `pnpm lint`, `pnpm build`.

---

## Verifications avant de terminer

```bash
pnpm lint       # ESLint
pnpm test       # Vitest
pnpm build      # Build complet
pnpm format     # Prettier
git diff        # Pas de changements non voulus
```
