/**
 * Internal palettes for Project Atlas design system.
 *
 * This file centralizes raw palette values used by theme mappings so values are
 * not duplicated across theme files. These palette objects are intended for
 * theme authors and tooling only — components must consume semantic tokens from
 * the theme objects (e.g. lightTheme.colors.background) and SHOULD NOT import
 * these raw palette values directly.
 */

export const lightPalette = {
  neutral100: '#ffffff',
  neutral90: '#f8fafc',
  neutral80: '#f1f5f9',
  neutral70: '#e2e8f0',
  neutral60: '#cbd5e1',
  neutral50: '#94a3b8',
  neutral40: '#64748b',
  neutral30: '#475569',
  neutral20: '#334155',
  neutral10: '#0f172a',

  primary600: '#2563eb',
  primary400: '#60a5fa',

  accent400: '#2dd4bf',
  success600: '#059669',
  warning600: '#d97706',
  destructive600: '#dc2626',
  info600: '#4f46e5'
} as const;

export const darkPalette = {
  neutral0: '#0b1221',
  neutral10: '#0f172a',
  neutral20: '#1f2937',
  neutral30: '#334155',
  neutral40: '#475569',
  neutral50: '#94a3b8',
  neutral60: '#cbd5e1',
  neutral70: '#e2e8f0',
  neutral80: '#f1f5f9',
  neutral90: '#ffffff',

  primary400: '#60a5fa',
  primary300: '#93c5fd',
  accent400: '#2dd4bf',
  success600: '#059669',
  warning600: '#f59e0b',
  destructive600: '#fb7185',
  info600: '#818cf8'
} as const;

export type LightPalette = typeof lightPalette;
export type DarkPalette = typeof darkPalette;
