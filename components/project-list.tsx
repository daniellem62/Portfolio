import Link from "next/link";
import { projects as allProjects } from "@/data/projects";

interface ProjectListProps {
  items: typeof allProjects;
}

export function ProjectList({ items }: ProjectListProps) {
  return (
    <ol className="project-list">
      {items.map((project) => (
        <li key={project.title} className="project-entry">
          <div>
            <div className="project-title-row">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-category">{project.category}</span>
            </div>
          </div>
          <div>
            <p className="project-description">{project.description}</p>
            <div className="project-meta">
              <p className="project-tech">{project.techStack.join(" · ")}</p>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
                aria-label={`View ${project.title} on GitHub`}
              >
                View source <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
