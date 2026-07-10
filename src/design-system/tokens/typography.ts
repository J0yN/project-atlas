/**
 * Typography tokens for Project Atlas design system.
 * Each token is immutable (as const) and strictly typed.
 */

/**
 * Individual typography token shape.
 */
export type TypographyToken = {
  /** Font size (px or rem) */
  fontSize: string;
  /** Numeric font weight (e.g. 400, 600) */
  fontWeight: number;
  /** Line height as number or unit-based string */
  lineHeight: number | string;
  /** Optional letter spacing */
  letterSpacing?: string;
};

/**
 * Full typography scale exported as `typography`.
 */
export const typography = {
  display: { fontSize: '3rem', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.02em' },
  h1: { fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.02em' },
  h2: { fontSize: '2rem', fontWeight: 700, lineHeight: 1.12 },
  h3: { fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.2 },
  h4: { fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.25 },
  h5: { fontSize: '1rem', fontWeight: 600, lineHeight: 1.3 },
  h6: { fontSize: '0.875rem', fontWeight: 600, lineHeight: 1.4 },

  bodyLarge: { fontSize: '1.125rem', fontWeight: 400, lineHeight: 1.6 },
  body: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.6 },
  small: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.4 },
  caption: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.3 },
  overline: { fontSize: '0.6875rem', fontWeight: 600, lineHeight: 1.2, letterSpacing: '0.08em' },
  code: { fontSize: '0.8125rem', fontWeight: 500, lineHeight: 1.6, letterSpacing: '0.02em' }
} as const;

export type TypographyTokens = typeof typography;
