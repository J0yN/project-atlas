import React from 'react';
import clsx from 'clsx';
import { spacing } from '@/design-system/tokens';
import { rem } from '@/design-system/utils/tokenHelpers';

export type SectionSpacing = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export type SectionProps = React.ComponentPropsWithoutRef<'section'> & {
  spacing?: SectionSpacing;
  /** If true, the section will constrain content width similar to a container (implemented without importing Container to keep independence) */
  constrained?: boolean;
};

const SPACING_MAP: Readonly<Record<Exclude<SectionSpacing, 'none'>, keyof typeof spacing>> = {
  sm: '12',
  md: '24',
  lg: '40',
  xl: '64'
};

/**
 * Section
 *
 * Semantic <section> wrapper supporting spacing variants and optional constrained content width.
 * Independent implementation (does not import other UI components).
 */
export const Section = React.forwardRef<HTMLElement, SectionProps>(({ spacing: spacingVariant = 'md', constrained = false, className, style, children, ...rest }, ref) => {
  const paddingY = spacingVariant === 'none' ? '0px' : rem(spacing[SPACING_MAP[spacingVariant as Exclude<SectionSpacing, 'none'>]]);

  const maxWidthStyle: React.CSSProperties | undefined = constrained
    ? { maxWidth: rem(1200), marginLeft: 'auto', marginRight: 'auto', width: '100%' }
    : undefined;

  const combinedStyle: React.CSSProperties = { paddingTop: paddingY, paddingBottom: paddingY, boxSizing: 'border-box', ...maxWidthStyle, ...style };

  return (
    <section ref={ref} className={clsx(className)} style={combinedStyle} {...rest}>
      {children}
    </section>
  );
});

Section.displayName = 'Section';
