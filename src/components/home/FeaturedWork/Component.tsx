import React from 'react';
import clsx from 'clsx';
import styles from './FeaturedWork.module.css';
import shared from '../shared.module.css';
import type { ReactNode } from 'react';
import { Container } from '@/components/ui';

export type WorkItem = {
  id: string;
  title: string;
  excerpt?: string;
};

export type FeaturedWorkProps = React.ComponentPropsWithoutRef<'section'> & {
  title?: ReactNode;
  items?: readonly WorkItem[];
};

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ title = 'Featured Work', items = [], className, ...rest }) => {
  return (
    <section className={clsx(shared.section, styles.root, className)} aria-labelledby="featured-work-title" {...rest}>
      <Container>
        <div className={styles.header}>
          <h2 id="featured-work-title" className={styles.title}>
            {title}
          </h2>
        </div>

        <ul className={styles.grid}>
          {items.length > 0
            ? items.map((it) => (
                <li key={it.id} className={styles.card}>
                  <div className={styles.cardVisual} aria-hidden />
                  <h3 className={styles.cardTitle}>{it.title}</h3>
                  {it.excerpt && <p className={styles.cardExcerpt}>{it.excerpt}</p>}
                </li>
              ))
            : Array.from({ length: 3 }).map((_, i) => (
                <li key={i} className={styles.card}>
                  <div className={styles.cardVisual} aria-hidden />
                  <h3 className={styles.cardTitle}>Project Title</h3>
                  <p className={styles.cardExcerpt}>Short description of the project.</p>
                </li>
              ))}
        </ul>
      </Container>
    </section>
  );
};

export default FeaturedWork;
