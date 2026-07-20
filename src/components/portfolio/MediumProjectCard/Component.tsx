import React from 'react';
import clsx from 'clsx';
import styles from './MediumProjectCard.module.css';
import { ProjectCard } from '../ProjectCard';
import type { Project } from '../ProjectCard/types';

export type MediumProjectCardProps = React.ComponentPropsWithoutRef<'div'> & {
  project: Project;
};

export const MediumProjectCard: React.FC<MediumProjectCardProps> = ({ project, className, ...rest }) => (
  <div className={clsx(styles.root, className)} {...rest}>
    <ProjectCard project={project} variant="medium" />
  </div>
);

export default MediumProjectCard;
