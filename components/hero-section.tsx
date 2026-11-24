import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="hero-section">
      <div className="portfolio-container hero-layout">
        <div>
          <p className="eyebrow">A curious mind, finding its way back</p>
          <h1 id="hero-heading" className="hero-title">
            Software engineer.
            <br />
            <em>Curious by nature.</em>
          </h1>
          <p className="hero-lede">
            From telescopes and Unreal Tournament, through animal care and
            parenthood, to pull requests and production. I found my way back to
            tech, and I&apos;m not leaving.
          </p>
          <p className="hero-focus">
            I&apos;m Danielle. I enjoy getting to the heart of how things work,
            especially in backend development, software architecture, DevOps,
            and cloud infrastructure.
          </p>
          <div className="hero-actions">
            <a href="/Danielle_CV.pdf" download className="text-link">
              Download my CV <span aria-hidden="true">↓</span>
            </a>
            <Link href="#contact" className="text-link">
              Get in touch <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <Image
          src="/images/danielle.jpg"
          alt="Danielle"
          width={453}
          height={566}
          priority
          sizes="(max-width: 520px) 72vw, (max-width: 760px) 40vw, 336px"
          className="hero-portrait"
        />
      </div>
    </section>
  );
}
