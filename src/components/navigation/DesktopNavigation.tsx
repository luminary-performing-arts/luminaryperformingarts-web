import { navigation } from "@/config";

import NavigationList from "./NavigationList";

/**
 * Primary desktop site navigation.
 */
export default function DesktopNavigation() {
  return (
    <nav 
      aria-label="Primary navigation" 
      className="
        hidden 
        lg:block
      "
    >
      <NavigationList
        items={navigation.primary}
        className="
          flex
          items-center
          xl:gap-7
        "
        itemClassName="
          text-sm
          font-medium
          uppercase
          hover:text-[var(--color-accent)]
        "
      />
    </nav>
  );
}
