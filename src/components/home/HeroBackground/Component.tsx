import React from 'react';
import clsx from 'clsx';
import styles from './HeroBackground.module.css';
import type { ReactNode } from 'react';

export type HeroBackgroundProps = React.ComponentPropsWithoutRef<'div'> & {
  variant?: 'default' | 'muted';
  children?: ReactNode;
};

/**
 * Server-first decorative background. aria-hidden and pointer-events: none.
 */
export const HeroBackground: React.FC<HeroBackgroundProps> = ({ className, variant = 'default', style, children, ...rest }) => {
  return (
    <div className={clsx(styles.root, className, styles[`variant-${variant}`])} style={style} aria-hidden {...rest}>
      <div className={styles.layer} aria-hidden />
      <div className={styles.grid} aria-hidden />
      <div className={styles.accents} aria-hidden />
      <div className={styles.noise} aria-hidden />
      {children}
    </div>
  );
};

export default HeroBackground;
