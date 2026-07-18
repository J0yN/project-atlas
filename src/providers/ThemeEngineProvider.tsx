'use client';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useTheme } from 'next-themes';
import type {
  AccentPreset,
  ThemeEngineContextValue,
  ThemePreference,
} from '@/types/theme';
import { deriveAccentVars } from '@/lib/theme/accentEngine';
import { extractDominantColor } from '@/lib/theme/colorExtraction';
import { loadThemePreference, saveThemePreference } from '@/lib/theme/themeStore';

/**
 * Built-in accent color presets that map to the design-system palette.
 * The default ("teal") matches the existing --ds-color-accent value.
 */
const ACCENT_PRESETS: readonly AccentPreset[] = [
  { id: 'teal', label: 'Teal', hex: '#2dd4bf' },
  { id: 'blue', label: 'Blue', hex: '#2563eb' },
  { id: 'violet', label: 'Violet', hex: '#7c3aed' },
  { id: 'rose', label: 'Rose', hex: '#e11d48' },
  { id: 'amber', label: 'Amber', hex: '#d97706' },
  { id: 'emerald', label: 'Emerald', hex: '#059669' },
] as const;

const ThemeEngineContext = createContext<ThemeEngineContextValue | null>(null);

/**
 * Consume the ThemeEngine context.
 * Must be called inside a component tree wrapped by ThemeEngineProvider.
 */
export function useThemeEngine(): ThemeEngineContextValue {
  const ctx = useContext(ThemeEngineContext);
  if (!ctx) {
    throw new Error('useThemeEngine must be used inside <ThemeEngineProvider>');
  }
  return ctx;
}

/**
 * ThemeEngineProvider
 *
 * Sits inside next-themes' ThemeProvider and adds:
 * - Dynamic accent color applied as CSS custom properties on <html>
 * - Automatic WCAG-AA-compliant foreground derivation
 * - Canvas-based image color extraction
 * - localStorage persistence of theme preferences
 * - Smooth theme transition class applied around base-theme changes
 */
export function ThemeEngineProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const { resolvedTheme } = useTheme();

  const [preference, setPreference] = useState<ThemePreference>({
    accentHex: null,
  });

  // Load persisted preference once, after mount (SSR-safe)
  useEffect(() => {
    setPreference(loadThemePreference());
  }, []);

  // Apply a brief transition class around base-theme changes so colors
  // animate smoothly. Skipped when prefers-reduced-motion is active.
  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const html = document.documentElement;
    html.classList.add('theme-transitioning');
    const timer = window.setTimeout(() => {
      html.classList.remove('theme-transitioning');
    }, 300);

    return (): void => {
      window.clearTimeout(timer);
      html.classList.remove('theme-transitioning');
    };
  }, [resolvedTheme]);

  // Apply accent CSS variables to the document root
  useEffect(() => {
    const root = document.documentElement;
    if (preference.accentHex) {
      const vars = deriveAccentVars(preference.accentHex);
      for (const [prop, val] of Object.entries(vars)) {
        root.style.setProperty(prop, val);
      }
    } else {
      // Clear overrides; the stylesheet values (light/dark theme) will apply
      root.style.removeProperty('--ds-color-accent');
      root.style.removeProperty('--ds-color-accent-foreground');
    }
  }, [preference.accentHex, resolvedTheme]);

  const setAccent = useCallback((hex: string | null): void => {
    setPreference((prev) => {
      const next: ThemePreference = { ...prev, accentHex: hex };
      saveThemePreference(next);
      return next;
    });
  }, []);

  const extractAccentFromImage = useCallback(
    async (imageUrl: string): Promise<string | null> => {
      const hex = await extractDominantColor(imageUrl);
      if (hex) setAccent(hex);
      return hex;
    },
    [setAccent]
  );

  const value = useMemo<ThemeEngineContextValue>(
    () => ({
      accentHex: preference.accentHex,
      setAccent,
      extractAccentFromImage,
      accentPresets: ACCENT_PRESETS,
    }),
    [preference.accentHex, setAccent, extractAccentFromImage]
  );

  return (
    <ThemeEngineContext.Provider value={value}>
      {children}
    </ThemeEngineContext.Provider>
  );
}
