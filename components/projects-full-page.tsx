"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import { X, Maximize2 } from "lucide-react"
import * as React from "react"

// Import the projects data from a shared file
import { projects } from "@/data/projects"

export function ProjectsFullPage() {
  const [filter, setFilter] = useState("All")
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  // Lock body scroll when a card is expanded
  React.useEffect(() => {
    if (expandedCard) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [expandedCard])

  // Additional useEffect to ensure proper positioning of expanded cards
  React.useEffect(() => {
    if (expandedCard) {
      // Force a reflow to ensure the transform is applied correctly
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"))
      }, 50)
    }
  }, [expandedCard])

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/10 text-green-600 dark:text-green-500"
      case "Maintained":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-500"
      case "Beta Release":
        return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-500"
      case "In Progress":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-500"
      default:
        return "bg-gray-500/10 text-gray-600 dark:text-gray-500"
    }
  }

  const toggleCardExpansion = (title: string) => {
    if (expandedCard === title) {
      setExpandedCard(null)
    } else {
      setExpandedCard(title)
    }
  }

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-2 mb-12">
        {["All", "Full-stack", "Front-end", "Back-end", "Dev-Ops"].map((category) => (
          <Button
            key={category}
            onClick={() => setFilter(category)}
            variant={filter === category ? "default" : "secondary"}
            className={`
              ${
                filter === category
                  ? "bg-purple-600 text-white"
                  : "bg-purple-100 text-purple-700 dark:bg-gray-800 dark:text-gray-300"
              }
              hover:bg-purple-700 hover:text-white transition-colors
            `}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 relative">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className={`group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-purple-200 dark:border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-md cursor-pointer
${
  expandedCard === project.title
    ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] max-h-[90vh] overflow-y-auto z-50 m-0"
    : "relative"
}`}
            onClick={() => toggleCardExpansion(project.title)}
          >
            {expandedCard === project.title ? (
              <button
                className="absolute top-2 right-2 z-50 bg-purple-600 text-white rounded-full p-1"
                onClick={(e) => {
                  e.stopPropagation()
                  setExpandedCard(null)
                }}
              >
                <X size={16} />
              </button>
            ) : (
              <div className="absolute top-2 right-2 bg-purple-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 expand-hint">
                <Maximize2 size={14} />
              </div>
            )}

            <div
              className={`relative overflow-hidden transition-all duration-300 ${expandedCard === project.title ? "h-60 sm:h-96" : "h-32 sm:h-[240px]"}`}
            >
              <Image
                src={project.image || "/placeholder.svg?height=400&width=600"}
                alt={project.title}
                fill
                className={`transition-transform duration-300 ${expandedCard === project.title ? "object-contain sm:object-cover" : "object-cover group-hover:scale-105"}`}
              />
            </div>

            <div className="p-2 sm:p-6">
              <div className="flex items-center justify-between mb-1 sm:mb-4">
                <h3 className="text-sm sm:text-xl font-semibold text-purple-800 dark:text-white">{project.title}</h3>
                <div
                  className={`px-1 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium ${getStatusColor(project.status)}`}
                >
                  {project.status}
                </div>
              </div>

              <div className="text-[10px] sm:text-sm text-purple-600/70 dark:text-gray-400 mb-1 sm:mb-4">
                {project.date}
              </div>

              <p
                className={`text-xs sm:text-base text-gray-700 dark:text-gray-300 mb-2 sm:mb-6
                ${expandedCard === project.title ? "max-h-none" : "line-clamp-3 sm:line-clamp-3"}`}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-6">
                {/* Show all tech stack items when expanded, otherwise limit to 3 */}
                {(expandedCard === project.title ? project.techStack : project.techStack.slice(0, 3)).map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-purple-100 text-purple-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-purple-200 dark:hover:bg-gray-700 text-[8px] sm:text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
                {/* Only show the +X badge when not expanded */}
                {!expandedCard && project.techStack.length > 3 && (
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-purple-200 dark:hover:bg-gray-700 text-[8px] sm:text-xs"
                  >
                    +{project.techStack.length - 3}
                  </Badge>
                )}
              </div>

              <div className="flex space-x-2 sm:space-x-4">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-purple-300 text-purple-700 dark:border-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-800 hover:text-purple-900 dark:hover:text-white h-6 sm:h-auto text-xs sm:text-base"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
              </div>

              {/* Click to expand text - only visible on non-expanded cards */}
              {!expandedCard && (
                <div className="text-center mt-2 text-[10px] sm:text-xs text-purple-600/70 dark:text-purple-400/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Click to expand
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Overlay when a card is expanded */}
      {expandedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setExpandedCard(null)} />
      )}
    </div>
  )
}
