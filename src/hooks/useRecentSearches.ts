import { useCallback, useEffect, useState } from 'react';
import type { RecentSearch } from '@/types/search';

const STORAGE_KEY = 'atlas-recent-searches';
const MAX_RECENT = 5;

function loadFromStorage(): RecentSearch[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as RecentSearch[];
  } catch {
    return [];
  }
}

function saveToStorage(items: RecentSearch[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Ignore storage errors (e.g. private browsing quota exceeded)
  }
}

export type UseRecentSearchesReturn = {
  recentSearches: readonly RecentSearch[];
  addRecentSearch: (query: string) => void;
  removeRecentSearch: (id: string) => void;
  clearRecentSearches: () => void;
};

export function useRecentSearches(): UseRecentSearchesReturn {
  const [recentSearches, setRecentSearches] = useState<RecentSearch[]>([]);

  // Load from storage after mount (SSR-safe)
  useEffect(() => {
    setRecentSearches(loadFromStorage());
  }, []);

  const addRecentSearch = useCallback((query: string): void => {
    const trimmed = query.trim();
    if (!trimmed) return;

    setRecentSearches((prev) => {
      const filtered = prev.filter((s) => s.query !== trimmed);
      const next: RecentSearch[] = [
        { id: String(Date.now()), query: trimmed, timestamp: Date.now() },
        ...filtered,
      ].slice(0, MAX_RECENT);
      saveToStorage(next);
      return next;
    });
  }, []);

  const removeRecentSearch = useCallback((id: string): void => {
    setRecentSearches((prev) => {
      const next = prev.filter((s) => s.id !== id);
      saveToStorage(next);
      return next;
    });
  }, []);

  const clearRecentSearches = useCallback((): void => {
    setRecentSearches([]);
    saveToStorage([]);
  }, []);

  return { recentSearches, addRecentSearch, removeRecentSearch, clearRecentSearches };
}
