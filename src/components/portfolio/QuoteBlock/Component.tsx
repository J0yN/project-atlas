import React from 'react';
import clsx from 'clsx';
import styles from './QuoteBlock.module.css';

export type QuoteBlockProps = React.ComponentPropsWithoutRef<'blockquote'> & {
  quote: string;
  author?: string;
  role?: string;
};

export const QuoteBlock: React.FC<QuoteBlockProps> = ({ quote, author, role, className, ...rest }) => (
  <blockquote className={clsx(styles.root, className)} {...rest}>
    <p className={styles.quote}>&ldquo;{quote}&rdquo;</p>
    {(author || role) && (
      <footer className={styles.footer}>
        {author && <span className={styles.author}>{author}</span>}
        {role && <span className={styles.role}>{role}</span>}
      </footer>
    )}
  </blockquote>
);

export default QuoteBlock;
