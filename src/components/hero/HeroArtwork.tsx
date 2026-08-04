import Image from "next/image";

export default function HeroArtwork() {
  return (
    <div className="relative h-[720px]">
      <Image
        src="/images/hero/hero-glow.png"
        alt=""
        fill
        className="
          object-contain
          opacity-70
        "
      />

      <Image
        src="/images/logo/star.svg"
        alt=""
        width={120}
        height={120}
        className="
          absolute
          right-12
          top-8
        "
      />

      <Image
        src="/images/hero/children-silhouette.svg"
        alt="Students"
        width={700}
        height={700}
        className="
          absolute
          bottom-0
          right-10
        "
      />

      <Image
        src="/images/hero/curtain-right.png"
        alt=""
        width={380}
        height={700}
        className="
          absolute
          right-0
          top-0
        "
      />
    </div>
  );
}