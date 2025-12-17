import type { PropsWithChildren } from 'react'

type MainLayoutProps = PropsWithChildren<{
  className?: string
}>

export function MainLayout({ children, className = '' }: MainLayoutProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-pastel-purple via-surface to-surface ${className}`}>
      {/* Top navigation bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-surface/80 border-b border-border-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium tracking-wide text-text-secondary uppercase">
                CV • Profile
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="px-4 py-2 text-sm font-medium text-surface bg-accent rounded-full hover:bg-accent-soft transition-colors"
                aria-label="Export CV to PDF"
              >
                Export PDF
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="relative">
        {children}
      </main>

      {/* Floating widgets will be rendered by CvProfilePage */}
    </div>
  )
}
