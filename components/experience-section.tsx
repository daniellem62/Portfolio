const experiences = [
  {
    title: "Full-stack Software Engineer Bootcamp",
    company: "School of Code",
    period: "16 weeks",
    description:
      "One of 40 people chosen from over 2000 applicants in the last ever cohort of a competitive 16-week intensive program designed to develop Full Stack Web Developers who can quickly learn and apply new technologies. ",
    details: [
      "Each week, collaborated in a different agile team to ideate, design, and build products.",
      "Engaged in pair programming in diverse teams, strengthening teamwork, communication, and problem-solving skills.",
      "Developed full-stack JavaScript applications using technologies such as Node.js, Express, React, and PostgreSQL. Along with Tailwind, and hosting tools like Vercel and Render.",
      "Mixture of teaching, self-study, and hands-on collaborative workshops. Plus weekly hackathons including a presentation to the cohort, mentors and industry experts.",
      "Followed development best practices, including version control, documentation, accessibility, and writing semantic code, test driven development.",
    ],
  },
  {
    title: "Data Inputting",
    company: "Nationwide Data Collection",
    period: "Previous role",
    description:
      "Recognized for exceptional speed and accuracy, chosen for high-priority projects involving strict deadlines and meticulous data handling.",
    details: [
      "Demonstrated strong attention to detail and problem-solving skills by identifying data issues and implementing process improvements.",
      "Consistently delivered high-quality results under pressure, meeting or exceeding deadlines through effective time management.",
      "Strengthened communication and teamwork skills through collaboration on complex, team-based projects.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <div className="bg-transparent transition-colors duration-300 w-full">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-purple-800 dark:text-white mb-4 sm:mb-8">
        Work Experience
      </h2>
      <div className="space-y-3 sm:space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-3 sm:p-6 border border-purple-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 shadow-md transition-colors duration-300 gradient-card floating-card"
          >
            <div className="mb-2 sm:mb-4">
              <h3 className="text-base sm:text-xl font-semibold text-purple-700 dark:text-teal-300">{exp.title}</h3>
              <p className="text-xs sm:text-sm text-purple-600/70 dark:text-gray-400">
                {exp.company} | {exp.period}
              </p>
            </div>
            <p className="text-xs sm:text-base text-gray-700 dark:text-gray-300 mb-2 sm:mb-4">{exp.description}</p>
            <ul className="list-disc list-inside text-xs sm:text-base text-purple-700/80 dark:text-gray-400 space-y-1 sm:space-y-2">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
