import Container from "@/src/components/layout/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroArtwork from "./HeroArtwork";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        min-h-[820px]
        bg-[var(--color-background)]
      "
    >
      <HeroBackground />

      <Container>
        <div
          className="
            grid
            lg:grid-cols-2
            items-center
            gap-16
            pt-28
          "
        >
          <HeroContent />

          <HeroArtwork />
        </div>
      </Container>
    </section>
  );
}