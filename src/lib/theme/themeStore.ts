/**
 * Theme Store — read and write theme preferences to localStorage.
 *
 * Safe to import anywhere; all storage operations are guarded by
 * `typeof window` checks so server-side code receives the default preference.
 */

import type { ThemePreference } from '@/types/theme';

const STORAGE_KEY = 'atlas-theme-preference';

const DEFAULT_PREFERENCE: ThemePreference = {
  accentHex: null,
};

/**
 * Load the persisted ThemePreference from localStorage.
 * Returns the default preference on the server, on parse error, or when
 * no preference has been saved yet.
 */
export function loadThemePreference(): ThemePreference {
  if (typeof window === 'undefined') return DEFAULT_PREFERENCE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PREFERENCE;
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) return DEFAULT_PREFERENCE;
    const obj = parsed as Record<string, unknown>;
    return {
      accentHex:
        typeof obj['accentHex'] === 'string' ? obj['accentHex'] : null,
    };
  } catch {
    return DEFAULT_PREFERENCE;
  }
}

/**
 * Persist a ThemePreference to localStorage.
 * Silently swallows errors (e.g. private-browsing quota exceeded).
 */
export function saveThemePreference(pref: ThemePreference): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pref));
  } catch {
    // Ignore storage errors
  }
}
