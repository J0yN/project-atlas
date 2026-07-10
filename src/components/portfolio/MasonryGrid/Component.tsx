import React from 'react';
import clsx from 'clsx';
import styles from './MasonryGrid.module.css';

export type ProjectItem = {
  id: string;
  title: string;
  excerpt?: string;
  category?: string;
  /** aspect ratio or approximate height used by placeholder layout */
  heightEstimate?: number;
};

export type MasonryGridProps = React.ComponentPropsWithoutRef<'div'> & {
  items?: readonly ProjectItem[];
};

/**
 * MasonryGrid - responsive CSS-grid based masonry layout.
 * Server component by default. Expects items rendered as cards.
 */
export const MasonryGrid: React.FC<MasonryGridProps> = ({ items = [], className, ...rest }) => {
  return (
    <div className={clsx(styles.root, className)} {...rest}>
      {items.map((it) => (
        <article key={it.id} className={styles.card} tabIndex={0} aria-labelledby={`project-${it.id}-title`}>
          <div className={styles.visual} aria-hidden />
          <h3 id={`project-${it.id}-title`} className={styles.title}>{it.title}</h3>
          {it.excerpt && <p className={styles.excerpt}>{it.excerpt}</p>}
        </article>
      ))}
    </div>
  );
};

export default MasonryGrid;
