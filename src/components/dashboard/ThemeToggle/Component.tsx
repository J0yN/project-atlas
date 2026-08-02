'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import clsx from 'clsx';
import styles from './ThemeToggle.module.css';

export type ThemeToggleProps = {
  className?: string;
};

const ICONS: Record<string, string> = {
  light: '☀',
  dark: '◑',
  system: '⬡'
};

const LABELS: Record<string, string> = {
  light: 'Switch to dark mode',
  dark: 'Switch to system theme',
  system: 'Switch to light mode'
};

const NEXT: Record<string, string> = {
  light: 'dark',
  dark: 'system',
  system: 'light'
};

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { theme = 'system', setTheme } = useTheme();
  const next = NEXT[theme] ?? 'system';

  return (
    <button
      className={clsx(styles.button, className)}
      type="button"
      aria-label={LABELS[theme] ?? 'Toggle theme'}
      title={LABELS[theme] ?? 'Toggle theme'}
      onClick={() => setTheme(next)}
    >
      <span className={styles.icon} aria-hidden>
        {ICONS[theme] ?? '⬡'}
      </span>
    </button>
  );
};

export default ThemeToggle;
