import type { IntegrationConfig } from "@/src/types";

/**
 * Runtime third-party integration configuration.
 *
 * Infrastructure such as GitHub, Vercel, Cloudflare, and DNS
 * belongs in deployment documentation rather than this object.
 */
export const integrations = {
  google: {
    mapsApiEnabled: false,
  },

  email: {
    provider: "google-workspace",
    enabled: true,
  },

  donations: {
    provider: "none",
    enabled: false,
  },
} satisfies IntegrationConfig;
