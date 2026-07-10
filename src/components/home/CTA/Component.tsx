import React from 'react';
import clsx from 'clsx';
import styles from './CTA.module.css';
import ButtonAdapter from '@/components/ui/ButtonAdapter';
import { Container } from '@/components/ui';

export type CTAProps = React.ComponentPropsWithoutRef<'section'> & { title?: string; subtitle?: string };

export const CTA: React.FC<CTAProps> = ({ title = 'Ready to start your project?', subtitle = 'Get in touch to discuss how we can help.', className, ...rest }) => {
  return (
    <section className={clsx(styles.root, className)} aria-labelledby="cta-title" {...rest}>
      <Container>
        <div className={styles.inner}>
          <h2 id="cta-title" className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.actions}>
            <ButtonAdapter as="a" href="#" variant="primary">Contact Us</ButtonAdapter>
            <ButtonAdapter as="a" href="#" variant="secondary">Learn More</ButtonAdapter>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
