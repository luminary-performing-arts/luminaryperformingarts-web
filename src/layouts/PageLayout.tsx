import type { ReactNode } from "react";

import { Footer, Header, Main } from "@/components/layout";

interface PageLayoutProps {
  children: ReactNode;
}

/**
 * Standard public website layout.
 *
 * Composes the global Header, primary content region,
 * and Footer.
 */
export default function PageLayout({ children }: Readonly<PageLayoutProps>) {
  return (
    <div
      className="
        flex
        min-h-screen
        flex-col
      "
    >
      <Header />

      <Main>{children}</Main>

      <Footer />
    </div>
  );
}
