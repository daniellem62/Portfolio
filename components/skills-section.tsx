export function TechnicalInterestsSection() {
  return (
    <section
      id="technical"
      aria-labelledby="technical-heading"
      className="portfolio-section technical-section"
    >
      <div className="portfolio-container">
        <div className="section-heading-block">
          <p className="eyebrow">What keeps me curious</p>
          <h2 id="technical-heading" className="editorial-heading">
            I like knowing
            <br />
            what&apos;s underneath.
          </h2>
        </div>

        <div className="technical-layout">
          <div className="technical-copy">
            <p>
              I&apos;m especially drawn to backend development, software
              architecture, DevOps, cloud infrastructure, and cybersecurity.
              There&apos;s something satisfying about following a problem past
              the surface and understanding how the whole system fits
              together.
            </p>
            <p>
              I&apos;ve also worked across the full stack, and enjoy learning
              whatever a project needs. I&apos;m analytical by nature, but
              persistent curiosity is usually what gets me through a tricky
              problem.
            </p>
          </div>

          <ul className="interest-list" aria-label="Technical experience">
            <li>
              <strong>Backend</strong>
              <span>
                Node.js, Express, PostgreSQL, REST APIs, and Socket.IO
              </span>
            </li>
            <li>
              <strong>Full stack</strong>
              <span>
                TypeScript, JavaScript, React, Next.js, and Tailwind CSS
              </span>
            </li>
            <li>
              <strong>Cloud &amp; delivery</strong>
              <span>
                Docker, GitHub Actions, AWS EC2, Terraform, Vercel, and Render
              </span>
            </li>
            <li>
              <strong>Quality &amp; security</strong>
              <span>
                Playwright, React Testing Library, Vitest, Jest, CodeQL, and
                Snyk
              </span>
            </li>
          </ul>
        </div>

        <div className="experience-notes">
          <div>
            <h3>School of Code</h3>
            <p>
              A 16-week full-stack software engineering bootcamp. I worked in
              rotating agile teams, paired on projects, and practised testing,
              accessibility, documentation, and semantic code.
            </p>
          </div>
          <div>
            <h3>Before software</h3>
            <p>
              In data inputting at Nationwide Data Collection, I was chosen for
              high-priority projects where speed, accuracy, and careful data
              handling mattered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export const SkillsSection = TechnicalInterestsSection;
