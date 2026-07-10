/**
 * Design System - Colors (semantic tokens only)
 *
 * This module exports semantic color token keys and types. It deliberately does
 * not export concrete color values or palettes — themes map these semantic
 * keys to concrete palette values.
 */

/**
 * List of semantic color keys used throughout the design system.
 * Components should only consume these semantic tokens.
 */
export const semanticColorKeys = [
  'background',
  'foreground',
  'surface',
  'surfaceMuted',
  'card',
  'popover',
  'border',
  'outline',
  'muted',
  'primary',
  'primaryForeground',
  'secondary',
  'secondaryForeground',
  'accent',
  'success',
  'warning',
  'destructive',
  'info'
] as const;

export type SemanticColorKey = (typeof semanticColorKeys)[number];

/**
 * SemanticColors maps each semantic key to a CSS color string (hex, rgb, or css variable).
 * Use these types when building theme objects to ensure complete mappings.
 */
export type SemanticColors = {
  [K in SemanticColorKey]: string;
};
