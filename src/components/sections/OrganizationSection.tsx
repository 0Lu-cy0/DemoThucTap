import { ZigZagSection } from '../layout'
import { Card, ScrollReveal } from '../layout'
import type { OrganizationDTO } from '../../types/profile'

type OrganizationSectionProps = {
  organizations: OrganizationDTO[]
}

export function OrganizationSection({ organizations }: OrganizationSectionProps) {
  if (organizations.length === 0) return null

  // Split into featured (first) and others for zig-zag effect
  const featured = organizations[0]
  const others = organizations.slice(1)

  return (
    <>
      {/* Featured organization with zig-zag */}
      <ZigZagSection
        id="organization"
        title={featured.name}
        subtitle="Organization & Affiliation"
        reverse={true}
        bgClass="bg-gradient-to-br from-pastel-cream to-surface"
        media={
          <div className="aspect-video bg-gradient-to-br from-pastel-peach to-pastel-pink rounded-2xl flex items-center justify-center overflow-hidden">
            {featured.logo ? (
              <img src={featured.logo} alt={featured.name} className="w-full h-full object-cover" />
            ) : (
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🏢</div>
                <p className="text-text-secondary font-medium">{featured.name}</p>
              </div>
            )}
          </div>
        }
      >
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
              {featured.role}
            </span>
            <span className="text-text-muted text-sm">
              {featured.startDate} – {featured.endDate || 'Present'}
            </span>
          </div>
          {featured.description && (
            <p className="text-text-secondary">{featured.description}</p>
          )}
        </div>
      </ZigZagSection>

      {/* Other organizations as cards */}
      {others.length > 0 && (
        <section className="py-12 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {others.map((org, index) => (
                <ScrollReveal key={org.id} delay={index * 0.1}>
                  <Card className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pastel-blue to-pastel-purple flex items-center justify-center flex-shrink-0">
                        {org.logo ? (
                          <img src={org.logo} alt="" className="w-8 h-8 object-contain" />
                        ) : (
                          <span className="text-2xl">🏛️</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-text-primary">{org.name}</h3>
                        <p className="text-sm text-accent">{org.role}</p>
                        <p className="text-xs text-text-muted mt-1">
                          {org.startDate} – {org.endDate || 'Present'}
                        </p>
                        {org.description && (
                          <p className="text-sm text-text-secondary mt-2 line-clamp-2">
                            {org.description}
                          </p>
                        )}
                      </div>
                    </div>
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
