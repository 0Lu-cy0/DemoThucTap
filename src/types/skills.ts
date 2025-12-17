export type SkillCategory = {
  id: string
  name: string
  skills: Skill[]
}

export type Skill = {
  id: string
  name: string
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  icon?: string
}
