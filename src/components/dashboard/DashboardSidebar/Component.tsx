import React from 'react';
import clsx from 'clsx';
import type { NavItem } from '@/types/dashboard';
import { DashboardNav } from '@/components/dashboard/DashboardNav';
import { releaseInfo } from '@/config/release';
import styles from './DashboardSidebar.module.css';

export type DashboardSidebarProps = {
  items: readonly NavItem[];
  locale: string;
  className?: string;
};

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ items, locale, className }) => (
  <aside id="dashboard-sidebar" className={clsx(styles.sidebar, className)}>
    <div className={styles.brand}>
      <span className={styles.logo} aria-hidden>
        ◈
      </span>
      <span className={styles.brandName}>Atlas</span>
    </div>
    <DashboardNav items={items} locale={locale} />
    <div className={styles.footer}>
      <p className={styles.version}>
        v{releaseInfo.version} · {releaseInfo.sprint}
      </p>
    </div>
  </aside>
);

export default DashboardSidebar;
