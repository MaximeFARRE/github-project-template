import { describe, it, expect } from "vitest";
import { computeXpGain, updateStreak } from "./progression.js";
import { createInitialProgress } from "../types/user-progress.js";

describe("computeXpGain", () => {
  it("returns 0 for quality 0 and 1", () => {
    expect(computeXpGain(0, 1)).toBe(0);
    expect(computeXpGain(1, 1)).toBe(0);
  });

  it("returns base XP for low streak", () => {
    expect(computeXpGain(3, 1)).toBe(5);
    expect(computeXpGain(4, 1)).toBe(10);
    expect(computeXpGain(5, 2)).toBe(15);
  });

  it("applies streak bonus at threshold", () => {
    expect(computeXpGain(4, 3)).toBe(15);
    expect(computeXpGain(5, 5)).toBe(23);
  });
});

describe("updateStreak", () => {
  it("returns 1 for first session", () => {
    const progress = createInitialProgress("user-1");
    expect(updateStreak(progress)).toBe(1);
  });

  it("increments streak for consecutive days", () => {
    const progress = {
      ...createInitialProgress("user-1"),
      streak: 3,
      lastSessionAt: new Date("2025-01-14T10:00:00Z"),
    };
    const now = new Date("2025-01-15T10:00:00Z");
    expect(updateStreak(progress, now)).toBe(4);
  });

  it("keeps streak for same day", () => {
    const progress = {
      ...createInitialProgress("user-1"),
      streak: 3,
      lastSessionAt: new Date("2025-01-15T08:00:00Z"),
    };
    const now = new Date("2025-01-15T10:00:00Z");
    expect(updateStreak(progress, now)).toBe(3);
  });

  it("resets streak after missing a day", () => {
    const progress = {
      ...createInitialProgress("user-1"),
      streak: 5,
      lastSessionAt: new Date("2025-01-13T10:00:00Z"),
    };
    const now = new Date("2025-01-15T10:00:00Z");
    expect(updateStreak(progress, now)).toBe(1);
  });
});
