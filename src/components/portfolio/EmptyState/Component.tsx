import React from 'react';
import clsx from 'clsx';
import styles from './EmptyState.module.css';

export type EmptyStateProps = React.ComponentPropsWithoutRef<'div'> & {
  message?: string;
  cta?: React.ReactNode;
  illustration?: React.ReactNode;
};

export const EmptyState: React.FC<EmptyStateProps> = ({ message = 'No items', cta, illustration, className, ...rest }) => {
  return (
    <div className={clsx(styles.root, className)} role="status" aria-live="polite" {...rest}>
      {illustration && <div className={styles.illustration} aria-hidden>{illustration}</div>}
      <p className={styles.message}>{message}</p>
      {cta && <div className={styles.cta}>{cta}</div>}
    </div>
  );
};

export default EmptyState;
