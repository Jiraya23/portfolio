import type { Skill } from "@/types"

export const skills: Skill[] = [
  { name: "React", icon: "react", level: 95, category: "frontend" },
  { name: "Next.js", icon: "nextjs", level: 94, category: "frontend" },
  { name: "TypeScript", icon: "typescript", level: 92, category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwindcss", level: 96, category: "frontend" },
  { name: "Framer Motion", icon: "framer-motion", level: 86, category: "frontend" },
  { name: "Node.js", icon: "nodejs", level: 89, category: "backend" },
  { name: "Express", icon: "express", level: 85, category: "backend" },
  { name: "PostgreSQL", icon: "postgresql", level: 84, category: "backend" },
  { name: "MongoDB", icon: "mongodb", level: 82, category: "backend" },
  { name: "Prisma", icon: "prisma", level: 83, category: "backend" },
  { name: "Git", icon: "git", level: 91, category: "tools" },
  { name: "GitHub", icon: "github", level: 90, category: "tools" },
  { name: "Docker", icon: "docker", level: 72, category: "tools" },
  { name: "Figma", icon: "figma", level: 80, category: "tools" },
  { name: "VS Code", icon: "vscode", level: 93, category: "tools" },
]

export const skillsByCategory = {
  frontend: skills.filter((skill) => skill.category === "frontend"),
  backend: skills.filter((skill) => skill.category === "backend"),
  tools: skills.filter((skill) => skill.category === "tools"),
}
