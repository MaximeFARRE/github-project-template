import { describe, it, expect } from "vitest";
import { selectSessionCards, processAnswer } from "./session-engine.js";
import { createInitialProgress } from "../types/user-progress.js";
import type { Card } from "../types/card.js";

const NOW = new Date("2025-01-15T10:00:00Z");

function makeCard(id: string): Card {
  return {
    id,
    notionId: "test-notion",
    type: "definition",
    category: "market-finance",
    question: `Question ${id}`,
    answer: `Answer ${id}`,
    difficulty: 1,
    tags: [],
  };
}

describe("selectSessionCards", () => {
  it("selects new cards when no progress exists", () => {
    const cards = Array.from({ length: 20 }, (_, i) => makeCard(`card-${i}`));
    const progress = createInitialProgress("user-1");
    const selected = selectSessionCards(cards, progress, 10, NOW);
    expect(selected).toHaveLength(10);
  });

  it("returns all cards when fewer than session size", () => {
    const cards = [makeCard("card-1"), makeCard("card-2")];
    const progress = createInitialProgress("user-1");
    const selected = selectSessionCards(cards, progress, 10, NOW);
    expect(selected).toHaveLength(2);
  });

  it("returns empty array when no cards available", () => {
    const progress = createInitialProgress("user-1");
    const selected = selectSessionCards([], progress, 10, NOW);
    expect(selected).toHaveLength(0);
  });
});

describe("processAnswer", () => {
  it("adds XP for correct answer", () => {
    const progress = createInitialProgress("user-1");
    const updated = processAnswer(progress, { cardId: "card-1", quality: 4 }, NOW);
    expect(updated.xp).toBeGreaterThan(0);
  });

  it("creates card progress for new card", () => {
    const progress = createInitialProgress("user-1");
    const updated = processAnswer(progress, { cardId: "card-1", quality: 3 }, NOW);
    expect(updated.cards["card-1"]).toBeDefined();
    expect(updated.cards["card-1"]!.repetitions).toBe(1);
  });

  it("updates lastSessionAt", () => {
    const progress = createInitialProgress("user-1");
    const updated = processAnswer(progress, { cardId: "card-1", quality: 4 }, NOW);
    expect(updated.lastSessionAt).toEqual(NOW);
  });

  it("does not add XP for quality 0", () => {
    const progress = createInitialProgress("user-1");
    const updated = processAnswer(progress, { cardId: "card-1", quality: 0 }, NOW);
    expect(updated.xp).toBe(0);
  });
});
