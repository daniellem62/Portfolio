import { describe, it, expect } from "vitest";
import { projects } from "@/data/projects";

const VALID_STATUSES = ["In Progress", "Maintained", "Beta Release", "Completed"];
const VALID_CATEGORIES = ["Full-stack", "Front-end", "Back-end", "Dev-Ops"];

describe("projects data", () => {
  it("is a non-empty array", () => {
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  it.each(projects)("$title has all required fields", (project) => {
    expect(project.title).toBeTruthy();
    expect(project.status).toBeTruthy();
    expect(project.date).toBeTruthy();
    expect(project.image).toBeTruthy();
    expect(project.description).toBeTruthy();
    expect(project.link).toBeTruthy();
    expect(project.category).toBeTruthy();
  });

  it.each(projects)("$title has a valid status", (project) => {
    expect(VALID_STATUSES).toContain(project.status);
  });

  it.each(projects)("$title has a valid category", (project) => {
    expect(VALID_CATEGORIES).toContain(project.category);
  });

  it.each(projects)("$title has a non-empty tech stack", (project) => {
    expect(Array.isArray(project.techStack)).toBe(true);
    expect(project.techStack.length).toBeGreaterThan(0);
  });

  it.each(projects)("$title has a GitHub link", (project) => {
    expect(project.link).toMatch(/^https:\/\/github\.com\//);
  });

  it("has no duplicate project titles", () => {
    const titles = projects.map((p) => p.title);
    const unique = new Set(titles);
    expect(unique.size).toBe(titles.length);
  });
});
