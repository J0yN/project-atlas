/**
 * Breakpoint tokens (pixel values) used by components and responsive utilities.
 */
export const breakpoints = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

export type BreakpointTokens = typeof breakpoints;
