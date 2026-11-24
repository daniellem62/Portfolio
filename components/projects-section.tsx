import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectList } from "@/components/project-list";

const featuredTitles = [
  "SnapStem",
  "Real-Time Chat App",
  "RESTful API",
  "DevOps Hackathon",
];

const featuredProjects = projects.filter((project) =>
  featuredTitles.includes(project.title),
);

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="portfolio-section"
    >
      <div className="portfolio-container">
        <div className="section-heading-block">
          <p className="eyebrow">Selected projects</p>
          <h2 id="projects-heading" className="editorial-heading">
            Things I&apos;ve been
            <br />
            figuring out.
          </h2>
          <p className="section-intro">
            A few projects that let me follow a question, try an idea, and learn
            how the pieces fit together.
          </p>
        </div>

        <ProjectList items={featuredProjects} />

        <Link href="/projects" className="text-link all-projects-link">
          Browse all projects <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
