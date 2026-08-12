import {
    cn,
} from "@/lib/utils";


export type SkeletonVariant =
    | "text"
    | "heading"
    | "card"
    | "image";


interface SkeletonProps {
    variant?: SkeletonVariant;

    className?: string;
}


/**
 * Content placeholder component.
 */
export default function Skeleton({
    variant = "text",
    className,
}: SkeletonProps) {

    const variants = {
        text:
            "h-4 w-full rounded",

        heading:
            "h-8 w-3/4 rounded",

        card:
            "h-64 w-full rounded-xl",

        image:
            "aspect-video w-full rounded-xl",
    };


    return (
        <div
            aria-hidden="true"
            className={cn(
                "animate-pulse",
                "bg-[var(--color-surface-muted)]",
                variants[variant],
                className,
            )}
        />
    );
}