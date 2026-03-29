"use client"

import { useEffect, useState } from "react"
import { GitCommit, GitPullRequest, GitMerge, Github, Calendar } from "lucide-react"
import { fetchGitHubActivity } from "@/lib/github"
import { motion } from "framer-motion"

interface Activity {
  type: string
  repo: string
  message: string
  date: string
}

export function GitHubActivitySection() {
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
        return <GitCommit className="w-5 h-5 text-green-400" />
      case "PullRequestEvent":
        return <GitPullRequest className="w-5 h-5 text-blue-400" />
      case "CreateEvent":
        return <GitMerge className="w-5 h-5 text-purple-400" />
      default:
        return <Github className="w-5 h-5 text-gray-400" />
    }
  }

  return (
    <section id="github-activity" className="space-y-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white text-center mb-12">
          GitHub Activity
        </h2>

        <div className="relative p-8 border border-gray-200 dark:border-purple-900/30 rounded-xl bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-purple-950 backdrop-blur-sm shadow-xl transition-colors duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/10 to-purple-200/5 dark:from-purple-900/10 dark:to-purple-800/5 rounded-xl" />

          <div className="relative">
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600 dark:border-purple-400"></div>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-500 dark:text-red-400">{error}</p>
              </div>
            ) : activities.length === 0 ? (
              <div className="text-center py-12">
                <Github className="w-16 h-16 text-purple-300/40 dark:text-purple-800/40 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400">No recent GitHub activity found.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-purple-950/20 border border-gray-200 dark:border-purple-900/20 hover:bg-gray-100 dark:hover:bg-purple-950/30 transition-colors"
                  >
                    <div className="p-2 rounded-full bg-gray-100 dark:bg-purple-950/50 border border-gray-200 dark:border-purple-800/30">
                      {getIcon(activity.type)}
                    </div>

                    <div className="flex-1">
                      <p className="text-gray-800 dark:text-purple-100 font-medium mb-1">{activity.message}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center text-gray-500 dark:text-purple-300/70">
                          <Github className="w-4 h-4 mr-1" />
                          <span>{activity.repo}</span>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-purple-300/70">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{activity.date}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
