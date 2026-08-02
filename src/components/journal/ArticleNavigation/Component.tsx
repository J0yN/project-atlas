import React from 'react';
import clsx from 'clsx';
import styles from './ArticleNavigation.module.css';

export type ArticleNavigationProps = React.ComponentPropsWithoutRef<'nav'> & {
  previous?: { title: string; href: string } | null;
  next?: { title: string; href: string } | null;
};

export const ArticleNavigation: React.FC<ArticleNavigationProps> = ({ previous, next, className, ...rest }) => (
  <nav className={clsx(styles.root, className)} aria-label="Article navigation" {...rest}>
    {previous ? (
      <a href={previous.href} className={styles.prev} aria-label={`Previous article: ${previous.title}`}>
        &larr; {previous.title}
      </a>
    ) : <div />}
    {next ? (
      <a href={next.href} className={styles.next} aria-label={`Next article: ${next.title}`}>
        {next.title} &rarr;
      </a>
    ) : <div />}
  </nav>
);

export default ArticleNavigation;
