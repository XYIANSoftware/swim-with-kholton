"use client";

import { Button } from "primereact/button";
import { useTheme } from "@/providers";
import { THEMES, type ThemeId } from "@/constants";

export function ThemeSwitcher() {
  const { theme, setTheme, cycleTheme } = useTheme();

  return (
    <div className="flex flex-wrap gap-2 align-items-center">
      {THEMES.map((t) => (
        <Button
          key={t}
          label={t}
          size="small"
          outlined={theme !== t}
          onClick={() => setTheme(t as ThemeId)}
        />
      ))}
      <Button
        icon="pi pi-refresh"
        size="small"
        rounded
        text
        onClick={cycleTheme}
        aria-label="Cycle theme"
      />
    </div>
  );
}
