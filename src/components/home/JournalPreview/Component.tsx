import React from 'react';
import clsx from 'clsx';
import styles from './JournalPreview.module.css';
import shared from '../shared.module.css';
import { Container } from '@/components/ui';

export type JournalItem = { id: string; title: string; excerpt?: string; date?: string };
export type JournalPreviewProps = React.ComponentPropsWithoutRef<'section'> & { items?: readonly JournalItem[]; title?: string };

export const JournalPreview: React.FC<JournalPreviewProps> = ({ items = [], title = 'From the Journal', className, ...rest }) => {
  return (
    <section className={clsx(shared.section, styles.root, className)} aria-labelledby="journal-title" {...rest}>
      <Container>
        <h2 id="journal-title" className={styles.title}>
          {title}
        </h2>
        <ul className={styles.list}>
          {items.length > 0
            ? items.map((it) => (
                <li key={it.id} className={styles.item}>
                  <article>
                    <h3 className={styles.itemTitle}>{it.title}</h3>
                    {it.excerpt && <p className={styles.itemExcerpt}>{it.excerpt}</p>}
                    {it.date && <time className={styles.itemDate}>{it.date}</time>}
                  </article>
                </li>
              ))
            : Array.from({ length: 3 }).map((_, i) => (
                <li key={i} className={styles.item}>
                  <article>
                    <h3 className={styles.itemTitle}>Post Title</h3>
                    <p className={styles.itemExcerpt}>Short excerpt preview for the post.</p>
                    <time className={styles.itemDate}>Jan 1, 2025</time>
                  </article>
                </li>
              ))}
        </ul>
      </Container>
    </section>
  );
};

export default JournalPreview;
