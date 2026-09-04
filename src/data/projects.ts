import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "eduplatform",
    title: "EduPlatform",
    description:
      "A complete educational platform including a PHP API, an admin back office, and a web client interface.",
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
      "A clean, modern application built with React and consuming the JSONPlaceholder API for data management.",
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
      "A task management app integrating my first API calls with ReactJS to interact with remote data.",
    image: "/file.svg",
    tags: ["React", "JavaScript", "Fetch API"],
    category: "frontend",
    githubUrl: "https://github.com/Jiraya23/Todo_list_Api",
    featured: true,
  },
  {
    id: "portfolio",
    title: "My Portfolio",
    description:
      "The site you are currently browsing! Built with Next.js, Tailwind CSS, and Shadcn/UI components for a premium look and feel.",
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
      "A minimalist task management app to help organize daily life efficiently.",
    image: "/next.svg",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "frontend",
    githubUrl: "https://github.com/Jiraya23/todo_list",
    featured: false,
  }
]

export const featuredProjects = projects.filter((project) => project.featured)
