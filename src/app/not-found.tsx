import { organization } from "@/src/config";
import { Container, Section } from "@/src/components/layout";
import { Button, SectionHeading, Text } from "@/src/components/ui";
import { Divide } from "lucide-react";

/**
 * Global application 404 page.
 */
export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Section spacing="large">
        <Container>
          <div
            className="
              mx-auto
              max-w-xl
              text-center
            "
          >
            <SectionHeading
              eyebrow="Error 404"
              title="Page Not Found"
            />

            <Divide className="mx-auto my-2 h-0 w-12" />
            <Text size="xl" tone="muted" className="mt-6 leading-8">
              The current page does not exist or may have moved.
            </Text>

            <Divide className="mx-auto my-2 h-0 w-12" />
            <Text
              size="base"
              tone="accent"
              className="mt-6"
            >
              Please use the navigation menu or return to the {organization.name} homepage.
            </Text>

            <Divide className="mx-auto my-8 h-0 w-12 border-t border-t-muted" />
            <div className="mt-10 flex justify-center">
              <Button href="/" variant="secondary" size="medium">
                Return Home
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
