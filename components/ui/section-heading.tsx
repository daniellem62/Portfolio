import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  children: React.ReactNode
  centered?: boolean
  className?: string
}

export function SectionHeading({ children, centered = false, className }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-purple-800 dark:text-white mb-6 sm:mb-10",
        centered && "text-center",
        className,
      )}
    >
      {children}
    </h2>
  )
}
