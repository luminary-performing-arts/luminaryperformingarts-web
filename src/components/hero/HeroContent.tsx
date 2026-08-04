import HeroCTA from "./HeroCTA";

export default function HeroContent() {
  return (
    <div className="space-y-8">
      <span
        className="
          uppercase
          tracking-[0.3em]
          text-sm
          text-[var(--color-secondary)]
        "
      >
        Welcome
      </span>

      <h1
        className="
          text-6xl
          lg:text-8xl
          leading-none
          font-bold
          text-[var(--color-primary)]
        "
      >
        Luminary
        <br />
        Performing
        <br />
        Arts
      </h1>

      <p
        className="
          text-xl
          text-[var(--color-text)]
          max-w-xl
          leading-relaxed
        "
      >
        Where every child's light is seen through
        faith, creativity, confidence,
        and community.
      </p>

      <HeroCTA />
    </div>
  );
}