import React from 'react';
import clsx from 'clsx';
import styles from './HeroStats.module.css';
import { spacing } from '@/design-system/tokens';
import { rem } from '@/design-system/utils/tokenHelpers';

export type Stat = {
  label: string;
  value: string;
};

export type HeroStatsProps = React.ComponentPropsWithoutRef<'ul'> & {
  stats: readonly Stat[];
};

export const HeroStats: React.FC<HeroStatsProps> = ({ stats, className, style, ...rest }) => {
  if (!stats || stats.length === 0) return null;

  const gap = rem(spacing['12']);

  return (
    <ul className={clsx(styles.root, className)} style={{ gap, ...style }} {...rest}>
      {stats.map((s, i) => (
        <li key={i} className={styles.item}>
          <span className={styles.value}>{s.value}</span>
          <span className={styles.label}>{s.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default HeroStats;
