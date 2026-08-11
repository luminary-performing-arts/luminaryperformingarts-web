"use client";

import { Menu, X } from "lucide-react";

interface MobileNavigationButtonProps {
  isOpen: boolean;

  onToggle: () => void;
}

/**
 * Mobile navigation toggle.
 */
export default function MobileNavigationButton({
  isOpen,
  onToggle,
}: MobileNavigationButtonProps) {
  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      onClick={onToggle}
      className="
        inline-flex
        min-h-11
        min-w-11
        items-center
        justify-center
        rounded-full
        text-[var(--color-primary)]
        transition-colors
        duration-200
        hover:bg-[var(--color-surface-muted)]
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-[var(--color-secondary)]
        lg:hidden
      "
    >
      {isOpen ? (
        <X aria-hidden="true" size={24} strokeWidth={2} />
      ) : (
        <Menu aria-hidden="true" size={24} strokeWidth={2} />
      )}
    </button>
  );
}
