import clsx from 'clsx';
import styles from './Workspace.module.css';
import shared from '../shared.module.css';
import { Categories } from '@/components/home/Categories';
import { Services } from '@/components/home/Services';
import { QuoteBlock } from '@/components/portfolio/QuoteBlock';
import { Timeline } from '@/components/portfolio/Timeline';
import { Container, Grid, Stack } from '@/components/ui';
import type { WorkspaceContent } from '@/data/workspace';

export type WorkspaceProps = WorkspaceContent;

export function Workspace({ hero, process, timeline, skills, experience, philosophy, services, faq }: WorkspaceProps) {
  return (
    <div className={styles.root}>
      <section className={clsx(shared.section, styles.hero)} aria-labelledby="workspace-hero-title">
        <Container>
          <Stack gap="16" className={styles.heroStack}>
            <p className={styles.eyebrow}>{hero.eyebrow}</p>
            <h1 id="workspace-hero-title" className={styles.heroTitle}>
              {hero.title}
            </h1>
            <p className={styles.heroDescription}>{hero.description}</p>
          </Stack>

          <Grid className={styles.statsGrid} autoFit minColumnWidth="220px" gap="16">
            {hero.stats.map((stat) => (
              <article key={stat.id} className={styles.statCard}>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </article>
            ))}
          </Grid>
        </Container>
      </section>

      <section className={clsx(shared.section, styles.section)} aria-labelledby="workspace-process-title">
        <Container>
          <Stack gap="16" className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Process</p>
            <h2 id="workspace-process-title" className={styles.sectionTitle}>
              A consistent path from ambiguity to release.
            </h2>
          </Stack>

          <Grid className={styles.cardGrid} autoFit minColumnWidth="240px" gap="16">
            {process.map((step) => (
              <article key={step.id} className={styles.card}>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardBody}>{step.description}</p>
                <p className={styles.cardOutcome}>{step.outcome}</p>
              </article>
            ))}
          </Grid>
        </Container>
      </section>

      <section className={clsx(shared.section, styles.sectionAlt)} aria-labelledby="workspace-timeline-title">
        <Container>
          <Stack gap="16" className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Timeline</p>
            <h2 id="workspace-timeline-title" className={styles.sectionTitle}>
              Structured delivery without losing momentum.
            </h2>
          </Stack>
          <Timeline events={timeline} />
        </Container>
      </section>

      <Categories
        id="workspace-skills"
        title="Skills"
        eyebrow="Skills"
        description="Capabilities applied across discovery, delivery, and iteration to keep the workspace cohesive."
        items={skills}
      />

      <section className={clsx(shared.section, styles.section)} aria-labelledby="workspace-experience-title">
        <Container>
          <Stack gap="16" className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Experience</p>
            <h2 id="workspace-experience-title" className={styles.sectionTitle}>
              Experience shaped by delivery realities.
            </h2>
          </Stack>

          <Grid className={styles.cardGrid} autoFit minColumnWidth="260px" gap="16">
            {experience.map((item) => (
              <article key={item.id} className={styles.card}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardBody}>{item.summary}</p>
                <p className={styles.cardOutcome}>{item.impact}</p>
              </article>
            ))}
          </Grid>
        </Container>
      </section>

      <section className={clsx(shared.section, styles.sectionAlt)} aria-labelledby="workspace-philosophy-title">
        <Container>
          <Stack gap="16" className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Philosophy</p>
            <h2 id="workspace-philosophy-title" className={styles.sectionTitle}>
              Principles that keep the workspace practical.
            </h2>
          </Stack>

          <div className={styles.philosophyLayout}>
            <QuoteBlock quote={philosophy.quote} author={philosophy.author} role={philosophy.role} className={styles.quote} />
            <Grid className={styles.cardGrid} autoFit minColumnWidth="220px" gap="16">
              {philosophy.principles.map((principle) => (
                <article key={principle.id} className={styles.card}>
                  <h3 className={styles.cardTitle}>{principle.title}</h3>
                  <p className={styles.cardBody}>{principle.description}</p>
                </article>
              ))}
            </Grid>
          </div>
        </Container>
      </section>

      <Services
        id="workspace-services"
        title="Services"
        eyebrow="Services"
        description="Practical support matched to the stages of work teams need to move from direction to delivery."
        items={services}
      />

      <section className={clsx(shared.section, styles.section)} aria-labelledby="workspace-faq-title">
        <Container>
          <Stack gap="16" className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>FAQ</p>
            <h2 id="workspace-faq-title" className={styles.sectionTitle}>
              Common questions about the workspace approach.
            </h2>
          </Stack>

          <div className={styles.faqList}>
            {faq.map((item, index) => (
              <details key={item.id} className={styles.faqItem} open={index === 0}>
                <summary className={styles.faqQuestion}>{item.question}</summary>
                <p className={styles.faqAnswer}>{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Workspace;
