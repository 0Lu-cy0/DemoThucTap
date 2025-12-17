import { ZigZagSection, Card, ScrollReveal, SectionHeader } from '../layout'
import type { EventDTO } from '../../types/event'

type EventsSectionProps = {
  events: EventDTO[]
}

const eventTypeIcons: Record<string, string> = {
  conference: '🎤',
  workshop: '🛠️',
  seminar: '📚',
  hackathon: '💻',
  other: '📅',
}

const eventTypeColors: Record<string, string> = {
  conference: 'bg-pastel-purple text-purple-700',
  workshop: 'bg-pastel-mint text-green-700',
  seminar: 'bg-pastel-blue text-blue-700',
  hackathon: 'bg-pastel-peach text-orange-700',
  other: 'bg-pastel-cream text-yellow-700',
}

export function EventsSection({ events }: EventsSectionProps) {
  if (events.length === 0) return null

  // Featured event with zig-zag
  const featured = events[0]
  const others = events.slice(1)

  return (
    <>
      {/* Featured event with zig-zag */}
      <ZigZagSection
        id="events"
        title={featured.title}
        subtitle="Events & Conferences"
        reverse={true}
        bgClass="bg-gradient-to-br from-pastel-mint/30 to-surface"
        media={
          <div className="aspect-video bg-gradient-to-br from-pastel-purple to-pastel-blue rounded-2xl overflow-hidden">
            {featured.image ? (
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">{eventTypeIcons[featured.type]}</div>
                  <p className="text-text-secondary text-sm font-medium">{featured.type}</p>
                </div>
              </div>
            )}
          </div>
        }
      >
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${eventTypeColors[featured.type]}`}>
              {featured.type}
            </span>
            {featured.role && (
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                {featured.role}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {featured.date}
            </div>
            {featured.location && (
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {featured.location}
              </div>
            )}
          </div>

          {featured.description && (
            <p className="text-text-secondary">{featured.description}</p>
          )}
        </div>
      </ZigZagSection>

      {/* Timeline for other events */}
      {others.length > 0 && (
        <section className="py-12 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="More Events"
              align="left"
            />

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border-light hidden md:block" />

              <div className="space-y-6">
                {others.map((event, index) => (
                  <ScrollReveal key={event.id} delay={index * 0.1}>
                    <div className="relative flex gap-4 md:gap-8">
                      {/* Timeline dot */}
                      <div className="hidden md:flex w-12 h-12 rounded-full bg-surface border-2 border-accent items-center justify-center flex-shrink-0 z-10">
                        <span className="text-xl">{eventTypeIcons[event.type]}</span>
                      </div>

                      <Card className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                          <div className="flex-1">
                            <h3 className="font-semibold text-text-primary">{event.title}</h3>
                            <div className="flex flex-wrap items-center gap-2 mt-1 text-sm">
                              <span className={`px-2 py-0.5 rounded ${eventTypeColors[event.type]}`}>
                                {event.type}
                              </span>
                              {event.role && (
                                <span className="text-accent">{event.role}</span>
                              )}
                            </div>
                            {event.description && (
                              <p className="text-sm text-text-secondary mt-2">{event.description}</p>
                            )}
                          </div>
                          <div className="text-sm text-text-muted whitespace-nowrap">
                            {event.date}
                          </div>
                        </div>
                      </Card>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
