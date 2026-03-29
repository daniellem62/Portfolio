"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 2 // Make canvas taller to cover the entire scrollable area
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles = 50

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color =
          theme === "dark"
            ? `rgba(139, 92, 246, ${Math.random() * 0.3 + 0.1})`
            : `rgba(139, 92, 246, ${Math.random() * 0.3 + 0.1})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create grid pattern
    const drawGrid = () => {
      const gridSize = 40
      ctx.strokeStyle = theme === "dark" ? "rgba(139, 92, 246, 0.15)" : "rgba(139, 92, 246, 0.1)"
      ctx.lineWidth = 1

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    // Create gradient circles
    const drawGradientCircles = () => {
      // Circle 1
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.8,
        canvas.height * 0.2,
        0,
        canvas.width * 0.8,
        canvas.height * 0.2,
        canvas.width * 0.4,
      )
      gradient1.addColorStop(0, theme === "dark" ? "rgba(139, 92, 246, 0.3)" : "rgba(139, 92, 246, 0.2)")
      gradient1.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.fillStyle = gradient1
      ctx.beginPath()
      ctx.arc(canvas.width * 0.8, canvas.height * 0.2, canvas.width * 0.4, 0, Math.PI * 2)
      ctx.fill()

      // Circle 2
      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.2,
        canvas.height * 0.8,
        0,
        canvas.width * 0.2,
        canvas.height * 0.8,
        canvas.width * 0.3,
      )
      gradient2.addColorStop(0, theme === "dark" ? "rgba(139, 92, 246, 0.2)" : "rgba(139, 92, 246, 0.15)")
      gradient2.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.fillStyle = gradient2
      ctx.beginPath()
      ctx.arc(canvas.width * 0.2, canvas.height * 0.8, canvas.width * 0.3, 0, Math.PI * 2)
      ctx.fill()
    }

    // Initialize particles
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background elements
      drawGradientCircles()
      drawGrid()

      // Update and draw particles
      particlesArray.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8, zIndex: -1 }} // Set to -1 to ensure it's behind everything
    />
  )
}
