import { AboutSection } from "@/components/about-section";
import { HeroSection } from "@/components/hero-section";
import { MainNav } from "@/components/main-nav";
import { OutsideTechSection } from "@/components/outside-tech-section";
import { ProjectsSection } from "@/components/projects-section";
import { TechnicalInterestsSection } from "@/components/skills-section";
import Link from "next/link";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/daniellem62",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/danielle-mcloughlin-688796338",
  },
  {
    label: "Email",
    href: "mailto:danielle.m62@outlook.com",
  },
];

export default function Home() {
  return (
    <>
      <MainNav />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TechnicalInterestsSection />
        <OutsideTechSection />

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="portfolio-section contact-section"
        >
          <div className="portfolio-container contact-content">
            <p className="eyebrow">A note, a question, a good problem</p>
            <h2 id="contact-heading" className="editorial-heading">
              Let&apos;s talk.
            </h2>
            <p className="section-intro">
              I&apos;m always glad to hear from people who care about how things
              work.
            </p>
            <nav aria-label="Contact links" className="contact-links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="text-link"
                >
                  {link.label}
                  {link.href.startsWith("mailto:") ? null : (
                    <span aria-hidden="true"> ↗</span>
                  )}
                </a>
              ))}
              <a href="/Danielle_CV.pdf" download className="text-link">
                CV <span aria-hidden="true">↓</span>
              </a>
            </nav>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="portfolio-container footer-content">
          <span>Made with curiosity, by Danielle.</span>
          <span>© {new Date().getFullYear()} Danielle Mcloughlin</span>
          <Link href="#home" className="text-link">
            Back to the beginning ↑
          </Link>
        </div>
      </footer>
    </>
  );
}
