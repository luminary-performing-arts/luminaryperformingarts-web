import {
  Container,
  Section,
} from "@/src/components/layout";

import {
  SectionHeading,
  Text,
} from "@/src/components/ui";

import {
  missionConfig,
} from "../config/mission";
import { Divide, Quote } from "lucide-react";


/**
 * Homepage organization Mission section.
 */
export default function MissionSection() {
  return (
    <Section
      spacing="medium"
      className="
        bg-[var(--color-background)]
      "
    >
      <Container>
        <div
          className="
            mx-auto
            max-w-3xl
          "
        >
          <SectionHeading
            eyebrow={missionConfig.eyebrow}
            title={missionConfig.title}
          />

          <Divide className="mx-auto my-4 h-0 w-12" />
          <Text
            size="base"
            tone="muted"
            className="
              tracking-wide
              mx-auto
              mt-8
              text-center
            "
          >
            {missionConfig.description}
          </Text>
          
        </div>
      </Container>
    </Section>
  );
}