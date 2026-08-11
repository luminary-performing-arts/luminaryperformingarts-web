import {
    Container,
    Section,
} from "@/src/components/layout";

import {
    LoadingSpinner,
    Skeleton,
} from "@/src/components/feedback";


/**
 * Global application loading state.
 *
 * Displayed while the App Router is loading
 * the next route.
 */
export default function Loading() {
    return (
        <Section spacing="large">
            <Container>

                <div
                    className="
                        mx-auto
                        flex
                        max-w-3xl
                        flex-col
                        items-center
                        gap-8
                    "
                >
                    <LoadingSpinner
                        size="large"
                    />

                    <Skeleton
                        variant="heading"
                        className="max-w-md"
                    />

                    <Skeleton />

                    <Skeleton />

                    <Skeleton />

                    <div
                        className="
                            grid
                            w-full
                            gap-6
                            md:grid-cols-3
                        "
                    >
                        <Skeleton variant="card" />

                        <Skeleton variant="card" />

                        <Skeleton variant="card" />
                    </div>

                </div>

            </Container>
        </Section>
    );
}