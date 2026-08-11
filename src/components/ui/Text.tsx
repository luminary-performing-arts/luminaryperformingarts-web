import type { ElementType, ReactNode } from "react";

import { cn } from "@/src/lib/utils";

export type TextSize = "xs" | "sm" | "base" | "lg" | "xl";

export type TextTone = "default" | "muted" | "inverse" | "accent";

interface TextProps {
  as?: ElementType;

  children: ReactNode;

  className?: string;

  size?: TextSize;

  tone?: TextTone;
}

const sizeClasses: Record<TextSize, string> = {
  xs: "text-xs",

  sm: "text-sm",

  base: "text-base",

  lg: "text-lg",

  xl: "text-xl sm:text-2xl",
};

const toneClasses: Record<TextTone, string> = {
  default: "text-[var(--color-text)]",

  muted: "text-[var(--color-text-muted)]",

  inverse: "text-[var(--color-text-inverse)]",

  accent: "text-[var(--color-secondary-dark)]",
};

/**
 * Standard application text component.
 */
export default function Text({
  as: Component = "p",
  children,
  className,
  size = "base",
  tone = "default",
}: TextProps) {
  return (
    <Component
      className={cn(
        "leading-relaxed",
        sizeClasses[size],
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </Component>
  );
}
