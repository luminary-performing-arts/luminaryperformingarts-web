import Image from "next/image";

import Container from "./Container";

import DesktopNav from "../navigation/DesktopNav";

import MobileNav from "../navigation/MobileNav";

import DonateButton from "../navigation/DonateButton";

export default function Header() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        bg-cream-100/80
        backdrop-blur
        border-b
        border-slate-200 
        inset-0 bg-[radial-gradient(circle_at_top_right,#071f52_0%,transparent_30%)]
      "
    >
      <Container
        className="
          flex
          mx-auto
          max-w-7xl
          px-6
          h-24
          items-center
          justify-between
          text-slate-900
        "
      >
        <Image
          src="/images/logo/logo-horizontal.svg"
          alt="Luminary Performing Arts"
          width={220}
          height={80}
          priority
          bg-cream-100
        />

        <DesktopNav />

        <DonateButton />

        <MobileNav />
      </Container>
    </header>
  );
}