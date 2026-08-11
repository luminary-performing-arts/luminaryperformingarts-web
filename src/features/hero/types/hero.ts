/**
 * Supported Hero CTA presentation styles.
 */
export type HeroActionVariant = "primary" | "secondary" | "outline";

/**
 * Individual Hero call-to-action.
 */
export interface HeroAction {
  /**
   * Visible action label.
   */
  readonly label: string;

  /**
   * Internal or external destination.
   */
  readonly href: string;

  /**
   * Visual button treatment.
   */
  readonly variant: HeroActionVariant;

  /**
   * Whether the destination is external.
   */
  readonly external?: boolean;

  /**
   * Optional accessible description.
   */
  readonly ariaLabel?: string;
}

/*
######################################
 * Hero artwork configuration.
 *
 * Artwork layers are optional because the Hero provides
 * CSS-based visual fallbacks when decorative assets are
 * unavailable or intentionally disabled.
 ######################################
 */
export interface HeroArtworkConfig {
  /**
   * Primary foreground silhouette.
   */
  readonly silhouette?: string;

  /**
   * Decorative theatre curtain.
   */
  readonly curtain?: string;

  /**
   * Primary radial glow enhancement.
   */
  readonly glow?: string;

  /**
   * Extended atmospheric glow enhancement.
   */
  readonly glowLong?: string;

  /**
   * Decorative sparkle overlay.
   */
  readonly sparkles?: string;

  /**
   * Optional image-based background enhancement.
   */
  readonly background?: string;

  /**
   * Decorative star asset.
   */
  readonly star?: string;
}

/**
 * Controls optional image-based Hero enhancements.
 *
 * CSS-based fallback styling remains active regardless
 * of these settings.
 */
export interface HeroVisualConfig {
  readonly useBackgroundImage: boolean;

  readonly useGlowImages: boolean;

  readonly useSparklesImage: boolean;

  readonly useSilhouetteImage: boolean;

  readonly useCurtainImage: boolean;

  readonly useStarImage: boolean;
}

/**
 * Complete homepage Hero configuration.
 */
export interface HeroConfig {
  /**
   * Small introductory text displayed above the title.
   */
  readonly eyebrow?: string;

  /**
   * Primary Hero heading.
   */
  readonly title: string;

  /**
   * Supporting headline.
   */
  readonly headline: string;

  /**
   * Supporting body copy.
   */
  readonly description: string;

  /**
   * Hero CTA collection.
   */
  readonly actions: readonly HeroAction[];

  /**
   * Hero artwork.
   */
  readonly artwork: HeroArtworkConfig;

  /**
   * Hero visual configuration.
   */
  readonly visual: HeroVisualConfig;
}
