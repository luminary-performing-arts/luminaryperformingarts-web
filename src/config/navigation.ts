import type { NavigationConfig } from "@/types";

/**
 * Global site navigation.
 *
 * Navigation is separated into:
 *
 * - primary
 * - cta
 * - footer
 * - legal
 */
export const navigation = {
  primary: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "About",
      href: "/about",
    },

    {
      label: "Programs",
      href: "/programs",
    },

    {
      label: "Shows",
      href: "/shows",
    },

    {
      label: "Get Involved",
      href: "/get-involved",
    },

    {
      label: "Contact",
      href: "/contact",
    },
  ],

  cta: [
    {
      label: "Donate",
      href: "/donate",
    },
  ],

  footer: [
    {
      label: "About",
      href: "/about",
    },

    {
      label: "Programs",
      href: "/programs",
    },

    {
      label: "Shows",
      href: "/shows",
    },

    {
      label: "Get Involved",
      href: "/get-involved",
    },

    {
      label: "Contact",
      href: "/contact",
    },
  ],

  legal: [
    {
      label: "Privacy",
      href: "/privacy",
    },

    {
      label: "Terms",
      href: "/terms",
    },

    {
      label: "Accessibility",
      href: "/accessibility",
    },
  ],
} satisfies NavigationConfig;
