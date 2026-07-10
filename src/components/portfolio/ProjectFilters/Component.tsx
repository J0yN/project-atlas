'use client';
import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './ProjectFilters.module.css';

export type FilterCategory = { id: string; title: string };
export type ProjectFiltersProps = React.ComponentPropsWithoutRef<'div'> & {
  categories?: readonly FilterCategory[];
  selected?: readonly string[];
  onChange?: (selected: string[]) => void;
};

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({ categories = [], selected = [], onChange, className, ...rest }) => {
  const [state, setState] = useState<string[]>(Array.from(selected));

  function toggle(id: string) {
    const next = state.includes(id) ? state.filter((s) => s !== id) : [...state, id];
    setState(next);
    onChange?.(next);
  }

  return (
    <div className={clsx(styles.root, className)} role="region" aria-label="Project filters" {...rest}>
      {categories.map((c) => (
        <label key={c.id} className={styles.option}>
          <input type="checkbox" checked={state.includes(c.id)} onChange={() => toggle(c.id)} />
          <span className={styles.label}>{c.title}</span>
        </label>
      ))}
    </div>
  );
};

export default ProjectFilters;
