import { ZigZagSection } from '../layout'
import type { ProfileDTO } from '../../types/profile'

type AboutSectionProps = {
  profile: ProfileDTO | null
}

export function AboutSection({ profile }: AboutSectionProps) {
  const summary = profile?.summary || `
    A passionate AI Engineer and Software Developer with expertise in building 
    intelligent systems and scalable applications. I combine deep technical knowledge 
    with product thinking to create solutions that make a real impact.
  `

  return (
    <ZigZagSection
      id="about"
      title="About Me"
      subtitle="Personal Information"
      reverse={false}
      bgClass="bg-surface"
      media={
        <div className="aspect-square bg-gradient-to-br from-pastel-blue to-pastel-mint rounded-2xl flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🎯</div>
            <p className="text-text-secondary text-sm">
              Turning ideas into reality
            </p>
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <p className="text-lg leading-relaxed">
          {summary}
        </p>

        {profile?.location && (
          <div className="flex items-center gap-2 text-text-muted">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{profile.location}</span>
          </div>
        )}

        {profile?.email && (
          <div className="flex items-center gap-2 text-text-muted">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors">
              {profile.email}
            </a>
          </div>
        )}
      </div>
    </ZigZagSection>
  )
}
