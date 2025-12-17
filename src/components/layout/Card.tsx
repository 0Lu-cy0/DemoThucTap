import type { ReactNode, MouseEventHandler } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
  /** Enable hover lift effect */
  hover?: boolean
  /** Padding size */
  padding?: 'sm' | 'md' | 'lg'
  /** Click handler */
  onClick?: MouseEventHandler<HTMLDivElement>
}

const paddingMap = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

export function Card({
  children,
  className = '',
  hover = true,
  padding = 'md',
  onClick,
}: CardProps) {
  return (
    <div
      className={`
        bg-surface rounded-2xl border border-border-light shadow-sm
        ${hover ? 'hover:shadow-md hover:-translate-y-1 transition-all duration-300' : ''}
        ${paddingMap[padding]}
        ${className}
        ${onClick ? 'cursor-pointer' : ''}
      `}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick(e as unknown as React.MouseEvent<HTMLDivElement>) : undefined}
    >
      {children}
    </div>
  )
}
