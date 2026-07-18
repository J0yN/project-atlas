import React from 'react';
import clsx from 'clsx';
import styles from './ImagePair.module.css';
import type { ImageAsset } from '../ImageGallery/Component';

export type ImagePairProps = React.ComponentPropsWithoutRef<'div'> & {
  left: ImageAsset;
  right: ImageAsset;
};

export const ImagePair: React.FC<ImagePairProps> = ({ left, right, className, ...rest }) => (
  <div className={clsx(styles.root, className)} {...rest}>
    <div className={styles.side}><img src={left.src} alt={left.alt ?? ''} loading="lazy" className={styles.img} /></div>
    <div className={styles.side}><img src={right.src} alt={right.alt ?? ''} loading="lazy" className={styles.img} /></div>
  </div>
);

export default ImagePair;
