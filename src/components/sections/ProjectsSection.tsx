import { ZigZagSection, Card, ScrollReveal, SectionHeader } from '../layout'
import type { ProjectDTO } from '../../types/project'

type ProjectsSectionProps = {
  projects: ProjectDTO[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (projects.length === 0) return null

  // Featured project (first) with zig-zag
  const featured = projects[0]
  const others = projects.slice(1)

  return (
    <>
      {/* Featured project with zig-zag */}
      <ZigZagSection
        id="projects"
        title={featured.title}
        subtitle="Featured Projects"
        reverse={false}
        bgClass="bg-surface"
        media={
          <div className="aspect-video bg-gradient-to-br from-pastel-purple to-pastel-pink rounded-2xl overflow-hidden">
            {featured.thumbnail ? (
              <img
                src={featured.thumbnail}
                alt={featured.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-text-secondary text-sm font-medium">Project Preview</p>
                </div>
              </div>
            )}
          </div>
        }
      >
        <div className="space-y-4">
          <p className="text-text-secondary">{featured.description}</p>

          {featured.tags && featured.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-pastel-blue text-blue-700 text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-3 pt-2">
            {featured.link && (
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-soft transition-colors"
              >
                View Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {featured.github && (
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </ZigZagSection>

      {/* Other projects as grid */}
      {others.length > 0 && (
        <section className="py-12 bg-pastel-cream/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="More Projects"
              description="Other notable works demonstrating technical expertise and problem-solving abilities."
              align="left"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {others.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.1}>
                  <Card className="h-full group">
                    {project.thumbnail && (
                      <div className="aspect-video -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-2xl">
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <h3 className="font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    {project.tags && (
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-surface-alt text-text-muted text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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
