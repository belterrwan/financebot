"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface AnimateInViewProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
  once?: boolean
}

export function AnimateInView({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
}: AnimateInViewProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once })
  const controls = useAnimation()

  const directionVariants = {
    up: { y: 40, opacity: 0 },
    down: { y: -40, opacity: 0 },
    left: { x: 40, opacity: 0 },
    right: { x: -40, opacity: 0 },
  }

  useEffect(() => {
    if (isInView) {
      controls.start({ x: 0, y: 0, opacity: 1 })
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={controls}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}