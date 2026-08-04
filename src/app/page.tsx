import { organization } from "@/src/config";

/**
 * Root homepage.
 *
 * Homepage feature composition will be introduced during
 * Phases 4 and 5.
 */

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section
        className="
          flex
          min-h-screen
          items-center
          justify-center
          px-6
          py-24
        "
      >
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="
              mb-4
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[var(--color-secondary-dark)]
            "
          >
            Launching Soon
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
            <a>
              <img src={organization.logoPath} alt={organization.name} className="mx-auto mb-4 w-124" />
            </a>
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-[var(--color-text-muted)]
            "
          >
            {organization.slogan}
          </p>

        </div>
      </section>
    </main>
  );
}