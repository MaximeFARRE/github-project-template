import type { Notion } from "@finance-app/core";

export const straddle: Notion = {
  id: "mf-straddle",
  slug: "straddle",
  title: "Straddle",
  category: "market-finance",
  description: "Stratégie d'options combinant un call et un put de même strike et même maturité.",
  prerequisites: ["mf-call-option", "mf-put-option"],
  cards: [
    {
      id: "mf-straddle-definition",
      notionId: "mf-straddle",
      type: "definition",
      category: "market-finance",
      question: "Qu'est-ce qu'un straddle ?",
      answer:
        "Un straddle est une stratégie d'options qui consiste à acheter simultanément un call et un put sur le même sous-jacent, avec le même strike et la même date d'expiration.",
      difficulty: 1,
      tags: ["options", "volatilité", "stratégies"],
    },
    {
      id: "mf-straddle-intuition",
      notionId: "mf-straddle",
      type: "intuition",
      category: "market-finance",
      question: "Quelle est l'intuition derrière l'achat d'un straddle ?",
      answer:
        "On achète un straddle quand on anticipe un mouvement fort du sous-jacent, sans savoir dans quelle direction. On parie sur la volatilité, pas sur la direction.",
      difficulty: 1,
      tags: ["options", "volatilité"],
    },
    {
      id: "mf-straddle-formula",
      notionId: "mf-straddle",
      type: "formula",
      category: "market-finance",
      question: "Quel est le payoff d'un long straddle à l'expiration ?",
      answer:
        "Payoff = max(S - K, 0) + max(K - S, 0) - Prime call - Prime put = |S - K| - Prime totale. Le breakeven est atteint quand |S - K| = Prime totale.",
      difficulty: 2,
      tags: ["options", "payoff", "formules"],
    },
    {
      id: "mf-straddle-example",
      notionId: "mf-straddle",
      type: "example",
      category: "market-finance",
      question:
        "Action à 100€, call strike 100 à 5€, put strike 100 à 4€. Quel est le P&L si l'action va à 115€ ?",
      answer:
        "Call: max(115-100, 0) = 15€. Put: max(100-115, 0) = 0€. P&L = 15 + 0 - 5 - 4 = +6€ par action.",
      difficulty: 2,
      tags: ["options", "calcul", "P&L"],
    },
    {
      id: "mf-straddle-trap",
      notionId: "mf-straddle",
      type: "trap",
      category: "market-finance",
      question: "Quel est le piège classique avec un straddle ?",
      answer:
        "Le piège est d'oublier que le straddle coûte cher (deux primes). Si la volatilité réalisée est inférieure à la volatilité implicite pricée dans les options, le straddle perd de l'argent même si le sous-jacent bouge.",
      difficulty: 2,
      tags: ["options", "pièges", "volatilité implicite"],
    },
    {
      id: "mf-straddle-interview",
      notionId: "mf-straddle",
      type: "interview-question",
      category: "market-finance",
      question: "Quand achèteriez-vous un straddle plutôt qu'un strangle ?",
      answer:
        "On préfère un straddle quand on s'attend à un mouvement très fort et imminent (résultats, annonce). Le straddle est plus cher mais profite dès le premier point de mouvement au-delà du breakeven. Le strangle est moins cher mais nécessite un mouvement plus important pour être profitable.",
      difficulty: 3,
      tags: ["options", "entretien", "stratégies"],
    },
    {
      id: "mf-straddle-model-answer",
      notionId: "mf-straddle",
      type: "model-answer",
      category: "market-finance",
      question: "Expliquez le profil de risque d'un long straddle en entretien.",
      answer:
        "Un long straddle a une perte maximale limitée à la prime totale payée, atteinte si le sous-jacent reste exactement au strike. Le gain est théoriquement illimité à la hausse et limité au strike moins la prime à la baisse. C'est une position longue en gamma et en vega : elle profite d'un mouvement fort du sous-jacent et/ou d'une hausse de la volatilité implicite. Le theta joue contre nous car les deux options perdent de la valeur temps chaque jour.",
      difficulty: 3,
      tags: ["options", "entretien", "grecs"],
    },
  ],
};
