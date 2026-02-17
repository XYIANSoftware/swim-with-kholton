"use client";

import { useMemo } from "react";
import { Button } from "primereact/button";
import { SelectButton } from "primereact/selectbutton";
import { Tooltip } from "primereact/tooltip";
import { useTheme } from "@/providers";
import { THEMES, THEME_LABELS, THEME_ICONS, type ThemeId } from "@/constants";

const THEME_OPTIONS = THEMES.map((id) => ({
  label: THEME_LABELS[id],
  value: id,
}));

interface ThemeSwitcherProps {
  /** In sidebar, show Light/Dark toggle; in header, icon-only. */
  compact?: boolean;
}

export function ThemeSwitcher({ compact = true }: ThemeSwitcherProps) {
  const { theme, setTheme, cycleTheme } = useTheme();

  const otherTheme = THEMES.find((t) => t !== theme) as ThemeId;
  const tooltipText = useMemo(
    () => `Switch to ${THEME_LABELS[otherTheme] ?? otherTheme}`,
    [otherTheme]
  );

  const currentIcon = THEME_ICONS[theme];

  if (compact) {
    return (
      <Tooltip content={tooltipText} position="bottom">
        <Button
          type="button"
          icon={currentIcon}
          rounded
          text
          onClick={cycleTheme}
          aria-label={tooltipText}
          className="theme-toggle-btn p-button-sm"
          style={{ minWidth: "2rem", minHeight: "2rem", padding: "0.375rem" }}
        />
      </Tooltip>
    );
  }

  return (
    <SelectButton
      value={theme}
      options={THEME_OPTIONS}
      optionLabel="label"
      optionValue="value"
      onChange={(e) => {
        const v = e.value;
        if (v != null && (v === "socal-aqua-light" || v === "dark-synth")) setTheme(v);
      }}
      aria-label="Choose theme"
      className="theme-selectbutton-sidebar w-full"
    />
  );
}
