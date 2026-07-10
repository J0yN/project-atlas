import React from 'react';
import clsx from 'clsx';
import { spacing } from '@/design-system/tokens';
import { rem } from '@/design-system/utils/tokenHelpers';

export type ResponsiveColumns = Partial<Record<'base' | keyof typeof spacing, number>>;

export type GridProps = React.ComponentPropsWithoutRef<'div'> & {
  /** Number of columns for base layout */
  columns?: number;
  /** gap token key from design-system.spacing */
  gap?: keyof typeof spacing;
  /** responsive mapping: base, sm, md, lg, xl (consumers can use these data attributes to apply styles) */
  responsive?: Partial<Record<'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl', number>>;
  /** Use CSS auto-fit with minColumnWidth */
  autoFit?: boolean;
  /** Use CSS auto-fill with minColumnWidth */
  autoFill?: boolean;
  /** min column width (spacing key or CSS size string) */
  minColumnWidth?: keyof typeof spacing | string;
};

function buildGridTemplate(columns?: number, mode?: 'fit' | 'fill', minWidth?: string) {
  if ((mode === 'fit' || mode === 'fill') && minWidth) {
    const m = mode === 'fit' ? 'auto-fit' : 'auto-fill';
    return `repeat(${m}, minmax(${minWidth}, 1fr))`;
  }
  if (columns && columns > 0) {
    return `repeat(${columns}, minmax(0, 1fr))`;
  }
  return undefined;
}

/**
 * Grid
 *
 * Flexible CSS grid. For advanced responsive behavior, consumers can use the provided
 * data-responsive attribute to apply breakpoint-specific rules in their stylesheet.
 */
export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ columns, gap = '16', responsive, autoFit = false, autoFill = false, minColumnWidth = '48', className, style, children, ...rest }, ref) => {
    const minColWidth = typeof minColumnWidth === 'string' && (minColumnWidth in spacing) ? rem(spacing[minColumnWidth as keyof typeof spacing]) : (minColumnWidth as string);

    const mode = autoFit ? 'fit' : autoFill ? 'fill' : undefined;
    const gridTemplate = buildGridTemplate(columns, mode, minColWidth);

    const gapValue = rem(spacing[gap]);

    const baseStyle: React.CSSProperties = {
      display: 'grid',
      gap: gapValue,
      gridTemplateColumns: gridTemplate
    };

    // expose responsive mapping as data attribute so consumers can opt-in to responsive CSS
    const dataResponsive = responsive ? JSON.stringify(responsive) : undefined;

    return (
      <div ref={ref} className={clsx('grid', className)} style={{ ...baseStyle, ...style }} data-responsive={dataResponsive} {...rest}>
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';
