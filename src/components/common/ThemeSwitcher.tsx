"use client";

import { useMemo } from "react";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { useTheme } from "@/providers";
import { THEMES, THEME_LABELS, THEME_ICONS, type ThemeId } from "@/constants";

interface ThemeSwitcherProps {
  /** In sidebar, show label; in header, icon-only. */
  compact?: boolean;
}

export function ThemeSwitcher({ compact = true }: ThemeSwitcherProps) {
  const { theme, cycleTheme } = useTheme();

  const otherTheme = THEMES.find((t) => t !== theme) as ThemeId;
  const tooltipText = useMemo(
    () => `Switch to ${THEME_LABELS[otherTheme] ?? otherTheme}`,
    [otherTheme]
  );

  const currentIcon = THEME_ICONS[theme];
  const currentLabel = THEME_LABELS[theme];

  const trigger = (
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
  );

  if (compact) {
    return (
      <>
        <Tooltip content={tooltipText} position="bottom">
          {trigger}
        </Tooltip>
      </>
    );
  }

  return (
    <>
      <Tooltip content={tooltipText} position="right">
        <Button
          type="button"
          icon={currentIcon}
          label={currentLabel}
          rounded
          text
          onClick={cycleTheme}
          aria-label={tooltipText}
          className="theme-toggle-btn p-button-sm"
        />
      </Tooltip>
    </>
  );
}
