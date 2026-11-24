import { projects } from "@/data/projects";
import { ProjectList } from "@/components/project-list";

export function ProjectsFullPage() {
  return <ProjectList items={projects} />;
}
