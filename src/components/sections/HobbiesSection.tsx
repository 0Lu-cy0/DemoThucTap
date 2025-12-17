import { ZigZagSection, Card, ScrollReveal } from '../layout'
import type { HobbyDTO } from '../../types/hobby'

type HobbiesSectionProps = {
  hobbies: HobbyDTO[]
}

export function HobbiesSection({ hobbies }: HobbiesSectionProps) {
  if (hobbies.length === 0) return null

  // Featured hobby with zig-zag
  const featured = hobbies[0]
  const others = hobbies.slice(1)

  return (
    <>
      {/* Featured hobby with zig-zag */}
      <ZigZagSection
        id="hobbies"
        title={featured.name}
        subtitle="Personal Interests"
        reverse={false}
        bgClass="bg-gradient-to-br from-pastel-peach/30 to-surface"
        media={
          <div className="aspect-square bg-gradient-to-br from-pastel-pink to-pastel-cream rounded-2xl overflow-hidden">
            {featured.image ? (
              <img
                src={featured.image}
                alt={featured.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">{featured.icon || '🎨'}</div>
                </div>
              </div>
            )}
          </div>
        }
      >
        <div className="space-y-4">
          <p className="text-lg text-text-secondary">
            {featured.description || 'One of my favorite ways to unwind and stay creative.'}
          </p>
        </div>
      </ZigZagSection>

      {/* Other hobbies as cards */}
      {others.length > 0 && (
        <section className="py-12 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((hobby, index) => (
                <ScrollReveal key={hobby.id} delay={index * 0.1}>
                  <Card className="h-full text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-pastel-purple to-pastel-pink flex items-center justify-center group-hover:scale-110 transition-transform">
                      {hobby.image ? (
                        <img
                          src={hobby.image}
                          alt=""
                          className="w-10 h-10 object-contain"
                        />
                      ) : (
                        <span className="text-3xl">{hobby.icon || '✨'}</span>
                      )}
                    </div>
                    <h3 className="font-semibold text-text-primary mb-2">{hobby.name}</h3>
                    {hobby.description && (
                      <p className="text-sm text-text-secondary line-clamp-2">{hobby.description}</p>
                    )}
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
