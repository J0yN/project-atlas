import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/i18n/locales';
import { PageHeader } from '@/components/dashboard/PageHeader';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { AnalyticsBar } from '@/components/dashboard/AnalyticsBar';
import { dashboardMetrics, visitorsChartData, pageViewsChartData } from '@/data/dashboard';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Analytics | Dashboard'
};

export default async function AnalyticsPage({
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
        title="Analytics"
        description="Platform performance metrics and audience insights."
      />

      <section className={styles.metricsGrid} aria-label="Summary metrics">
        {dashboardMetrics.map((metric) => (
          <StatsCard key={metric.id} metric={metric} />
        ))}
      </section>

      <div className={styles.chartsGrid}>
        <section className={styles.chartCard} aria-labelledby="visitors-chart-heading">
          <h2 className={styles.chartTitle} id="visitors-chart-heading">
            Monthly Visitors
          </h2>
          <AnalyticsBar series={visitorsChartData} />
        </section>

        <section className={styles.chartCard} aria-labelledby="pageviews-chart-heading">
          <h2 className={styles.chartTitle} id="pageviews-chart-heading">
            Page Views
          </h2>
          <AnalyticsBar series={pageViewsChartData} />
        </section>
      </div>

      <section className={styles.insightsGrid} aria-labelledby="insights-heading">
        <h2 className={styles.sectionTitle} id="insights-heading">
          Top Performing Content
        </h2>
        <div className={styles.insightsList}>
          {[
            { rank: 1, title: 'Building a CMS-Ready Architecture', views: 4820, trend: '+18%' },
            { rank: 2, title: 'Design Token Strategies for Scalable UI', views: 3610, trend: '+12%' },
            { rank: 3, title: 'Strict TypeScript Patterns', views: 2940, trend: '+9%' },
            { rank: 4, title: 'CSS Modules in 2026', views: 2100, trend: '+6%' },
            { rank: 5, title: 'Server vs Client Components Guide', views: 1870, trend: '+4%' }
          ].map((item) => (
            <div key={item.rank} className={styles.insightItem}>
              <span className={styles.insightRank} aria-hidden>
                {item.rank}
              </span>
              <span className={styles.insightTitle}>{item.title}</span>
              <span className={styles.insightViews}>{item.views.toLocaleString()} views</span>
              <span className={styles.insightTrend}>{item.trend}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
