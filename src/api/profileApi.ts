import { http, downloadBlob } from './http'
import type { ProfileDTO, OrganizationDTO } from '../types/profile'
import type { SkillCategory } from '../types/skills'
import type { ProjectDTO } from '../types/project'
import type { PublicationDTO } from '../types/publication'
import type { EventDTO } from '../types/event'
import type { HobbyDTO } from '../types/hobby'

export const profileApi = {
  getProfile: () => http<ProfileDTO>('/profile'),

  getOrganizations: () => http<OrganizationDTO[]>('/organizations'),

  getSkills: () => http<SkillCategory[]>('/skills'),

  getProjects: () => http<ProjectDTO[]>('/projects'),

  getPublications: () => http<PublicationDTO[]>('/publications'),

  getEvents: () => http<EventDTO[]>('/events'),

  getHobbies: () => http<HobbyDTO[]>('/hobbies'),

  exportPdf: () => downloadBlob('/pdf', 'cv-profile.pdf'),
}
