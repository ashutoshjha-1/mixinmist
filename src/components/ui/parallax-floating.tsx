
"use client"

import { ReactNode, useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface FloatingProps {
  children: ReactNode
  sensitivity?: number
  className?: string
}

interface FloatingElementProps {
  children: ReactNode
  depth?: number
  className?: string
}

export function FloatingElement({ children, depth = 1, className = "" }: FloatingElementProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        x: position.x * (depth * 10),
        y: position.y * (depth * 10),
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 100,
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Floating({ children, sensitivity = 1, className = "" }: FloatingProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 30, stiffness: 100 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const { clientX, clientY } = e
      const xPos = (clientX - innerWidth / 2) / (innerWidth / 2)
      const yPos = (clientY - innerHeight / 2) / (innerHeight / 2)
      mouseX.set(xPos * sensitivity)
      mouseY.set(yPos * sensitivity)
    }

    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [mouseX, mouseY, sensitivity])

  return (
    <div className={`relative w-full ${className}`}>
      {children}
    </div>
  )
}
