import React from 'react';
import clsx from 'clsx';
import { breakpoints, spacing } from '@/design-system/tokens';
import { rem } from '@/design-system/utils/tokenHelpers';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export type ContainerProps = React.ComponentPropsWithoutRef<'div'> & {
  /**
   * Container size that controls max-width. 'full' makes the container fluid.
   */
  size?: ContainerSize;
  /** Horizontal padding key from design-system.spacing (e.g. '24') */
  px?: keyof typeof spacing;
  /** Vertical padding key from design-system.spacing (e.g. '16') */
  py?: keyof typeof spacing;
};

const SIZE_TO_BREAKPOINT: Readonly<Record<Exclude<ContainerSize, 'full'>, keyof typeof breakpoints>> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl'
};

/**
 * Container
 *
 * Responsive, centered content wrapper. Independent and only consumes design-system tokens.
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'lg', px = '24', py = '0', className, style, children, ...rest }, ref) => {
    const isFull = size === 'full';

    const maxWidth = isFull ? undefined : rem(breakpoints[SIZE_TO_BREAKPOINT[size as Exclude<ContainerSize, 'full'>]]);

    const paddingLeftRight = rem(spacing[px]);
    const paddingTopBottom = rem(spacing[py]);

    const combinedStyle: React.CSSProperties = {
      maxWidth,
      paddingLeft: paddingLeftRight,
      paddingRight: paddingLeftRight,
      paddingTop: paddingTopBottom,
      paddingBottom: paddingTopBottom,
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%',
      boxSizing: 'border-box',
      ...style
    };

    return (
      <div ref={ref} className={clsx(className)} style={combinedStyle} {...rest}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';
