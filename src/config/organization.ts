import type { OrganizationConfig } from "@/src/types";

/**
 * Primary organization identity.
 *
 * This object is the authoritative source for reusable
 * organization-level information throughout the application.
 */
export const organization = {
  name: "Luminary Performing Arts",

  shortName: "LPA",

  logoPath: "/images/logo/logo-main.svg",

  legalName: "Luminary Performing Arts, Inc.",

  slogan: "Where every child's light is seen.",

  mission:
    "To cultivate faith, creativity, confidence, and community through performing arts education.",

  vision:
    "To inspire students to discover and develop their gifts while growing in confidence, character, creativity, and community.",

  websiteUrl:
    "https://www.luminaryperformingarts.org",

  defaultLanguage: "en-US",

  defaultLocale: "en_US",
} satisfies OrganizationConfig;