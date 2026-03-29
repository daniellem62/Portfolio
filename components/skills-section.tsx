"use client"

import { FaCode, FaTools, FaServer, FaDesktop, FaVial, FaDocker } from "react-icons/fa"
import "@/styles/flip-card.css"
import { motion } from "framer-motion"
import { ScrollingTechIcons } from "./scrolling-tech-icons"

const skillCategories = [
  {
    name: "Languages",
    icon: FaCode,
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML", "CSS", "SQL"],
  },
  {
    name: "Front-end",
    icon: FaDesktop,
    skills: ["React", "Next.js", "Tailwind CSS", "Storybook", "Clerk"],
  },
  {
    name: "Back-end",
    icon: FaServer,
    skills: ["Node.js", "Express.js", "PostgreSQL", "Supabase", "RESTful APIs", "Socket.IO"],
  },
  {
    name: "Testing and QA",
    icon: FaVial,
    skills: ["Playwright", "React Testing Library", "Vitest", "Jest", "CodeQL", "Husky", "Postman"],
  },
  {
    name: "DevOps",
    icon: FaDocker,
    skills: ["Docker", "GitHub Actions", "Vercel", "Render", "Terraform(IaC)", "Snyk", "Dependabot"],
  },
  {
    name: "Tools",
    icon: FaTools,
    skills: ["Git", "CI/CD", "Figma / FigJam", "Miro", "Jira", "Trello"],
  },
]

export function SkillsSection() {
  return (
    <div className="bg-transparent transition-colors justify-center duration-300 w-full">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-purple-800 dark:text-white text-center mb-4 sm:mb-8">
        Technical Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 w-full sm:w-3/4 mx-auto">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.name}
            className="flip-card h-[250px] sm:h-[350px] w-[calc(50%-0.5rem)] sm:w-[260px] p-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ position: "relative", zIndex: 10 }}
          >
            <div className="flip-card-inner">
              {/* Front of the card */}
              <div className="flip-card-front rounded-xl p-2 sm:p-4 flex flex-cols-3 items-center justify-center text-gray-900 dark:text-white shadow-lg border border-purple-200 dark:border-purple-900/30">
                <div className="relative z-10 flex flex-col items-center justify-center w-full">
                  <category.icon className="text-2xl sm:text-4xl mb-2 sm:mb-3 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-base sm:text-lg font-bold text-purple-800 dark:text-white">{category.name}</h3>
                </div>
              </div>

              {/* Back of the card */}
              <div className="flip-card-back rounded-xl p-2 sm:p-3 shadow-lg overflow-y-auto border border-purple-200 dark:border-purple-900/30">
                <h3 className="text-base sm:text-lg font-bold text-purple-800 dark:text-white mb-1 sm:mb-2 text-center">
                  {category.name}
                </h3>

                <div className="flex flex-col space-y-1 sm:space-y-2 mt-1 sm:mt-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="py-1 sm:py-1.5 px-1.5 sm:px-2 rounded-md text-xs font-medium bg-white/80 text-purple-800 dark:bg-teal-800 dark:text-white border border-purple-200 dark:border-purple-800/30 shadow-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <ScrollingTechIcons />
    </div>
  )
}
