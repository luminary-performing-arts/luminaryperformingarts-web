"use client";

import { useState } from "react";

import MobileNavigation from "./MobileNavigation";
import MobileNavigationButton from "./MobileNavigationButton";

/**
 * Owns mobile-navigation client state while allowing Header
 * itself to remain a Server Component.
 */
export default function MobileNavigationController() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle(): void {
    setIsOpen((current) => !current);
  }

  function handleClose(): void {
    setIsOpen(false);
  }

  return (
    <>
      <MobileNavigationButton isOpen={isOpen} onToggle={handleToggle} />

      <div
        className="
          absolute
          left-0
          top-full
          w-full
        "
      >
        <MobileNavigation isOpen={isOpen} onClose={handleClose} />
      </div>
    </>
  );
}
