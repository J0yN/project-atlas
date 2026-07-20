import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/i18n/locales';
import { PageHeader } from '@/components/dashboard/PageHeader';
import { DataTable } from '@/components/dashboard/DataTable';
import { StatusBadge } from '@/components/dashboard/StatusBadge';
import { mockArticles } from '@/data/dashboard';
import type { Article } from '@/types/dashboard';
import type { ColumnDef } from '@/components/dashboard/DataTable';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Articles | Dashboard'
};

const columns: readonly ColumnDef<Article>[] = [
  {
    key: 'title',
    header: 'Title',
    render: (row) => (
      <div className={styles.titleCell}>
        <span className={styles.title}>{row.title}</span>
        <span className={styles.excerpt}>{row.excerpt}</span>
      </div>
    )
  },
  {
    key: 'category',
    header: 'Category',
    width: '120px',
    render: (row) => <span className={styles.category}>{row.category}</span>
  },
  {
    key: 'readingTime',
    header: 'Read',
    width: '80px',
    render: (row) => <span className={styles.readTime}>{row.readingTime} min</span>
  },
  {
    key: 'status',
    header: 'Status',
    width: '120px',
    render: (row) => <StatusBadge status={row.status} />
  },
  {
    key: 'publishedAt',
    header: 'Published',
    width: '140px',
    render: (row) =>
      row.publishedAt
        ? new Date(row.publishedAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })
        : '—'
  }
] as const;

export default async function ArticlesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <div>
      <PageHeader
        title="Articles"
        description={`${mockArticles.length} articles in the CMS`}
      />
      <DataTable<Article>
        columns={columns}
        rows={mockArticles}
        getRowKey={(row) => row.id}
        caption="All articles"
      />
    </div>
  );
}
