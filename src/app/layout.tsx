import type { Metadata, Viewport } from "next";

import "./globals.css";

import { SkipLink } from "@/components/layout";

import { organization, theme } from "@/config";

import { PageLayout } from "@/layouts";

import { createSiteMetadata } from "@/lib/metadata";

/**
 * Site-wide metadata generated from centralized
 * application configuration.
 */
export const metadata: Metadata = createSiteMetadata();

/**
 * Global viewport configuration.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: theme.colors.background,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Root Next.js application layout.
 *
 * Provides the global accessibility and public-site
 * layout composition.
 */
export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang={organization.defaultLanguage}>
      <body>
        <SkipLink />
        <PageLayout>
          {children}
        </PageLayout>
      </body>
    </html>
  );
}