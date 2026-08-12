import { branding, organization } from "@/config";

import type { HeroConfig } from "../types/hero";

/**
 * Homepage Hero configuration.
 */
export const heroConfig = {
  eyebrow: "Performing Arts • Creativity • Community",

  title: organization.name,

  headline: organization.slogan,

  description:
    "A welcoming place for young performers to discover their gifts, build confidence, develop their craft, and shine together.",

  actions: [
    {
      label: "Explore Programs",
      href: "/programs",
      variant: "secondary",
    },

    {
      label: "Discover Luminary",
      href: "/about",
      variant: "outline",
    },
  ],

  artwork: {
    silhouette: branding.hero.childrenSilhouette,

    curtain: branding.hero.curtainRight,

    glow: branding.hero.glow,

    glowLong: branding.hero.glowLong,

    sparkles: branding.hero.sparklesOverlay,

    background: branding.hero.creamGradient,

    star: branding.decorative.star,
  },

  /**
   * Optional image enhancement layers.
   *
   * Set individual values to false while artwork is being
   * developed. CSS fallbacks remain active.
   */
  visual: {
    useBackgroundImage: false,
    useGlowImages: false,
    useSparklesImage: false,
    useSilhouetteImage: false,
    useCurtainImage: false,
    useStarImage: false,
  },
} satisfies HeroConfig;
