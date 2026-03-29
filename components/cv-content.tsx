"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa"
import Link from "next/link"

export function CVContent() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-purple-200 dark:border-gray-800"
      >
        {/* Header */}
        <div className="p-8 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-3xl font-bold text-purple-800 dark:text-white">Danielle Mcloughlin</h2>
              <p className="text-lg text-purple-600 dark:text-purple-300 mt-1">Junior Software Engineer</p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <FaEnvelope className="text-purple-600 dark:text-purple-400" />
                <span>danielle.m62@outlook.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <FaMapMarkerAlt className="text-purple-600 dark:text-purple-400" />
                <span>West Yorkshire, UK</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <FaGithub className="text-purple-600 dark:text-purple-400" />
                <Link
                  href="https://github.com/daniellem62"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 dark:hover:text-purple-400"
                >
                  github.com/daniellem62
                </Link>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <FaLinkedin className="text-purple-600 dark:text-purple-400" />
                <Link
                  href="https://www.linkedin.com/in/danielle-mcloughlin-688796338/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 dark:hover:text-purple-400"
                >
                  linkedin.com/in/danielle-mcloughlin
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Summary */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">Professional Summary</h3>
            <p className="text-gray-700 dark:text-gray-300">
              A passionate junior software engineer with a sharp analytical mindset and a natural ability to learn new
              technologies rapidly, adapting seamlessly to project needs. Driven by ambition, I thrive on solving
              complex problems, continuously expanding my skill set, and making meaningful contributions from the start.
            </p>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Full-stack Software Engineer Bootcamp
                </h4>
                <p className="text-purple-600 dark:text-purple-300">School of Code</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">16-week intensive program</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>One of 40 people chosen from over 2000 applicants</li>
                  <li>
                    Developed full-stack JavaScript applications using technologies such as Node.js, Express, React, and
                    PostgreSQL
                  </li>
                  <li>Engaged in pair programming and agile methodologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">Work Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Data Inputting</h4>
                <p className="text-purple-600 dark:text-purple-300">Nationwide Data Collection</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Previous role</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Recognized for exceptional speed and accuracy, chosen for high-priority projects involving strict
                  deadlines and meticulous data handling.
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Demonstrated strong attention to detail and problem-solving skills</li>
                  <li>Consistently delivered high-quality results under pressure</li>
                  <li>Strengthened communication and teamwork skills through collaboration</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Languages</h4>
                <p className="text-gray-700 dark:text-gray-300">JavaScript (ES6+), TypeScript, HTML, CSS, SQL</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Front-end</h4>
                <p className="text-gray-700 dark:text-gray-300">React, Next.js, Storybook, Clerk, Tailwind CSS</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Back-end</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Node.js, Express.js, PostgreSQL, Supabase, RESTful APIs
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Testing and QA</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Playwright, React Testing Library, Vitest, Jest, CodeQL, Husky, Postman
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">DevOps</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Docker, GitHub Actions, Vercel, Render, Terraform(IaC), Snyk, Dependabot
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Tools</h4>
                <p className="text-gray-700 dark:text-gray-300">Git, CI/CD, Figma / FigJam, Miro, Jira, Trello</p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-4">Key Projects</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Shelf Life</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">TypeScript, React, Next.js, Supabase, OpenAI</p>
                <p className="mt-1 text-gray-700 dark:text-gray-300">
                  A web application designed to help users track the expiration dates of their groceries, reduce food
                  waste, and optimize meal planning with AI-powered recipe suggestions.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">SnapStem</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">TypeScript, React, Next.js, Pinecone, OpenAI</p>
                <p className="mt-1 text-gray-700 dark:text-gray-300">
                  A plant identification and care information app using Pinecone DB for efficient vector storage and
                  search, alongside OpenAI for identifying plants from user-uploaded photos.
                </p>
              </div>
            </div>
          </section>

          {/* Download Button */}
          <div className="flex justify-center mt-10">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2">
              <FaDownload />
              Download CV (PDF)
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
