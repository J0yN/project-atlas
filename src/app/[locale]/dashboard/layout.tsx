import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { isLocale } from '@/i18n/locales';
import { DashboardShell } from '@/components/dashboard/DashboardShell';
import { dashboardNavItems } from '@/data/dashboard';

export default async function DashboardLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <DashboardShell navItems={dashboardNavItems} locale={locale} pageTitle="Dashboard">
      {children}
    </DashboardShell>
  );
}
