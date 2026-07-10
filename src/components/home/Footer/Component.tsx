import React from 'react';
import clsx from 'clsx';
import styles from './Footer.module.css';
import shared from '../shared.module.css';

export type FooterProps = React.ComponentPropsWithoutRef<'footer'> & {};

export const Footer: React.FC<FooterProps> = ({ className, ...rest }) => {
  return (
    <footer className={clsx(shared.section, styles.root, className)} role="contentinfo" {...rest}>
      <div className={styles.inner}>
        <nav aria-label="Footer nav" className={styles.nav}>
          <a href="#" className={styles.link}>About</a>
          <a href="#" className={styles.link}>Contact</a>
          <a href="#" className={styles.link}>Privacy</a>
        </nav>
        <small className={styles.copy}>© {new Date().getFullYear()} Project Atlas</small>
      </div>
    </footer>
  );
};

export default Footer;
