"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { FaGithub } from "react-icons/fa";
import { X, Maximize2 } from "lucide-react";
import React from "react";

export function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Lock body scroll when a card is expanded and prevent layout shift
  React.useEffect(() => {
    if (expandedCard) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [expandedCard]);

  // Only show the first 4 projects on the home page
  const filteredProjects =
    filter === "All"
      ? projects.slice(0, 4)
      : projects.filter((project) => project.category === filter).slice(0, 4);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/10 text-green-600 dark:text-green-500";
      case "Maintained":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-500";
      case "Beta Release":
        return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-500";
      case "In Progress":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-500";
      default:
        return "bg-gray-500/10 text-gray-600 dark:text-gray-500";
    }
  };

  const toggleCardExpansion = (title: string) => {
    if (expandedCard === title) {
      setExpandedCard(null);
    } else {
      setExpandedCard(title);
    }
  };

  return (
    <div className="bg-transparent transition-colors duration-300 w-full h-full overflow-y-auto">
      <h2 className="text-2xl sm:text-4xl font-bold text-purple-800 dark:text-white mb-4 sm:mb-8">
        Featured Projects
      </h2>

      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {["All", "Full-stack", "Front-end", "Back-end", "Dev-Ops"].map(
          (category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "secondary"}
              className={`${
                filter === category
                  ? "bg-purple-600 text-white"
                  : "bg-purple-100 text-purple-700 dark:bg-gray-800 dark:text-gray-300"
              } hover:bg-purple-700 hover:text-white transition-colors`}
            >
              {category}
            </Button>
          ),
        )}
      </div>

      {/* Update the grid to show two cards per row on mobile */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-4 mb-4 sm:mb-8">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="bg-white dark:bg-slate-950 rounded-lg shadow-lg overflow-hidden transition-all duration-300 group cursor-pointer hover:shadow-xl"
            onClick={() => toggleCardExpansion(project.title)}
          >
            <div className="absolute top-2 right-2 bg-purple-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 expand-hint">
              <Maximize2 size={14} />
            </div>

            <div className="relative w-full h-32 sm:h-64 transition-all duration-300">
              {/* Fixed Image section */}
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title || "Project image"}
                fill
                className={`object-cover transition-transform duration-300 ${expandedCard === project.title ? "sm:object-cover" : ""}`}
              />
            </div>

            <div className="p-2 sm:p-4">
              <div className="flex items-center justify-between mb-1 sm:mb-2">
                <h3 className="text-sm sm:text-lg font-semibold text-purple-800 dark:text-white">
                  {project.title}
                </h3>
                <div
                  className={`px-1 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium ${getStatusColor(project.status)}`}
                >
                  {project.status}
                </div>
              </div>

              <div className="text-[10px] sm:text-xs text-purple-600/70 dark:text-gray-400 mb-1 sm:mb-2">
                {project.date}
              </div>

              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-2 sm:mb-4">
                {project.techStack.slice(0, 3).map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-purple-100 text-purple-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-purple-200 dark:hover:bg-gray-700 text-[8px] sm:text-xs px-1 py-0"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.techStack.length > 3 && (
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-purple-200 dark:hover:bg-gray-700 text-[8px] sm:text-xs px-1 py-0"
                  >
                    +{project.techStack.length - 3}
                  </Badge>
                )}
              </div>

              <div className="flex space-x-2 sm:space-x-4">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-purple-300 text-purple-700 dark:border-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-800 hover:text-purple-900 dark:hover:text-white h-6 sm:h-9 text-xs sm:text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
              </div>

              <div className="text-center mt-2 text-[10px] sm:text-xs text-purple-600/70 dark:text-purple-400/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Click to expand
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded Card Modal - Rendered outside grid */}
      {expandedCard && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 animate-in fade-in duration-300"
            onClick={() => setExpandedCard(null)}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] max-h-[90vh] overflow-y-auto z-50 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-purple-200 dark:border-gray-800 animate-in fade-in zoom-in duration-300">
            {filteredProjects.map((project) =>
              expandedCard === project.title ? (
                <div key={project.title} className="p-6">
                  <button
                    className="absolute top-2 right-2 z-50 bg-purple-600 text-white rounded-full p-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCard(null);
                    }}
                  >
                    <X size={16} />
                  </button>

                  <div className="relative overflow-hidden h-60 sm:h-96 mb-4">
                    <Image
                      src={
                        project.image || "/placeholder.svg?height=400&width=600"
                      }
                      alt={project.title}
                      fill
                      className="object-contain sm:object-cover"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-purple-800 dark:text-white">
                      {project.title}
                    </h3>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
                    >
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
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-purple-100 text-purple-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-purple-200 dark:hover:bg-gray-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-purple-300 text-purple-700 dark:border-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-800 hover:text-purple-900 dark:hover:text-white"
                  >
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="h-4 w-4 mr-2" />
                      View on GitHub
                    </Link>
                  </Button>
                </div>
              ) : null,
            )}
          </div>
        </>
      )}

      {/* See All Projects Button */}
      <div className="flex justify-center mt-8">
        <Button
          asChild
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 text-base"
        >
          <Link href="/projects">See All Projects</Link>
        </Button>
      </div>
    </div>
  );
}
