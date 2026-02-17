export const APP_THEME_STORAGE_KEY = "app-theme";

export const THEMES = ["socal-aqua-light", "dark-synth"] as const;
export type ThemeId = (typeof THEMES)[number];

export const DEFAULT_THEME: ThemeId = "socal-aqua-light";

export const THEME_LABELS: Record<ThemeId, string> = {
  "socal-aqua-light": "Light",
  "dark-synth": "Dark",
};

export const THEME_ICONS: Record<ThemeId, string> = {
  "socal-aqua-light": "pi pi-sun",
  "dark-synth": "pi pi-moon",
};
