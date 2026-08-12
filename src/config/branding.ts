import type { BrandingConfig } from "@/types";

import { organization } from "./organization";

/**
 * Application branding and reusable asset locations.
 *
 * Assets referenced here must exist beneath /public.
 */
export const branding = {
  logoAlt: `${organization.name} logo`,

  logos: {
    horizontal: "/images/logo/logo-horizontal.png",

    mark: "/images/logo/logo-mark.svg",

    favicon: "/images/favicon.ico",
  },

  decorative: {
    star: "/images/hero/star.svg",
  },

  hero: {
    childrenSilhouette: "/images/hero/children-silhouette.svg",

    curtainRight: "/images/hero/curtain-right.png",

    glow: "/images/hero/hero-glow.png",

    glowLong: "/images/hero/hero-glow-long.png",

    sparklesOverlay: "/images/effects/sparkles-overlay.png",

    creamGradient: "/images/backgrounds/cream-gradient.jpg",
  },
} satisfies BrandingConfig;
