import React from 'react';
import clsx from 'clsx';
import styles from './FeaturedProjectCard.module.css';
import { ProjectCard } from '../ProjectCard';
import type { Project } from '../ProjectCard/types';

export type FeaturedProjectCardProps = React.ComponentPropsWithoutRef<'div'> & {
  project: Project;
};

export const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ project, className, ...rest }) => (
  <div className={clsx(styles.root, className)} {...rest}>
    <ProjectCard project={project} variant="featured" />
  </div>
);

export default FeaturedProjectCard;
