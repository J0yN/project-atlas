'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import clsx from 'clsx';
import type { ThemeMode } from '@/types/dashboard';
import styles from './ThemeSelector.module.css';

type ThemeOption = {
  value: ThemeMode;
  label: string;
  description: string;
};

const THEME_OPTIONS: readonly ThemeOption[] = [
  { value: 'light', label: 'Light', description: 'Always use light appearance' },
  { value: 'dark', label: 'Dark', description: 'Always use dark appearance' },
  { value: 'system', label: 'System', description: 'Follow your OS preference' }
] as const;

export type ThemeSelectorProps = {
  className?: string;
};

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ className }) => {
  const { theme = 'system', setTheme } = useTheme();

  return (
    <div className={clsx(styles.grid, className)} role="radiogroup" aria-label="Theme selection">
      {THEME_OPTIONS.map((option) => {
        const selected = theme === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selected}
            className={clsx(styles.option, { [styles.selected]: selected })}
            onClick={() => setTheme(option.value)}
          >
            <span className={styles.preview} aria-hidden>
              <ThemePreview mode={option.value} />
            </span>
            <span className={styles.optionLabel}>{option.label}</span>
            <span className={styles.optionDescription}>{option.description}</span>
          </button>
        );
      })}
    </div>
  );
};

type ThemePreviewProps = { mode: ThemeMode };

function ThemePreview({ mode }: ThemePreviewProps) {
  if (mode === 'system') {
    return (
      <svg width="48" height="32" viewBox="0 0 48 32" fill="none">
        <rect x="0" y="0" width="24" height="32" fill="#ffffff" />
        <rect x="24" y="0" width="24" height="32" fill="#0f172a" />
        <rect x="4" y="4" width="16" height="4" rx="1" fill="#e2e8f0" />
        <rect x="28" y="4" width="16" height="4" rx="1" fill="#334155" />
        <rect x="4" y="12" width="11" height="3" rx="1" fill="#e2e8f0" />
        <rect x="28" y="12" width="11" height="3" rx="1" fill="#334155" />
      </svg>
    );
  }
  const bg = mode === 'light' ? '#ffffff' : '#0f172a';
  const surface = mode === 'light' ? '#f1f5f9' : '#1f2937';
  const line = mode === 'light' ? '#e2e8f0' : '#334155';
  return (
    <svg width="48" height="32" viewBox="0 0 48 32" fill="none">
      <rect width="48" height="32" fill={bg} />
      <rect x="4" y="4" width="40" height="4" rx="1" fill={surface} />
      <rect x="4" y="12" width="26" height="3" rx="1" fill={line} />
      <rect x="4" y="18" width="20" height="3" rx="1" fill={line} />
    </svg>
  );
}

export default ThemeSelector;
