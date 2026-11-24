"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { X, Maximize2 } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { getStatusColor } from "@/lib/utils"

export type Project = {
  title: string
  status: string
  date: string
  image: string
  description: string
  techStack: string[]
  link: string
  category: string
}

const CATEGORIES = ["All", "Full-stack", "Front-end", "Back-end", "Dev-Ops"]

const techBadgeClass =
  "bg-purple-100 text-purple-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-purple-200 dark:hover:bg-gray-700 text-xs"

const githubOutlineClass =
  "w-full border-purple-300 text-purple-700 dark:border-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-800 hover:text-purple-900 dark:hover:text-white"

// ─── Card ────────────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-purple-200 dark:border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-md cursor-pointer hover:shadow-lg"
      onClick={onClick}
    >
      <div className="absolute top-2 right-2 bg-purple-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
        <Maximize2 size={14} />
      </div>

      <div className="relative overflow-hidden h-32 sm:h-56">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-3 sm:p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm sm:text-lg font-semibold text-purple-800 dark:text-white">
            {project.title}
          </h3>
          <div className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium ${getStatusColor(project.status)}`}>
            {project.status}
          </div>
        </div>

        <div className="text-[10px] sm:text-xs text-purple-600/70 dark:text-gray-400 mb-2">
          {project.date}
        </div>

        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-3 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.techStack.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className={techBadgeClass}>
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 3 && (
            <Badge variant="secondary" className={techBadgeClass}>
              +{project.techStack.length - 3}
            </Badge>
          )}
        </div>

        <Button
          asChild
          variant="outline"
          size="sm"
          className={githubOutlineClass}
          onClick={(e) => e.stopPropagation()}
        >
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-3 w-3 sm:h-4 sm:w-4" />
          </Link>
        </Button>

        <div className="text-center mt-2 text-[10px] sm:text-xs text-purple-600/70 dark:text-purple-400/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Click to expand
        </div>
      </div>
    </div>
  )
}

// ─── Modal ───────────────────────────────────────────────────────────────────

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] max-h-[90vh] overflow-y-auto z-50 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-purple-200 dark:border-gray-800 animate-in fade-in zoom-in duration-300">
        <div className="p-6">
          <button
            className="absolute top-2 right-2 z-50 bg-purple-600 text-white rounded-full p-1"
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
          >
            <X size={16} />
          </button>

          <div className="relative overflow-hidden h-60 sm:h-96 mb-4">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-contain sm:object-cover"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-purple-800 dark:text-white">
              {project.title}
            </h3>
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
              {project.status}
            </div>
          </div>

          <div className="text-sm text-purple-600/70 dark:text-gray-400 mb-4">
            {project.date}
          </div>

          <p className="text-base text-gray-700 dark:text-gray-300 mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className={techBadgeClass}>
                {tech}
              </Badge>
            ))}
          </div>

          <Button asChild variant="outline" className={githubOutlineClass}>
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-4 w-4 mr-2" />
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}

// ─── Filters ─────────────────────────────────────────────────────────────────

interface ProjectFiltersProps {
  filter: string
  onFilterChange: (filter: string) => void
}

export function ProjectFilters({ filter, onFilterChange }: ProjectFiltersProps) {
  return (
    <div className="flex justify-center flex-wrap gap-2 mb-8">
      {CATEGORIES.map((category) => (
        <Button
          key={category}
          onClick={() => onFilterChange(category)}
          variant={filter === category ? "default" : "secondary"}
          className={
            filter === category
              ? "bg-purple-600 text-white hover:bg-purple-700"
              : "bg-purple-100 text-purple-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-purple-700 hover:text-white"
          }
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
