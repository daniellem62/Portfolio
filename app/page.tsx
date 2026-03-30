import { MainNav } from "@/components/main-nav";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { CombinedActivitySection } from "@/components/combined-activity-section";
import { ScrollControls } from "@/components/scroll-controls";
import { FaRegCopyright } from "react-icons/fa6";

// Define all section IDs for navigation
const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "activities",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative lg:ml-64">
      <MainNav />
      <main className="fullpage-container pt-16 lg:pt-0">
        <section id="home" className="fullpage-section">
          <div className="section-content">
            <HeroSection />
          </div>
        </section>

        <section id="about" className="fullpage-section">
          <div className="section-content">
            <AboutSection />
          </div>
        </section>

        <section id="skills" className="fullpage-section">
          <div className="section-content">
            <SkillsSection />
          </div>
        </section>

        <section id="projects" className="fullpage-section">
          <div className="section-content">
            <ProjectsSection />
          </div>
        </section>

        <section id="experience" className="fullpage-section">
          <div className="section-content">
            <ExperienceSection />
          </div>
        </section>

        <section id="activities" className="fullpage-section">
          <div className="section-content">
            <CombinedActivitySection />
          </div>
        </section>
      </main>

      {/* Add scroll controls */}
      <ScrollControls sections={sectionIds} />

      <footer className="py-6 text-center text-muted-foreground text-sm flex items-center justify-center gap-2 relative z-10">
        <FaRegCopyright />{" "}
        <span>2025 Danielle Mcloughlin. All rights reserved.</span>
      </footer>
    </div>
  );
}
