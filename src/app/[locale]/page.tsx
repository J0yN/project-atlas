import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LanguageSwitcher, LocaleLink } from '@/components/i18n';
import { loadDictionary } from '@/i18n/loader';
import { i18nConfig } from '@/i18n/config';
import { isLocale, type AppLocale } from '@/i18n/locales';
import {
  buildLocalizedJsonLd,
  buildLocalizedMetadata,
  formatCurrency,
  formatDate,
  formatNumber,
  formatRelativeTime,
  getLocaleDirection,
  pluralize
} from '@/lib/i18n';
import styles from './page.module.css';

async function getPageData(locale: AppLocale) {
  const messages = await loadDictionary(locale, ['common', 'home']);
  const common = messages.common;
  const home = messages.home;

  if (!common || !home) {
    notFound();
  }

  return { common, home };
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const { common, home } = await getPageData(locale);

  return buildLocalizedMetadata({
    locale,
    title: home.hero.title,
    description: common.seo.siteDescription,
    pathname: '/'
  });
}

export default async function LocalizedHomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { common, home } = await getPageData(locale);
  const direction = getLocaleDirection(locale);
  const publishedDate = formatDate(locale, '2026-07-20', { dateStyle: 'long' });
  const formattedNumber = formatNumber(locale, 1284000, { maximumFractionDigits: 0 });
  const formattedCurrency = formatCurrency(locale, 2499.95);
  const relativeTime = formatRelativeTime(locale, -3, 'day', { numeric: 'auto' });
  const pluralizedMessage = pluralize(locale, i18nConfig.namespaces.length, {
    one: home.utilities.pluralOne,
    other: home.utilities.pluralOther
  });
  const jsonLd = buildLocalizedJsonLd({
    locale,
    title: home.hero.title,
    description: common.seo.siteDescription,
    pathname: '/'
  });

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.topBar}>
          <div className={styles.brand}>
            <p className={styles.eyebrow}>{home.hero.eyebrow}</p>
            <h1 className={styles.title}>{home.hero.title}</h1>
            <p className={styles.description}>{home.hero.description}</p>
          </div>
          <LanguageSwitcher className={styles.switcher} />
        </div>

        <section className={styles.panel} aria-labelledby="localized-actions-heading">
          <h2 className={styles.sectionTitle} id="localized-actions-heading">
            {home.highlights.heading}
          </h2>
          <p className={styles.localeSummary}>
            {common.locale.current}: {locale.toUpperCase()} · {common.locale.direction}: {direction.toUpperCase()}
          </p>
          <div className={styles.actions}>
            <LocaleLink className={styles.primaryAction} href="/#architecture" locale={locale}>
              {home.hero.primaryCta}
            </LocaleLink>
            <LocaleLink className={styles.secondaryAction} href="/#utilities" locale={locale}>
              {home.hero.secondaryCta}
            </LocaleLink>
          </div>
        </section>

        <section className={styles.grid} id="architecture" aria-label={home.highlights.heading}>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>{home.highlights.detectionTitle}</h2>
            <p className={styles.cardText}>{home.highlights.detectionBody}</p>
          </article>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>{home.highlights.seoTitle}</h2>
            <p className={styles.cardText}>{home.highlights.seoBody}</p>
          </article>
          <article className={styles.card}>
            <h2 className={styles.cardTitle}>{home.highlights.rtlTitle}</h2>
            <p className={styles.cardText}>{home.highlights.rtlBody}</p>
          </article>
        </section>

        <section className={styles.panel}>
          <div className={styles.metrics}>
            <h2 className={styles.sectionTitle}>{home.metrics.heading}</h2>
            <div className={styles.metricGrid}>
              <div className={styles.metric}>
                <p className={styles.metricLabel}>{home.metrics.activeLocaleLabel}</p>
                <p className={styles.metricValue}>{locale.toUpperCase()}</p>
              </div>
              <div className={styles.metric}>
                <p className={styles.metricLabel}>{home.metrics.namespacesLabel}</p>
                <p className={styles.metricValue}>{i18nConfig.namespaces.join(', ')}</p>
              </div>
              <div className={styles.metric}>
                <p className={styles.metricLabel}>{home.metrics.directionLabel}</p>
                <p className={styles.metricValue}>{direction.toUpperCase()}</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.panel} id="utilities">
          <div className={styles.utilities}>
            <h2 className={styles.sectionTitle}>{home.utilities.heading}</h2>
            <p className={styles.sectionDescription}>{home.utilities.description}</p>
            <div className={styles.utilityGrid}>
              <div className={styles.utilityItem}>
                <p className={styles.utilityLabel}>{home.utilities.dateLabel}</p>
                <p className={styles.utilityValue}>{publishedDate}</p>
              </div>
              <div className={styles.utilityItem}>
                <p className={styles.utilityLabel}>{home.utilities.numberLabel}</p>
                <p className={styles.utilityValue}>{formattedNumber}</p>
              </div>
              <div className={styles.utilityItem}>
                <p className={styles.utilityLabel}>{home.utilities.currencyLabel}</p>
                <p className={styles.utilityValue}>{formattedCurrency}</p>
              </div>
              <div className={styles.utilityItem}>
                <p className={styles.utilityLabel}>{home.utilities.relativeTimeLabel}</p>
                <p className={styles.utilityValue}>{relativeTime}</p>
              </div>
              <div className={styles.utilityItem}>
                <p className={styles.utilityLabel}>{home.utilities.pluralLabel}</p>
                <p className={styles.utilityValue}>{pluralizedMessage}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
