import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/i18n/locales';
import { PageHeader } from '@/components/dashboard/PageHeader';
import { ThemeSelector } from '@/components/dashboard/ThemeSelector';
import { releaseInfo } from '@/config/release';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Settings | Dashboard'
};

export default async function SettingsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <PageHeader
        title="Settings"
        description="Manage your platform preferences and configuration."
      />

      <div className={styles.sections}>
        <section className={styles.section} aria-labelledby="appearance-heading">
          <h2 className={styles.sectionTitle} id="appearance-heading">
            Appearance
          </h2>
          <p className={styles.sectionDescription}>
            Choose the color theme for the dashboard interface.
          </p>
          <ThemeSelector />
        </section>

        <section className={styles.section} aria-labelledby="platform-heading">
          <h2 className={styles.sectionTitle} id="platform-heading">
            Platform
          </h2>
          <div className={styles.settingsList}>
            {[
              { label: 'Site Name', value: 'Project Atlas', type: 'text' },
              { label: 'Base URL', value: 'https://project-atlas.dev', type: 'url' },
              { label: 'Default Locale', value: locale, type: 'text' },
              { label: 'CMS Mode', value: 'Headless', type: 'text' },
              { label: 'Release Version', value: releaseInfo.version, type: 'text' },
              { label: 'Release Tag', value: releaseInfo.githubTag, type: 'text' }
            ].map((setting) => (
              <div key={setting.label} className={styles.settingRow}>
                <span className={styles.settingLabel}>{setting.label}</span>
                <span className={styles.settingValue}>{setting.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="cms-heading">
          <h2 className={styles.sectionTitle} id="cms-heading">
            CMS Architecture
          </h2>
          <div className={styles.featureList}>
            {[
              { feature: 'Server Components first', enabled: true },
              { feature: 'Static generation (SSG)', enabled: true },
              { feature: 'Incremental static regeneration', enabled: true },
              { feature: 'Content type validation', enabled: true },
              { feature: 'Multi-locale support', enabled: true },
              { feature: 'Theme tokens injected via CSS variables', enabled: true }
            ].map(({ feature, enabled }) => (
              <div key={feature} className={styles.featureRow}>
                <span
                  className={enabled ? styles.featureEnabled : styles.featureDisabled}
                  aria-label={enabled ? 'Enabled' : 'Disabled'}
                >
                  {enabled ? '✓' : '○'}
                </span>
                <span className={styles.featureName}>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="release-heading">
          <h2 className={styles.sectionTitle} id="release-heading">
            Release Readiness
          </h2>
          <div className={styles.featureList}>
            {[
              { feature: `Launch milestone: ${releaseInfo.milestone}`, enabled: true },
              { feature: 'Deployment runbook documented', enabled: true },
              { feature: 'QA checklist documented', enabled: true },
              { feature: 'GitHub release workflow configured', enabled: true },
              { feature: 'Typecheck, lint, and build verification required', enabled: true }
            ].map(({ feature, enabled }) => (
              <div key={feature} className={styles.featureRow}>
                <span
                  className={enabled ? styles.featureEnabled : styles.featureDisabled}
                  aria-label={enabled ? 'Enabled' : 'Disabled'}
                >
                  {enabled ? '✓' : '○'}
                </span>
                <span className={styles.featureName}>{feature}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
