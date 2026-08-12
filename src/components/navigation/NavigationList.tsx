import type { NavigationItem as NavigationItemConfig } from "@/types";

import { cn } from "@/lib/utils";

import NavigationItem from "./NavigationItem";

interface NavigationListProps {
  items: readonly NavigationItemConfig[];

  className?: string;

  itemClassName?: string;

  onNavigate?: () => void;
}

/**
 * Reusable semantic navigation list.
 */
export default function NavigationList({
  items,
  className,
  itemClassName,
  onNavigate,
}: NavigationListProps) {
  return (
    <ul className={cn("m-0", "list-none", "p-0", className)}>
      {items.map((item) => (
        <li key={`${item.label}-${item.href}`}>
          <NavigationItem
            item={item}
            className={itemClassName}
            onNavigate={onNavigate}
          />
        </li>
      ))}
    </ul>
  );
}
