'use client';
import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import styles from './SidebarToggle.module.css';

export type SidebarToggleProps = {
  className?: string;
};

export const SidebarToggle: React.FC<SidebarToggleProps> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((v) => !v), []);

  return (
    <>
      <button
        className={clsx(styles.toggle, className)}
        type="button"
        aria-label={open ? 'Close sidebar' : 'Open sidebar'}
        aria-expanded={open}
        aria-controls="dashboard-sidebar"
        onClick={toggle}
      >
        <span className={clsx(styles.bar, { [styles.barOpen1]: open })} aria-hidden />
        <span className={clsx(styles.bar, { [styles.barOpen2]: open })} aria-hidden />
        <span className={clsx(styles.bar, { [styles.barOpen3]: open })} aria-hidden />
      </button>
      {open && (
        <div
          className={styles.backdrop}
          aria-hidden
          onClick={toggle}
        />
      )}
    </>
  );
};

export default SidebarToggle;
