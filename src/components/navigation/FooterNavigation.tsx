import { navigation } from "@/src/config";

import NavigationList from "./NavigationList";

/**
 * Footer site navigation.
 */
export default function FooterNavigation() {
  return (
    <nav aria-label="Footer navigation">
      <h2
        className="
          mb-4
          text-sm
          font-semibold
          uppercase
          tracking-[0.16em]
          text-[var(--color-secondary-light)]
        "
      >
        Explore
      </h2>

      <NavigationList
        items={navigation.footer}
        className="
          grid
          gap-3
        "
        itemClassName="
          text-sm
          text-white/80
          hover:text-white
        "
      />
    </nav>
  );
}
