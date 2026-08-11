/**
 * Open Graph configuration.
 */
export interface OpenGraphConfig {
  readonly type: "website";

  readonly locale: string;

  readonly siteName: string;

  readonly image?: string;

  readonly imageAlt?: string;
}

/**
 * Search-engine crawler behavior.
 */
export interface RobotsConfig {
  readonly index: boolean;

  readonly follow: boolean;

  readonly googleBot?: {
    readonly index: boolean;
    readonly follow: boolean;
    readonly maxImagePreview?: "none" | "standard" | "large";
    readonly maxSnippet?: number;
    readonly maxVideoPreview?: number;
  };
}

/**
 * Site-wide SEO configuration.
 */
export interface SeoConfig {
  /**
   * Canonical production origin.
   *
   * Example:
   * "https://www.luminaryperformingarts.org"
   */
  readonly siteUrl: string;

  /**
   * Default browser/search title.
   */
  readonly defaultTitle: string;

  /**
   * Template used by secondary pages.
   *
   * Example:
   * "%s | Luminary Performing Arts"
   */
  readonly titleTemplate: string;

  /**
   * Default search description.
   */
  readonly description: string;

  /**
   * Optional default SEO keywords.
   */
  readonly keywords: readonly string[];

  readonly openGraph: OpenGraphConfig;

  readonly robots: RobotsConfig;
}
