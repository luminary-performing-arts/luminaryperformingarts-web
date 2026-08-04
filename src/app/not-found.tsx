import Link from "next/link";

import { organization } from "@/src/config";


/**
 * Global application 404 page.
 */
export default function NotFound() {
  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        px-6
        py-24
      "
    >
      <div
        className="
          mx-auto
          max-w-xl
          text-center
        "
      >
        <p
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.25em]
            text-[var(--color-secondary-dark)]
          "
        >
          Error 404
        </p>

        <h1
          className="
            mt-4
            text-4xl
            font-semibold
            tracking-tight
            text-[var(--color-primary)]
            sm:text-5xl
          "
        >
          Page Not Found
        </h1>

        <p
          className="
            mt-6
            text-lg
            leading-8
            text-[var(--color-text-muted)]
          "
        >
          The page you are looking for may have moved,
          been removed, or never existed.
        </p>

        <p
          className="
            mt-3
            text-sm
            text-[var(--color-text-muted)]
          "
        >
          Return to {organization.name} to continue browsing.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-[var(--color-primary)]
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition
              duration-200
              hover:bg-[var(--color-primary-light)]
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[var(--color-secondary)]
            "
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}