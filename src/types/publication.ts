export type PublicationDTO = {
  id: string
  title: string
  journal?: string
  conference?: string
  year: number
  authors: string[]
  doi?: string
  link?: string
  abstract?: string
}
