/**
 * Blur tokens to use with backdrop-filter or filter: blur().
 */
export const blur = {
  none: '0px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '24px',
  '2xl': '40px'
} as const;

export type BlurTokens = typeof blur;
