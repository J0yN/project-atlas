
/**
 * Light theme mappings: map semantic color tokens to concrete palette values.
 * All exported values are semantic-only. Palette values are imported from palette.ts
 * to avoid duplicated raw color values between theme files.
 */
import type { SemanticColors } from '@/design-system/tokens/colors';
import { lightPalette as palette } from '@/design-system/palette';

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
