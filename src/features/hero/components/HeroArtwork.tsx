import Image from "next/image";

import { heroConfig } from "../config/hero";

/**
 * Decorative Hero artwork.
 *
 * CSS fallback layers always provide a baseline visual design.
 * Optional image assets progressively enhance the composition.
 */
export default function HeroArtwork() {
  const { artwork, visual } = heroConfig;

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
      "
    >
      {/* CSS extended glow fallback */}
      <div
        className="
          hero-fallback-glow-long
          absolute
          right-[5%]
          top-[5%]
          h-[85%]
          w-[75%]
        "
      />

      {/* Optional extended glow artwork */}
      {visual.useGlowImages && artwork.glowLong && (
        <Image
          src={artwork.glowLong}
          alt=""
          fill
          priority
          sizes="100vw"
          className="
              object-cover
              object-center
              opacity-80
            "
        />
      )}

      {/* CSS primary glow fallback */}
      <div
        className="
          hero-fallback-glow
          right-[5%]
          top-[20%]
          h-[60%]
          w-[60%]
        "
      />

      {/* Optional primary glow artwork */}
      {visual.useGlowImages && artwork.glow && (
        <div
          className="
              absolute
              inset-y-0
              right-0
              w-full
              lg:w-[65%]
            "
        >
          <Image
            src={artwork.glow}
            alt=""
            fill
            priority
            sizes="
                (max-width: 1024px) 100vw,
                65vw
              "
            className="
                object-contain
                object-right
              "
          />
        </div>
      )}

      {/* CSS sparkle fallback */}
      <div
        className="
          hero-fallback-sparkles
          absolute
          inset-0
        "
      />

      {/* Optional sparkle artwork */}
      {visual.useSparklesImage && artwork.sparkles && (
        <Image
          src={artwork.sparkles}
          alt=""
          fill
          priority
          sizes="100vw"
          className="
              object-cover
              opacity-70
            "
        />
      )}

      {/* Optional children silhouette */}
      {visual.useSilhouetteImage && artwork.silhouette && (
        <div
          className="
              absolute
              bottom-0
              right-[-8%]
              h-[48%]
              w-[90%]
              sm:h-[58%]
              sm:w-[75%]
              md:right-[-4%]
              md:h-[65%]
              md:w-[65%]
              lg:right-[4%]
              lg:h-[72%]
              lg:w-[52%]
              xl:right-[7%]
              xl:w-[48%]
            "
        >
          <Image
            src={artwork.silhouette}
            alt=""
            fill
            priority
            sizes="
                (max-width: 640px) 90vw,
                (max-width: 768px) 75vw,
                (max-width: 1024px) 65vw,
                52vw
              "
            className="
                object-contain
                object-bottom
              "
          />
        </div>
      )}

      {/* CSS curtain fallback */}
      <div
        className="
          hero-fallback-curtain
          absolute
          bottom-0
          right-0
          top-0
          hidden
          w-[30%]
          md:block
          transition
          opacity-55
        "
      />

      {/* Optional curtain artwork */}
      {visual.useCurtainImage && artwork.curtain && (
        <div
          className="
              absolute
              bottom-0
              right-0
              top-0
              hidden
              w-[30%]
              md:block
              lg:w-[27%]
              xl:w-[25%]
            "
        >
          <Image
            src={artwork.curtain}
            alt=""
            fill
            priority
            sizes="
                (max-width: 1024px) 30vw,
                25vw
              "
            className="
                object-cover
                object-left
              "
          />
        </div>
      )}
    </div>
  );
}
