'use client';
import React from 'react';
import clsx from 'clsx';
import styles from './CategoryTabs.module.css';

export type CategoryTab = { id: string; title: string };
export type CategoryTabsProps = React.ComponentPropsWithoutRef<'div'> & {
  categories?: readonly CategoryTab[];
  selected?: string;
  onChange?: (id: string) => void;
};

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories = [], selected, onChange, className, ...rest }) => {
  return (
    <div className={clsx(styles.root, className)} role="tablist" aria-label="Project categories" {...rest}>
      {categories.map((c) => (
        <button key={c.id} role="tab" aria-selected={c.id === selected} className={styles.tab} onClick={() => onChange?.(c.id)}>
          {c.title}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
