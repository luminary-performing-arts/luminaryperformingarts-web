/**
 * Brand color configuration.
 */
export interface ThemeColors {
  readonly primary: string;
  readonly primaryLight: string;
  readonly primaryDark: string;

  readonly secondary: string;
  readonly secondaryLight: string;
  readonly secondaryDark: string;

  readonly accent: string;

  readonly background: string;
  readonly backgroundSecondary: string;

  readonly surface: string;
  readonly surfaceMuted: string;

  readonly text: string;
  readonly textMuted: string;
  readonly textInverse: string;

  readonly border: string;

  readonly success: string;
  readonly warning: string;
  readonly error: string;
  readonly info: string;
}

/**
 * Border radius configuration.
 */
export interface ThemeRadius {
  readonly small: string;
  readonly medium: string;
  readonly large: string;
  readonly extraLarge: string;
  readonly full: string;
}

/**
 * Layout configuration.
 */
export interface ThemeLayout {
  readonly containerMaxWidth: string;
  readonly headerHeight: string;
}

/**
 * Complete application theme configuration.
 */
export interface ThemeConfig {
  readonly colors: ThemeColors;

  readonly radius: ThemeRadius;

  readonly layout: ThemeLayout;
}
