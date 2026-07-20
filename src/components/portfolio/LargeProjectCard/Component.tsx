import React from 'react';
import clsx from 'clsx';
import styles from './LargeProjectCard.module.css';
import { ProjectCard } from '../ProjectCard';
import type { Project } from '../ProjectCard/types';

export type LargeProjectCardProps = React.ComponentPropsWithoutRef<'div'> & {
  project: Project;
};

export const LargeProjectCard: React.FC<LargeProjectCardProps> = ({ project, className, ...rest }) => {
  return (
    <div className={clsx(styles.root, className)} {...rest}>
      <ProjectCard project={project} variant="large" />
    </div>
  );
};

export default LargeProjectCard;
