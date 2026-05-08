import type { Card } from "./card.js";
import type { Category } from "./category.js";

export interface Notion {
  id: string;
  slug: string;
  title: string;
  category: Category;
  description: string;
  cards: Card[];
  prerequisites: string[];
}
