import React from 'react';
import clsx from 'clsx';
import styles from './HeroHeadline.module.css';
import { typography } from '@/design-system/tokens';

export type HeroHeadlineProps = React.ComponentPropsWithoutRef<'h1'> & { children?: React.ReactNode };

export const HeroHeadline: React.FC<HeroHeadlineProps> = ({ className, children, style, ...rest }) => {
  const baseStyle: React.CSSProperties = {
    fontSize: typography.display.fontSize,
    lineHeight: typography.display.lineHeight as number,
    fontWeight: typography.display.fontWeight,
    margin: 0
  };

  return (
    <h1 className={clsx(styles.root, className)} style={{ ...baseStyle, ...style }} {...rest}>
      {children}
    </h1>
  );
};

export default HeroHeadline;
