/**
 * Light theme mappings: map semantic color tokens to concrete palette values.
 * All exported values are semantic-only. Palette values are internal to this file.
 */
import type { SemanticColors } from '@/design-system/tokens/colors';

// Internal palette (not exported) - reused to avoid duplication and keep tokens consistent.
const palette = {
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

export const lightTheme: { colors: SemanticColors } = {
  colors: {
    background: palette.neutral100,
    foreground: palette.neutral10,
    surface: palette.neutral90,
    surfaceMuted: palette.neutral80,
    card: palette.neutral90,
    popover: palette.neutral100,
    border: palette.neutral70,
    outline: palette.primary400,
    muted: palette.neutral50,
    primary: palette.primary600,
    primaryForeground: palette.neutral100,
    secondary: palette.neutral40,
    secondaryForeground: palette.neutral100,
    accent: palette.accent400,
    success: palette.success600,
    warning: palette.warning600,
    destructive: palette.destructive600,
    info: palette.info600
  }
} as const;
