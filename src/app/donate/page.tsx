import {
  Container,
  Section,
} from "@/components/layout";

import {
  Button,
  Divider,
  SectionHeading,
  Text,
} from "@/components/ui";

/**
 * Temporary donation landing page.
 *
 * This page will eventually be replaced by the complete
 * donation feature and payment-provider integration.
 */
export default function DonatePage() {
  return (
    <Section
      spacing="large"
      className="
        flex
        min-h-[65vh]
        items-center
        bg-[var(--color-background)]
      "
    >
      <Container>
        <div
          className="
            mx-auto
            max-w-2xl
            text-center
          "
        >
          <SectionHeading
            eyebrow="Support Luminary"
            title="Help young performers shine."
            description=""
          />

          <Divider className="mx-auto my-4 h-0 w-12" />
          <Text
            size="lg"
            tone="muted"
            className="
              mx-auto
              mt-8
            "
          >
            ***Our online donation experience is currently being prepared***
          </Text>

          <div
            className="
              mt-8
              flex
              justify-center
            "
          >
            <Button
              href="/"
              variant="secondary"
            >
              Return Home
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}