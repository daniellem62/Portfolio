import Link from "next/link";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#technical", label: "Tech & experience" },
  { href: "/#outside", label: "Outside tech" },
  { href: "/#contact", label: "Contact" },
];

export function MainNav() {
  return (
    <header className="site-header">
      <div className="portfolio-container header-inner">
        <Link href="/#home" className="site-brand">
          Danielle Mcloughlin
        </Link>

        <nav aria-label="Main navigation" className="desktop-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <Link href="/Danielle_CV.pdf" download>
            CV <span aria-hidden="true">↓</span>
          </Link>
        </div>

        <details className="mobile-nav">
          <summary aria-label="Toggle menu">Menu</summary>
          <nav aria-label="Mobile navigation">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/Danielle_CV.pdf" download>
                  Download CV
                </Link>
              </li>
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
