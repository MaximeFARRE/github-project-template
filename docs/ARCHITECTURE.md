# Architecture

Ce projet suit une architecture en couches stricte dans un monorepo TypeScript.

---

## Regle fondamentale

```
apps/web (UI)
     ↓
packages/core (Logique metier)
     ↓
packages/data (Acces aux donnees)
```

Chaque couche a une responsabilite unique. Les dependances vont toujours dans une seule direction.

---

## 1. UI Layer — `apps/web`

Application Next.js (App Router).

Responsabilites :
- Afficher les donnees
- Gerer les interactions utilisateur
- Appeler les fonctions de `packages/core`
- Utiliser les composants de `packages/ui`

Interdictions :
- Pas de logique metier (calculs, decisions, validation business)
- Pas d'acces direct au stockage ou aux APIs externes
- Pas de duplication de regles de calcul

Bon exemple :
```tsx
const progress = processAnswer(userProgress, { cardId, quality: 4 });
```

Mauvais exemple :
```tsx
const xp = quality >= 3 ? quality * 5 : 0;
localStorage.setItem("progress", JSON.stringify({ ...progress, xp }));
```

---

## 2. Core Layer — `packages/core`

Logique metier pure, sans dependance React ni navigateur.

Contient :
- `learning/spaced-repetition.ts` — algorithme de repetition espacee (SM-2)
- `learning/progression.ts` — calcul XP, streak, bonus
- `learning/session-engine.ts` — selection des cartes, traitement des reponses
- `levels/level-engine.ts` — systeme de niveaux et titres
- `types/` — types metier (Card, Notion, UserProgress, etc.)

Regles :
- TypeScript pur, pas de dependance framework
- Fonctions pures autant que possible
- Testable en isolation avec Vitest

---

## 3. Data Layer — `packages/data`

Acces aux donnees via le pattern Repository.

Contient :
- `progress-repository.ts` — interface `ProgressRepository`
- `local-storage-progress-repository.ts` — implementation localStorage (V1)

Objectif : pouvoir passer a Supabase en creant une nouvelle implementation sans modifier le reste de l'app.

---

## 4. Content — `packages/content`

Contenus pedagogiques separes du code applicatif.

Chaque notion est decoupee en micro-cartes :
- Definition
- Intuition
- Exemple
- Formule / mecanisme
- Piege classique
- Question d'entretien
- Reponse modele

Categories : market-finance, corporate-finance, private-equity, accounting, programming.

---

## 5. UI Components — `packages/ui`

Composants React reutilisables et presentationnels.

- `ProgressBar` — barre de progression accessible
- `Badge` — badge colore avec variantes
- `FlipCard` — carte retournable pour l'apprentissage

Pas de logique metier dans ces composants.

---

## 6. Config — `packages/config`

Configurations partagees :
- ESLint (base + Next.js)
- Prettier
- TypeScript (base + Next.js)

---

## Direction des dependances

```
apps/web → packages/core, packages/content, packages/data, packages/ui
packages/content → packages/core (types)
packages/data → packages/core (types)
packages/ui → packages/core (types), react
packages/core → rien (autonome)
packages/config → rien (autonome)
```

Interdit :
```
packages/core → apps/web
packages/data → apps/web
packages/core → packages/data (le core ne sait pas comment les donnees sont stockees)
```

---

## Politique de refactoring

- Changement minimal possible
- Pas de gros refactor pendant le developpement de features
- Si un refactor est necessaire : documenter, decouper en petits commits, garder le comportement identique
