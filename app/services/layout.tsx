import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | End-to-end creative services",
  description:
    "Graphic design, video editing, UI design, and writing—crafted to help brands communicate, connect, and convert.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
