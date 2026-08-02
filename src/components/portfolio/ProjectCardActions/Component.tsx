import React from 'react';
import clsx from 'clsx';
import styles from './ProjectCardActions.module.css';
import ButtonAdapter from '@/components/ui/ButtonAdapter';
import type { Project } from '../ProjectCard/types';

export type ProjectCardActionsProps = React.ComponentPropsWithoutRef<'div'> & {
  project?: Project;
};

export const ProjectCardActions: React.FC<ProjectCardActionsProps> = ({ project, className, ...rest }) => {
  return (
    <div className={clsx(styles.root, className)} {...rest}>
      {project?.slug && (
        <ButtonAdapter as="a" href={`/projects/${project.slug}`} className={styles.primary}>View Project</ButtonAdapter>
      )}
      {project && (
        <ButtonAdapter as="a" href={`/#`} className={styles.secondary} rel="noopener noreferrer">External</ButtonAdapter>
      )}
    </div>
  );
};

export default ProjectCardActions;
