import { useState } from 'react'
import { SectionHeader, Card, ScrollReveal } from '../layout'
import type { PublicationDTO } from '../../types/publication'

type PublicationsSectionProps = {
  publications: PublicationDTO[]
}

export function PublicationsSection({ publications }: PublicationsSectionProps) {
  const [expanded, setExpanded] = useState<string | null>(null)

  if (publications.length === 0) return null

  return (
    <section id="publications" className="py-16 sm:py-20 lg:py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Research & Publications"
          title="Scientific Papers"
          description="Peer-reviewed publications in top-tier journals and conferences in AI and computer science."
        />

        {/* Publications list - NO zig-zag, clean list format */}
        <div className="space-y-4">
          {publications.map((pub, index) => (
            <ScrollReveal key={pub.id} delay={index * 0.05}>
              <Card
                hover={false}
                className="cursor-pointer"
                onClick={() => setExpanded(expanded === pub.id ? null : pub.id)}
              >
                <div className="flex items-start gap-4">
                  {/* Year badge */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-pastel-purple to-pastel-blue flex items-center justify-center">
                    <span className="text-lg font-bold text-text-primary">{pub.year}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-text-primary mb-1 hover:text-accent transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-text-muted mb-2">
                      {pub.authors.join(', ')}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      {pub.journal && (
                        <span className="px-2 py-0.5 bg-pastel-mint text-green-700 rounded">
                          {pub.journal}
                        </span>
                      )}
                      {pub.conference && (
                        <span className="px-2 py-0.5 bg-pastel-blue text-blue-700 rounded">
                          {pub.conference}
                        </span>
                      )}
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          DOI
                        </a>
                      )}
                    </div>

                    {/* Expandable abstract */}
                    {expanded === pub.id && pub.abstract && (
                      <div className="mt-4 pt-4 border-t border-border-light">
                        <p className="text-sm text-text-secondary">{pub.abstract}</p>
                      </div>
                    )}
                  </div>

                  {/* Expand icon */}
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-text-muted transition-transform ${expanded === pub.id ? 'rotate-180' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
