'use client';
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export type SearchContextValue = {
  readonly isOpen: boolean;
  readonly open: () => void;
  readonly close: () => void;
  readonly toggle: () => void;
};

const SearchContext = createContext<SearchContextValue | null>(null);

export function useSearch(): SearchContextValue {
  const ctx = useContext(SearchContext);
  if (!ctx) {
    throw new Error('useSearch must be used inside <SearchProvider>');
  }
  return ctx;
}

export function SearchProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback((): void => setIsOpen(true), []);
  const close = useCallback((): void => setIsOpen(false), []);
  const toggle = useCallback((): void => setIsOpen((v) => !v), []);

  const value = useMemo<SearchContextValue>(
    () => ({ isOpen, open, close, toggle }),
    [isOpen, open, close, toggle]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
