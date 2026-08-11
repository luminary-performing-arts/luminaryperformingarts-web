import Link from "next/link";

import type { NavigationItem as NavigationItemConfig } from "@/src/types";

import { cn } from "@/src/lib/utils";

interface NavigationItemProps {
  item: NavigationItemConfig;

  className?: string;

  onNavigate?: () => void;
}

/**
 * Renders an individual navigation entry.
 *
 * Supports internal Next.js navigation as well as external URLs.
 */
export default function NavigationItem({
  item,
  className,
  onNavigate,
}: NavigationItemProps) {
  const classes = cn(
    "transition-colors",
    "duration-200",
    "hover:text-[var(--color-secondary-dark)]",
    "focus-visible:outline",
    "focus-visible:outline-2",
    "focus-visible:outline-offset-4",
    "focus-visible:outline-[var(--color-secondary)]",
    item.highlight && "font-semibold",
    className,
  );

  if (item.external) {
    return (
      <a
        href={item.href}
        target={item.target ?? "_blank"}
        rel="noopener noreferrer"
        aria-label={item.ariaLabel}
        className={classes}
        onClick={onNavigate}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      target={item.target}
      aria-label={item.ariaLabel}
      className={classes}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  );
}
