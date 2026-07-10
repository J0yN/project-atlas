/**
 * Shadow / elevation tokens. Keep tones neutral so they work in light & dark.
 */
export const shadows = {
  xs: '0 1px 2px rgba(2,6,23,0.04)',
  sm: '0 1px 3px rgba(2,6,23,0.06)',
  md: '0 4px 12px rgba(2,6,23,0.08)',
  lg: '0 8px 24px rgba(2,6,23,0.12)',
  xl: '0 20px 40px rgba(2,6,23,0.16)',
  '2xl': '0 30px 60px rgba(2,6,23,0.2)'
} as const;

export type ShadowTokens = typeof shadows;
