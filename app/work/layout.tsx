import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Work | Stewart futures",
  description:
    "A curated selection of projects across design, video, writing, and UI.",
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
