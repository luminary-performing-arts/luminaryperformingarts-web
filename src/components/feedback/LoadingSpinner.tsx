import {
    cn,
} from "@/lib/utils";


export type LoadingSpinnerSize =
    | "small"
    | "medium"
    | "large";


interface LoadingSpinnerProps {
    size?: LoadingSpinnerSize;

    className?: string;
}


const sizeClasses = {
    small:
        "h-4 w-4 border-2",

    medium:
        "h-8 w-8 border-2",

    large:
        "h-12 w-12 border-4",
};


/**
 * Generic loading indicator.
 */
export default function LoadingSpinner({
    size = "medium",
    className,
}: LoadingSpinnerProps) {
    return (
        <span
            aria-label="Loading"
            role="status"
            className={cn(
                "inline-block",
                "animate-spin",
                "rounded-full",
                "border-solid",
                "border-[var(--color-secondary)]",
                "border-t-transparent",
                sizeClasses[size],
                className,
            )}
        />
    );
}