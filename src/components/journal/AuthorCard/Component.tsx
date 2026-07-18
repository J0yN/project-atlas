import React from 'react';
import clsx from 'clsx';
import styles from './AuthorCard.module.css';

export type Author = { name: string; bio?: string; avatar?: { src: string; alt?: string } };
export type AuthorCardProps = React.ComponentPropsWithoutRef<'div'> & {
  author: Author;
};

export const AuthorCard: React.FC<AuthorCardProps> = ({ author, className, ...rest }) => (
  <div className={clsx(styles.root, className)} {...rest}>
    {author.avatar && (
      <img src={author.avatar.src} alt={author.avatar.alt ?? ''} className={styles.avatar} />
    )}
    <div className={styles.info}>
      <div className={styles.name}>{author.name}</div>
      {author.bio && <div className={styles.bio}>{author.bio}</div>}
    </div>
  </div>
);

export default AuthorCard;
