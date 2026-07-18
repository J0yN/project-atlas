'use client';
import React, {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import clsx from 'clsx';
import {
  Search,
  Hash,
  FileText,
  Terminal,
  Clock,
  ArrowRight,
  X,
} from 'lucide-react';
import { useSearch } from '@/providers/SearchProvider';
import { useKeyboardShortcut } from '@/hooks/useKeyboardShortcut';
import { useRecentSearches } from '@/hooks/useRecentSearches';
import { fuzzySearch } from '@/utils/fuzzy';
import { searchIndex } from '@/data/searchIndex';
import type { SearchResult, SearchResultType } from '@/types/search';
import styles from './CommandPalette.module.css';

function ResultTypeIcon({
  type,
}: {
  type: SearchResultType;
}): React.JSX.Element {
  const props = { size: 14, 'aria-hidden': true as const, className: styles.icon };
  switch (type) {
    case 'page':
      return <FileText {...props} />;
    case 'section':
      return <Hash {...props} />;
    case 'command':
      return <Terminal {...props} />;
    case 'project':
      return <ArrowRight {...props} />;
    default:
      return <ArrowRight {...props} />;
  }
}

const QUICK_ITEMS = searchIndex
  .filter((item) => item.type === 'page' || item.type === 'section')
  .slice(0, 6);

export function CommandPalette(): React.JSX.Element | null {
  const { isOpen, close, toggle } = useSearch();
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const { recentSearches, addRecentSearch, clearRecentSearches } =
    useRecentSearches();

  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);
  const resolvedThemeRef = useRef(resolvedTheme);

  const listboxId = useId();

  // Sync resolvedTheme to ref to avoid stale closure in executeResult
  useEffect(() => {
    resolvedThemeRef.current = resolvedTheme;
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Register global Cmd/Ctrl + K shortcut
  useKeyboardShortcut({ key: 'k', ctrlOrMeta: true }, toggle);

  // Manage focus, scroll lock, and cleanup when palette opens/closes
  useEffect(() => {
    if (!isOpen) return;

    lastActiveRef.current = document.activeElement as HTMLElement | null;
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';

    setQuery('');
    setActiveIndex(0);

    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    return () => {
      document.documentElement.style.overflow = prevOverflow;
      lastActiveRef.current?.focus();
    };
  }, [isOpen]);

  // Fuzzy search results
  const results = useMemo<readonly SearchResult[]>(() => {
    if (!query.trim()) return [];
    return fuzzySearch(searchIndex, query, (item) => [
      item.title,
      item.description ?? '',
      ...(item.keywords ?? []),
      item.category ?? '',
    ]).map(({ item }) => item);
  }, [query]);

  const displayItems: readonly SearchResult[] = query.trim()
    ? results
    : QUICK_ITEMS;

  // Reset active index whenever the displayed list changes
  useEffect(() => {
    setActiveIndex(0);
  }, [results, query]);

  const executeResult = useCallback(
    (result: SearchResult): void => {
      if (query.trim()) {
        addRecentSearch(query.trim());
      }

      if (result.id === 'cmd-theme-toggle') {
        setTheme(resolvedThemeRef.current === 'dark' ? 'light' : 'dark');
        close();
        return;
      }

      if (result.href) {
        router.push(result.href);
        close();
      }
    },
    [query, addRecentSearch, setTheme, router, close]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>): void => {
      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          close();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setActiveIndex((i) =>
            displayItems.length > 0 ? Math.min(i + 1, displayItems.length - 1) : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setActiveIndex((i) => Math.max(i - 1, 0));
          break;
        case 'Enter': {
          e.preventDefault();
          const selected = displayItems[activeIndex];
          if (selected) executeResult(selected);
          break;
        }
        default:
          break;
      }
    },
    [close, displayItems, activeIndex, executeResult]
  );

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>): void => {
      if (e.target === e.currentTarget) close();
    },
    [close]
  );

  if (!mounted || !isOpen) return null;

  const activeResultId =
    displayItems[activeIndex] !== undefined
      ? `${listboxId}-opt-${activeIndex}`
      : undefined;

  return (
    <div
      className={styles.overlay}
      role="presentation"
      onClick={handleOverlayClick}
    >
      <div
        ref={panelRef}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onKeyDown={handleKeyDown}
      >
        {/* Search input */}
        <div className={styles.inputWrapper}>
          <Search size={16} aria-hidden className={styles.searchIcon} />
          <input
            ref={inputRef}
            id={`${listboxId}-input`}
            className={styles.input}
            type="text"
            role="combobox"
            aria-expanded={displayItems.length > 0}
            aria-haspopup="listbox"
            aria-autocomplete="list"
            aria-controls={listboxId}
            aria-activedescendant={activeResultId}
            placeholder="Search or jump to…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
            spellCheck={false}
          />
          <kbd className={styles.escHint} aria-label="Press Escape to close">
            esc
          </kbd>
        </div>

        {/* Recent searches — shown only when query is empty */}
        {!query.trim() && recentSearches.length > 0 && (
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Recent</span>
              <button
                type="button"
                className={styles.clearButton}
                onClick={clearRecentSearches}
                aria-label="Clear all recent searches"
              >
                <X size={12} aria-hidden />
                Clear
              </button>
            </div>
            <ul className={styles.recentList} role="list">
              {recentSearches.map((r) => (
                <li key={r.id}>
                  <button
                    type="button"
                    className={styles.recentItem}
                    onClick={() => setQuery(r.query)}
                  >
                    <Clock
                      size={12}
                      aria-hidden
                      className={styles.recentIcon}
                    />
                    <span>{r.query}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Results listbox */}
        <ul
          id={listboxId}
          role="listbox"
          aria-label={query.trim() ? 'Search results' : 'Quick navigation'}
          className={styles.list}
        >
          {displayItems.length === 0 && query.trim() ? (
            <li
              role="option"
              aria-selected={false}
              className={styles.empty}
            >
              No results for &ldquo;{query}&rdquo;
            </li>
          ) : (
            displayItems.map((item, index) => (
              <li
                key={item.id}
                id={`${listboxId}-opt-${index}`}
                role="option"
                aria-selected={index === activeIndex}
                className={clsx(
                  styles.item,
                  index === activeIndex && styles.itemActive
                )}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <button
                  type="button"
                  tabIndex={-1}
                  className={styles.itemButton}
                  onClick={() => executeResult(item)}
                >
                  <ResultTypeIcon type={item.type} />
                  <span className={styles.itemContent}>
                    <span className={styles.itemTitle}>{item.title}</span>
                    {item.description && (
                      <span className={styles.itemDesc}>
                        {item.description}
                      </span>
                    )}
                  </span>
                  {item.category && (
                    <span className={styles.itemCategory}>{item.category}</span>
                  )}
                </button>
              </li>
            ))
          )}
        </ul>

        {/* Keyboard hint footer */}
        <div className={styles.footer} aria-hidden="true">
          <span>
            <kbd>↑↓</kbd> navigate
          </span>
          <span>
            <kbd>↵</kbd> open
          </span>
          <span>
            <kbd>esc</kbd> close
          </span>
        </div>
      </div>
    </div>
  );
}
