import React from 'react';
import clsx from 'clsx';
import styles from './SmallProjectCard.module.css';
import { ProjectCard } from '../ProjectCard';
import type { Project } from '../ProjectCard/types';

export type SmallProjectCardProps = React.ComponentPropsWithoutRef<'div'> & { project: Project };

export const SmallProjectCard: React.FC<SmallProjectCardProps> = ({ project, className, ...rest }) => (
  <div className={clsx(styles.root, className)} {...rest}>
    <ProjectCard project={project} variant="small" />
  </div>
);

export default SmallProjectCard;
