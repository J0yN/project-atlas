import React from 'react';
import clsx from 'clsx';
import styles from './EditorialSection.module.css';

export type EditorialSectionProps = React.ComponentPropsWithoutRef<'section'> & {
  id?: string;
  heading?: string;
  children?: React.ReactNode;
};

export const EditorialSection: React.FC<EditorialSectionProps> = ({ id, heading, children, className, ...rest }) => (
  <section id={id} className={clsx(styles.root, className)} aria-labelledby={heading ? `${id}-heading` : undefined} {...rest}>
    {heading && <h2 id={`${id}-heading`} className={styles.heading}>{heading}</h2>}
    <div className={styles.content}>{children}</div>
  </section>
);

export default EditorialSection;
