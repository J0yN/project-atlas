'use client';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './ReadingProgress.module.css';

export type ReadingProgressProps = React.ComponentPropsWithoutRef<'div'> & {
  targetId?: string; // id of content element to track
};

export const ReadingProgress: React.FC<ReadingProgressProps> = ({ targetId = 'article-content', className, ...rest }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = document.getElementById(targetId);
    if (!element) return;
    const contentElement = element;
    function onScroll() {
      const rect = contentElement.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        setProgress(100);
        return;
      }
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(Math.round((scrolled / total) * 100));
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [targetId]);

  return (
    <div className={clsx(styles.root, className)} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress} {...rest}>
      <div className={styles.bar} style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ReadingProgress;
