import { Button } from "@/components/ui";

import { heroConfig } from "../config/hero";

/**
 * Homepage Hero call-to-action collection.
 */
export default function HeroActions() {
  if (heroConfig.actions.length === 0) {
    return null;
  }

  return (
    <div
      className="
        flex
        flex-col
        gap-3
        sm:flex-row
        sm:items-center
      "
    >
      {heroConfig.actions.map((action) => (
        <Button
          key={`${action.label}-${action.href}`}
          href={action.href}
          variant={action.variant}
          size="large"
        >
          {action.label}
        </Button>
      ))}
    </div>
  );
}
