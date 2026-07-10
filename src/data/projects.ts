import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "eduplatform",
    title: "EduPlatform",
    description:
      "Plateforme éducative complète comprenant une API PHP, un back-office administrateur et une interface cliente web.",
    image: "/globe.svg",
    tags: ["PHP", "JavaScript", "API", "Fullstack"],
    category: "fullstack",
    githubUrl: "https://github.com/Jiraya23/api-eduplatform-app",
    featured: true,
  },
  {
    id: "hiapp",
    title: "HiApp React",
    description:
      "Application au design épuré construite avec React et consommant l'API JSONPlaceholder pour la gestion des données.",
    image: "/window.svg",
    tags: ["React", "JavaScript", "API"],
    category: "frontend",
    githubUrl: "https://github.com/Jiraya23/hiapp",
    featured: true,
  },
  {
    id: "todo-list-api",
    title: "Todo List API",
    description:
      "Application de gestion de tâches intégrant mes premiers appels API avec ReactJS pour interagir avec des données distantes.",
    image: "/file.svg",
    tags: ["React", "JavaScript", "Fetch API"],
    category: "frontend",
    githubUrl: "https://github.com/Jiraya23/Todo_list_Api",
    featured: true,
  },
  {
    id: "portfolio",
    title: "Mon Portfolio",
    description:
      "Le site sur lequel vous naviguez ! Développé avec Next.js, Tailwind CSS et des composants Shadcn/UI pour un rendu premium.",
    image: "/vercel.svg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "frontend",
    githubUrl: "https://github.com/Jiraya23/portfolio",
    liveUrl: "https://myli237.vercel.app",
    featured: true,
  },
  {
    id: "todo-list",
    title: "Simple Todo List",
    description:
      "Une application minimaliste de gestion de tâches (Todo List) pour organiser efficacement son quotidien.",
    image: "/next.svg",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "frontend",
    githubUrl: "https://github.com/Jiraya23/todo_list",
    featured: false,
  }
]

export const featuredProjects = projects.filter((project) => project.featured)
