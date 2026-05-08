import type { Category } from "./category.js";

export type CardType =
  | "definition"
  | "intuition"
  | "example"
  | "formula"
  | "trap"
  | "interview-question"
  | "model-answer";

export interface Card {
  id: string;
  notionId: string;
  type: CardType;
  category: Category;
  question: string;
  answer: string;
  difficulty: 1 | 2 | 3;
  tags: string[];
}
