import type { Service } from "@/types"

export const services: Service[] = [
  {
    id: "web-apps",
    icon: "monitor-smartphone",
    title: "Custom Web Applications",
    description:
      "Design and development of fast, maintainable applications tailored to real business needs.",
  },
  {
    id: "frontend",
    icon: "layout-template",
    title: "Premium Frontend",
    description:
      "Modern, fast, and accessible interfaces with a strong focus on conversion and user experience.",
  },
  {
    id: "backend",
    icon: "server-cog",
    title: "Backend Architecture",
    description:
      "Robust APIs, data modeling, authentication, and server-side logic to support product growth.",
  },
  {
    id: "ui-ux",
    icon: "sparkles",
    title: "UI Integration & Design System",
    description:
      "Pixel-perfect integration and reusable component creation to keep interfaces consistent at scale.",
  },
  {
    id: "performance",
    icon: "zap",
    title: "Performance & Optimization",
    description:
      "Improvement of loading speed, Lighthouse scores, and perceived quality across desktop and mobile.",
  },
  {
    id: "deployment",
    icon: "rocket",
    title: "Deployment & Industrialization",
    description:
      "Reliable delivery environments with Vercel, CI/CD, and preparation for Docker containerization.",
  },
]
