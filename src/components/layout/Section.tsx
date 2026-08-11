import type { ReactNode } from "react";

import { cn } from "@/src/lib/utils";

export type SectionSpacing = "none" | "small" | "medium" | "large";

interface SectionProps {
  children: ReactNode;

  className?: string;

  id?: string;

  spacing?: SectionSpacing;

  /**
   * Accessible label when a visible section heading
   * is not available.
   */
  ariaLabel?: string;
}

const spacingClasses: Record<SectionSpacing, string> = {
  none: "",

  small: "py-10 sm:py-12",

  medium: "py-16 sm:py-20 lg:py-24",

  large: "py-20 sm:py-24 lg:py-32",
};

/**
 * Standard wrapper for major page sections.
 */
export default function Section({
  children,
  className,
  id,
  spacing = "medium",
  ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(spacingClasses[spacing], className)}
    >
      {children}
    </section>
  );
}
