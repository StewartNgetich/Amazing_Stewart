"use client"

import { useEffect } from "react"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-white`}>
                <div className="flex h-screen w-full flex-col items-center justify-center p-4 text-center">
                    <h2 className="mb-4 text-2xl font-bold">Something went wrong!</h2>
                    <button
                        onClick={() => reset()}
                        className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500"
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    )
}
