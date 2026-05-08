import { describe, it, expect } from "vitest";
import { computeNextReview, createInitialCardProgress, isDueForReview } from "./spaced-repetition.js";

const NOW = new Date("2025-01-15T10:00:00Z");

describe("createInitialCardProgress", () => {
  it("creates progress with default values", () => {
    const progress = createInitialCardProgress("card-1", NOW);
    expect(progress.cardId).toBe("card-1");
    expect(progress.repetitions).toBe(0);
    expect(progress.easeFactor).toBe(2.5);
    expect(progress.interval).toBe(0);
    expect(progress.nextReviewAt).toEqual(NOW);
    expect(progress.lastReviewedAt).toBeNull();
  });
});

describe("computeNextReview", () => {
  it("resets repetitions on quality < 3", () => {
    const initial = createInitialCardProgress("card-1", NOW);
    const result = computeNextReview(initial, 1, NOW);
    expect(result.repetitions).toBe(0);
    expect(result.interval).toBe(1);
  });

  it("sets interval to 1 on first successful review", () => {
    const initial = createInitialCardProgress("card-1", NOW);
    const result = computeNextReview(initial, 4, NOW);
    expect(result.repetitions).toBe(1);
    expect(result.interval).toBe(1);
  });

  it("sets interval to 6 on second successful review", () => {
    const afterFirst = computeNextReview(createInitialCardProgress("card-1", NOW), 4, NOW);
    const result = computeNextReview(afterFirst, 4, NOW);
    expect(result.repetitions).toBe(2);
    expect(result.interval).toBe(6);
  });

  it("increases interval with ease factor on subsequent reviews", () => {
    let progress = createInitialCardProgress("card-1", NOW);
    progress = computeNextReview(progress, 5, NOW);
    progress = computeNextReview(progress, 5, NOW);
    progress = computeNextReview(progress, 5, NOW);
    expect(progress.repetitions).toBe(3);
    expect(progress.interval).toBeGreaterThan(6);
  });

  it("never drops ease factor below 1.3", () => {
    let progress = createInitialCardProgress("card-1", NOW);
    for (let i = 0; i < 10; i++) {
      progress = computeNextReview(progress, 0, NOW);
    }
    expect(progress.easeFactor).toBeGreaterThanOrEqual(1.3);
  });

  it("updates lastReviewedAt to now", () => {
    const initial = createInitialCardProgress("card-1", NOW);
    const result = computeNextReview(initial, 4, NOW);
    expect(result.lastReviewedAt).toEqual(NOW);
  });
});

describe("isDueForReview", () => {
  it("returns true for new cards", () => {
    const progress = createInitialCardProgress("card-1", NOW);
    expect(isDueForReview(progress, NOW)).toBe(true);
  });

  it("returns false when review is in the future", () => {
    const progress = createInitialCardProgress("card-1", NOW);
    const reviewed = computeNextReview(progress, 5, NOW);
    expect(isDueForReview(reviewed, NOW)).toBe(false);
  });

  it("returns true when nextReviewAt has passed", () => {
    const progress = createInitialCardProgress("card-1", NOW);
    const reviewed = computeNextReview(progress, 5, NOW);
    const futureDate = new Date("2025-01-20T10:00:00Z");
    expect(isDueForReview(reviewed, futureDate)).toBe(true);
  });
});
