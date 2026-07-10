import React from 'react';
import clsx from 'clsx';
import styles from './WorkExplorer.module.css';
import type { ProjectItem } from './MasonryGrid';
import { MasonryGrid } from './MasonryGrid';
import { ProjectFilters } from './ProjectFilters';
import { ProjectSorting } from './ProjectSorting';
import { ProjectSearch } from './ProjectSearch';
import { InfiniteScroll } from './InfiniteScroll';
import { CategoryTabs } from './CategoryTabs';
import { EmptyState } from './EmptyState';

export type WorkExplorerProps = React.ComponentPropsWithoutRef<'section'> & {
  title?: string;
  description?: string;
  /** initial projects to render on server */
  initialItems?: readonly ProjectItem[];
  categories?: readonly { id: string; title: string }[];
  pageSize?: number;
};

/**
 * WorkExplorer
 * Server component that composes search, filters, sorting, masonry grid and infinite loading.
 */
export const WorkExplorer: React.FC<WorkExplorerProps> = ({
  title = 'Work Explorer',
  description,
  initialItems = [],
  categories = [],
  pageSize = 12,
  className,
  ...rest
}) => {
  return (
    <section className={clsx(styles.root, className)} aria-labelledby="work-explorer-title" {...rest}>
      <header className={styles.header}>
        <h2 id="work-explorer-title" className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </header>

      <div className={styles.controls}>
        <div className={styles.leftControls}>
          <ProjectSearch />
        </div>
        <div className={styles.rightControls}>
          <ProjectFilters categories={categories} />
          <ProjectSorting />
        </div>
      </div>

      <CategoryTabs categories={categories} />

      {initialItems.length === 0 ? (
        <EmptyState message="No projects found" />
      ) : (
        <InfiniteScroll initialItems={initialItems} pageSize={pageSize}>
          {(items) => (
            <MasonryGrid items={items} />
          )}
        </InfiniteScroll>
      )}
    </section>
  );
};

export default WorkExplorer;
