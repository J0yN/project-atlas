import React from 'react';
import clsx from 'clsx';
import styles from './CategoryBadge.module.css';

export type CategoryBadgeProps = React.ComponentPropsWithoutRef<'span'> & {
  label: string;
};

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ label, className, ...rest }) => (
  <span className={clsx(styles.root, className)} {...rest}>{label}</span>
);

export default CategoryBadge;
