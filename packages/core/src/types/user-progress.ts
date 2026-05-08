export type AnswerQuality = 0 | 1 | 2 | 3 | 4 | 5;

export interface CardProgress {
  cardId: string;
  repetitions: number;
  easeFactor: number;
  interval: number;
  nextReviewAt: Date;
  lastReviewedAt: Date | null;
}

export interface UserProgress {
  userId: string;
  xp: number;
  level: number;
  streak: number;
  lastSessionAt: Date | null;
  cards: Record<string, CardProgress>;
}

export function createInitialProgress(userId: string): UserProgress {
  return {
    userId,
    xp: 0,
    level: 1,
    streak: 0,
    lastSessionAt: null,
    cards: {},
  };
}
