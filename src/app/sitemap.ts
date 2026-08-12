import type {
    MetadataRoute,
} from "next";

import {
    siteMetadata,
} from "@/config";


/**
 * Dynamic sitemap.xml
 *
 * Centralized route definition.
 */
export default function sitemap(): MetadataRoute.Sitemap {

    const baseUrl =
        siteMetadata.siteUrl;

    return [

        {
            url: `${baseUrl}/`,

            lastModified: new Date(),

            changeFrequency: "weekly",

            priority: 1,
        },

        {
            url: `${baseUrl}/about`,

            lastModified: new Date(),

            changeFrequency: "monthly",

            priority: 0.8,
        },

        {
            url: `${baseUrl}/programs`,

            lastModified: new Date(),

            changeFrequency: "weekly",

            priority: 0.9,
        },

        {
            url: `${baseUrl}/events`,

            lastModified: new Date(),

            changeFrequency: "weekly",

            priority: 0.9,
        },

        {
            url: `${baseUrl}/contact`,

            lastModified: new Date(),

            changeFrequency: "monthly",

            priority: 0.7,
        },

        {
            url: `${baseUrl}/donate`,

            lastModified: new Date(),

            changeFrequency: "monthly",

            priority: 0.8,
        },
    ];
}