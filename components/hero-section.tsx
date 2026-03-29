"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(80)
  const titles = ["Software Engineer", "Full-stack Developer", "Problem Solver"]
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const currentTitle = titles[titleIndex]

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentTitle.substring(0, index + 1))
          setIndex(index + 1)

          if (index >= currentTitle.length) {
            setIsDeleting(true)
            setTypingSpeed(150)
          }
        } else {
          setDisplayText(currentTitle.substring(0, index - 1))
          setIndex(index - 1)

          if (index <= 1) {
            setIsDeleting(false)
            setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
            setTypingSpeed(80)
          }
        }
      },
      isDeleting ? typingSpeed / 2 : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [index, isDeleting, titleIndex, titles, typingSpeed])

  return (
    <div className="container mx-auto px-4 flex flex-col justify-center h-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-12">
        <div className="flex flex-col space-y-6 md:space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground tracking-tight"
          >
            Danielle Mcloughlin
          </motion.h1>

          <div className="h-12 sm:h-16 relative">
            <p className="text-accent font-medium text-xl sm:text-2xl md:text-3xl tracking-wide">
              {displayText}
              <span className="animate-pulse ml-1">_</span>
            </p>
          </div>

          {/* Profile image on mobile */}
          <div className="flex-shrink-0 self-center md:hidden mt-4">
            <div className="w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-muted to-secondary rounded-lg overflow-hidden shadow-sm border border-border">
              <img
                src="/images/design-mode/1732914956224.jpg"
                alt="Danielle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            A passionate software engineer with a sharp analytical mindset. I thrive on solving complex problems,
            learning new technologies rapidly, and making meaningful contributions from the start.
          </motion.p>
        </div>

        {/* Profile image on desktop */}
        <div className="flex-shrink-0 self-center hidden md:block">
          <div className="w-72 h-72 bg-gradient-to-br from-muted to-secondary rounded-lg overflow-hidden shadow-md border border-border">
            <img
              src="/images/design-mode/1732914956224.jpg"
              alt="Danielle"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap gap-8 mt-10 sm:mt-12"
      >
        <Link
          href="https://github.com/daniellem62"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-300"
        >
          <FaGithub className="text-lg" />
          <span className="text-sm font-medium">GitHub</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/danielle-mcloughlin-688796338/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-300"
        >
          <FaLinkedin className="text-lg" />
          <span className="text-sm font-medium">LinkedIn</span>
        </Link>
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-lg text-accent" />
          <span className="text-sm text-muted-foreground">danielle.m62@outlook.com</span>
        </div>
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-lg text-accent" />
          <span className="text-sm text-muted-foreground">West Yorkshire, UK</span>
        </div>
      </motion.div>
    </div>
  )
}
