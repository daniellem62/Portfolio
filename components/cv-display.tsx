"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FaDownload, FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function CVDisplay() {
  // Function to handle printing the CV
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-purple-200 dark:border-gray-800 print:shadow-none print:border-none"
      >
        {/* Header */}
        <div className="p-8 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 print:bg-white print:dark:bg-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-3xl font-bold text-purple-800 dark:text-white print:text-purple-800">
                Danielle Mcloughlin
              </h2>
              <p className="text-lg text-purple-600 dark:text-purple-300 print:text-purple-600 mt-1">
                Junior Software Engineer
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 print:text-gray-700">
                <FaEnvelope className="text-purple-600 dark:text-purple-400 print:text-purple-600" />
                <span>danielle.m62@outlook.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 print:text-gray-700">
                <FaPhone className="text-purple-600 dark:text-purple-400 print:text-purple-600" />
                <span>07471832376</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 print:text-gray-700">
                <FaMapMarkerAlt className="text-purple-600 dark:text-purple-400 print:text-purple-600" />
                <span>Wakefield, West Yorkshire, England</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 print:text-gray-700">
                <FaGithub className="text-purple-600 dark:text-purple-400 print:text-purple-600" />
                <Link
                  href="https://github.com/daniellem62"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 dark:hover:text-purple-400 print:text-gray-700"
                >
                  daniellem62
                </Link>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 print:text-gray-700">
                <FaGlobe className="text-purple-600 dark:text-purple-400 print:text-purple-600" />
                <Link
                  href="https://www.codewithdani.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 dark:hover:text-purple-400 print:text-gray-700"
                >
                  www.codewithdani.com
                </Link>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 print:text-gray-700">
                <FaLinkedin className="text-purple-600 dark:text-purple-400 print:text-purple-600" />
                <Link
                  href="https://www.linkedin.com/in/danielle-mcloughlin-688796338/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 dark:hover:text-purple-400 print:text-gray-700"
                >
                  Danielle Mcloughlin
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Profile */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 print:text-purple-700 mb-4">
              Profile
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 print:text-gray-700">
              <li>
                I'm a passionate junior software engineer with a strong analytical mindset and problem-solving
                abilities, honed through experience in data inputting and a love for logic puzzles and mathematics.
              </li>
              <li>
                I'm naturally quick to absorb new concepts and technologies and my ability to efficiently master new
                frameworks and languages allows me to adapt to project needs and make meaningful contributions from
                early on.
              </li>
              <li>
                I'm a lifelong lover of tech and eager to leverage my programming, debugging skills, and strong learning
                capabilities in the tech industry.
              </li>
              <li>
                I'm dedicated to staying updated with the latest technologies and continuously enhancing my skill set.
              </li>
            </ul>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 print:text-purple-700 mb-4">
              Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 dark:text-white print:text-gray-800 mb-2">
                  Languages & Frameworks
                </h4>
                <p className="text-gray-700 dark:text-gray-300 print:text-gray-700">
                  JavaScript (ES6+), TypeScript, HTML, CSS, SQL
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 dark:text-white print:text-gray-800 mb-2">
                  Testing & Quality Assurance
                </h4>
                <p className="text-gray-700 dark:text-gray-300 print:text-gray-700">
                  Playwright, React Testing Library, Vitest, Jest, Postman, CodeQL, Husky
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 dark:text-white print:text-gray-800 mb-2">Front-end</h4>
                <p className="text-gray-700 dark:text-gray-300 print:text-gray-700">
                  React, Next.js, Storybook, Clerk, Tailwind CSS
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 dark:text-white print:text-gray-800 mb-2">
                  DevOps & Deployment
                </h4>
                <p className="text-gray-700 dark:text-gray-300 print:text-gray-700">
                  Docker, GitHub Actions, Vercel, Render, Terraform(IaC), Snyk, Dependabot
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 dark:text-white print:text-gray-800 mb-2">Back-end</h4>
                <p className="text-gray-700 dark:text-gray-300 print:text-gray-700">
                  Node.js, Express.js, PostgreSQL, Supabase, RESTful APIs, Socket.IO
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 dark:text-white print:text-gray-800 mb-2">
                  Tools and Workflow
                </h4>
                <p className="text-gray-700 dark:text-gray-300 print:text-gray-700">
                  Git, CI/CD, Figma / FigJam, Jira, Miro
                </p>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 print:text-purple-700 mb-4">
              Professional Experience
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white print:text-gray-800">
                      Full-stack Software Engineer Bootcamp
                    </h4>
                    <p className="text-purple-600 dark:text-purple-300 print:text-purple-600">School of Code</p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 print:text-gray-600">Remote, UK</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 print:text-gray-700 mb-2">
                  One of 40 people chosen from over 2000 applicants in the last ever cohort of a competitive 16-week
                  intensive program designed to develop Full Stack Web Developers who can quickly learn and apply new
                  technologies.
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 print:text-gray-700 space-y-1">
                  <li>
                    Each week, collaborated in a different agile team to ideate, design, and build products. Engaged in
                    pair programming in diverse teams, strengthening teamwork, communication, and problem-solving
                    skills.
                  </li>
                  <li>
                    Developed full-stack JavaScript applications using technologies such as Node.js, Express, React, and
                    PostgreSQL. Along with Tailwind, and hosting tools like Vercel and Render.
                  </li>
                  <li>
                    Mixture of teaching, self-study, and hands-on collaborative workshops. Plus weekly hackathons
                    including a presentation to the cohort, mentors and industry experts.
                  </li>
                  <li>
                    Followed development best practices, including version control, documentation, accessibility, and
                    writing semantic code, test driven development.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 print:text-purple-700 mb-4">
              Projects
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Project 1 */}
                <div className="border border-purple-200 dark:border-gray-700 print:border-purple-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white print:text-gray-800">
                      Shelf Life
                    </h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400 print:text-gray-600">03/2025</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {["React", "Next.js", "TypeScript", "Supabase", "OpenAI"].map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-purple-50 text-purple-700 dark:bg-gray-800 dark:text-gray-300 print:bg-purple-50 print:text-purple-700 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 print:text-gray-700">
                    A web application designed to help users track the expiration dates of their groceries, reduce food
                    waste, and optimize meal planning. With AI-powered recipe suggestions, users can make the most of
                    ingredients before they expire, ensuring smarter storage habits and more sustainable kitchen
                    management.
                  </p>
                </div>

                {/* Project 2 */}
                <div className="border border-purple-200 dark:border-gray-700 print:border-purple-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white print:text-gray-800">
                      Chat Hive
                    </h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400 print:text-gray-600">03/2025</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {["React", "TypeScript", "Socket.io", "Next.js", "AWS EC2"].map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-purple-50 text-purple-700 dark:bg-gray-800 dark:text-gray-300 print:bg-purple-50 print:text-purple-700 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 print:text-gray-700">
                    A real-time chat app using Socket.io, allowing users to join with a custom username and send/receive
                    messages in real time. The app uses AWS EC2 for server hosting and is designed for practicing web
                    sockets and AWS integration.
                  </p>
                </div>

                {/* Project 3 */}
                <div className="border border-purple-200 dark:border-gray-700 print:border-purple-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white print:text-gray-800">
                      SnapStem
                    </h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400 print:text-gray-600">02/2025</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {["TypeScript", "React", "Next.js", "Pinecone", "Open AI"].map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-purple-50 text-purple-700 dark:bg-gray-800 dark:text-gray-300 print:bg-purple-50 print:text-purple-700 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 print:text-gray-700">
                    A plant identification and care information app using Pinecone DB for efficient vector storage and
                    search, alongside OpenAI for identifying plants from user-uploaded photos and providing detailed
                    care information with the added PlantPal chatbot feature.
                  </p>
                </div>

                {/* Project 4 */}
                <div className="border border-purple-200 dark:border-gray-700 print:border-purple-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white print:text-gray-800">
                      Blackjack Game - DevOps Hackathon
                    </h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400 print:text-gray-600">02/2025</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {["v0", "React", "Next.js", "Docker", "Github Actions", "Sentry", "Vercel"].map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-purple-50 text-purple-700 dark:bg-gray-800 dark:text-gray-300 print:bg-purple-50 print:text-purple-700 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 print:text-gray-700">
                    Built a Blackjack game using v0, focusing on DevOps practices with CI/CD, containerization, and
                    error tracking.
                  </p>
                </div>
              </div>

              <p className="text-center text-purple-600 dark:text-purple-400 print:text-purple-600">
                Please view my portfolio for more projects!
              </p>
            </div>
          </section>

          {/* Past Experience */}
          <section className="mb-8">
            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 print:text-purple-700 mb-4">
              Past Experience
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white print:text-gray-800">
                      Data Inputting
                    </h4>
                    <p className="text-purple-600 dark:text-purple-300 print:text-purple-600">
                      Nationwide Data Collection
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 print:text-gray-600">
                    Wakefield, West Yorkshire
                  </p>
                </div>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 print:text-gray-700 space-y-1">
                  <li>
                    Recognized for exceptional speed and accuracy, chosen for high-priority projects involving strict
                    deadlines and meticulous data handling.
                  </li>
                  <li>
                    Demonstrated strong attention to detail and problem-solving skills by identifying data issues and
                    implementing process improvements.
                  </li>
                  <li>
                    Consistently delivered high-quality results under pressure, meeting or exceeding deadlines through
                    effective time management.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Interests and Continuous Learning */}
          <section className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Interests */}
              <div>
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 print:text-purple-700 mb-4">
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["STEM", "Logic puzzles", "Travelling", "Foodie", "Reading", "Gardening", "Camping"].map(
                    (interest) => (
                      <Badge
                        key={interest}
                        className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 print:bg-purple-100 print:text-purple-700"
                      >
                        {interest}
                      </Badge>
                    ),
                  )}
                </div>
              </div>

              {/* Continuous Learning */}
              <div>
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 print:text-purple-700 mb-4">
                  Continuous Learning
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white print:text-gray-800 mb-1">Courses</h4>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 print:text-gray-700">
                      <li>Advanced JavaScript - Scrimba</li>
                      <li>Introduction to Clean Code - Scrimba</li>
                      <li>AWS Cloud Practitioner Essentials</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white print:text-gray-800 mb-1">Reading</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 print:text-gray-700">
                      Small Pieces Loosely Joined: A Unified Theory of the Web
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white print:text-gray-800 mb-1">Listening</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 print:text-gray-700">
                      Women in STEM podcast
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white print:text-gray-800 mb-1">Community</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 print:text-gray-700">Meetups</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Download/Print Button */}
          <div className="flex justify-center mt-10 print:hidden">
            <Button
              onClick={handlePrint}
              className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
            >
              <FaDownload />
              Print/Save as PDF
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
