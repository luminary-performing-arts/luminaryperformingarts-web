import {
    SectionHeading,
} from "@/components/ui";


interface EmptyStateProps {
    title: string;

    description: string;
}


/**
 * Empty content placeholder.
 */
export default function EmptyState({
    title,
    description,
}: EmptyStateProps) {

    return (
        <div
            className="
                py-12
                text-center
            "
        >
            <SectionHeading
                title={title}
                description={description}
                showAccent={false}
            />
        </div>
    );
}