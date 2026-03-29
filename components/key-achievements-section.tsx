import { Award } from "lucide-react"

const achievements = [
  "Completed 16-week intensive Full-stack Software Engineer Bootcamp at School of Code",
  "Developed and deployed 4 full-stack projects within tight deadlines",
  "Contributed to open-source projects on GitHub",
  "Achieved 95% test coverage on RESTful API project",
  "Optimized React application performance, reducing load time by 40%",
]

export function KeyAchievementsSection() {
  return (
    <section id="achievements" className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-dark">Key Achievements</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start space-x-2">
            <Award className="w-6 h-6 text-purple mt-1" />
            <p className="text-muted-foreground">{achievement}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
