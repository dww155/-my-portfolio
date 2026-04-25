import type { ProjectItem, ProfileInfo, SkillCategory } from '../types/portfolio'

export const profile: ProfileInfo = {
  name: 'Trần Đình Khánh Dư',
  role: 'Backend Developer (Spring Boot)',
  email: 'trandinhkhanhdu2005@gmail.com',
  location: 'Quảng Ngãi, Vietnam',
  university: 'Saigon University (SGU)',
  about:
    'I focus on backend development with Spring Boot, building clean APIs, secure business logic, and reliable services that scale well for real-world products.',
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    items: ['C', 'C++', 'Java', 'C#', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Technologies',
    items: ['Spring Boot', '.NET'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
]

export const projects: ProjectItem[] = [
  {
    name: 'Smart School Bus Tracking',
    description:
      'A real-time tracking system for school buses designed to improve safety and visibility for schools and parents.',
    githubUrl: 'https://github.com/trandinhkhanhdu/smart-school-bus-tracking',
  },
  {
    name: 'Happy Petshop',
    description:
      'A pet e-commerce website featuring product browsing, shopping cart, and order management workflows.',
    githubUrl: 'https://github.com/trandinhkhanhdu/happy-petshop',
  },
  {
    name: 'Student Admission System',
    description:
      'A web-based system for managing student admission workflows, records, and processing status.',
    githubUrl: 'https://github.com/trandinhkhanhdu/student-admission-system',
  },
]
