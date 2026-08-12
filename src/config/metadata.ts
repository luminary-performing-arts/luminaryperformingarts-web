import type { SiteMetadataConfig } from "@/types";

import { organization } from "./organization";

/**
 * General application metadata.
 *
 * Values are derived from organization configuration wherever
 * possible to avoid duplicated organization information.
 */
export const siteMetadata = {
  applicationName: organization.name,

  author: organization.name,

  creator: organization.name,

  publisher: organization.name,

  copyrightHolder: organization.legalName,

  language: organization.defaultLanguage,

  siteUrl: organization.websiteUrl,
  
} satisfies SiteMetadataConfig;
