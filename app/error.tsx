"use client"

import { useEffect } from "react"
import Container from "@/Components/Ui/Container"
import Button from "@/Components/Ui/Button"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="flex min-h-[50vh] items-center py-20 bg-zinc-950 text-white">
            <Container>
                <div className="mx-auto max-w-md text-center">
                    <h2 className="mb-4 text-2xl font-bold">Something went wrong!</h2>
                    <p className="mb-8 text-gray-400">
                        We apologize for the inconvenience. An unexpected error occurred.
                    </p>
                    <Button
                        onClick={
                            // Attempt to recover by trying to re-render the segment
                            () => reset()
                        }
                    >
                        Try again
                    </Button>
                </div>
            </Container>
        </div>
    )
}
