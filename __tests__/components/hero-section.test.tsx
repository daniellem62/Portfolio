import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { HeroSection } from "@/components/hero-section";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

vi.mock("framer-motion", () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const React = require("react");
  const makeMotion = (tag: string) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ({ children, initial, animate, transition, whileHover, whileTap, ...props }: any) =>
      React.createElement(tag, props, children);
  return {
    motion: new Proxy({} as Record<string, unknown>, {
      get: (_, tag: string) => makeMotion(tag),
    }),
    AnimatePresence: ({ children }: { children: unknown }) => children,
  };
});

import React from "react";

describe("HeroSection", () => {
  it("renders the full name heading", () => {
    render(<HeroSection />);
    expect(screen.getByRole("heading", { name: /danielle mcloughlin/i })).toBeInTheDocument();
  });

  it("renders the CV download link pointing to the PDF", () => {
    render(<HeroSection />);
    const downloadLink = screen.getByRole("link", { name: /download cv/i });
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute("href", "/Danielle_CV.pdf");
    expect(downloadLink).toHaveAttribute("download");
  });

  it("renders the profile image with an alt attribute", () => {
    render(<HeroSection />);
    expect(screen.getByAltText("Danielle")).toBeInTheDocument();
  });

  it("renders the blinking typing cursor", () => {
    render(<HeroSection />);
    expect(screen.getByText("_")).toBeInTheDocument();
  });

  it("renders the bio paragraph", () => {
    render(<HeroSection />);
    expect(screen.getByText(/passionate software engineer/i)).toBeInTheDocument();
  });
});
