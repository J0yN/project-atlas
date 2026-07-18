'use client';
import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './NewsletterCTA.module.css';

export type NewsletterCTAProps = React.ComponentPropsWithoutRef<'section'> & {
  heading?: string;
  sub?: string;
  onSubscribe?: (email: string) => Promise<void> | void;
};

export const NewsletterCTA: React.FC<NewsletterCTAProps> = ({ heading = 'Subscribe', sub, onSubscribe, className, ...rest }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubscribe?.(email);
      setMessage('Subscribed');
    } catch (err) {
      setMessage('Subscription failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={clsx(styles.root, className)} aria-labelledby="newsletter-cta" {...rest}>
      <h2 id="newsletter-cta" className={styles.heading}>{heading}</h2>
      {sub && <p className={styles.sub}>{sub}</p>}
      <form onSubmit={submit} className={styles.form}>
        <label className={styles.label}>
          <span className={styles.sr}>Email</span>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} placeholder="you@example.com" aria-label="Email address" />
        </label>
        <button type="submit" className={styles.btn} disabled={loading}>{loading ? 'Subscribing...' : 'Subscribe'}</button>
      </form>
      {message && <p className={styles.message} role="status">{message}</p>}
    </section>
  );
};

export default NewsletterCTA;
