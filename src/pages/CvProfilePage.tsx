import { useProfile } from '../hooks/useProfile'
import { profileApi } from '../api'
import { MainLayout } from '../components/layout'
import {
  HeroSection,
  AboutSection,
  OrganizationSection,
  SkillsSection,
  ProjectsSection,
  PublicationsSection,
  EventsSection,
  HobbiesSection,
  FooterSection,
} from '../components/sections'
import { ChatWidget, VideoWidget } from '../components/widgets'

export function CvProfilePage() {
  const { status, data } = useProfile()

  const handleExportPdf = async () => {
    try {
      await profileApi.exportPdf()
    } catch (err) {
      console.error('Failed to export PDF:', err)
      alert('Failed to export PDF. Please try again.')
    }
  }

  return (
    <MainLayout>
      {/* Loading overlay */}
      {status === 'loading' && (
        <div className="fixed inset-0 z-50 bg-surface/80 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-text-secondary">Loading profile...</p>
          </div>
        </div>
      )}

      {/* Error state */}
      {status === 'error' && (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-semibold text-text-primary mb-2">Unable to load profile</h2>
            <p className="text-text-secondary mb-4">Please check your connection and try again.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-accent text-surface rounded-full hover:bg-accent-soft transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* Main content - always render sections with placeholder data if API fails */}
      <div className={status === 'loading' ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        {/* Hero Section - Zig-zag: Yes */}
        <HeroSection profile={data.profile} />

        {/* About Section - Zig-zag: Yes */}
        <AboutSection profile={data.profile} />

        {/* Organization Section - Zig-zag: Yes */}
        <OrganizationSection organizations={data.organizations} />

        {/* Skills Section - Zig-zag: No (list format) */}
        <SkillsSection skills={data.skills} />

        {/* Projects Section - Zig-zag: Yes */}
        <ProjectsSection projects={data.projects} />

        {/* Publications Section - Zig-zag: No (list format) */}
        <PublicationsSection publications={data.publications} />

        {/* Events Section - Zig-zag: Yes */}
        <EventsSection events={data.events} />

        {/* Hobbies Section - Zig-zag: Yes */}
        <HobbiesSection hobbies={data.hobbies} />

        {/* Footer Section */}
        <FooterSection profile={data.profile} />

        {/* Export PDF button (fixed) */}
        <button
          onClick={handleExportPdf}
          className="fixed bottom-6 left-6 z-40 px-4 py-2 bg-surface border border-border rounded-full shadow-lg text-sm font-medium text-text-primary hover:bg-surface-alt transition-colors flex items-center gap-2"
          aria-label="Export CV to PDF"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Export PDF
        </button>
      </div>

      {/* Floating widgets - excluded from PDF */}
      <ChatWidget />
      <VideoWidget />
    </MainLayout>
  )
}
