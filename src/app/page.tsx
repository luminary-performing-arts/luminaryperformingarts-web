/**
 * Root homepage.
 *
 * Homepage feature composition will be introduced during
 * Phases 4 and 5.
 */

{
  /*
import {
  organization,
} from "@/src/config";

import {
  Container,
  Section,
} from "@/src/components/layout";

import {
  Heading,
  Text,
} from "@/src/components/ui";

import {
  Hero,
} from "@/src/features/hero";
*/
}

{
  /*
export default function HomePage() {
  return (
    <Section
      spacing="large"
      className="
        flex
        min-h-screen
        items-center
      "
    >
      <Container>
        <div
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          <Text
            size="base"
            tone="accent"
            className="
              mb-4
              font-semibold
              uppercase
              tracking-[0.25em]
            "
          >
              Launching Soon
            </Text>

            <Heading
              as="h1"
              size="xl"
            >
              <a>
                <img src={organization.logoPath} alt={organization.name} className="mx-auto mb-4 w-124" />
              </a>

              <Text
                as="span"
                size="xl"
                tone="muted"
                className="
                  block
                  font-normal
                  tracking-tight
                "
              >
                {organization.slogan}
              </Text>
            </Heading>

          </div>
      </Container>
    </Section>
  );
}
*/
}

/* ===================================================== */

import { Hero } from "@/src/features/hero";
import { MissionSection } from "@/src/features/mission";

/**
 * Luminary Performing Arts homepage.
 *
 * This route acts as the composition layer for homepage
 * features. Individual section implementations should live
 * within their respective feature modules.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionSection />
    </>
  );
}
