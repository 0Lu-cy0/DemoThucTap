import { useEffect, useState } from 'react'
import { profileApi } from '../api'
import {
  mockProfile,
  mockOrganizations,
  mockSkills,
  mockProjects,
  mockPublications,
  mockEvents,
  mockHobbies,
} from '../mocks'
import type { ProfileDTO, OrganizationDTO } from '../types/profile'
import type { SkillCategory } from '../types/skills'
import type { ProjectDTO } from '../types/project'
import type { PublicationDTO } from '../types/publication'
import type { EventDTO } from '../types/event'
import type { HobbyDTO } from '../types/hobby'

type LoadStatus = 'idle' | 'loading' | 'success' | 'error'

type ProfileData = {
  profile: ProfileDTO | null
  organizations: OrganizationDTO[]
  skills: SkillCategory[]
  projects: ProjectDTO[]
  publications: PublicationDTO[]
  events: EventDTO[]
  hobbies: HobbyDTO[]
}

type UseProfileResult = {
  status: LoadStatus
  data: ProfileData
  error: string | null
  refetch: () => void
}

const initialData: ProfileData = {
  profile: null,
  organizations: [],
  skills: [],
  projects: [],
  publications: [],
  events: [],
  hobbies: [],
}

export function useProfile(): UseProfileResult {
  const [status, setStatus] = useState<LoadStatus>('idle')
  const [data, setData] = useState<ProfileData>(initialData)
  const [error, setError] = useState<string | null>(null)

  const load = async () => {
    try {
      setStatus('loading')
      setError(null)

      // Fetch all data in parallel, fallback to mock data if API fails
      const [
        profile,
        organizations,
        skills,
        projects,
        publications,
        events,
        hobbies,
      ] = await Promise.all([
        profileApi.getProfile().catch(() => mockProfile),
        profileApi.getOrganizations().catch(() => mockOrganizations),
        profileApi.getSkills().catch(() => mockSkills),
        profileApi.getProjects().catch(() => mockProjects),
        profileApi.getPublications().catch(() => mockPublications),
        profileApi.getEvents().catch(() => mockEvents),
        profileApi.getHobbies().catch(() => mockHobbies),
      ])

      setData({
        profile,
        organizations,
        skills,
        projects,
        publications,
        events,
        hobbies,
      })
      setStatus('success')
    } catch (err) {
      // Even if all fails, use mock data
      setData({
        profile: mockProfile,
        organizations: mockOrganizations,
        skills: mockSkills,
        projects: mockProjects,
        publications: mockPublications,
        events: mockEvents,
        hobbies: mockHobbies,
      })
      setError(err instanceof Error ? err.message : 'Failed to load profile')
      setStatus('success') // Still show content with mock data
    }
  }

  useEffect(() => {
    load()
  }, [])

  return { status, data, error, refetch: load }
}
