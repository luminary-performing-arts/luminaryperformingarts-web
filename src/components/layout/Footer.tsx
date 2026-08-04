import Container from "./Container";

export default function Footer() {
  return (
    <footer
      className="
        border-t
        bg-[var(--color-primary)]
        text-white
        py-12
      "
    >
      <Container>
        <div
          className="
            flex
            flex-col
            gap-6
            lg:flex-row
            lg:justify-between
          "
        >
          <div>
            <h3 className="text-xl font-semibold">
              Luminary Performing Arts
            </h3>

            <p className="mt-2 opacity-80">
              Where every child's light is seen.
            </p>
          </div>

          <div className="text-sm opacity-70">
            © {new Date().getFullYear()} Luminary Performing Arts.
            All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}