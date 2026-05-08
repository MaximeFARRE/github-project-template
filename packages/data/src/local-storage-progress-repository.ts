import type { UserProgress } from "@finance-app/core";
import type { ProgressRepository } from "./progress-repository.js";

const STORAGE_KEY_PREFIX = "finance-app:progress:";

export class LocalStorageProgressRepository implements ProgressRepository {
  async get(userId: string): Promise<UserProgress | null> {
    if (typeof window === "undefined") return null;
    const raw = window.localStorage.getItem(STORAGE_KEY_PREFIX + userId);
    if (!raw) return null;
    return JSON.parse(raw) as UserProgress;
  }

  async save(progress: UserProgress): Promise<void> {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(
      STORAGE_KEY_PREFIX + progress.userId,
      JSON.stringify(progress),
    );
  }
}
