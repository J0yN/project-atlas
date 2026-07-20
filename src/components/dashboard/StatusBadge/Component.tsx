import React from 'react';
import clsx from 'clsx';
import type { ProjectStatus, ArticleStatus } from '@/types/dashboard';
import styles from './StatusBadge.module.css';

type AnyStatus = ProjectStatus | ArticleStatus;

export type StatusBadgeProps = {
  status: AnyStatus;
  className?: string;
};

const STATUS_LABELS: Record<AnyStatus, string> = {
  active: 'Active',
  archived: 'Archived',
  draft: 'Draft',
  published: 'Published',
  scheduled: 'Scheduled'
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => (
  <span className={clsx(styles.badge, styles[status], className)} aria-label={STATUS_LABELS[status]}>
    {STATUS_LABELS[status]}
  </span>
);

export default StatusBadge;
