export interface LevelInfo {
  level: number;
  title: string;
  xpRequired: number;
  xpForNext: number;
}

const LEVEL_THRESHOLDS: { xp: number; title: string }[] = [
  { xp: 0, title: "Stagiaire" },
  { xp: 50, title: "Analyste Junior" },
  { xp: 150, title: "Analyste" },
  { xp: 350, title: "Analyste Senior" },
  { xp: 700, title: "Associate" },
  { xp: 1200, title: "VP" },
  { xp: 2000, title: "Director" },
  { xp: 3500, title: "Managing Director" },
  { xp: 6000, title: "Partner" },
];

export function getLevelInfo(xp: number): LevelInfo {
  let currentLevel = 0;

  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    const threshold = LEVEL_THRESHOLDS[i];
    if (threshold && xp >= threshold.xp) {
      currentLevel = i;
      break;
    }
  }

  const current = LEVEL_THRESHOLDS[currentLevel]!;
  const next = LEVEL_THRESHOLDS[currentLevel + 1];

  return {
    level: currentLevel + 1,
    title: current.title,
    xpRequired: current.xp,
    xpForNext: next ? next.xp : current.xp,
  };
}

export function getProgressPercent(xp: number): number {
  const info = getLevelInfo(xp);
  if (info.xpForNext === info.xpRequired) return 100;
  return Math.round(((xp - info.xpRequired) / (info.xpForNext - info.xpRequired)) * 100);
}
