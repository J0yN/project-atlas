/**
 * Dashboard mock data — replace with real API/CMS calls in production.
 */
import type { Project, Article, AnalyticsMetric, AnalyticsSeries, NavItem } from '@/types/dashboard';

export const dashboardNavItems: readonly NavItem[] = [
  { id: 'overview', label: 'Overview', href: '/dashboard', icon: 'grid' },
  { id: 'projects', label: 'Projects', href: '/dashboard/projects', icon: 'folder' },
  { id: 'articles', label: 'Articles', href: '/dashboard/articles', icon: 'file-text' },
  { id: 'analytics', label: 'Analytics', href: '/dashboard/analytics', icon: 'bar-chart-2' },
  { id: 'settings', label: 'Settings', href: '/dashboard/settings', icon: 'settings' }
] as const;

export const mockProjects: readonly Project[] = [
  {
    id: 'proj-1',
    title: 'Atlas Design System',
    slug: 'atlas-design-system',
    description: 'A production-ready design system built with strict TypeScript and CSS Modules.',
    status: 'active',
    category: 'Design',
    tags: ['typescript', 'css-modules', 'design'],
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-07-18T14:30:00Z'
  },
  {
    id: 'proj-2',
    title: 'Platform API',
    slug: 'platform-api',
    description: 'RESTful API layer powering the Atlas platform services.',
    status: 'active',
    category: 'Engineering',
    tags: ['api', 'rest', 'backend'],
    createdAt: '2026-02-01T09:00:00Z',
    updatedAt: '2026-07-19T11:00:00Z'
  },
  {
    id: 'proj-3',
    title: 'Mobile App v2',
    slug: 'mobile-app-v2',
    description: 'Next-generation mobile experience with offline-first architecture.',
    status: 'draft',
    category: 'Engineering',
    tags: ['mobile', 'react-native', 'offline'],
    createdAt: '2026-05-10T08:00:00Z',
    updatedAt: '2026-07-15T16:00:00Z'
  },
  {
    id: 'proj-4',
    title: 'Brand Identity Refresh',
    slug: 'brand-identity-refresh',
    description: 'Comprehensive brand overhaul to align with the new product strategy.',
    status: 'archived',
    category: 'Design',
    tags: ['branding', 'identity', 'design'],
    createdAt: '2025-11-01T10:00:00Z',
    updatedAt: '2026-03-20T10:00:00Z'
  },
  {
    id: 'proj-5',
    title: 'Analytics Dashboard',
    slug: 'analytics-dashboard',
    description: 'Real-time analytics and insights platform for team leads.',
    status: 'active',
    category: 'Engineering',
    tags: ['analytics', 'dashboard', 'data'],
    createdAt: '2026-04-05T12:00:00Z',
    updatedAt: '2026-07-20T09:00:00Z'
  },
  {
    id: 'proj-6',
    title: 'Onboarding Flow',
    slug: 'onboarding-flow',
    description: 'Redesigned onboarding experience targeting 40% completion improvement.',
    status: 'draft',
    category: 'Product',
    tags: ['onboarding', 'ux', 'product'],
    createdAt: '2026-06-20T11:00:00Z',
    updatedAt: '2026-07-17T13:00:00Z'
  }
] as const;

