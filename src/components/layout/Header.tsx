import { Logo } from "@/components/brand";

import {
  DesktopNavigation,
  MobileNavigationController,
} from "@/components/navigation";

import { 
  features, 
  navigation,
} from "@/config";

import { Button } from "@/components/ui";

import Container from "./Container";

/**
 * Global application header.
 */
export default function Header() {
  return (
    <header
      className="
        sticky
        top-0
        z-[var(--z-header)]
        border-b
        border-[var(--color-border)]
        bg-[var(--color-background-secondary)]/70
        backdrop-blur
      "
    >
      <Container
        className="
          flex
          mx-auto
          max-w-7xl
          px-6
          h-24
          items-center
          justify-between
          gap-6
        "
      >
          <Logo 
            size="small" 
            priority
          />
        
        <DesktopNavigation />

        {features.donations && (
          <Button
            href="/donate"
            variant="secondary" 
            size="medium"
            >
              Donate
          </Button>
        )}
        <MobileNavigationController />
      </Container>
    </header>
  );
}