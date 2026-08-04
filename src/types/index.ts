/**
 * Shared application type exports.
 *
 * Import application configuration types from "@/types"
 * instead of referencing individual files directly.
 */

export type {
  OrganizationConfig,
} from "./organization";

export type {
  BrandingConfig,
  DecorativeAssets,
  HeroAssets,
  LogoAssets,
} from "./branding";

export type {
  AddressConfig,
  BusinessHoursConfig,
  ContactConfig,
} from "./contact";

export type {
  NavigationConfig,
  NavigationItem,
  NavigationTarget,
} from "./navigation";

export type {
  SocialConfig,
  SocialPlatform,
  SocialProfile,
} from "./social";

export type {
  OpenGraphConfig,
  RobotsConfig,
  SeoConfig,
} from "./seo";

export type {
  ThemeColors,
  ThemeConfig,
  ThemeLayout,
  ThemeRadius,
} from "./theme";

export type {
  SiteMetadataConfig,
} from "./metadata";

export type {
  FeatureConfig,
} from "./features";

export type {
  DonationIntegrationConfig,
  EmailIntegrationConfig,
  GoogleIntegrationConfig,
  IntegrationConfig,
} from "./integrations";