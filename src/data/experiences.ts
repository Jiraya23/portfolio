import type { Experience } from "@/types"

export const experiences: Experience[] = [
  {
    id: "nylstech-digital",
    company: "NYLSTECH Digital",
    role: "Stagiaire Développeur Fullstack",
    period: "Mai 2024",
    description: [
      "Conception d'interfaces performantes et optimisées avec Next.js pour une application web de E-Learning.",
      "Analyse et conception des User-Stories avec UML.",
      "Réalisation de la logique métier et API avec Laravel.",
      "Mise en production avec Docker.",
    ],
    technologies: ["Next.js", "Laravel", "Docker", "UML"],
    type: "work",
  },
  {
    id: "akwa-palace",
    company: "AKWA PALACE",
    role: "Assistant Développement Logiciel",
    period: "Mai 2024 - Juil 2024",
    description: [
      "Assuré la maintenance proactive des infrastructures informatiques en place.",
      "Assistance des clients lors des problèmes rencontrés au niveau de la connexion internet.",
    ],
    technologies: ["Maintenance", "Support réseau"],
    type: "work",
  },
  {
    id: "ict-business-center",
    company: "ICT Business Center",
    role: "Développeur Web",
    period: "Sep 2021 - Nov 2021",
    description: [
      "Conçu et déployé des solutions logicielles adaptées aux besoins clients.",
      "Participé à la création d'une application bureautique pour la gestion des notes en utilisant JavaSwing.",
      "Assuré la maintenance et la mise à jour régulières des applications.",
    ],
    technologies: ["JavaSwing", "MySQL", "PHP"],
    type: "work",
  },
  {
    id: "iut-douala",
    company: "INSTITUT UNIVERSITAIRE DE TECHNOLOGIE DE DOUALA",
    role: "Licence Technologique en Génie Logiciel",
    period: "Sep 2022 - Juin 2023",
    description: [
      "Mention Bien.",
      "Développement d'applications mobiles et projets de programmation.",
    ],
    technologies: ["Java", "Android", "Web"],
    type: "education",
  },
  {
    id: "iut-cote",
    company: "INSTITUT UNIVERSITAIRE DE LA CÔTE",
    role: "BTS en Génie Logiciel",
    period: "Sep 2020 - Juil 2022",
    description: [
      "Mention Assez Bien.",
      "Projets de développement web et de programmation orientée objet.",
    ],
    technologies: ["Java", "OOP", "Web"],
    type: "education",
  },
]
