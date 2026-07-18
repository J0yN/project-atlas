import { getLocalizedPath, type AppLocale } from '@/i18n/config';
import type { SearchResult } from '@/types/search';

type LocalizedSearchResult = Omit<SearchResult, 'href'> & {
  readonly href?: `/${string}` | `#${string}` | '/';
};

const searchIndex: Record<AppLocale, readonly LocalizedSearchResult[]> = {
  en: [
    {
      id: 'nav-home',
      type: 'page',
      title: 'Home',
      description: 'Return to workspace overview',
      href: '/',
      category: 'Navigation',
      keywords: ['home', 'workspace', 'overview', 'start']
    },
    {
      id: 'section-process',
      type: 'section',
      title: 'Delivery Process',
      description: 'Discover · Shape · Build · Learn',
      href: '#process',
      category: 'Workspace',
      keywords: [
        'process',
        'delivery',
        'discover',
        'shape',
        'build',
        'learn',
        'workflow'
      ]
    },
    {
      id: 'section-timeline',
      type: 'section',
      title: 'Timeline',
      description: 'Delivery timeline and milestones',
      href: '#timeline',
      category: 'Workspace',
      keywords: ['timeline', 'milestones', 'weeks', 'schedule', 'plan']
    },
    {
      id: 'section-skills',
      type: 'section',
      title: 'Skills',
      description: 'System design, UX strategy, front-end architecture',
      href: '#skills',
      category: 'Workspace',
      keywords: [
        'skills',
        'ux',
        'design',
        'front-end',
        'research',
        'prototyping',
        'accessibility'
      ]
    },
    {
      id: 'section-experience',
      type: 'section',
      title: 'Experience',
      description: 'Platform modernization and workflow operations',
      href: '#experience',
      category: 'Workspace',
      keywords: [
        'experience',
        'platform',
        'modernization',
        'workflow',
        'operations',
        'iteration'
      ]
    },
    {
      id: 'section-philosophy',
      type: 'section',
      title: 'Philosophy',
      description: 'Principles behind the delivery approach',
      href: '#philosophy',
      category: 'Workspace',
      keywords: [
        'philosophy',
        'principles',
        'clarity',
        'systems',
        'feedback',
        'values'
      ]
    },
    {
      id: 'section-services',
      type: 'section',
      title: 'Services',
      description: 'Product direction, experience design, implementation support',
      href: '#services',
      category: 'Workspace',
      keywords: [
        'services',
        'product',
        'direction',
        'design',
        'implementation',
        'support'
      ]
    },
    {
      id: 'section-faq',
      type: 'section',
      title: 'FAQ',
      description: 'Frequently asked questions about workspace and process',
      href: '#faq',
      category: 'Workspace',
      keywords: ['faq', 'questions', 'answers', 'help', 'support']
    },
    {
      id: 'cmd-theme-toggle',
      type: 'command',
      title: 'Toggle Theme',
      description: 'Switch between light and dark mode',
      category: 'Commands',
      keywords: [
        'theme',
        'dark',
        'light',
        'mode',
        'color',
        'switch',
        'appearance'
      ]
    }
  ],
  ar: [
    {
      id: 'nav-home',
      type: 'page',
      title: 'الرئيسية',
      description: 'العودة إلى نظرة مساحة العمل',
      href: '/',
      category: 'التنقل',
      keywords: ['الرئيسية', 'مساحة العمل', 'نظرة عامة', 'بداية']
    },
    {
      id: 'section-process',
      type: 'section',
      title: 'عملية التسليم',
      description: 'اكتشاف · تشكيل · بناء · تعلّم',
      href: '#process',
      category: 'مساحة العمل',
      keywords: ['العملية', 'التسليم', 'اكتشاف', 'تشكيل', 'بناء', 'تعلّم']
    },
    {
      id: 'section-timeline',
      type: 'section',
      title: 'الجدول الزمني',
      description: 'مراحل التسليم والمعالم الأساسية',
      href: '#timeline',
      category: 'مساحة العمل',
      keywords: ['الجدول الزمني', 'المعالم', 'أسابيع', 'الجدول', 'الخطة']
    },
    {
      id: 'section-skills',
      type: 'section',
      title: 'المهارات',
      description: 'تصميم الأنظمة واستراتيجية التجربة وهندسة الواجهات',
      href: '#skills',
      category: 'مساحة العمل',
      keywords: ['المهارات', 'التجربة', 'التصميم', 'الواجهات', 'الأبحاث']
    },
    {
      id: 'section-experience',
      type: 'section',
      title: 'الخبرة',
      description: 'تحديث المنصة وتشغيل سير العمل',
      href: '#experience',
      category: 'مساحة العمل',
      keywords: ['الخبرة', 'المنصة', 'التحديث', 'سير العمل', 'التكرار']
    },
    {
      id: 'section-philosophy',
      type: 'section',
      title: 'الفلسفة',
      description: 'المبادئ التي تقود نهج التسليم',
      href: '#philosophy',
      category: 'مساحة العمل',
      keywords: ['الفلسفة', 'المبادئ', 'الوضوح', 'الأنظمة', 'الملاحظات']
    },
    {
      id: 'section-services',
      type: 'section',
      title: 'الخدمات',
      description: 'اتجاه المنتج وتصميم التجربة ودعم التنفيذ',
      href: '#services',
      category: 'مساحة العمل',
      keywords: ['الخدمات', 'المنتج', 'الاتجاه', 'التصميم', 'التنفيذ', 'الدعم']
    },
    {
      id: 'section-faq',
      type: 'section',
      title: 'الأسئلة الشائعة',
      description: 'أسئلة متكررة حول مساحة العمل والعملية',
      href: '#faq',
      category: 'مساحة العمل',
      keywords: ['الأسئلة الشائعة', 'الأسئلة', 'الإجابات', 'المساعدة']
    },
    {
      id: 'cmd-theme-toggle',
      type: 'command',
      title: 'تبديل السمة',
      description: 'التبديل بين الوضع الفاتح والداكن',
      category: 'الأوامر',
      keywords: ['السمة', 'داكن', 'فاتح', 'الوضع', 'الألوان', 'التبديل']
    }
  ]
};

export function getSearchIndex(locale: AppLocale): readonly SearchResult[] {
  return searchIndex[locale].map((item) =>
    item.href
      ? {
          ...item,
          href: getLocalizedPath(locale, item.href)
        }
      : item
  );
}
