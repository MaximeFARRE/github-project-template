import type { AnswerQuality, UserProgress } from "../types/user-progress.js";

const XP_PER_QUALITY: Record<AnswerQuality, number> = {
  0: 0,
  1: 0,
  2: 2,
  3: 5,
  4: 10,
  5: 15,
};

const STREAK_BONUS_THRESHOLD = 3;
const STREAK_BONUS_MULTIPLIER = 1.5;

export function computeXpGain(quality: AnswerQuality, streak: number): number {
  const base = XP_PER_QUALITY[quality];
  if (streak >= STREAK_BONUS_THRESHOLD) {
    return Math.round(base * STREAK_BONUS_MULTIPLIER);
  }
  return base;
}

export function updateStreak(progress: UserProgress, now: Date = new Date()): number {
  if (!progress.lastSessionAt) return 1;

  const lastDate = new Date(progress.lastSessionAt);
  const diffMs = now.getTime() - lastDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return progress.streak;
  if (diffDays === 1) return progress.streak + 1;
  return 1;
}
