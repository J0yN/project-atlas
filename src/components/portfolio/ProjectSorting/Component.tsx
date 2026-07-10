'use client';
import React from 'react';
import clsx from 'clsx';
import styles from './ProjectSorting.module.css';

export type SortOption = 'latest' | 'oldest' | 'featured' | 'alphabetical';
export type ProjectSortingProps = React.ComponentPropsWithoutRef<'div'> & {
  value?: SortOption;
  onChange?: (v: SortOption) => void;
};

export const ProjectSorting: React.FC<ProjectSortingProps> = ({ value = 'latest', onChange, className, ...rest }) => {
  return (
    <div className={clsx(styles.root, className)} {...rest}>
      <label className={styles.label}>
        Sort
        <select aria-label="Sort projects" value={value} onChange={(e) => onChange?.(e.target.value as SortOption)} className={styles.select}>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="featured">Featured</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </label>
    </div>
  );
};

export default ProjectSorting;
