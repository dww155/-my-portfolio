export interface ProfileInfo {
  name: string
  role: string
  email: string
  location: string
  university: string
  about: string
}

export interface SkillCategory {
  title: string
  items: string[]
}

export interface ProjectItem {
  name: string
  description: string
  githubUrl: string
}
