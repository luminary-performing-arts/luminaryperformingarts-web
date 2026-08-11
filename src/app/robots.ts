import type {
    MetadataRoute,
} from "next";

import {
    siteMetadata,
} from "@/src/config";


/**
 * Dynamic robots.txt
 *
 * Generated automatically by Next.js from
 * centralized application configuration.
 */
export default function robots(): MetadataRoute.Robots {

    return {

        rules: [
            {
                userAgent: "*",

                allow: "/",
            },
        ],

        sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,

        host: siteMetadata.siteUrl,
    };
}