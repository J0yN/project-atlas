import React from 'react';
import clsx from 'clsx';
import styles from './ArticleHero.module.css';

export type Cover = { src: string; alt?: string; aspectRatio?: number };
export type ArticleHeroProps = React.ComponentPropsWithoutRef<'header'> & {
  title: string;
  subtitle?: string;
  date?: string;
  readingTime?: string;
  categories?: readonly string[];
  cover?: Cover;
};

export const ArticleHero: React.FC<ArticleHeroProps> = ({ title, subtitle, date, readingTime, categories = [], cover, className, ...rest }) => {
  return (
    <header className={clsx(styles.root, className)} {...rest}>
      <div className={styles.inner}>
        <div className={styles.meta}>
          {categories.length > 0 && <div className={styles.categories} aria-hidden>{categories.join(' · ')}</div>}
          {date && <time className={styles.date} dateTime={date}>{date}</time>}
          {readingTime && <span className={styles.reading}>{readingTime}</span>}
        </div>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      {cover && (
        <div className={styles.cover} aria-hidden>
          <img src={cover.src} alt={cover.alt ?? ''} style={{ aspectRatio: cover.aspectRatio ?? '16/9' }} />
        </div>
      )}
    </header>
  );
};

export default ArticleHero;
