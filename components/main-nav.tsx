"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"
import { usePathname } from 'next/navigation'

const Links = [
  { name: "Home", href: "/#home", id: "home" },
  { name: "About", href: "/#about", id: "about" },
  { name: "Skills", href: "/#skills", id: "skills" },
  { name: "Projects", href: "/projects", id: "projects" },
  { name: "Experience", href: "/#experience", id: "experience" },
]

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (pathname !== "/") return

    const sections = ["home", "about", "skills", "projects", "experience", "activities"]

    const observerCallback = (entries) => {
      const visibleEntry = entries.reduce(
        (max, entry) => {
          return entry.intersectionRatio > max.intersectionRatio ? entry : max
        },
        { intersectionRatio: 0 },
      )

      if (visibleEntry.target && visibleEntry.intersectionRatio > 0.3) {
        setActiveSection(visibleEntry.target.id)
      }
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [pathname])

  const isActive = (href: string, id: string | null) => {
    if (pathname !== "/") {
      return pathname === href || pathname.startsWith(href.split("#")[0])
    }

    if (id) {
      return id === activeSection
    }

    return false
  }

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault()
      const targetId = href.replace("/#", "")
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setActiveSection(targetId)
        setIsOpen(false)
      }
    }
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-background/95 dark:bg-background/95 backdrop-blur-sm border-b border-border shadow-sm transition-colors duration-300">
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="flex items-center gap-12">
            <Link href="/" className="font-bold text-lg text-foreground tracking-tight">
              D.M
            </Link>
            <nav className="hidden md:flex gap-8">
              {Links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive(link.href, link.id)
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md text-foreground hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && (theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pt-4 pb-4 border-t border-border">
            <nav className="flex flex-col gap-3">
              {Links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={`px-2 py-1 text-sm font-medium transition-colors ${
                    isActive(link.href, link.id)
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
