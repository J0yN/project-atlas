/**
 * Spacing tokens using an 8-point system. Values are immutable strings.
 * Keys are provided as strings to keep property names predictable.
 */
export const spacing = {
  '0': '0px',
  '2': '2px',
  '4': '4px',
  '8': '8px',
  '12': '12px',
  '16': '16px',
  '20': '20px',
  '24': '24px',
  '32': '32px',
  '40': '40px',
  '48': '48px',
  '56': '56px',
  '64': '64px',
  '72': '72px',
  '80': '80px',
  '96': '96px',
  '128': '128px'
} as const;

export type SpacingTokens = typeof spacing;
