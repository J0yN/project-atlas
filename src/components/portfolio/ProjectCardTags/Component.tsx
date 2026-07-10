import React from 'react';
import clsx from 'clsx';
import styles from './ProjectCardTags.module.css';

export type ProjectCardTagsProps = React.ComponentPropsWithoutRef<'div'> & {
  tags?: readonly string[];
};

export const ProjectCardTags: React.FC<ProjectCardTagsProps> = ({ tags = [], className, ...rest }) => {
  if (!tags || tags.length === 0) return null;
  return (
    <div className={clsx(styles.root, className)} {...rest}>
      {tags.map((t) => (
        <span key={t} className={styles.tag}>{t}</span>
      ))}
    </div>
  );
};

export default ProjectCardTags;
