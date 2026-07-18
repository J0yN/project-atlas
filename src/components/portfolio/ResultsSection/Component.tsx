import React from 'react';
import clsx from 'clsx';
import styles from './ResultsSection.module.css';

export type ResultsSectionProps = React.ComponentPropsWithoutRef<'section'> & {
  heading?: string;
  summary?: string;
  children?: React.ReactNode;
};

export const ResultsSection: React.FC<ResultsSectionProps> = ({ heading = 'Results', summary, children, className, ...rest }) => (
  <section className={clsx(styles.root, className)} aria-labelledby="results-heading" {...rest}>
    <h2 id="results-heading" className={styles.heading}>{heading}</h2>
    {summary && <p className={styles.summary}>{summary}</p>}
    <div className={styles.content}>{children}</div>
  </section>
);

export default ResultsSection;
