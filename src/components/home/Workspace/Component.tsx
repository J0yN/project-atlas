import clsx from 'clsx';
import styles from './Workspace.module.css';
import shared from '../shared.module.css';
import { Categories } from '@/components/home/Categories';
import { Services } from '@/components/home/Services';
import { QuoteBlock } from '@/components/portfolio/QuoteBlock';
import { Timeline } from '@/components/portfolio/Timeline';
import { Container, Grid, Stack } from '@/components/ui';
import { LanguageSwitch } from '@/components/navigation/LanguageSwitch';
import type { AppLocale } from '@/i18n/config';
import type { WorkspaceContent } from '@/data/workspace';

export type WorkspaceProps = WorkspaceContent & {
  locale: AppLocale;
};

export function Workspace({
  locale,
  languageSwitcher,
  hero,
  process,
  timeline,
  skills,
  experience,
  philosophy,
  services,
  faq
}: WorkspaceProps) {
  return (
    <div className={styles.root}>
      <section className={clsx(shared.section, styles.hero)} aria-labelledby="workspace-hero-title">
        <Container>
          <Stack gap="16" className={styles.heroStack}>
            <div className={styles.heroTopRow}>
              <p className={styles.eyebrow}>{hero.eyebrow}</p>
              <LanguageSwitch
                currentLocale={locale}
                label={languageSwitcher.label}
                ariaLabel={languageSwitcher.ariaLabel}
                className={styles.languageSwitch}
              />
            </div>
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

      <section
        id="process"
        className={clsx(shared.section, styles.section)}
        aria-labelledby="workspace-process-title"
      >
        <Container>
          <Stack gap="16" className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>{process.eyebrow}</p>
            <h2 id="workspace-process-title" className={styles.sectionTitle}>
              {process.title}
            </h2>
          </Stack>

          <Grid className={styles.cardGrid} autoFit minColumnWidth="240px" gap="16">
            {process.items.map((step) => (
              <article key={step.id} className={styles.card}>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardBody}>{step.description}</p>
                <p className={styles.cardOutcome}>{step.outcome}</p>
              </article>
            ))}
          </Grid>
        </Container>
      </section>

      <section
        id="timeline"
        className={clsx(shared.section, styles.sectionAlt)}
        aria-labelledby="workspace-timeline-title"
      >
        <Container>
          <Stack gap="16" className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>{timeline.eyebrow}</p>
            <h2 id="workspace-timeline-title" className={styles.sectionTitle}>
              {timeline.title}
            </h2>
          </Stack>
          <Timeline events={timeline.items} />
        </Container>
      </section>

      <Categories
        id="skills"
        title={skills.title}
        eyebrow={skills.eyebrow}
        description={skills.description}
        items={skills.items}
      />

      <section
        id="experience"
        className={clsx(shared.section, styles.section)}
        aria-labelledby="workspace-experience-title"
      >
        <Container>
          <Stack gap="16" className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>{experience.eyebrow}</p>
            <h2 id="workspace-experience-title" className={styles.sectionTitle}>
              {experience.title}
            </h2>
          </Stack>

          <Grid className={styles.cardGrid} autoFit minColumnWidth="260px" gap="16">
            {experience.items.map((item) => (
              <article key={item.id} className={styles.card}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardBody}>{item.summary}</p>
                <p className={styles.cardOutcome}>{item.impact}</p>
              </article>
            ))}
          </Grid>
        </Container>
      </section>

      <section
        id="philosophy"
        className={clsx(shared.section, styles.sectionAlt)}
        aria-labelledby="workspace-philosophy-title"
      >
        <Container>
          <Stack gap="16" className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>{philosophy.eyebrow}</p>
            <h2 id="workspace-philosophy-title" className={styles.sectionTitle}>
              {philosophy.title}
            </h2>
          </Stack>

          <div className={styles.philosophyLayout}>
            <QuoteBlock
              quote={philosophy.quote}
              author={philosophy.author}
              role={philosophy.role}
              className={styles.quote}
            />
            <Grid className={styles.cardGrid} autoFit minColumnWidth="220px" gap="16">
              {philosophy.items.map((principle) => (
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
        id="services"
        title={services.title}
        eyebrow={services.eyebrow}
        description={services.description}
        items={services.items}
      />

      <section
        id="faq"
        className={clsx(shared.section, styles.section)}
        aria-labelledby="workspace-faq-title"
      >
        <Container>
          <Stack gap="16" className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>{faq.eyebrow}</p>
            <h2 id="workspace-faq-title" className={styles.sectionTitle}>
              {faq.title}
            </h2>
          </Stack>

          <div className={styles.faqList}>
            {faq.items.map((item, index) => (
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
