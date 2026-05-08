import type { Notion } from "@finance-app/core";
import { straddle } from "./notions/market-finance/straddle.js";

export const allNotions: Notion[] = [straddle];

export function getNotionBySlug(slug: string): Notion | undefined {
  return allNotions.find((n) => n.slug === slug);
}

export function getNotionsByCategory(category: string): Notion[] {
  return allNotions.filter((n) => n.category === category);
}

export { straddle };
