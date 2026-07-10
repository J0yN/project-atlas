/**
 * Color utilities. Pure, small helpers used by build tooling or runtime conversions.
 */

/**
 * Convert a hex color to its RGB components.
 * Returns null for invalid input.
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const sanitized = hex.replace('#', '');
  const full = sanitized.length === 3 ? sanitized.split('').map((c) => c + c).join('') : sanitized;
  const bigint = parseInt(full, 16);
  if (Number.isNaN(bigint)) return null;
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

/**
 * Return an rgba(...) string from a hex color and alpha.
 * If the input cannot be parsed, returns the original string.
 */
export function rgba(hex: string, alpha = 1): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
}
