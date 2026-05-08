import type { AnswerQuality, CardProgress } from "../types/user-progress.js";

const MIN_EASE_FACTOR = 1.3;
const DEFAULT_EASE_FACTOR = 2.5;

export function createInitialCardProgress(cardId: string, now: Date = new Date()): CardProgress {
  return {
    cardId,
    repetitions: 0,
    easeFactor: DEFAULT_EASE_FACTOR,
    interval: 0,
    nextReviewAt: now,
    lastReviewedAt: null,
  };
}

export function computeNextReview(
  progress: CardProgress,
  quality: AnswerQuality,
  now: Date = new Date(),
): CardProgress {
  const newEaseFactor = Math.max(
    MIN_EASE_FACTOR,
    progress.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)),
  );

  if (quality < 3) {
    return {
      ...progress,
      repetitions: 0,
      interval: 1,
      easeFactor: newEaseFactor,
      nextReviewAt: addDays(now, 1),
      lastReviewedAt: now,
    };
  }

  let newInterval: number;
  if (progress.repetitions === 0) {
    newInterval = 1;
  } else if (progress.repetitions === 1) {
    newInterval = 6;
  } else {
    newInterval = Math.round(progress.interval * newEaseFactor);
  }

  return {
    ...progress,
    repetitions: progress.repetitions + 1,
    interval: newInterval,
    easeFactor: newEaseFactor,
    nextReviewAt: addDays(now, newInterval),
    lastReviewedAt: now,
  };
}

export function isDueForReview(progress: CardProgress, now: Date = new Date()): boolean {
  return now >= progress.nextReviewAt;
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
