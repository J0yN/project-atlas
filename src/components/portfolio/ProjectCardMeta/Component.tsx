import React from 'react';
import clsx from 'clsx';
import styles from './ProjectCardMeta.module.css';

export type ProjectCardMetaProps = React.ComponentPropsWithoutRef<'div'> & {
  client?: string;
  year?: number;
  category?: string;
  readingTime?: string;
};

export const ProjectCardMeta: React.FC<ProjectCardMetaProps> = ({ client, year, category, readingTime, className, ...rest }) => {
  return (
    <div className={clsx(styles.root, className)} {...rest}>
      <span className={styles.metaItem}>{client}</span>
      {year && <span className={styles.metaSep}>•</span>}
      {year && <span className={styles.metaItem}>{year}</span>}
      {category && <span className={styles.metaSep}>•</span>}
      {category && <span className={styles.metaItem}>{category}</span>}
      {readingTime && <span className={styles.metaItem}>{readingTime}</span>}
    </div>
  );
};

export default ProjectCardMeta;
