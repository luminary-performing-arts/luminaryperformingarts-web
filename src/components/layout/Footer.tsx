import {
  FooterBrand,
  FooterContact,
  FooterCopyright,
  FooterSocial,
} from "@/components/footer";

import { FooterNavigation } from "@/components/navigation";

import Container from "./Container";

/**
 * Global application footer.
 */
export default function Footer() {
  return (
    <footer
      className="
        bg-[var(--color-primary-dark)]
        text-white
      "
    >
      <Container
        className="
          mx-auto
          py-14
          sm:py-16
        "
      >
        <div
          className="
            grid
            gap-10
            md:grid-cols-2
            lg:grid-cols-[2fr_1fr_1fr]
            lg:gap-12
          "
        >
          <FooterBrand />
          <FooterNavigation />
          <div className="gap-10">
            <FooterContact />
            <FooterSocial />
          </div>
        </div>

        <div className="mt-12">
          <FooterCopyright />
        </div>
      </Container>
    </footer>
  );
}
