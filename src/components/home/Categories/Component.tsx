import React from 'react';
import clsx from 'clsx';
import styles from './Categories.module.css';
import { Container } from '@/components/ui';

export type Category = { id: string; name: string; count?: number };
export type CategoriesProps = React.ComponentPropsWithoutRef<'section'> & { items?: readonly Category[]; title?: string };

export const Categories: React.FC<CategoriesProps> = ({ items = [], title = 'Categories', className, ...rest }) => {
  return (
    <section className={clsx(styles.root, className)} aria-labelledby="categories-title" {...rest}>
      <Container>
        <h2 id="categories-title" className={styles.title}>
          {title}
        </h2>
        <ul className={styles.list}>
          {items.length > 0
            ? items.map((c) => (
                <li key={c.id} className={styles.item}>
                  <button className={styles.pill} type="button">
                    {c.name}
                    {typeof c.count === 'number' && <span className={styles.count}>{c.count}</span>}
                  </button>
                </li>
              ))
            : ['Design', 'Product', 'Research'].map((n) => (
                <li key={n} className={styles.item}>
                  <button className={styles.pill} type="button">
                    {n}
                  </button>
                </li>
              ))}
        </ul>
      </Container>
    </section>
  );
};

export default Categories;
