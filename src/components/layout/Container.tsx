import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/src/lib/utils";

type ContainerElement = "div" | "section" | "main" | "article";

interface ContainerProps {
  /**
   * HTML element used to render the container.
   */
  as?: ContainerElement;

  /**
   * Container contents.
   */
  children: ReactNode;

  /**
   * Additional CSS classes.
   */
  className?: string;
}

/**
 * Standard application content container.
 *
 * Provides consistent maximum width and horizontal spacing
 * throughout the website.
 */
export default function Container({
  as = "div",
  children,
  className,
}: ContainerProps) {
  const Component = as as ElementType<ComponentPropsWithoutRef<"div">>;

  return (
    <Component
      className={cn(
        "mx-auto",
        "w-full",
        "max-w-[var(--container-max-width)]",
        "px-5",
        "sm:px-6",
        "lg:px-8",
        className,
      )}
    >
      {children}
    </Component>
  );
}
