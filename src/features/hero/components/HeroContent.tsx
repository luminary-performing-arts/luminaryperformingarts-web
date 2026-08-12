import { Heading, Text } from "@/components/ui";

import { heroConfig } from "../config/hero";

import HeroActions from "./HeroActions";
import HeroEyebrow from "./HeroEyebrow";
import { Logo } from "@/components/brand";

/**
 * Primary textual content for the homepage Hero.
 */
export default function HeroContent() {
  return (
    <div
      className="
        flex
        px-64
        py-0
        max-w-screen
        flex-col
        items-center
        gap-2
      "
    >
      <HeroEyebrow />
      <Heading>
        <Logo
          linked={false}
          variant="mark"
          priority
          className="
          mt-4
          max-w-[10ch]
        "
        />
      </Heading>
      <Text
        size="xl"
        className="
          mt-5
          max-w-xl
          font-serif
          italic
          text-[var(--color-secondary-dark)]
        "
      >
        {heroConfig.headline}
      </Text>

      <Text
        size="lg"
        tone="muted"
        className="
          mt-6
          max-w-xl
        "
      >
        {heroConfig.description}
      </Text>

      <div className="mt-8">
        <HeroActions />
      </div>
    </div>
  );
}
