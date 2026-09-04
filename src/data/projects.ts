import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "eduplatform",
    title: "EduPlatform",
    description:
      "A complete educational platform with a PHP API, an admin dashboard, and a web client for learning management.",
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
      "A modern React application that consumes the JSONPlaceholder API to manage data cleanly and efficiently.",
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
      "A productivity app using API calls in ReactJS to interact with remote data and manage daily tasks.",
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
      "The website you are currently visiting, built with Next.js, Tailwind CSS, and Shadcn/UI for a polished digital presence.",
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
      "A minimalist task manager designed to organize daily actions efficiently and simply.",
    image: "/next.svg",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "frontend",
    githubUrl: "https://github.com/Jiraya23/todo_list",
    featured: false,
  }
]

export const featuredProjects = projects.filter((project) => project.featured)
