import React from 'react';
import clsx from 'clsx';
import type { AnalyticsMetric } from '@/types/dashboard';
import styles from './StatsCard.module.css';

export type StatsCardProps = {
  metric: AnalyticsMetric;
  className?: string;
};

export const StatsCard: React.FC<StatsCardProps> = ({ metric, className }) => {
  const isPositive = metric.trend === 'up';
  const isNeutral = metric.trend === 'neutral';
  const deltaSign = isPositive ? '+' : '';
  const deltaLabel = `${deltaSign}${metric.delta}${metric.unit === '%' ? '%' : ''}`;

  return (
    <article className={clsx(styles.card, className)}>
      <p className={styles.label}>{metric.label}</p>
      <p className={styles.value}>{metric.formattedValue}</p>
      <p
        className={clsx(styles.delta, {
          [styles.deltaUp]: isPositive,
          [styles.deltaDown]: metric.trend === 'down',
          [styles.deltaNeutral]: isNeutral
        })}
        aria-label={`Change: ${deltaLabel}`}
      >
        <span className={styles.deltaIcon} aria-hidden>
          {isPositive ? '↑' : metric.trend === 'down' ? '↓' : '—'}
        </span>
        {deltaLabel}
      </p>
    </article>
  );
};

export default StatsCard;
