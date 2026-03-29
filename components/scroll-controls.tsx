"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ScrollControlsProps {
  sections: string[]
}

export function ScrollControls({ sections }: ScrollControlsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll to top button when scrolled down
      setShowScrollTop(window.scrollY > 300)
    }

    // Set up intersection observer to detect which section is in view
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the entry with the largest intersection ratio
      const visibleEntry = entries.reduce(
        (max, entry) => {
          return entry.intersectionRatio > max.intersectionRatio ? entry : max
        },
        { intersectionRatio: 0 } as IntersectionObserverEntry,
      )

      if (visibleEntry.target && visibleEntry.intersectionRatio > 0.3) {
        setActiveSection(visibleEntry.target.id)
      }
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], // Multiple thresholds for better accuracy
    }

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element && observerRef.current) {
        observerRef.current.observe(element)
      }
    })

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [sections])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  return (
    <>
      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        className={`scroll-to-top rounded-full p-3 bg-purple-600 hover:bg-purple-700 text-white shadow-lg ${
          showScrollTop ? "visible" : ""
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </Button>

      {/* Section navigation dots */}
      <div className="section-dots hidden md:flex">
        {sections.map((sectionId) => (
          <button
            key={sectionId}
            onClick={() => scrollToSection(sectionId)}
            className={`section-dot ${activeSection === sectionId ? "active" : ""}`}
            aria-label={`Scroll to ${sectionId} section`}
          />
        ))}
      </div>
    </>
  )
}
