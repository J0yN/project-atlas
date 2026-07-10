import React from 'react';
import clsx from 'clsx';
import styles from './HeroDescription.module.css';
import { typography } from '@/design-system/tokens';

export type HeroDescriptionProps = React.ComponentPropsWithoutRef<'p'> & { children?: React.ReactNode };

export const HeroDescription: React.FC<HeroDescriptionProps> = ({ className, children, style, ...rest }) => {
  const baseStyle: React.CSSProperties = {
    fontSize: typography.bodyLarge.fontSize,
    lineHeight: typography.bodyLarge.lineHeight as number,
    marginTop: 0,
    marginBottom: 0
  };

  return (
    <p className={clsx(styles.root, className)} style={{ ...baseStyle, ...style }} {...rest}>
      {children}
    </p>
  );
};

export default HeroDescription;
