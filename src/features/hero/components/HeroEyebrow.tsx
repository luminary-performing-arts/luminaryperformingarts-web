import Image from "next/image";

import { heroConfig } from "../config/hero";

/**
 * Decorative Hero eyebrow.
 */
export default function HeroEyebrow() {
  if (!heroConfig.eyebrow) {
    return null;
  }

  const showStarImage =
    heroConfig.visual.useStarImage && Boolean(heroConfig.artwork.star);

  return (
    <div
      className="
        flex
        justify-center
        gap-3
      "
    >
      {showStarImage ? (
        <Image
          src={heroConfig.artwork.star!}
          alt=""
          aria-hidden="true"
          width={18}
          height={18}
          className="
            h-[18px]
            w-[18px]
          "
        />
      ) : (
        <span
          aria-hidden="true"
          className="
            text-xl
            font-semibold
            tracking-[0.15em]
            text-[var(--color-secondary)]
          "
        >
          ✦
        </span>
      )}

      <p
        className="
          text-lg
          font-semibold
          uppercase
          tracking-[0.15em]
          text-[var(--color-secondary-dark)]
        "
      >
        {heroConfig.eyebrow}
      </p>
    </div>
  );
}
