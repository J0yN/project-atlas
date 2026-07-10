import React from 'react';
import clsx from 'clsx';
import styles from './WorkspacePreview.module.css';
import { Container } from '@/components/ui';

export type WorkspacePreviewProps = React.ComponentPropsWithoutRef<'section'> & { title?: string };

export const WorkspacePreview: React.FC<WorkspacePreviewProps> = ({ title = 'Workspace', className, ...rest }) => {
  return (
    <section className={clsx(styles.root, className)} aria-labelledby="workspace-title" {...rest}>
      <Container>
        <h2 id="workspace-title" className={styles.title}>{title}</h2>
        <div className={styles.previewGrid}>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className={styles.previewCard} aria-hidden />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WorkspacePreview;
