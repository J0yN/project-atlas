'use client';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './ProjectSearch.module.css';

export type ProjectSearchProps = React.ComponentPropsWithoutRef<'form'> & {
  placeholder?: string;
  onSearch?: (q: string) => void;
  debounceMs?: number;
};

export const ProjectSearch: React.FC<ProjectSearchProps> = ({ placeholder = 'Search projects', onSearch, debounceMs = 300, className, ...rest }) => {
  const [q, setQ] = useState('');
  useEffect(() => {
    const t = setTimeout(() => onSearch?.(q), debounceMs);
    return () => clearTimeout(t);
  }, [q, debounceMs, onSearch]);

  return (
    <form role="search" className={clsx(styles.root, className)} onSubmit={(e) => e.preventDefault()} {...rest}>
      <label className={styles.label}>
        <span className={styles.sr}>Search projects</span>
        <input className={styles.input} type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={placeholder} aria-label="Search projects" />
      </label>
    </form>
  );
};

export default ProjectSearch;