export const mockArticles: readonly Article[] = [
  {
    id: 'art-1',
    title: 'Building a CMS-Ready Architecture with Next.js',
    slug: 'cms-ready-architecture-nextjs',
    excerpt: 'How to structure a Next.js project for maximum CMS flexibility and maintainability.',
    status: 'published',
    category: 'Engineering',
    tags: ['nextjs', 'cms', 'architecture'],
    author: 'Atlas Team',
    publishedAt: '2026-07-10T09:00:00Z',
    createdAt: '2026-07-05T10:00:00Z',
    updatedAt: '2026-07-10T09:00:00Z',
    readingTime: 8
  },
  {
    id: 'art-2',
    title: 'Design Token Strategies for Scalable UI Systems',
    slug: 'design-token-strategies',
    excerpt: 'Deep dive into semantic token hierarchies and theme-aware component design.',
    status: 'published',
    category: 'Design',
    tags: ['design-tokens', 'css', 'design-system'],
    author: 'Atlas Team',
    publishedAt: '2026-07-03T10:00:00Z',
    createdAt: '2026-06-28T11:00:00Z',
    updatedAt: '2026-07-03T10:00:00Z',
    readingTime: 12
  },
  {
    id: 'art-3',
    title: 'Server Components vs Client Components: A Practical Guide',
    slug: 'server-vs-client-components',
    excerpt: 'When to use server components, when to reach for client components, and why it matters.',
    status: 'draft',
    category: 'Engineering',
    tags: ['react', 'server-components', 'performance'],
    author: 'Atlas Team',
    publishedAt: null,
    createdAt: '2026-07-15T14:00:00Z',
    updatedAt: '2026-07-19T16:30:00Z',
    readingTime: 10
  },
  {
    id: 'art-4',
    title: 'CSS Modules in 2026: Best Practices',
    slug: 'css-modules-best-practices-2026',
    excerpt: 'How we use CSS Modules at scale to maintain zero runtime overhead and full type safety.',
    status: 'scheduled',
    category: 'Engineering',
    tags: ['css-modules', 'css', 'frontend'],
    author: 'Atlas Team',
    publishedAt: '2026-08-01T09:00:00Z',
    createdAt: '2026-07-18T10:00:00Z',
    updatedAt: '2026-07-19T11:00:00Z',
    readingTime: 6
  },
  {
    id: 'art-5',
    title: 'Strict TypeScript Patterns for Production Apps',
    slug: 'strict-typescript-patterns',
    excerpt: 'Patterns for eliminating runtime errors with strict TypeScript configuration.',
    status: 'published',
    category: 'Engineering',
    tags: ['typescript', 'patterns', 'production'],
    author: 'Atlas Team',
    publishedAt: '2026-06-25T09:00:00Z',
    createdAt: '2026-06-20T10:00:00Z',
    updatedAt: '2026-06-25T09:00:00Z',
    readingTime: 9
  }
] as const;

export const dashboardMetrics: readonly AnalyticsMetric[] = [
  {
    id: 'total-projects',
    label: 'Total Projects',
    value: 24,
    formattedValue: '24',
    delta: 3,
    trend: 'up',
    unit: 'projects'
  },
  {
    id: 'published-articles',
    label: 'Published Articles',
    value: 47,
    formattedValue: '47',
    delta: 12,
    trend: 'up',
    unit: 'articles'
  },
  {
    id: 'monthly-visitors',
    label: 'Monthly Visitors',
    value: 18400,
    formattedValue: '18.4k',
    delta: 8.2,
    trend: 'up',
    unit: '%'
  },
  {
    id: 'avg-read-time',
    label: 'Avg. Read Time',
    value: 7,
    formattedValue: '7 min',
    delta: -0.5,
    trend: 'down',
    unit: 'min'
  }
] as const;

export const visitorsChartData: AnalyticsSeries = {
  id: 'visitors',
  name: 'Visitors',
  data: [
    { label: 'Jan', value: 9200 },
    { label: 'Feb', value: 11400 },
    { label: 'Mar', value: 10800 },
    { label: 'Apr', value: 13100 },
    { label: 'May', value: 14600 },
    { label: 'Jun', value: 16300 },
    { label: 'Jul', value: 18400 }
  ]
};

export const pageViewsChartData: AnalyticsSeries = {
  id: 'page-views',
  name: 'Page Views',
  data: [
    { label: 'Jan', value: 28000 },
    { label: 'Feb', value: 34200 },
    { label: 'Mar', value: 32100 },
    { label: 'Apr', value: 38400 },
    { label: 'May', value: 42700 },
    { label: 'Jun', value: 49100 },
    { label: 'Jul', value: 55200 }
  ]
};
