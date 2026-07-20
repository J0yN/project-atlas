import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/i18n/locales';
import { PageHeader } from '@/components/dashboard/PageHeader';
import { DataTable } from '@/components/dashboard/DataTable';
import { StatusBadge } from '@/components/dashboard/StatusBadge';
import { mockProjects } from '@/data/dashboard';
import type { Project } from '@/types/dashboard';
import type { ColumnDef } from '@/components/dashboard/DataTable';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Projects | Dashboard'
};

const columns: readonly ColumnDef<Project>[] = [
  {
    key: 'title',
    header: 'Title',
    render: (row) => (
      <div className={styles.titleCell}>
        <span className={styles.title}>{row.title}</span>
        <span className={styles.slug}>/{row.slug}</span>
      </div>
    )
  },
  {
    key: 'category',
    header: 'Category',
    render: (row) => <span className={styles.category}>{row.category}</span>
  },
  {
    key: 'status',
    header: 'Status',
    width: '120px',
    render: (row) => <StatusBadge status={row.status} />
  },
  {
    key: 'updatedAt',
    header: 'Updated',
    width: '140px',
    render: (row) =>
      new Date(row.updatedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
  }
] as const;

export default async function ProjectsPage({
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
        title="Projects"
        description={`${mockProjects.length} projects across all categories`}
      />
      <DataTable<Project>
        columns={columns}
        rows={mockProjects}
        getRowKey={(row) => row.id}
        caption="All projects"
      />
    </div>
  );
}
