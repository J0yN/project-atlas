'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import styles from './ThemeSwitch.module.css';

/**
 * ThemeSwitch — toggles between light and dark mode.
 *
 * Renders null on the server and during hydration to avoid a flash of
 * incorrect icon (next-themes resolves the theme client-side).
 */
export function ThemeSwitch(): React.JSX.Element | null {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      className={styles.root}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
    >
      {isDark ? (
        <Sun size={16} aria-hidden />
      ) : (
        <Moon size={16} aria-hidden />
      )}
      <span className={styles.label}>{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
}
