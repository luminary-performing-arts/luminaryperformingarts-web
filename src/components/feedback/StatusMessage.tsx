import {
    cn,
} from "@/lib/utils";


export type StatusMessageType =
    | "success"
    | "warning"
    | "info"
    | "error";


interface StatusMessageProps {
    type?: StatusMessageType;

    children: React.ReactNode;

    className?: string;
}


const styles = {
    success:
        "border-green-600/30 bg-green-50 text-green-800",

    warning:
        "border-yellow-600/30 bg-yellow-50 text-yellow-800",

    info:
        "border-blue-600/30 bg-blue-50 text-blue-800",

    error:
        "border-red-600/30 bg-red-50 text-red-800",
};


/**
 * Inline status notification.
 */
export default function StatusMessage({
    type = "info",
    children,
    className,
}: StatusMessageProps) {

    return (
        <div
            role="status"
            className={cn(
                "rounded-lg",
                "border",
                "px-4",
                "py-3",
                "text-sm",
                styles[type],
                className,
            )}
        >
            {children}
        </div>
    );
}