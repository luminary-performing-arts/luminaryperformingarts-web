import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;

  decorative?: boolean;
}

/**
 * Standard horizontal content divider.
 */
export default function Divider({
  className,
  decorative = true,
}: DividerProps) {
  return (
    <hr
      aria-hidden={decorative ? true : undefined}
      className={cn(
        "border-0",
        "border-t",
        "border-[var(--color-border)]",
        className,
      )}
    />
  );
}
