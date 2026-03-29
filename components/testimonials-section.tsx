import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    name: "Jane Doe",
    role: "Senior Developer at Tech Co.",
    content:
      "Danielle's ability to quickly grasp new concepts and apply them practically is impressive. Her projects demonstrate a solid understanding of full-stack development principles.",
  },
  {
    name: "John Smith",
    role: "Bootcamp Instructor",
    content:
      "Danielle consistently delivered high-quality work during the bootcamp. Her attention to detail and problem-solving skills set her apart from her peers.",
  },
  {
    name: "Emily Brown",
    role: "Project Manager",
    content:
      "Working with Danielle was a pleasure. She's not only technically proficient but also a great team player with excellent communication skills.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-dark">Testimonials</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-purple-light">
            <CardHeader>
              <CardTitle className="text-purple">{testimonial.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
