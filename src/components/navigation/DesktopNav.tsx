import { navigationItems } from "@/src/data/navigation";
import NavLink from "./NavLink";

export default function DesktopNav() {
  return (
    <nav className="hidden lg:flex gap-10">
      {navigationItems.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          label={item.title}
        />
      ))}
    </nav>
  );
}