import type { Metadata, Viewport } from "next";

import { organization, theme } from "@/src/config";
import { createSiteMetadata } from "@/src/lib/metadata";
import "@/src/app/globals.css";

/**
 * Site-wide metadata generated from centralized application
 * configuration.
 */
export const metadata: Metadata =
  createSiteMetadata();


/**
 * Global viewport configuration.
 */
export const viewport: Viewport = {
  width: "device-width",

  initialScale: 1,

  themeColor:
    theme.colors.primary,

  colorScheme: "light",
};


interface RootLayoutProps {
  children: React.ReactNode;
}


/**
 * Root application layout.
 */
export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html
      lang={organization.defaultLanguage}
    >
      <body>
        {children}
      </body>
    </html>
  );
}