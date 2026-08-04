import type { ContactConfig } from "@/src/types";

/**
 * Public organization contact information.
 *
 * Optional information should remain undefined until verified.
 * Do not use placeholder phone numbers or addresses in production.
 */
export const contact = {
  email:
    "info@luminaryperformingarts.org",

  address: {
    country: "US",
  },
} satisfies ContactConfig;