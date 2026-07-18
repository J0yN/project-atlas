'use client';
import React from 'react';
import clsx from 'clsx';
import styles from './HeroVisual.module.css';
import { rem } from '@/design-system/utils/tokenHelpers';

export type HeroVisualProps = React.ComponentPropsWithoutRef<'div'> & {
  variant?: 'subtle' | 'bold';
};

export const HeroVisual: React.FC<HeroVisualProps> = ({ className, style, ...rest }) => {
  const wrapperStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    minHeight: rem(260),
    position: 'relative',
    overflow: 'visible',
    display: 'block',
    ...style
  };

  return (
    <div className={clsx(styles.root, className)} style={wrapperStyle} aria-hidden {...rest}>
      <div className={styles.shapeCircle} />
      <div className={styles.shapeBlob} />
      <div className={styles.grid} />
    </div>
  );
};

export default HeroVisual;
