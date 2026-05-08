import type { UserProgress } from "@finance-app/core";

export interface ProgressRepository {
  get(userId: string): Promise<UserProgress | null>;
  save(progress: UserProgress): Promise<void>;
}
