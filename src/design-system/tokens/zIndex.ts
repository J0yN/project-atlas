/**
 * Semantic z-index layers. Values chosen to allow insertion between layers.
 */
export const zIndex = {
  base: 0,
  content: 10,
  dropdown: 100,
  sticky: 200,
  header: 300,
  overlay: 400,
  drawer: 500,
  modal: 600,
  popover: 700,
  tooltip: 800,
  toast: 900
} as const;

export type ZIndexTokens = typeof zIndex;
