import React from 'react';
import clsx from 'clsx';
import styles from './ArticleContent.module.css';

export type ArticleContentProps = React.ComponentPropsWithoutRef<'article'> & {
  children?: React.ReactNode;
  id?: string;
};

export const ArticleContent: React.FC<ArticleContentProps> = ({ children, id, className, ...rest }) => (
  <article id={id} className={clsx(styles.root, className)} {...rest}>
    <div className={styles.content}>{children}</div>
  </article>
);

export default ArticleContent;
