import React from 'react';
import clsx from 'clsx';
import styles from './ProjectCardContent.module.css';

export type ProjectCardContentProps = React.ComponentPropsWithoutRef<'div'> & {
  title: string;
  description?: string;
  slug?: string;
};

export const ProjectCardContent: React.FC<ProjectCardContentProps> = ({ title, description, slug: _slug, className, ...rest }) => {
  return (
    <div className={clsx(styles.root, className)} {...rest}>
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default ProjectCardContent;
