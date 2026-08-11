import Image from "next/image";
import Link from "next/link";

import { branding, organization } from "@/src/config";

import { cn } from "@/src/lib/utils";

export type LogoVariant = "horizontal" | "mark";

export type LogoSize = "small" | "medium" | "large";

interface LogoProps {
  variant?: LogoVariant;

  size?: LogoSize;

  linked?: boolean;

  className?: string;

  priority?: boolean;
}

const horizontalSizes: Record<
  LogoSize,
  {
    width: number;
    height: number;
  }
> = {
  small: {
    width: 140,
    height: 40,
  },

  medium: {
    width: 200,
    height: 58,
  },

  large: {
    width: 260,
    height: 75,
  },
};

const markSizes: Record<LogoSize, number> = {
  small: 36,

  medium: 52,

  large: 72,
};

/**
 * Shared Luminary brand logo.
 *
 * Asset paths and accessible naming are sourced from the
 * centralized application configuration.
 */
export default function Logo({
  variant = "horizontal",
  size = "medium",
  linked = true,
  className,
  priority = false,
}: LogoProps) {
  const image =
    variant === "horizontal" ? branding.logos.horizontal : branding.logos.mark;

  const dimensions =
    variant === "horizontal"
      ? horizontalSizes[size]
      : {
          width: markSizes[size],
          height: markSizes[size],
        };

  const logo = (
    <Image
      src={image}
      alt={linked ? branding.logoAlt : ""}
      width={dimensions.width}
      height={dimensions.height}
      priority={priority}
      className={cn("h-auto", "w-auto", className)}
    />
  );

  if (!linked) {
    return logo;
  }

  return (
    <Link
      href="/"
      aria-label={`${organization.name} home`}
      className="
        inline-flex
        items-center
      "
    >
      {logo}
    </Link>
  );
}
