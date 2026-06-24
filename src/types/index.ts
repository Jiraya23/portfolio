export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  category: 'frontend' | 'fullstack' | 'design'
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export interface Skill {
  name: string
  icon: string
  level: number
  category: 'frontend' | 'backend' | 'tools'
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string[]
  technologies: string[]
  type: 'work' | 'education'
}

export interface Service {
  id: string
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  content: string
  rating: number
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  image: string
}

export type Locale = 'fr' | 'en'