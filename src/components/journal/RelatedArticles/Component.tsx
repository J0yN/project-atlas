import React from 'react';
import clsx from 'clsx';
import styles from './RelatedArticles.module.css';

export type RelatedArticle = { id: string; title: string; href: string; excerpt?: string };
export type RelatedArticlesProps = React.ComponentPropsWithoutRef<'aside'> & {
  articles?: readonly RelatedArticle[];
};

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles = [], className, ...rest }) => {
  if (!articles || articles.length === 0) return null;
  return (
    <aside className={clsx(styles.root, className)} aria-label="Related articles" {...rest}>
      <h2 className={styles.heading}>Related</h2>
      <ul className={styles.list}>
        {articles.map((a) => (
          <li key={a.id} className={styles.item}>
            <a href={a.href} className={styles.link}>{a.title}</a>
            {a.excerpt && <p className={styles.excerpt}>{a.excerpt}</p>}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default RelatedArticles;
