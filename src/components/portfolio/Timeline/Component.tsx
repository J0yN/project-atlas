import React from 'react';
import clsx from 'clsx';
import styles from './Timeline.module.css';

export type TimelineEvent = { id: string; date?: string; title: string; body?: string };
export type TimelineProps = React.ComponentPropsWithoutRef<'ol'> & {
  events: readonly TimelineEvent[];
};

export const Timeline: React.FC<TimelineProps> = ({ events, className, ...rest }) => (
  <ol className={clsx(styles.root, className)} {...rest}>
    {events.map((e, index) => (
      <li key={e.id} className={styles.item}>
        <div className={styles.marker} aria-hidden="true">
          <span className={styles.markerDot} />
        </div>
        <div className={styles.content}>
          <div className={styles.meta}>
            {e.date ? <p className={styles.date}>{e.date}</p> : null}
            <p className={styles.step}>Step {index + 1}</p>
          </div>
          <h3 className={styles.title}>{e.title}</h3>
          {e.body && <p className={styles.body}>{e.body}</p>}
        </div>
      </li>
    ))}
  </ol>
);

export default Timeline;
