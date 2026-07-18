import React from 'react';
import clsx from 'clsx';
import styles from './Services.module.css';
import shared from '../shared.module.css';
import { Container, Stack } from '@/components/ui';

export type Service = { id: string; title: string; description?: string };
export type ServicesProps = React.ComponentPropsWithoutRef<'section'> & {
  items?: readonly Service[];
  title?: string;
  eyebrow?: string;
  description?: string;
};

export const Services: React.FC<ServicesProps> = ({ items = [], title = 'Services', eyebrow, description, className, ...rest }) => {
  return (
    <section className={clsx(shared.section, styles.root, className)} aria-labelledby="services-title" {...rest}>
      <Container>
        <Stack gap="12" className={styles.header}>
          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
          <h2 id="services-title" className={styles.title}>
            {title}
          </h2>
          {description ? <p className={styles.description}>{description}</p> : null}
        </Stack>
        <div className={styles.grid}>
          {items.length > 0
            ? items.map((s) => (
                <article key={s.id} className={styles.card}>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  {s.description && <p className={styles.cardDesc}>{s.description}</p>}
                </article>
              ))
            : ['Design', 'Product Strategy', 'Research'].map((t) => (
                <article key={t} className={styles.card}>
                  <h3 className={styles.cardTitle}>{t}</h3>
                  <p className={styles.cardDesc}>Brief description of the service offering.</p>
                </article>
              ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
