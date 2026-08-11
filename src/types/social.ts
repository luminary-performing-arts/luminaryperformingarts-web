/**
 * Social platform identifiers supported by the website.
 */
export type SocialPlatform =
  "facebook" | "instagram" | "youtube" | "linkedin" | "x" | "tiktok";

/**
 * Individual social media profile.
 */
export interface SocialProfile {
  readonly platform: SocialPlatform;

  readonly label: string;

  readonly href: string;

  /**
   * Whether the profile should currently be displayed.
   */
  readonly enabled: boolean;
}

/**
 * Social media configuration.
 */
export interface SocialConfig {
  readonly profiles: readonly SocialProfile[];
}
