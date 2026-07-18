/**
 * Accent Engine — derives WCAG-AA-compliant CSS variable overrides from a
 * single accent hex value. Pure, framework-agnostic functions.
 *
 * Reuses hexToRgb from the design-system color utilities.
 */

import { hexToRgb } from '@/design-system/utils/colorUtils';

/**
 * Compute the relative luminance of an sRGB triplet (values 0–255).
 * Follows the WCAG 2.1 definition.
 */
function relativeLuminance(r: number, g: number, b: number): number {
  const toLinear = (c: number): number => {
    const sRGB = c / 255;
    return sRGB <= 0.03928
      ? sRGB / 12.92
      : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

/**
 * Compute WCAG contrast ratio between two hex colors.
 * Returns a number in the range [1, 21].
 */
export function contrastRatio(hex1: string, hex2: string): number {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  if (!rgb1 || !rgb2) return 1;
  const l1 = relativeLuminance(rgb1.r, rgb1.g, rgb1.b);
  const l2 = relativeLuminance(rgb2.r, rgb2.g, rgb2.b);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Returns true when the contrast between fg and bg meets WCAG AA for
 * normal text (≥ 4.5:1) or large text / UI components (≥ 3:1).
 */
export function isWcagAA(fg: string, bg: string, large = false): boolean {
  return contrastRatio(fg, bg) >= (large ? 3 : 4.5);
}

/**
 * Choose the foreground color (white or near-black) that achieves the
 * highest contrast against the given accent background.
 */
export function accentForeground(accentHex: string): string {
  const white = '#ffffff';
  const dark = '#0f172a';
  const whiteContrast = contrastRatio(accentHex, white);
  const darkContrast = contrastRatio(accentHex, dark);
  // Prefer white if it passes AA; otherwise fall back to dark.
  if (whiteContrast >= 4.5) return white;
  if (darkContrast >= 4.5) return dark;
  // Neither passes strict AA — pick whichever is higher.
  return whiteContrast >= darkContrast ? white : dark;
}

/**
 * Given an accent hex, return the CSS custom-property overrides that should
 * be applied to the document root. Consumers apply these via
 * `element.style.setProperty(prop, value)`.
 */
export function deriveAccentVars(accentHex: string): Record<string, string> {
  return {
    '--ds-color-accent': accentHex,
    '--ds-color-accent-foreground': accentForeground(accentHex),
  };
}
