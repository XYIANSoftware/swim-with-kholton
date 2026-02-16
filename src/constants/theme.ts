export const APP_THEME_STORAGE_KEY = "app-theme";

export const THEMES = ["dark-synth"] as const;
export type ThemeId = (typeof THEMES)[number];

export const DEFAULT_THEME: ThemeId = "dark-synth";
