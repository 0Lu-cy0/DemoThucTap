import { ScrollReveal } from './ScrollReveal'

type SectionHeaderProps = {
  /** Kicker text (small text above title) */
  kicker?: string
  /** Main title */
  title: string
  /** Optional description */
  description?: string
  /** Center align (default) or left align */
  align?: 'center' | 'left'
}

export function SectionHeader({
  kicker,
  title,
  description,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <ScrollReveal className={`max-w-2xl mb-12 ${alignClass}`}>
      {kicker && (
        <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-2">
          {kicker}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-primary mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </ScrollReveal>
  )
}
