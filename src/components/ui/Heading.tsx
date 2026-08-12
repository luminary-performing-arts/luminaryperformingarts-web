import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingSize = "sm" | "md" | "lg" | "xl" | "2xl" | "display";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingElement;

  size?: HeadingSize;

  children: ReactNode;
}

const sizeClasses: Record<HeadingSize, string> = {
  sm: "text-xl sm:text-2xl",

  md: "text-2xl sm:text-3xl",

  lg: "text-3xl sm:text-4xl lg:text-5xl",

  xl: "text-4xl sm:text-5xl lg:text-6xl",

  "2xl": "text-5xl sm:text-6xl lg:text-7xl",

  display: "text-5xl sm:text-7xl lg:text-8xl xl:text-9xl",
};

/**
 * Reusable semantic heading component.
 *
 * Semantic heading level and visual size can be controlled
 * independently.
 */
export default function Heading({
  as: Component = "h2",
  size = "lg",
  children,
  className,
  ...props
}: HeadingProps) {
  return (
    <Component
      {...props}
      className={cn(
        "font-serif",
        "font-semibold",
        "leading-[1.05]",
        "tracking-tight",
        "text-[var(--color-primary)]",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </Component>
  );
}
