import type { AppLocale } from '@/i18n/config';

export type CommandPaletteMessages = {
  readonly dialogLabel: string;
  readonly placeholder: string;
  readonly escapeHintLabel: string;
  readonly recentLabel: string;
  readonly clearLabel: string;
  readonly clearAriaLabel: string;
  readonly searchResultsLabel: string;
  readonly quickNavigationLabel: string;
  readonly noResultsLabel: string;
  readonly footerNavigateLabel: string;
  readonly footerOpenLabel: string;
  readonly footerCloseLabel: string;
};

export type UiMessages = {
  readonly commandPalette: CommandPaletteMessages;
};

const uiMessages: Record<AppLocale, UiMessages> = {
  en: {
    commandPalette: {
      dialogLabel: 'Command palette',
      placeholder: 'Search or jump to…',
      escapeHintLabel: 'Press Escape to close',
      recentLabel: 'Recent',
      clearLabel: 'Clear',
      clearAriaLabel: 'Clear all recent searches',
      searchResultsLabel: 'Search results',
      quickNavigationLabel: 'Quick navigation',
      noResultsLabel: 'No results for',
      footerNavigateLabel: 'navigate',
      footerOpenLabel: 'open',
      footerCloseLabel: 'close'
    }
  },
  ar: {
    commandPalette: {
      dialogLabel: 'لوحة الأوامر',
      placeholder: 'ابحث أو انتقل إلى…',
      escapeHintLabel: 'اضغط Escape للإغلاق',
      recentLabel: 'الأخيرة',
      clearLabel: 'مسح',
      clearAriaLabel: 'مسح كل عمليات البحث الأخيرة',
      searchResultsLabel: 'نتائج البحث',
      quickNavigationLabel: 'تنقل سريع',
      noResultsLabel: 'لا توجد نتائج لـ',
      footerNavigateLabel: 'تنقل',
      footerOpenLabel: 'فتح',
      footerCloseLabel: 'إغلاق'
    }
  }
};

export function getUiMessages(locale: AppLocale): UiMessages {
  return uiMessages[locale];
}
