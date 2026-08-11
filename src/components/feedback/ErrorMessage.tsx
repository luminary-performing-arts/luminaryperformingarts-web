import {
    Button,
    SectionHeading,
} from "@/src/components/ui";


interface ErrorMessageProps {
    title?: string;

    message?: string;

    retry?: () => void;
}


/**
 * Standard application error presentation.
 */
export default function ErrorMessage({
    title = "Something went wrong",
    message =
        "We were unable to complete your request.",
    retry,
}: ErrorMessageProps) {

    return (
        <div
            className="
                flex
                flex-col
                items-center
                text-center
            "
        >
            <SectionHeading
                eyebrow="Error"
                title={title}
                description={message}
            />

            {retry && (
                <Button
                    onClick={retry}
                    variant="primary"
                    className="mt-8"
                >
                    Try Again
                </Button>
            )}
        </div>
    );
}