import type { SeoConfig } from "@/src/types";

import { organization } from "./organization";

/**
 * Site-wide search-engine and social-sharing defaults.
 */
export const seo = {
  siteUrl: organization.websiteUrl,

  defaultTitle: organization.name,

  titleTemplate: `%s | ${organization.name}`,

  description: organization.slogan,

  keywords: [
    "performing arts",
    "performing arts education",
    "youth performing arts",
    "theatre",
    "musical theatre",
    "dance",
    "voice",
    "acting",
    "Luminary Performing Arts",
  ],

  openGraph: {
    type: "website",

    locale: organization.defaultLocale,

    siteName: organization.name,

    image: "/images/social/og-default.jpg",

    imageAlt: organization.name,
  },

  robots: {
    index: true,

    follow: true,

    googleBot: {
      index: true,

      follow: true,

      maxImagePreview: "large",

      maxSnippet: -1,

      maxVideoPreview: -1,
    },
  },
} satisfies SeoConfig;
