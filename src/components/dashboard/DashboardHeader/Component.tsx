import React from 'react';
import clsx from 'clsx';
import { ThemeToggle } from '@/components/dashboard/ThemeToggle';
import { SidebarToggle } from '@/components/dashboard/SidebarToggle';
import styles from './DashboardHeader.module.css';

export type DashboardHeaderProps = {
  title?: string;
  className?: string;
};

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title = 'Dashboard', className }) => (
  <header className={clsx(styles.header, className)}>
    <div className={styles.left}>
      <SidebarToggle className={styles.mobileToggle} />
      <span className={styles.pageTitle}>{title}</span>
    </div>
    <div className={styles.right}>
      <ThemeToggle />
      <div className={styles.avatar} aria-label="User avatar" role="img">
        A
      </div>
    </div>
  </header>
);

export default DashboardHeader;
