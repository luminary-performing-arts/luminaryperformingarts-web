/**
 * Reusable logo assets.
 */
export interface LogoAssets {
  readonly horizontal: string;
  readonly mark: string;
  readonly favicon: string;
}


/**
 * Decorative brand assets.
 */
export interface DecorativeAssets {
  readonly star: string;
}


/**
 * Hero-specific visual assets.
 */
export interface HeroAssets {
  readonly childrenSilhouette: string;
  readonly curtainRight: string;
  readonly glow: string;
  readonly glowLong: string;
  readonly sparklesOverlay: string;
  readonly creamGradient: string;
}


/**
 * Complete application branding configuration.
 */
export interface BrandingConfig {
  /**
   * Alternative text used for the primary logo.
   */
  readonly logoAlt: string;

  /**
   * Organization logo assets.
   */
  readonly logos: LogoAssets;

  /**
   * Decorative brand artwork.
   */
  readonly decorative: DecorativeAssets;

  /**
   * Homepage hero artwork.
   */
  readonly hero: HeroAssets;
}