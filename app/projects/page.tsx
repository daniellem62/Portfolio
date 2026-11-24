import { MainNav } from "@/components/main-nav";
import { ProjectsFullPage } from "@/components/projects-full-page";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <>
      <MainNav />
      <main className="portfolio-section">
        <div className="portfolio-container">
          <p className="eyebrow">A few experiments and builds</p>
          <h1 className="editorial-heading mb-10">All projects</h1>
          <ProjectsFullPage />
          <Link href="/#projects" className="text-link mt-10">
            Back to selected projects
          </Link>
        </div>
      </main>
      <footer className="site-footer">
        <div className="portfolio-container footer-content">
          <span>© {new Date().getFullYear()} Danielle Mcloughlin</span>
          <Link href="/#home" className="text-link">
            Back to the portfolio
          </Link>
        </div>
      </footer>
    </>
  );
}
