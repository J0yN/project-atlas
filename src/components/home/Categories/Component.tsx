import React from 'react';
import clsx from 'clsx';
import styles from './Categories.module.css';
import shared from '../shared.module.css';
import { Container, Stack } from '@/components/ui';

export type Category = { id: string; name: string; count?: number };
export type CategoriesProps = React.ComponentPropsWithoutRef<'section'> & {
  items?: readonly Category[];
  title?: string;
  eyebrow?: string;
  description?: string;
  interactive?: boolean;
};

export const Categories: React.FC<CategoriesProps> = ({
  items = [],
  title = 'Categories',
  eyebrow,
  description,
  interactive = false,
  className,
  ...rest
}) => {
  const fallbackItems = ['Design', 'Product', 'Research'];

  return (
    <section className={clsx(shared.section, styles.root, className)} aria-labelledby="categories-title" {...rest}>
      <Container>
        <Stack gap="12" className={styles.header}>
          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
          <h2 id="categories-title" className={styles.title}>
            {title}
          </h2>
          {description ? <p className={styles.description}>{description}</p> : null}
        </Stack>
        <ul className={styles.list}>
          {items.length > 0
            ? items.map((c) => (
                <li key={c.id} className={styles.item}>
                  {interactive ? (
                    <button className={styles.pill} type="button">
                      {c.name}
                      {typeof c.count === 'number' && <span className={styles.count}>{c.count}</span>}
                    </button>
                  ) : (
                    <span className={styles.pill}>
                      {c.name}
                      {typeof c.count === 'number' && <span className={styles.count}>{c.count}</span>}
                    </span>
                  )}
                </li>
              ))
            : fallbackItems.map((n) => (
                <li key={n} className={styles.item}>
                  {interactive ? (
                    <button className={styles.pill} type="button">
                      {n}
                    </button>
                  ) : (
                    <span className={styles.pill}>{n}</span>
                  )}
                </li>
              ))}
        </ul>
      </Container>
    </section>
  );
};

export default Categories;
