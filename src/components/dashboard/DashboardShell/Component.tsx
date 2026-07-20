import React from 'react';
import clsx from 'clsx';
import type { NavItem } from '@/types/dashboard';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import styles from './DashboardShell.module.css';

export type DashboardShellProps = {
  children: React.ReactNode;
  navItems: readonly NavItem[];
  locale: string;
  pageTitle?: string;
  className?: string;
};

export const DashboardShell: React.FC<DashboardShellProps> = ({
  children,
  navItems,
  locale,
  pageTitle,
  className
}) => (
  <div className={clsx(styles.shell, className)}>
    <DashboardSidebar items={navItems} locale={locale} />
    <div className={styles.main}>
      <DashboardHeader title={pageTitle} />
      <main className={styles.content}>{children}</main>
    </div>
  </div>
);

export default DashboardShell;
