import React from 'react';
import clsx from 'clsx';
import styles from './ProjectCardMedia.module.css';

export type MediaProps = React.ComponentPropsWithoutRef<'div'> & {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  aspectRatio?: number; // width/height
  priority?: boolean;
};

export const ProjectCardMedia: React.FC<MediaProps> = ({ src, alt = '', width, height, aspectRatio, priority = false, className, ...rest }) => {
  const style: (React.CSSProperties & Record<'--aspect-ratio', string>) | undefined = aspectRatio ? { '--aspect-ratio': String(aspectRatio) } : undefined;
  // Use native img with lazy loading; consumers may swap in Next/Image at higher level
  return (
    <div className={clsx(styles.root, className)} style={style} {...rest}>
      <img className={styles.img} src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} width={width} height={height} />
    </div>
  );
};

export default ProjectCardMedia;
