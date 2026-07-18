import React from 'react';
import clsx from 'clsx';
import styles from './VideoSection.module.css';

export type VideoSectionProps = React.ComponentPropsWithoutRef<'div'> & {
  src: string;
  title?: string;
  poster?: string;
};

export const VideoSection: React.FC<VideoSectionProps> = ({ src, title, poster, className, ...rest }) => (
  <div className={clsx(styles.root, className)} {...rest}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <div className={styles.wrapper}>
      <video controls className={styles.video} poster={poster} preload="metadata">
        <source src={src} />
      </video>
    </div>
  </div>
);

export default VideoSection;
