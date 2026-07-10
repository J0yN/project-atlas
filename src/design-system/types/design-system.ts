import type {
  TypographyTokens,
  SpacingTokens,
  RadiusTokens,
  ShadowTokens,
  MotionTokens,
  BreakpointTokens,
  ZIndexTokens,
  OpacityTokens,
  BlurTokens,
  SemanticColors
} from '@/design-system/tokens';

export type DesignSystem = {
  colors: SemanticColors;
  typography: TypographyTokens;
  spacing: SpacingTokens;
  radius: RadiusTokens;
  shadows: ShadowTokens;
  motion: MotionTokens;
  breakpoints: BreakpointTokens;
  zIndex: ZIndexTokens;
  opacity: OpacityTokens;
  blur: BlurTokens;
};
