"use client";

import { navigation } from "@/src/config";

import NavigationList from "./NavigationList";

interface MobileNavigationProps {
  isOpen: boolean;

  onClose: () => void;
}

/**
 * Collapsible primary navigation for mobile and tablet layouts.
 */
export default function MobileNavigation({
  isOpen,
  onClose,
}: MobileNavigationProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <nav
      id="mobile-navigation"
      aria-label="Mobile navigation"
      className="
        border-t
        border-[var(--color-border)]
        bg-[var(--color-background-secondary)]
        lg:hidden
      "
    >
      <NavigationList
        items={navigation.primary}
        className="
          grid
          gap-1
          px-5
          py-5
          sm:px-6
        "
        itemClassName="
          block
          rounded-lg
          px-4
          py-3
          text-base
          font-medium
          text-[var(--color-primary)]
          hover:bg-[var(--color-surface-muted)]
        "
        onNavigate={onClose}
      />
    </nav>
  );
}
