/**
 * Token helpers: pure utilities for formatting token values.
 */

/**
 * Convert a number or string to a pixel value string.
 * @param value number or string
 */
export function px(value: number | string): string {
  return typeof value === 'number' ? `${value}px` : value;
}

/**
 * Convert a pixel value to rem assuming 16px base.
 * @param pxValue pixel value
 */
export function rem(pxValue: number | string): string {
  const base = 16;
  if (typeof pxValue === 'string') {
    const numericValue = Number.parseFloat(pxValue);
    if (Number.isNaN(numericValue)) {
      return pxValue;
    }
    return `${numericValue / base}rem`;
  }
  return `${pxValue / base}rem`;
}

/**
 * Convert a theme (SemanticColors) into a record of CSS custom properties.
 * Keys will be in the form: `--ds-color-<token>` e.g. --ds-color-background
 * This function is framework agnostic and pure.
 *
 * @param theme semantic color map
 * @param prefix css variable prefix (default: --ds-color)
 */
export function tokensToCssVariables(theme: Record<string, string>, prefix = '--ds-color'): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(theme)) {
    out[`${prefix}-${key}`] = value;
  }
  return out;
}
