import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/src/lib/utils";

export type CardVariant = "default" | "bordered" | "elevated";

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;

  variant?: CardVariant;
}

const variantClasses: Record<CardVariant, string> = {
  default: "bg-[var(--color-surface)]",

  bordered: cn(
    "bg-[var(--color-surface)]",
    "border",
    "border-[var(--color-border)]",
  ),

  elevated: cn("bg-[var(--color-surface)]", "shadow-[var(--shadow-md)]"),
};

/**
 * Generic content surface used by feature-level cards.
 */
export default function Card({
  children,
  className,
  variant = "default",
  ...props
}: CardProps) {
  return (
    <article
      {...props}
      className={cn(
        "rounded-[var(--radius-lg)]",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </article>
  );
}
