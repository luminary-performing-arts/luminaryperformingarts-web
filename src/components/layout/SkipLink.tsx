"use client";

import Link from "next/link";

/**
 * Skip navigation link.
 *
 * Allows keyboard and screen reader users
 * to bypass the global navigation and jump
 * directly to the primary page content.
 */
export default function SkipLink() {
    return (
        <Link
            href="#main-content"
            className="
                sr-only
                focus:not-sr-only
                focus:absolute
                focus:left-4
                focus:top-4
                focus:z-[1000]
                rounded-md
                bg-[var(--color-primary)]
                px-4
                py-2
                text-sm
                font-semibold
                text-white
                shadow-lg
                transition
            "
        >
            Skip to main content
        </Link>
    );
}