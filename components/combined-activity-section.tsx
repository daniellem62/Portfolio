"use client"

import React, { useState, useEffect } from "react"
import {
  GitCommit,
  GitPullRequest,
  GitMerge,
  Github,
  Calendar,
  Book,
  Code,
  Leaf,
  MapPin,
  Tent,
  Utensils,
  Beaker,
  Headphones,
  GraduationCap,
  BookOpen,
} from "lucide-react"
import { FaAws } from "react-icons/fa"
import { SiScrimba } from "react-icons/si"
import { motion } from "framer-motion"
import { fetchGitHubActivity } from "@/lib/github"

interface Activity {
  type: string
  repo: string
  message: string
  date: string
}

const interests = [
  { name: "STEM", icon: Beaker, color: "bg-blue-500 dark:bg-blue-700" },
  { name: "Reading", icon: Book, color: "bg-amber-500 dark:bg-amber-700" },
  { name: "Logic puzzles", icon: Code, color: "bg-green-500 dark:bg-green-700" },
  { name: "Gardening", icon: Leaf, color: "bg-emerald-500 dark:bg-emerald-700" },
  { name: "Travelling", icon: MapPin, color: "bg-red-500 dark:bg-red-700" },
  { name: "Camping", icon: Tent, color: "bg-teal-500 dark:bg-teal-700" },
  { name: "Foodie", icon: Utensils, color: "bg-orange-500 dark:bg-orange-700" },
]

const learningItems = [
  {
    category: "Courses",
    icon: GraduationCap,
    items: [
      { name: "Advanced JavaScript", source: "Scrimba", icon: SiScrimba },
      { name: "Introduction to Clean Code", source: "Scrimba", icon: SiScrimba },
      { name: "Cloud Practitioner Essentials", source: "AWS", icon: FaAws },
    ],
  },
  {
    category: "Reading",
    icon: BookOpen,
    items: [{ name: "Small Pieces Loosely Joined: A Unified Theory Of The Web", source: "Book", icon: Book }],
  },
  {
    category: "Listening",
    icon: Headphones,
    items: [{ name: "Women in STEM podcast", source: "Podcast", icon: Headphones }],
  },
]

export function CombinedActivitySection() {
  const [activeInterest, setActiveInterest] = useState<string | null>(null)
  const [activities, setActivities] = useState<Activity[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadGitHubActivity() {
      try {
        const data = await fetchGitHubActivity()
        setActivities(data)
      } catch (err) {
        setError("Failed to load GitHub activity. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    loadGitHubActivity()
  }, [])

  const getIcon = (type: string) => {
    switch (type) {
      case "PushEvent":
        return <GitCommit className="w-4 h-4 text-green-500" />
      case "PullRequestEvent":
        return <GitPullRequest className="w-4 h-4 text-blue-500" />
      case "CreateEvent":
        return <GitMerge className="w-4 h-4 text-purple-500" />
      default:
        return <Github className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <div className="bg-transparent transition-colors duration-300 w-full">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-purple-800 dark:text-white text-center mb-6 sm:mb-12">
        Activities & Interests
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-2">
  

        {/* Interests */}
        <div className="relative p-3 sm:p-6 border border-purple-200 dark:border-purple-900/30 rounded-xl bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-purple-950 gradient-card backdrop-blur-sm shadow-xl transition-colors duration-300 h-full floating-card">
          <div className="relative">
            <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-4 text-purple-700 dark:text-white">Interests</h3>

            <div className="grid grid-cols-4 gap-1 sm:gap-2">
              {interests.map((interest) => (
                <motion.div
                  key={interest.name}
                  className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 
            ${activeInterest === interest.name ? "ring-1 ring-purple-500 scale-105" : ""}
          `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveInterest(activeInterest === interest.name ? null : interest.name)}
                >
                  <div className={`absolute inset-0 opacity-20 ${interest.color}`}></div>
                  <div className="relative p-1.5 sm:p-3 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-80 h-full flex flex-col items-center justify-center text-center space-y-0.5 sm:space-y-1 border border-purple-200 dark:border-gray-700">
                    <interest.icon className="w-3 h-3 sm:w-5 sm:h-5 text-purple-700 dark:text-white" />
                    <span className="font-medium text-purple-800 dark:text-white text-[8px] sm:text-xs">
                      {interest.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Continuous Learning */}
        <div className="relative p-3 sm:p-6 border border-purple-200 dark:border-purple-900/30 rounded-xl bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-purple-950 gradient-card backdrop-blur-sm shadow-xl transition-colors duration-300 h-full floating-card">
          <div className="relative">
            <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-4 text-purple-700 dark:text-white">
              Continuous Learning
            </h3>
             
      <a href="https://www.codewars.com/users/daniellem62" target="_blank" rel="noopener noreferrer">
        <img
          src="https://www.codewars.com/users/daniellem62/badges/large"
          alt="Codewars profile badge for daniellem62"
          className="h-auto max-w-full p-3"
          loading="lazy"
        />
      </a>
     

            <div className="space-y-2 sm:space-y-4">
              {learningItems.map((category) => (
                <div key={category.category} className="space-y-1 sm:space-y-2">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <category.icon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
                    <h4 className="text-xs sm:text-sm font-semibold text-purple-800 dark:text-gray-200">
                      {category.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-2 pl-3 sm:pl-5">
                    {category.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        className="inline-flex items-center gap-1 sm:gap-1.5 py-0.5 sm:py-1 px-1 sm:px-2 rounded-md bg-purple-50 dark:bg-gray-800/50 border border-purple-200 dark:border-gray-700 hover:bg-purple-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <span className="text-purple-600 dark:text-purple-400">
                          {typeof item.icon === "function" ? (
                            React.createElement(item.icon, { className: "w-2 h-2 sm:w-3 sm:h-3" })
                          ) : (
                            <item.icon className="w-2 h-2 sm:w-3 sm:h-3" />
                          )}
                        </span>
                        <p className="text-purple-700 dark:text-gray-300 text-[8px] sm:text-xs">{item.name}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
