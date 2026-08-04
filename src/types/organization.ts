/**
 * Configuration contract describing the organization represented
 * by the website.
 */
export interface OrganizationConfig {
  /**
   * Full public-facing organization name.
   *
   * Example:
   * "Luminary Performing Arts"
   */
  readonly name: string;

  /**
   * Shortened organization name used where space is limited.
   *
   * Example:
   * "Luminary"
   */
  readonly shortName: string;

  /**
   * Path to the organization's logo image.
   */
  readonly logoPath: string;

  /**
   * Registered/legal organization name.
   */
  readonly legalName: string;

  /**
   * Primary organization slogan or tagline.
   */
  readonly slogan: string;

  /**
   * Organization mission statement.
   */
  readonly mission: string;

  /**
   * Organization vision statement.
   */
  readonly vision: string;

  /**
   * Optional year in which the organization was established.
   */
  readonly foundedYear?: number;

  /**
   * Primary website URL.
   */
  readonly websiteUrl: string;

  /**
   * Default language used by the website.
   *
   * Example:
   * "en-US"
   */
  readonly defaultLanguage: string;

  /**
   * Default locale used for formatting and metadata.
   *
   * Example:
   * "en_US"
   */
  readonly defaultLocale: string;
}