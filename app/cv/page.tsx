import Link from "next/link";
import { MainNav } from "@/components/main-nav";

export default function CVPage() {
  return (
    <>
      <MainNav />
      <main className="portfolio-container py-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <Link href="/#home" className="text-link">
            Back to the portfolio
          </Link>
          <a href="/Danielle_CV.pdf" download className="text-link">
            Download CV <span aria-hidden="true">↓</span>
          </a>
        </div>
        <object
          data="/Danielle_CV.pdf"
          type="application/pdf"
          className="h-[75vh] w-full border border-border"
          aria-label="Danielle Mcloughlin's CV"
        >
          <p>
            Your browser doesn&apos;t support embedded PDFs.{" "}
            <a href="/Danielle_CV.pdf" download className="text-link">
              Download the CV
            </a>
            .
          </p>
        </object>
      </main>
    </>
  );
}
