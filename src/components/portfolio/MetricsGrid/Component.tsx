import React from 'react';
import clsx from 'clsx';
import styles from './MetricsGrid.module.css';

export type Metric = { id: string; label: string; value: string; description?: string };
export type MetricsGridProps = React.ComponentPropsWithoutRef<'div'> & {
  metrics: readonly Metric[];
};

export const MetricsGrid: React.FC<MetricsGridProps> = ({ metrics, className, ...rest }) => (
  <div className={clsx(styles.root, className)} {...rest}>
    {metrics.map((m) => (
      <div key={m.id} className={styles.item}>
        <div className={styles.value} aria-hidden>{m.value}</div>
        <div className={styles.label}>{m.label}</div>
        {m.description && <div className={styles.desc}>{m.description}</div>}
      </div>
    ))}
  </div>
);

export default MetricsGrid;
