import type {
  HeadingElement,
} from "./Heading";

import {
  cn,
} from "@/src/lib/utils";

import DecorativeAccent from "./DecorativeAccent";
import Heading from "./Heading";
import Text from "./Text";


export type SectionHeadingAlignment =
  | "left"
  | "center";


interface SectionHeadingProps {
  eyebrow?: string;

  title: string;

  description?: string;

  headingAs?: HeadingElement;

  alignment?: SectionHeadingAlignment;

  showAccent?: boolean;

  className?: string;
}


/**
 * Reusable heading composition for major page sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  headingAs = "h2",
  alignment = "center",
  showAccent = true,
  className,
}: SectionHeadingProps) {
  const isCentered =
    alignment === "center";

  return (
    <div
      className={cn(
        "flex",
        "flex-col",
        isCentered
          ? "items-center text-center"
          : "items-start text-left",
        className
      )}
    >
      {showAccent && (
        <DecorativeAccent
          size="medium"
          className="mb-5"
        />
      )}

      {eyebrow && (
        <Text
          size="sm"
          tone="accent"
          className="
            mb-3
            font-semibold
            uppercase
            tracking-[0.2em]
          "
        >
          {eyebrow}
        </Text>
      )}

      <Heading
        as={headingAs}
        size="lg"
        className="max-w-4xl"
      >
        {title}
      </Heading>

      {description && (
        <Text
          size="lg"
          tone="muted"
          className={cn(
            "mt-5",
            "max-w-2xl"
          )}
        >
          {description}
        </Text>
      )}
    </div>
  );
}