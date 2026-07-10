/**
 * Dark theme mappings for semantic color tokens.
 */
import type { SemanticColors } from '@/design-system/tokens/colors';

const palette = {
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

export const darkTheme: { colors: SemanticColors } = {
  colors: {
    background: palette.neutral0,
    foreground: palette.neutral90,
    surface: '#0f172a',
    surfaceMuted: palette.neutral20,
    card: palette.neutral20,
    popover: palette.neutral30,
    border: palette.neutral30,
    outline: palette.primary300,
    muted: palette.neutral50,
    primary: palette.primary400,
    primaryForeground: palette.neutral90,
    secondary: palette.neutral80,
    secondaryForeground: palette.neutral10,
    accent: palette.accent400,
    success: palette.success600,
    warning: palette.warning600,
    destructive: palette.destructive600,
    info: palette.info600
  }
} as const;
