import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProjectsSection } from "@/components/projects-section";
import { projects } from "@/data/projects";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

describe("ProjectsSection", () => {
  beforeEach(() => {
    // jsdom doesn't implement these — stub them to avoid errors
    Object.defineProperty(window, "innerWidth", { value: 1024, writable: true });
    Object.defineProperty(document.documentElement, "clientWidth", { value: 1024, writable: true });
  });

  afterEach(() => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  });

  it("renders the section heading", () => {
    render(<ProjectsSection />);
    expect(screen.getByRole("heading", { name: /featured projects/i })).toBeInTheDocument();
  });

  it("renders all filter buttons", () => {
    render(<ProjectsSection />);
    for (const label of ["All", "Full-stack", "Front-end", "Back-end", "Dev-Ops"]) {
      expect(screen.getByRole("button", { name: label })).toBeInTheDocument();
    }
  });

  it("shows at most 4 project cards when filter is All", () => {
    render(<ProjectsSection />);
    // Each project card has a heading with the project title
    const first4 = projects.slice(0, 4);
    first4.forEach((p) => {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    });
    // The 5th project (if it exists) should not be visible
    if (projects.length > 4) {
      expect(screen.queryByText(projects[4].title)).not.toBeInTheDocument();
    }
  });

  it("filters projects when a category button is clicked", async () => {
    render(<ProjectsSection />);

    await userEvent.click(screen.getByRole("button", { name: "Full-stack" }));

    const fullStackProjects = projects
      .filter((p) => p.category === "Full-stack")
      .slice(0, 4);

    fullStackProjects.forEach((p) => {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    });

    // A project from a different category shown in "All" view should no longer appear
    const nonFullStack = projects.slice(0, 4).find((p) => p.category !== "Full-stack");
    if (nonFullStack) {
      expect(screen.queryByText(nonFullStack.title)).not.toBeInTheDocument();
    }
  });

  it("opens a modal when a project card is clicked", async () => {
    render(<ProjectsSection />);

    const firstProject = projects[0];
    // Click the card — the card container holds the project title text
    const titleEl = screen.getByText(firstProject.title);
    await userEvent.click(titleEl.closest("[class*='cursor-pointer']")!);

    // The modal renders the title in a larger heading
    const modal = document.querySelector(".fixed.top-1\\/2");
    expect(modal).toBeInTheDocument();
  });

  it("closes the modal when the X button is clicked", async () => {
    render(<ProjectsSection />);

    const titleEl = screen.getByText(projects[0].title);
    await userEvent.click(titleEl.closest("[class*='cursor-pointer']")!);

    const closeButton = screen.getByRole("button", { name: "" }); // X icon button
    await userEvent.click(closeButton);

    expect(document.querySelector(".fixed.top-1\\/2")).not.toBeInTheDocument();
  });

  it("closes the modal when the overlay is clicked", async () => {
    render(<ProjectsSection />);

    const titleEl = screen.getByText(projects[0].title);
    await userEvent.click(titleEl.closest("[class*='cursor-pointer']")!);

    const overlay = document.querySelector(".fixed.inset-0.bg-black");
    await userEvent.click(overlay!);

    expect(document.querySelector(".fixed.top-1\\/2")).not.toBeInTheDocument();
  });

  it("locks body scroll when a card is expanded", async () => {
    render(<ProjectsSection />);

    const titleEl = screen.getByText(projects[0].title);
    await userEvent.click(titleEl.closest("[class*='cursor-pointer']")!);

    expect(document.body.style.overflow).toBe("hidden");
  });

  it("restores body scroll when modal is closed", async () => {
    render(<ProjectsSection />);

    const titleEl = screen.getByText(projects[0].title);
    await userEvent.click(titleEl.closest("[class*='cursor-pointer']")!);

    const overlay = document.querySelector(".fixed.inset-0.bg-black");
    await userEvent.click(overlay!);

    expect(document.body.style.overflow).toBe("");
  });

  it("renders the See All Projects link", () => {
    render(<ProjectsSection />);
    const link = screen.getByRole("link", { name: /see all projects/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/projects");
  });
});
