"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function GlowCard({ children, className = "", glowColor = "#9e48ec" }: GlowCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden backdrop-blur-md bg-[#0a101f]/30 border border-white/5 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.2 }}
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

      {/* Glow effect on hover */}
      {isHovered && (
        <div
          className="absolute pointer-events-none opacity-20 blur-[80px] transition-opacity"
          style={{
            background: glowColor,
            borderRadius: "50%",
            height: "150px",
            width: "150px",
            left: position.x - 75,
            top: position.y - 75,
          }}
        />
      )}

      {/* Border glow */}
      <div className="absolute inset-0 rounded-inherit border border-white/10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}