/**
 * Theme Engine types.
 *
 * AccentPreset   – a named, pre-defined accent color option.
 * ThemePreference – persisted user preference (stored in localStorage).
 * ThemeEngineContextValue – the public API surface of ThemeEngineProvider.
 */

export type AccentPreset = {
  readonly id: string;
  readonly label: string;
  readonly hex: string;
};

export type ThemePreference = {
  readonly accentHex: string | null;
};

export type ThemeEngineContextValue = {
  /** Currently active accent hex, or null for the theme default. */
  readonly accentHex: string | null;
  /** Override the accent color. Pass null to reset to the theme default. */
  readonly setAccent: (hex: string | null) => void;
  /**
   * Extract the dominant color from an image URL, apply it as the accent,
   * and return the extracted hex (or null if extraction failed).
   */
  readonly extractAccentFromImage: (imageUrl: string) => Promise<string | null>;
  /** Built-in accent presets. */
  readonly accentPresets: readonly AccentPreset[];
};
