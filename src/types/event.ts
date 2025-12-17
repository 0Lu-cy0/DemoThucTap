export type EventDTO = {
  id: string
  title: string
  type: 'conference' | 'workshop' | 'seminar' | 'hackathon' | 'other'
  date: string
  location?: string
  role?: string
  description?: string
  image?: string
}
