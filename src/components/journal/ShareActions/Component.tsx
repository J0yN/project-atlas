'use client';
import React from 'react';
import clsx from 'clsx';
import styles from './ShareActions.module.css';

export type ShareActionsProps = React.ComponentPropsWithoutRef<'div'> & {
  title?: string;
  url?: string;
};

export const ShareActions: React.FC<ShareActionsProps> = ({ title = document.title, url = typeof window !== 'undefined' ? window.location.href : '', className, ...rest }) => {
  async function onShare() {
    if ((navigator as any).share) {
      try {
        await (navigator as any).share({ title, url });
      } catch {
        // user cancelled
      }
    } else {
      // fallback: copy link
      try {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard');
      } catch {
        // ignore
      }
    }
  }

  return (
    <div className={clsx(styles.root, className)} {...rest}>
      <button onClick={onShare} className={styles.btn} aria-label="Share article">Share</button>
    </div>
  );
};

export default ShareActions;
