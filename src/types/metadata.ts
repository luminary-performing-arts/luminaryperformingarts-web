/**
 * General application metadata.
 */
export interface SiteMetadataConfig {
  /**
   * Application/site name.
   */
  readonly applicationName: string;

  /**
   * Content author.
   */
  readonly author: string;

  /**
   * Content creator.
   */
  readonly creator: string;

  /**
   * Content publisher.
   */
  readonly publisher: string;

  /**
   * Copyright holder.
   */
  readonly copyrightHolder: string;

  /**
   * Default HTML language.
   */
  readonly language: string;

  /**
   * Default site URL.
   */
  readonly siteUrl: string;

}
