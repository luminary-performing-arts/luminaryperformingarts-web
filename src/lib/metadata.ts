import type { Metadata } from "next";

import { organization, seo, siteMetadata } from "@/config";

/**
 * Generates the default Next.js metadata configuration
 * for the application.
 */
export function createSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(seo.siteUrl),

    title: {
      default: seo.defaultTitle,

      template: seo.titleTemplate,
    },

    description: seo.description,

    applicationName: siteMetadata.applicationName,

    authors: [
      {
        name: siteMetadata.author,
      },
    ],

    creator: siteMetadata.creator,

    publisher: siteMetadata.publisher,

    keywords: [...seo.keywords],

    alternates: {
      canonical: "/",
    },

    openGraph: {
      type: seo.openGraph.type,

      locale: seo.openGraph.locale,

      siteName: seo.openGraph.siteName,

      title: seo.defaultTitle,

      description: seo.description,

      url: seo.siteUrl,

      images: seo.openGraph.image
        ? [
            {
              url: seo.openGraph.image,

              alt: seo.openGraph.imageAlt ?? organization.name,
            },
          ]
        : undefined,
    },

    robots: {
      index: seo.robots.index,

      follow: seo.robots.follow,

      googleBot: seo.robots.googleBot
        ? {
            index: seo.robots.googleBot.index,

            follow: seo.robots.googleBot.follow,

            "max-image-preview": seo.robots.googleBot.maxImagePreview,

            "max-snippet": seo.robots.googleBot.maxSnippet,

            "max-video-preview": seo.robots.googleBot.maxVideoPreview,
          }
        : undefined,
    },

    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}
