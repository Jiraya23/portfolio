import { useEffect, useState } from 'react'

const SECTION_IDS = ['about', 'skills', 'experience', 'projects', 'services', 'blog', 'contact'] as const

type SectionId = (typeof SECTION_IDS)[number]

const isSectionId = (value: string): value is SectionId =>
  SECTION_IDS.includes(value as SectionId)

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId | ''>('')

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (section): section is HTMLElement => Boolean(section)
    )

    if (!sections.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          const sectionId = visible[0].target.id

          if (isSectionId(sectionId)) {
            setActiveSection(sectionId)
          }
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.4, 0.6],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return activeSection
}
