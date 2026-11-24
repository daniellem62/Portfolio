import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CombinedActivitySection } from "@/components/combined-activity-section";

vi.mock("@/lib/github", () => ({
  fetchGitHubActivity: vi.fn().mockResolvedValue([]),
}));

// use require inside the factory to avoid vi.mock hoisting issues
vi.mock("framer-motion", () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const React = require("react");
  // Cache per tag so React sees a stable component reference across re-renders.
  // Without caching, the Proxy returns a new function each access and React
  // unmounts/remounts the tree on every render, resetting component state.
  const cache = new Map<string, unknown>();
  const makeMotion = (tag: string) => {
    if (!cache.has(tag)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Component = ({ children, initial, animate, transition, whileHover, whileTap, ...props }: any) =>
        React.createElement(tag, props, children);
      cache.set(tag, Component);
    }
    return cache.get(tag);
  };
  return {
    motion: new Proxy({} as Record<string, unknown>, {
      get: (_, tag: string) => makeMotion(tag),
    }),
    AnimatePresence: ({ children }: { children: unknown }) => children,
  };
});

describe("CombinedActivitySection", () => {
  it("renders the section heading", () => {
    render(<CombinedActivitySection />);
    expect(screen.getByRole("heading", { name: "Activities & Interests" })).toBeInTheDocument();
  });

  it("renders the Interests subsection heading", () => {
    render(<CombinedActivitySection />);
    // Use level to distinguish from the h2 "Activities & Interests"
    expect(screen.getByRole("heading", { name: "Interests", level: 3 })).toBeInTheDocument();
  });

  it("renders all interest items", () => {
    render(<CombinedActivitySection />);
    const interestNames = ["STEM", "Logic puzzles", "Gardening", "Travelling", "Camping", "Foodie"];
    interestNames.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
    // "Reading" appears as both an interest and a learning category
    expect(screen.getAllByText("Reading").length).toBeGreaterThanOrEqual(1);
  });

  it("clicking an interest marks it active", async () => {
    render(<CombinedActivitySection />);

    const getStemEl = () => screen.getByText("STEM").closest("[class*='cursor-pointer']")!;
    expect(getStemEl()).not.toHaveClass("ring-1");

    await userEvent.click(getStemEl());

    // Re-query after state update to avoid stale reference
    expect(getStemEl()).toHaveClass("ring-1");
  });

  it("clicking an active interest deselects it", async () => {
    render(<CombinedActivitySection />);

    const getStemEl = () => screen.getByText("STEM").closest("[class*='cursor-pointer']")!;
    await userEvent.click(getStemEl()); // activate
    await userEvent.click(getStemEl()); // deactivate

    expect(getStemEl()).not.toHaveClass("ring-1");
  });

  it("renders the Continuous Learning subsection heading", () => {
    render(<CombinedActivitySection />);
    expect(screen.getByRole("heading", { name: "Continuous Learning", level: 3 })).toBeInTheDocument();
  });

  it("renders all learning categories", () => {
    render(<CombinedActivitySection />);
    expect(screen.getByText("Courses")).toBeInTheDocument();
    expect(screen.getByText("Listening")).toBeInTheDocument();
    // "Reading" appears in both sections — just confirm it's present at least once
    expect(screen.getAllByText("Reading").length).toBeGreaterThanOrEqual(1);
  });

  it("renders individual learning items", () => {
    render(<CombinedActivitySection />);
    expect(screen.getByText("Advanced JavaScript")).toBeInTheDocument();
    expect(screen.getByText("Introduction to Clean Code")).toBeInTheDocument();
    expect(screen.getByText("Cloud Practitioner Essentials")).toBeInTheDocument();
    expect(screen.getByText("Women in STEM podcast")).toBeInTheDocument();
  });

  it("renders the Codewars badge with correct alt text", () => {
    render(<CombinedActivitySection />);
    expect(screen.getByAltText(/codewars profile badge/i)).toBeInTheDocument();
  });
});
