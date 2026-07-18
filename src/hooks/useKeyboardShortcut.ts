import { useEffect, useRef } from 'react';

export type KeyboardShortcutOptions = {
  readonly key: string;
  readonly ctrlOrMeta?: boolean;
  readonly shift?: boolean;
  readonly alt?: boolean;
};

export function useKeyboardShortcut(
  options: KeyboardShortcutOptions,
  callback: () => void
): void {
  const savedCallback = useRef<() => void>(callback);

  useEffect(() => {
    savedCallback.current = callback;
  });

  const { key, ctrlOrMeta = false, shift = false, alt = false } = options;

  useEffect(() => {
    function handler(event: KeyboardEvent): void {
      if (event.key.toLowerCase() !== key.toLowerCase()) return;
      if (ctrlOrMeta && !(event.ctrlKey || event.metaKey)) return;
      if (shift && !event.shiftKey) return;
      if (alt && !event.altKey) return;

      event.preventDefault();
      savedCallback.current();
    }

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [key, ctrlOrMeta, shift, alt]);
}
