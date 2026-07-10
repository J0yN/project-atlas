import React from 'react';
import clsx from 'clsx';
import styles from './HeroContent.module.css';

export type HeroContentProps = React.ComponentPropsWithoutRef<'div'> & {
  children?: React.ReactNode;
};

export const HeroContent: React.FC<HeroContentProps> = ({ className, children, style, ...rest }) => {
  return (
    <div className={clsx(styles.root, className)} style={style} {...rest}>
      {children}
    </div>
  );
};

export default HeroContent;
