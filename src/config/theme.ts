import type { ThemeConfig } from "@/src/types";

/**
 * Application-level theme configuration.
 *
 * CSS equivalents are defined in:
 *
 *   src/styles/theme.css
 *
 * CSS remains authoritative for normal component styling.
 * This object exists for application logic that requires
 * programmatic access to theme values.
 */
export const theme = {
  colors: {
    primary: "#071f52",
    primaryLight: "#123b7a",
    primaryDark: "#041534",

    secondary: "#c9a24b",
    secondaryLight: "#e3c77c",
    secondaryDark: "#9d772b",

    accent: "#f0dba5",

    background: "#f8f4ec",
    backgroundSecondary: "#fffdf8",

    surface: "#ffffff",
    surfaceMuted: "#f5f1e8",

    text: "#1e293b",
    textMuted: "#64748b",
    textInverse: "#ffffff",

    border: "#e5e0d7",

    success: "#15803d",
    warning: "#a16207",
    error: "#b91c1c",
    info: "#0369a1",
  },

  radius: {
    small: "0.375rem",
    medium: "0.75rem",
    large: "1.25rem",
    extraLarge: "2rem",
    full: "9999px",
  },

  layout: {
    containerMaxWidth: "80rem",
    headerHeight: "6rem",
  },
} satisfies ThemeConfig;