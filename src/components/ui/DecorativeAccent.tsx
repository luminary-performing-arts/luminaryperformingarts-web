import {
  cn,
} from "@/lib/utils";


export type DecorativeAccentSize =
  | "small"
  | "medium"
  | "large";


interface DecorativeAccentProps {
  size?: DecorativeAccentSize;

  className?: string;
}


const sizeClasses: Record<
  DecorativeAccentSize,
  string
> = {
  small:
    "gap-2",

  medium:
    "gap-3",

  large:
    "gap-4",
};


const lineClasses: Record<
  DecorativeAccentSize,
  string
> = {
  small:
    "w-6",

  medium:
    "w-10",

  large:
    "w-14",
};


/**
 * Reusable branded decorative divider.
 *
 * Uses theme colors rather than an image asset so the
 * component remains lightweight and resilient.
 */
export default function DecorativeAccent({
  size = "medium",
  className,
}: DecorativeAccentProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex",
        "items-center",
        sizeClasses[size],
        className
      )}
    >
      <span
        className={cn(
          "h-px",
          "bg-[var(--color-secondary)]",
          lineClasses[size]
        )}
      />

      <span
        className="
          text-lg
          leading-none
          text-[var(--color-secondary)]
        "
      >
        ✦
      </span>

      <span
        className={cn(
          "h-px",
          "bg-[var(--color-secondary)]",
          lineClasses[size]
        )}
      />
    </div>
  );
}