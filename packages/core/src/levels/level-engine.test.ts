import { describe, it, expect } from "vitest";
import { getLevelInfo, getProgressPercent } from "./level-engine.js";

describe("getLevelInfo", () => {
  it("returns level 1 for 0 XP", () => {
    const info = getLevelInfo(0);
    expect(info.level).toBe(1);
    expect(info.title).toBe("Stagiaire");
  });

  it("returns level 2 for 50 XP", () => {
    const info = getLevelInfo(50);
    expect(info.level).toBe(2);
    expect(info.title).toBe("Analyste Junior");
  });

  it("returns level 5 at 700 XP", () => {
    const info = getLevelInfo(700);
    expect(info.level).toBe(5);
    expect(info.title).toBe("Associate");
  });

  it("returns highest level at max XP", () => {
    const info = getLevelInfo(10000);
    expect(info.level).toBe(9);
    expect(info.title).toBe("Partner");
  });
});

describe("getProgressPercent", () => {
  it("returns 0% at level threshold", () => {
    expect(getProgressPercent(0)).toBe(0);
    expect(getProgressPercent(50)).toBe(0);
  });

  it("returns progress within level", () => {
    const percent = getProgressPercent(100);
    expect(percent).toBe(50);
  });

  it("returns 100% at max level", () => {
    expect(getProgressPercent(6000)).toBe(100);
  });
});
