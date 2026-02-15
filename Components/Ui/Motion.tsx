"use client"

import { motion } from "framer-motion"
import { ReactNode, useEffect, useState } from "react"

type Props = {
  children: ReactNode
  delay?: number
}

export function FadeUp({ children, delay = 0 }: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div style={{ opacity: 0, transform: "translateY(24px)" }}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
