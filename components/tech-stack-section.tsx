"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"

const techStack = [
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 70 },
  { name: "Express", level: 65 },
  { name: "PostgreSQL", level: 60 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "Git", level: 80 },
  { name: "Tailwind", level: 75 },
]

export function TechStackSection() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <section id="tech-stack" className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-dark">Tech Stack</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="relative h-20 bg-purple-light rounded-lg overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105"
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <div
              className="absolute inset-0 bg-purple transition-all duration-300 ease-out"
              style={{ width: `${tech.level}%`, opacity: hoveredTech === tech.name ? 0.8 : 0.6 }}
            ></div>
            <div className="relative z-10 h-full flex items-center justify-between px-4">
              <span className="font-semibold text-purple-dark">{tech.name}</span>
              {hoveredTech === tech.name && (
                <Badge variant="secondary" className="bg-white text-purple">
                  {tech.level}%
                </Badge>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
