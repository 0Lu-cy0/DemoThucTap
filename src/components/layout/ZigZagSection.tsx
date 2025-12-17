import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type ZigZagSectionProps = {
  /** Reverse layout: text right, media left */
  reverse?: boolean
  /** Section title */
  title: string
  /** Optional subtitle */
  subtitle?: string
  /** Media element (image, video thumbnail, illustration) */
  media?: ReactNode
  /** Text content */
  children: ReactNode
  /** Optional section ID for navigation */
  id?: string
  /** Optional background class */
  bgClass?: string
}

export function ZigZagSection({
  reverse = false,
  title,
  subtitle,
  media,
  children,
  id,
  bgClass = '',
}: ZigZagSectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 ${bgClass}`}
      aria-label={title}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''
            }`}
          style={{ direction: reverse ? 'rtl' : 'ltr' }}
        >
          {/* Text content */}
          <motion.div
            className="space-y-4"
            style={{ direction: 'ltr' }}
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {subtitle && (
              <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider">
                {subtitle}
              </span>
            )}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-primary">
              {title}
            </h2>
            <div className="text-text-secondary leading-relaxed">
              {children}
            </div>
          </motion.div>

          {/* Media content */}
          {media && (
            <motion.div
              className="relative"
              style={{ direction: 'ltr' }}
              initial={{ opacity: 0, x: reverse ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {media}
              </div>
              {/* Decorative gradient blob */}
              <div
                className={`absolute -z-10 w-72 h-72 rounded-full blur-3xl opacity-30 ${reverse
                    ? 'bg-pastel-pink -left-10 -bottom-10'
                    : 'bg-pastel-blue -right-10 -top-10'
                  }`}
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
