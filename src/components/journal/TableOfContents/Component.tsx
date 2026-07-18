import React from 'react';
import clsx from 'clsx';
import styles from './TableOfContents.module.css';

export type TocItem = { id: string; title: string; depth: number };
export type TableOfContentsProps = React.ComponentPropsWithoutRef<'nav'> & {
  items?: readonly TocItem[];
  ariaLabel?: string;
};

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items = [], ariaLabel = 'Table of contents', className, ...rest }) => {
  if (!items || items.length === 0) return null;
  return (
    <nav className={clsx(styles.root, className)} aria-label={ariaLabel} {...rest}>
      <h2 className={styles.heading}>Contents</h2>
      <ol className={styles.list}>
        {items.map((it) => (
          <li key={it.id} className={styles[`depth-${it.depth}`] ?? styles.item}>
            <a href={`#${it.id}`} className={styles.link}>{it.title}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default TableOfContents;
