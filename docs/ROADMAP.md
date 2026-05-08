# Roadmap

---

## V1 — MVP Fonctionnel

Objectif : une app web utilisable pour reviser les notions de finance avec des micro-cartes.

### Infrastructure
- [x] Monorepo TypeScript (pnpm + Turborepo)
- [x] CI/CD (GitHub Actions : lint, test, build, release)
- [x] Pre-commit hooks (Husky + lint-staged)
- [x] Architecture en couches (UI → Core → Data)
- [ ] Deploiement (Vercel)

### Core
- [x] Types metier (Card, Notion, UserProgress)
- [x] Moteur de repetition espacee (SM-2)
- [x] Systeme de progression (XP, streak)
- [x] Systeme de niveaux (titres finance)
- [x] Moteur de session (selection de cartes, traitement des reponses)
- [ ] Statistiques de session (taux de reussite, temps moyen)

### Contenu
- [x] Structure de notion avec 7 types de micro-cartes
- [x] Exemple : Straddle (finance de marche)
- [ ] 5-10 notions supplementaires par categorie
- [ ] Validation du contenu

### UI
- [x] Composants de base (ProgressBar, Badge, FlipCard)
- [ ] Page d'accueil avec categories
- [ ] Page de session d'apprentissage
- [ ] Page de progression utilisateur
- [ ] Responsive design (mobile-first)
- [ ] PWA (manifest, service worker)

### Data
- [x] Interface ProgressRepository
- [x] Implementation localStorage
- [ ] Supabase (authentification + persistence)

---

## V2 — Ameliorations

- [ ] shadcn/ui pour les composants
- [ ] Animations et transitions
- [ ] Mode sombre
- [ ] Recherche de notions
- [ ] Filtrage par categorie et difficulte
- [ ] Statistiques detaillees
- [ ] Gamification avancee (badges, achievements)
- [ ] Playwright pour les tests E2E

---

## Hors scope (pour le moment)

- Application desktop (Tauri)
- Reponses orales
- IA generative pour les questions
- Multi-tenant / mode equipe
