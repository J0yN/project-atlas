/**
 * Design System - Colors (semantic tokens only)
 *
 * This module exports only semantic color token types and key names.
 * Actual theme mappings (light/dark) live under ../themes to keep files independent.
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
 */
export type SemanticColors = {
  [K in SemanticColorKey]: string;
};

/**
 * Top-level export for semantic color tokens. Not a concrete theme—used for typing.
 */
export const colors = {} as SemanticColors;
