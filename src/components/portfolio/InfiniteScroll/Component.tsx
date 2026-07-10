'use client';
import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './InfiniteScroll.module.css';
import type { ProjectItem } from '../MasonryGrid';

export type InfiniteScrollProps = React.ComponentPropsWithoutRef<'div'> & {
  initialItems?: readonly ProjectItem[];
  pageSize?: number;
  children: (items: readonly ProjectItem[]) => React.ReactNode;
};

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ initialItems = [], pageSize = 12, children, className, ...rest }) => {
  const [items, setItems] = useState<ProjectItem[]>(Array.from(initialItems));
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !loading) {
          setLoading(true);
          // Placeholder: simulate network request
          setTimeout(() => {
            const more = Array.from({ length: pageSize }).map((_, i) => ({ id: `more-${items.length + i}`, title: `Project ${items.length + i + 1}` }));
            setItems((cur) => [...cur, ...more]);
            setLoading(false);
          }, 600);
        }
      });
    }, { rootMargin: '200px' });
    if (sentinelRef.current) obs.observe(sentinelRef.current);
    return () => obs.disconnect();
  }, [loading, pageSize, items.length]);

  return (
    <div className={clsx(styles.root, className)} {...rest}>
      {children(items)}
      <div ref={sentinelRef} className={styles.sentinel} aria-hidden>{loading ? 'Loading...' : ''}</div>
    </div>
  );
};

export default InfiniteScroll;
