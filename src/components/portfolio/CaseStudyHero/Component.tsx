import React from 'react';
import clsx from 'clsx';
import styles from './CaseStudyHero.module.css';

export type CaseStudyHeroProps = React.ComponentPropsWithoutRef<'header'> & {
  title: string;
  subtitle?: string;
  kicker?: string;
  cover?: { src: string; alt?: string; aspectRatio?: number };
};

export const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ title, subtitle, kicker, cover, className, ...rest }) => {
  return (
    <header className={clsx(styles.root, className)} {...rest}>
      <div className={styles.inner}>
        {kicker && <p className={styles.kicker}>{kicker}</p>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      {cover && (
        <div className={styles.media} aria-hidden>
          <img src={cover.src} alt={cover.alt ?? ''} style={{ aspectRatio: cover.aspectRatio ?? '16/9' }} />
        </div>
      )}
    </header>
  );
};

export default CaseStudyHero;
