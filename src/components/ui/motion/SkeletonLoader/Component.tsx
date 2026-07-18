import React from 'react';
import clsx from 'clsx';
import styles from './SkeletonLoader.module.css';

export type SkeletonShape = 'line' | 'rect' | 'circle';

export type SkeletonLoaderProps = {
  /** Visual shape of the skeleton element. */
  shape?: SkeletonShape;
  /** Width of the skeleton. Accepts any CSS length value. */
  width?: React.CSSProperties['width'];
  /** Height of the skeleton. Accepts any CSS length value. */
  height?: React.CSSProperties['height'];
  className?: string;
  /** Accessible label for the loading region. */
  'aria-label'?: string;
};

/**
 * SkeletonLoader
 *
 * A CSS-only shimmer placeholder rendered while content is loading. Server
 * component – requires no JavaScript to display. Respects
 * `prefers-reduced-motion` by disabling the shimmer animation.
 *
 * @example
 * <SkeletonLoader shape="line" width="80%" height="1rem" />
 * <SkeletonLoader shape="circle" width={48} height={48} />
 * <SkeletonLoader shape="rect" width="100%" height={200} />
 */
export function SkeletonLoader({
  shape = 'rect',
  width = '100%',
  height = '1rem',
  className,
  'aria-label': ariaLabel = 'Loading…',
}: SkeletonLoaderProps): React.JSX.Element {
  return (
    <span
      role="status"
      aria-label={ariaLabel}
      aria-busy="true"
      className={clsx(styles.root, className)}
      style={{ width, height, display: 'block' }}
    >
      <span
        aria-hidden
        className={clsx(styles.shimmer, styles[shape])}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </span>
  );
}
