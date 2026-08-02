import React from 'react';
import clsx from 'clsx';
import { rem } from '@/design-system/utils/tokenHelpers';
import { spacing, breakpoints } from '@/design-system/tokens';
import styles from './Hero.module.css';
import type { ReactNode } from 'react';
import { HeroContent } from '@/components/home/HeroContent';
import { HeroBackground } from '@/components/home/HeroBackground';
import { HeroVisual } from '@/components/home/HeroVisual';
import { HeroHeadline } from '@/components/home/HeroHeadline';
import { HeroDescription } from '@/components/home/HeroDescription';
import { HeroActions } from '@/components/home/HeroActions';
import { HeroStats, type Stat } from '@/components/home/HeroStats';

export type HeroProps = React.ComponentPropsWithoutRef<'header'> & {
  headline: ReactNode;
  description?: ReactNode;
  actions?: readonly import('@/components/home/HeroActions').ActionItem[];
  stats?: readonly Stat[];
  visualProps?: import('@/components/home/HeroVisual').HeroVisualProps;
  backgroundProps?: import('@/components/home/HeroBackground').HeroBackgroundProps;
};

export const Hero: React.FC<HeroProps> = ({
  headline,
  description,
  actions,
  stats = [],
  visualProps,
  backgroundProps,
  className,
  style,
  ...rest
}) => {
  const minCol = rem(breakpoints.md);
  const gap = rem(spacing['24']);

  const rootStyle: React.CSSProperties = {
    paddingTop: rem(spacing['40']),
    paddingBottom: rem(spacing['40']),
    paddingLeft: rem(spacing['24']),
    paddingRight: rem(spacing['24']),
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'visible',
    ...style
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gap,
    gridTemplateColumns: `repeat(auto-fit, minmax(${minCol}, 1fr))`,
    alignItems: 'center'
  };

  return (
    <header className={clsx(styles.root, className)} style={rootStyle} {...rest}>
      <HeroBackground {...(backgroundProps ?? {})} />

      <div className={styles.inner} style={gridStyle}>
        <div className={styles.contentWrapper}>
          <HeroContent>
            <HeroHeadline>{headline}</HeroHeadline>
            {description && <HeroDescription>{description}</HeroDescription>}
            {actions && <HeroActions actions={actions} />}
            {stats && stats.length > 0 && <HeroStats stats={stats} />}
          </HeroContent>
        </div>

        <div className={styles.visualWrapper} aria-hidden>
          <HeroVisual {...(visualProps ?? {})} />
        </div>
      </div>
    </header>
  );
};

export default Hero;
