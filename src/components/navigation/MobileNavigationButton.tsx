"use client";
import type { SVGProps } from "react";

interface MobileNavigationButtonProps {
  isOpen: boolean;

  onToggle: () => void;
}

function MenuIcon({ size = 24, ...props }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ size = 24, ...props }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
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
        <CloseIcon aria-hidden="true" size={24} strokeWidth={2} />
      ) : (
        <MenuIcon aria-hidden="true" size={24} strokeWidth={2} />
      )}
    </button>
  );
}
