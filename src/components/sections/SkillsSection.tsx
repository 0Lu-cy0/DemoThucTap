import { SectionHeader, Card, ScrollReveal } from '../layout'
import type { SkillCategory } from '../../types/skills'

type SkillsSectionProps = {
  skills: SkillCategory[]
}

const levelColors = {
  beginner: 'bg-pastel-cream text-yellow-700',
  intermediate: 'bg-pastel-blue text-blue-700',
  advanced: 'bg-pastel-mint text-green-700',
  expert: 'bg-pastel-purple text-purple-700',
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  if (skills.length === 0) return null

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-surface to-pastel-blue/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Technical Expertise"
          title="Skills & Knowledge"
          description="A comprehensive toolkit built through years of hands-on experience in AI research and software development."
        />

        {/* Skills grid - NO zig-zag, list format */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, catIndex) => (
            <ScrollReveal key={category.id} delay={catIndex * 0.1}>
              <Card className="h-full" padding="lg">
                <h3 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.id}
                      className="flex items-center justify-between gap-2"
                    >
                      <span className="text-text-secondary">{skill.name}</span>
                      {skill.level && (
                        <span
                          className={`px-2 py-0.5 text-xs font-medium rounded-full ${levelColors[skill.level]
                            }`}
                        >
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
