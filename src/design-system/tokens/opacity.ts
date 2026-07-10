/**
 * Reusable opacity tokens.
 */
export const opacity = {
  '0': 0,
  '4': 0.04,
  '8': 0.08,
  '12': 0.12,
  '16': 0.16,
  '24': 0.24,
  '32': 0.32,
  '64': 0.64,
  '100': 1
} as const;

export type OpacityTokens = typeof opacity;
