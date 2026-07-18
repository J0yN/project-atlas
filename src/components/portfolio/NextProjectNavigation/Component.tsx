import React from 'react';
import clsx from 'clsx';
import styles from './NextProjectNavigation.module.css';
import type { Project } from '../ProjectCard/Component';

export type NextProjectNavigationProps = React.ComponentPropsWithoutRef<'nav'> & {
  previous?: Project | null;
  next?: Project | null;
};

export const NextProjectNavigation: React.FC<NextProjectNavigationProps> = ({ previous, next, className, ...rest }) => (
  <nav className={clsx(styles.root, className)} aria-label="Next project" {...rest}>
    {previous && (
      <a href={`/projects/${previous.slug}`} className={styles.link} aria-label={`Previous project ${previous.title}`}>
        &larr; {previous.title}
      </a>
    )}
    {next && (
      <a href={`/projects/${next.slug}`} className={styles.link} aria-label={`Next project ${next.title}`}>
        {next.title} &rarr;
      </a>
    )}
  </nav>
);

export default NextProjectNavigation;
