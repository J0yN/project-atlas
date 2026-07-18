import React from 'react';
import clsx from 'clsx';
import styles from './ImageGallery.module.css';

export type ImageAsset = { src: string; alt?: string; width?: number; height?: number };
export type ImageGalleryProps = React.ComponentPropsWithoutRef<'div'> & {
  images: readonly ImageAsset[];
};

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, className, ...rest }) => {
  return (
    <div className={clsx(styles.root, className)} {...rest}>
      {images.map((img, i) => (
        <figure key={i} className={styles.figure}>
          <img src={img.src} alt={img.alt ?? ''} loading="lazy" className={styles.img} width={img.width} height={img.height} />
        </figure>
      ))}
    </div>
  );
};

export default ImageGallery;
