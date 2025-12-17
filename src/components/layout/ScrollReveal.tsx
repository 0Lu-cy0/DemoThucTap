import type { ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  /** Animation variant: fade, slideUp, slideLeft, slideRight, scale */
  variant?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale'
  /** Delay in seconds */
  delay?: number
  /** Duration in seconds */
  duration?: number
}

const variants: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
}

export function ScrollReveal({
  children,
  className = '',
  variant = 'slideUp',
  delay = 0,
  duration = 0.5,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
