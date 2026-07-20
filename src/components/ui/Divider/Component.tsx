import React from 'react';
import clsx from 'clsx';
import type { SemanticColorKey } from '@/design-system/tokens/colors';

export type DividerProps = React.ComponentPropsWithoutRef<'hr'> & {
  orientation?: 'horizontal' | 'vertical';
  thickness?: number | string; // px or CSS string
  colorToken?: SemanticColorKey;
  decorative?: boolean; // if true, hidden from assistive tech
};

/**
 * Divider
 *
 * Accessible separator. Uses semantic color token via CSS custom properties (preferred).
 */
export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(({ orientation = 'horizontal', thickness = 1, colorToken = 'border', decorative = false, className, style, ...rest }, ref) => {
  const isVertical = orientation === 'vertical';

  const sizeStyle: React.CSSProperties = typeof thickness === 'number' ? (isVertical ? { width: `${thickness}px` } : { height: `${thickness}px` }) : (isVertical ? { width: `${thickness}` } : { height: `${thickness}` });

  // Use CSS variable and allow fallback to currentColor if variable not set. Consumers should set --ds-color-<token>.
  const inlineStyle: React.CSSProperties = {
    backgroundColor: `var(--ds-color-${colorToken})`,
    border: 'none',
    ...sizeStyle,
    ...style
  };

  if (isVertical) {
    const verticalAccessibilityProps = decorative
      ? { 'aria-hidden': true }
      : { role: 'separator' as const, 'aria-orientation': 'vertical' as const };

    return <div ref={ref as unknown as React.Ref<HTMLDivElement>} className={clsx(className)} style={inlineStyle} {...verticalAccessibilityProps} {...rest} />;
  }

  const horizontalAccessibilityProps = decorative
    ? { 'aria-hidden': true }
    : { role: 'separator' as const };

  return <hr ref={ref} className={clsx(className)} style={inlineStyle} {...horizontalAccessibilityProps} {...rest} />;
});

Divider.displayName = 'Divider';
