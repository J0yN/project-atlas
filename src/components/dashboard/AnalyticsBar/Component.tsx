import React from 'react';
import clsx from 'clsx';
import type { AnalyticsSeries } from '@/types/dashboard';
import styles from './AnalyticsBar.module.css';

export type AnalyticsBarProps = {
  series: AnalyticsSeries;
  title?: string;
  className?: string;
};

export const AnalyticsBar: React.FC<AnalyticsBarProps> = ({ series, title, className }) => {
  const max = Math.max(...series.data.map((d) => d.value));

  return (
    <figure className={clsx(styles.figure, className)}>
      {title && <figcaption className={styles.title}>{title}</figcaption>}
      <div className={styles.chart} role="img" aria-label={`Bar chart: ${series.name}`}>
        {series.data.map((point) => {
          const pct = max > 0 ? (point.value / max) * 100 : 0;
          return (
            <div key={point.label} className={styles.bar}>
              <div
                className={styles.fill}
                style={{ height: `${pct}%` }}
                role="presentation"
                aria-hidden
              />
              <span className={styles.barLabel}>{point.label}</span>
              <span className={styles.barValue} aria-label={`${point.label}: ${point.value}`}>
                {point.value >= 1000 ? `${(point.value / 1000).toFixed(1)}k` : String(point.value)}
              </span>
            </div>
          );
        })}
      </div>
    </figure>
  );
};

export default AnalyticsBar;
