import React from 'react';
import clsx from 'clsx';
import styles from './ProjectCard.module.css';
import { ProjectCardMedia } from '../ProjectCardMedia';
import { ProjectCardContent } from '../ProjectCardContent';
import { ProjectCardMeta } from '../ProjectCardMeta';
import { ProjectCardTags } from '../ProjectCardTags';
import { ProjectCardActions } from '../ProjectCardActions';

export type Project = {
  id: string;
  slug?: string;
  title: string;
  description?: string;
  image?: { src: string; alt?: string; width?: number; height?: number };
  category?: string;
  tags?: string[];
  client?: string;
  year?: number;
  readingTime?: string;
  featured?: boolean;
};

export type ProjectCardProps = React.ComponentPropsWithoutRef<'article'> & {
  project: Project;
  variant?: 'small' | 'medium' | 'large' | 'featured';
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, variant = 'medium', className, ...rest }) => {
  return (
    <article className={clsx(styles.root, styles[`variant-${variant}`], className)} {...rest}>
      {project.image && (
        <ProjectCardMedia src={project.image.src} alt={project.image.alt ?? project.title} width={project.image.width} height={project.image.height} />
      )}

      <div className={styles.body}>
        <ProjectCardContent title={project.title} description={project.description} slug={project.slug} />
        <ProjectCardMeta client={project.client} year={project.year} category={project.category} readingTime={project.readingTime} />
        {project.tags && <ProjectCardTags tags={project.tags} />}
        <ProjectCardActions project={project} />
      </div>
    </article>
  );
};

export default ProjectCard;
