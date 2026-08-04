import Image from "next/image";

export default function HeroBackground() {
  return (
    <>
      <Image
        src="/images/backgrounds/cream-gradient.jpg"
        alt=""
        fill
        priority
        className="object-cover -z-30"
      />

      <Image
        src="/images/effects/sparkles-overlay.png"
        alt=""
        fill
        className="object-cover opacity-40 -z-20"
      />

      <Image
        src="/images/hero/hero-glow-long.png"
        alt=""
        fill
        className="
          object-cover
          opacity-60
          -z-10
        "
      />
    </>
  );
}