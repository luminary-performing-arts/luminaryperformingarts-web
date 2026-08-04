import type { NavigationConfig } from "@/src/types";

/**
 * Global site navigation.
 *
 * Navigation is separated into:
 *
 * - primary
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

    {
      label: "Donate",
      href: "/donate",
      highlight: true,
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