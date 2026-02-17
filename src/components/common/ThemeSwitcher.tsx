"use client";

import { Button } from "primereact/button";
import { useTheme } from "@/providers";
import { THEMES, THEME_LABELS, type ThemeId } from "@/constants";

interface ThemeSwitcherProps {
  /** Use compact style (icon-only) for nav */
  compact?: boolean;
}

export function ThemeSwitcher({ compact }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();

  if (compact) {
    return (
      <div className="flex gap-1 align-items-center">
        {THEMES.map((t) => (
          <Button
            key={t}
            label={THEME_LABELS[t]}
            size="small"
            outlined={theme !== t}
            onClick={() => setTheme(t as ThemeId)}
            className="p-button-text p-button-sm"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2 align-items-center">
      {THEMES.map((t) => (
        <Button
          key={t}
          label={THEME_LABELS[t]}
          size="small"
          outlined={theme !== t}
          onClick={() => setTheme(t as ThemeId)}
        />
      ))}
    </div>
  );
}
