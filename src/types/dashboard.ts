/**
 * Dashboard domain types for Project Atlas CMS-ready architecture.
 */

export type ProjectStatus = 'active' | 'archived' | 'draft';
export type ArticleStatus = 'published' | 'draft' | 'scheduled';
export type TrendDirection = 'up' | 'down' | 'neutral';
export type ThemeMode = 'light' | 'dark' | 'system';

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  status: ProjectStatus;
  category: string;
  tags: readonly string[];
  createdAt: string;
  updatedAt: string;
};

export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  status: ArticleStatus;
  category: string;
  tags: readonly string[];
  author: string;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  readingTime: number;
};

export type AnalyticsMetric = {
  id: string;
  label: string;
  value: number;
  formattedValue: string;
  delta: number;
  trend: TrendDirection;
  unit: string;
};

export type AnalyticsDataPoint = {
  label: string;
  value: number;
};

export type AnalyticsSeries = {
  id: string;
  name: string;
  data: readonly AnalyticsDataPoint[];
  color?: string;
};

export type NavItem = {
  id: string;
  label: string;
  href: string;
  icon: string;
};
