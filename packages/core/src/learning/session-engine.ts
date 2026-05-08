import type { Card } from "../types/card.js";
import type { AnswerQuality, CardProgress, UserProgress } from "../types/user-progress.js";
import { computeNextReview, createInitialCardProgress, isDueForReview } from "./spaced-repetition.js";
import { computeXpGain, updateStreak } from "./progression.js";

const DEFAULT_SESSION_SIZE = 10;

export interface SessionResult {
  cardId: string;
  quality: AnswerQuality;
}

export function selectSessionCards(
  cards: Card[],
  progress: UserProgress,
  size: number = DEFAULT_SESSION_SIZE,
  now: Date = new Date(),
): Card[] {
  const dueCards = cards.filter((card) => {
    const cardProgress = progress.cards[card.id];
    if (!cardProgress) return true;
    return isDueForReview(cardProgress, now);
  });

  const newCards = dueCards.filter((card) => !progress.cards[card.id]);
  const reviewCards = dueCards.filter((card) => progress.cards[card.id]);

  const selected: Card[] = [];
  const reviewFirst = reviewCards.slice(0, Math.ceil(size * 0.7));
  selected.push(...reviewFirst);

  const remaining = size - selected.length;
  selected.push(...newCards.slice(0, remaining));

  return selected.slice(0, size);
}

export function processAnswer(
  progress: UserProgress,
  result: SessionResult,
  now: Date = new Date(),
): UserProgress {
  const cardProgress = progress.cards[result.cardId] ?? createInitialCardProgress(result.cardId, now);
  const updatedCardProgress = computeNextReview(cardProgress, result.quality, now);
  const streak = updateStreak(progress, now);
  const xpGain = computeXpGain(result.quality, streak);

  return {
    ...progress,
    xp: progress.xp + xpGain,
    streak,
    lastSessionAt: now,
    cards: {
      ...progress.cards,
      [result.cardId]: updatedCardProgress,
    },
  };
}
