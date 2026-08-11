"use client";

import {
    useEffect,
} from "react";

import Link from "next/link";

import {
    ErrorMessage,
} from "@/src/components/feedback";

import {
    Button,
} from "@/src/components/ui";

import {
    Container,
    Section,
} from "@/src/components/layout";


interface ErrorProps {
    error: Error;

    reset: () => void;
}


/**
 * Global application error boundary.
 */
export default function GlobalError({
    error,
    reset,
}: ErrorProps) {

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <Section spacing="large">
            <Container>

                <div
                    className="
                        mx-auto
                        max-w-2xl
                    "
                >
                    <ErrorMessage
                        title="Something unexpected happened"
                        message="An unexpected error occurred while loading this page."
                        retry={reset}
                    />

                    <div
                        className="
                            mt-8
                            flex
                            justify-center
                        "
                    >
                        <Button
                            variant="secondary"
                        >
                            <Link href="/">
                                Return Home
                            </Link>
                        </Button>
                    </div>

                </div>

            </Container>
        </Section>
    );
}