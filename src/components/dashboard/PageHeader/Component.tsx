import React from 'react';
import clsx from 'clsx';
import styles from './PageHeader.module.css';

export type PageHeaderProps = {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
};

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description, actions, className }) => (
  <header className={clsx(styles.header, className)}>
    <div className={styles.text}>
      <h1 className={styles.title}>{title}</h1>
      {description && <p className={styles.description}>{description}</p>}
    </div>
    {actions && <div className={styles.actions}>{actions}</div>}
  </header>
);

export default PageHeader;
