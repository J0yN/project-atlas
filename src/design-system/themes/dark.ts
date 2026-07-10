
/**
 * Dark theme mappings for semantic color tokens.
 * Palette values are imported from palette.ts to centralize raw values and
 * avoid duplication.
 */
import type { SemanticColors } from '@/design-system/tokens/colors';
import { darkPalette as palette } from '@/design-system/palette';

export const darkTheme: { colors: SemanticColors } = {
  colors: {
    background: palette.neutral0,
    foreground: palette.neutral90,
    surface: palette.neutral10,
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
