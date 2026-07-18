'use client';
import { useReducedMotion as useFramerReducedMotion } from 'framer-motion';

/**
 * Returns true when the user has expressed a preference for reduced motion
 * via the `prefers-reduced-motion: reduce` media query.
 *
 * Wraps Framer Motion's `useReducedMotion` and normalises the SSR null to
 * `false` (motion assumed allowed on first render).
 */
export function useReducedMotion(): boolean {
  return useFramerReducedMotion() ?? false;
}
