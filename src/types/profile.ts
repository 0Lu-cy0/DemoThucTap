export type ProfileDTO = {
  id: string
  name: string
  headline?: string
  avatar?: string
  summary?: string
  email?: string
  phone?: string
  location?: string
  socialLinks?: {
    linkedin?: string
    github?: string
    website?: string
  }
}

export type OrganizationDTO = {
  id: string
  name: string
  role: string
  logo?: string
  startDate: string
  endDate?: string
  description?: string
}
