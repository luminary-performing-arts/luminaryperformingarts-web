import Link from "next/link";

import { navigation, organization } from "@/config";

/**
 * Footer copyright and legal navigation.
 */
export default function FooterCopyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="
        flex
        flex-col
        gap-4
        border-t
        border-white/15
        pt-6
        text-sm
        text-white/65
        md:flex-row
        md:items-center
        md:justify-between
      "
    >
      <p>
        © {currentYear} {organization.legalName} All Rights Reserved.
      </p>

      {navigation.legal.length > 0 && (
        <nav aria-label="Legal navigation">
          <ul
            className="
              flex
              flex-wrap
              gap-x-5
              gap-y-2
            "
          >
            {navigation.legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="
                      transition-colors
                      hover:text-white
                    "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
