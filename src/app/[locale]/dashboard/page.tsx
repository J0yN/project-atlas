import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/i18n/locales';
import { PageHeader } from '@/components/dashboard/PageHeader';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { StatusBadge } from '@/components/dashboard/StatusBadge';
import { dashboardMetrics, mockProjects, mockArticles } from '@/data/dashboard';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Overview | Dashboard'
};

export default async function DashboardOverviewPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const recentProjects = mockProjects.slice(0, 3);
  const recentArticles = mockArticles.slice(0, 3);

  return (
    <div className={styles.page}>
      <PageHeader
        title="Overview"
        description="Welcome back. Here's what's happening across your platform."
      />

      <section className={styles.metricsGrid} aria-label="Platform metrics">
        {dashboardMetrics.map((metric) => (
          <StatsCard key={metric.id} metric={metric} />
        ))}
      </section>

      <div className={styles.twoCol}>
        <section className={styles.panel} aria-labelledby="recent-projects-heading">
          <h2 className={styles.panelTitle} id="recent-projects-heading">
            Recent Projects
          </h2>
          <ul className={styles.itemList} role="list">
            {recentProjects.map((project) => (
              <li key={project.id} className={styles.item}>
                <div className={styles.itemBody}>
                  <span className={styles.itemTitle}>{project.title}</span>
                  <span className={styles.itemMeta}>{project.category}</span>
                </div>
                <StatusBadge status={project.status} />
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.panel} aria-labelledby="recent-articles-heading">
          <h2 className={styles.panelTitle} id="recent-articles-heading">
            Recent Articles
          </h2>
          <ul className={styles.itemList} role="list">
            {recentArticles.map((article) => (
              <li key={article.id} className={styles.item}>
                <div className={styles.itemBody}>
                  <span className={styles.itemTitle}>{article.title}</span>
                  <span className={styles.itemMeta}>{article.readingTime} min read</span>
                </div>
                <StatusBadge status={article.status} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
