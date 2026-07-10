import type { Skill } from "@/types"

export const skills: Skill[] = [
  { name: "React", icon: "react", level: 60, category: "frontend" },
  { name: "Next.js", icon: "nextjs", level: 60, category: "frontend" },
  { name: "TypeScript", icon: "typescript", level: 50, category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwindcss", level: 60, category: "frontend" },
  { name: "Framer Motion", icon: "framer-motion", level: 60, category: "frontend" },
  { name: "Laravel", icon: "laravel", level: 60, category: "backend" },
  { name: "PHP", icon: "php", level: 60, category: "backend" },
  { name: "Python", icon: "python", level: 30, category: "backend" },
  { name: "PostgreSQL", icon: "postgresql", level: 60, category: "backend" },
  { name: "MySQL", icon: "mysql", level: 80, category: "backend" },
  { name: "Laravel Sanctum", icon: "laravel-sanctum", level: 50, category: "backend" },
  { name: "Git", icon: "git", level: 70, category: "tools" },
  { name: "GitHub", icon: "github", level: 60, category: "tools" },
  { name: "Docker", icon: "docker", level: 40, category: "tools" },
  { name: "Xampp", icon: "xampp", level: 70, category: "tools" },
  { name: "VS Code", icon: "vscode", level: 93, category: "tools" },
]

export const skillsByCategory = {
  frontend: skills.filter((skill) => skill.category === "frontend"),
  backend: skills.filter((skill) => skill.category === "backend"),
  tools: skills.filter((skill) => skill.category === "tools"),
}
