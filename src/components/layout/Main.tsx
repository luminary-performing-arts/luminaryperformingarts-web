import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface MainProps {
  children: ReactNode;

  className?: string;
}

/**
 * Primary application content region.
 *
 * The main-content ID is the destination used by SkipLink.
 */
export default function Main({ children, className }: Readonly<MainProps>) {
  return (
    <main id="main-content" className={cn("flex-1", className)}>
      {children}
    </main>
  );
}
