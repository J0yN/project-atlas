import React from 'react';
import clsx from 'clsx';
import { spacing } from '@/design-system/tokens';
import { rem } from '@/design-system/utils/tokenHelpers';

export type StackDirection = 'vertical' | 'horizontal';
export type StackAlign = 'start' | 'center' | 'end' | 'stretch';
export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around';

export type StackProps = React.ComponentPropsWithoutRef<'div'> & {
  direction?: StackDirection;
  gap?: keyof typeof spacing;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: boolean;
};

const ALIGN_MAP: Readonly<Record<StackAlign, string>> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch'
};

const JUSTIFY_MAP: Readonly<Record<StackJustify, string>> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around'
};

/**
 * Stack
 *
 * A lightweight flexbox layout helper for consistent spacing between children.
 */
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(({ direction = 'vertical', gap = '8', align = 'stretch', justify = 'start', wrap = false, className, style, children, ...rest }, ref) => {
  const isRow = direction === 'horizontal';
  const gapValue = rem(spacing[gap]);

  const combinedStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: isRow ? 'row' : 'column',
    alignItems: ALIGN_MAP[align],
    justifyContent: JUSTIFY_MAP[justify],
    flexWrap: wrap ? 'wrap' : 'nowrap',
    gap: gapValue,
    ...style
  };

  return (
    <div ref={ref} className={clsx(className)} style={combinedStyle} {...rest}>
      {children}
    </div>
  );
});

Stack.displayName = 'Stack';
