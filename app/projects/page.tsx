import { MainNav } from "@/components/main-nav"
import { ProjectsFullPage } from "@/components/projects-full-page"
import { FaRegCopyright } from "react-icons/fa6"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-purple-50/30 dark:bg-transparent text-gray-900 dark:text-white transition-colors duration-300 relative">


      <MainNav />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <h1 className="text-4xl font-bold text-purple-800 dark:text-white mb-8">All Projects</h1>
        <ProjectsFullPage />
      </main>
      <footer className="py-6 text-center text-purple-600/70 dark:text-gray-400 text-sm flex items-center justify-center gap-2 relative z-10">
        <FaRegCopyright /> <span>2025 Danielle Mcloughlin. All rights reserved.</span>
      </footer>
    </div>
  )
}
