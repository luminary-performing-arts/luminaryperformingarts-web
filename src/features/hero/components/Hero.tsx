import Image from "next/image";

import { Container, Section } from "@/components/layout";
import { heroConfig } from "../config/hero";

import HeroArtwork from "./HeroArtwork";
import HeroContent from "./HeroContent";

/**
 * Primary homepage Hero feature.
 *
 * CSS provides the baseline visual presentation.
 * Image assets progressively enhance that presentation.
 */
export default function Hero() {
  const showBackgroundImage =
    heroConfig.visual.useBackgroundImage &&
    Boolean(heroConfig.artwork.background);

  return (
    <section
      aria-labelledby="hero-title"
      className="
        hero-background
        relative
        isolate
        border
        border-[var(--color-border)]
        min-h-[calc(100svh-var(--header-height))]
        overflow-hidden
      "
    >
      {showBackgroundImage && (
        <Image
          src={heroConfig.artwork.background!}
          alt=""
          fill
          priority
          sizes="100vw"
          className="
            z-20
            object-cover
            object-center
          "
        />
      )}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          -z-10
          bg-white/10
        "
      />

      <HeroArtwork />

      <Container
        className="
          relative
          z-20
          min-h-[calc(100svh-var(--header-height))]
          items-start
          pb-[24rem]
          pt-16
          sm:pb-[30rem]
          sm:pt-20
          md:pb-[34rem]
          lg:items-center
          lg:pb-24
          lg:pt-24
        "
      >
        <HeroContent />
      </Container>
    </section>
  );
}
