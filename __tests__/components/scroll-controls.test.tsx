import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ScrollControls } from "@/components/scroll-controls";

// IntersectionObserver must be a real class (constructable) in jsdom
const observeSpy = vi.fn();
const disconnectSpy = vi.fn();

class MockIntersectionObserver {
  observe = observeSpy;
  disconnect = disconnectSpy;
  unobserve = vi.fn();
  root = null;
  rootMargin = "";
  thresholds: number[] = [];
  takeRecords = vi.fn(() => []);
  constructor(_cb: IntersectionObserverCallback, _opts?: IntersectionObserverInit) {}
}

const sections = ["home", "about", "skills"];

beforeEach(() => {
  // Reset before each test so RTL's afterEach cleanup from the previous test
  // doesn't pollute the call count
  observeSpy.mockReset();
  disconnectSpy.mockReset();

  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
  vi.stubGlobal("scrollTo", vi.fn());

  sections.forEach((id) => {
    const el = document.createElement("div");
    el.id = id;
    el.scrollIntoView = vi.fn();
    document.body.appendChild(el);
  });
});

afterEach(() => {
  vi.restoreAllMocks();
  document.body.innerHTML = "";
});

describe("ScrollControls", () => {
  it("renders the scroll-to-top button", () => {
    render(<ScrollControls sections={sections} />);
    expect(screen.getByRole("button", { name: /scroll to top/i })).toBeInTheDocument();
  });

  it("renders one navigation dot per section", () => {
    render(<ScrollControls sections={sections} />);
    sections.forEach((id) => {
      expect(
        screen.getByRole("button", { name: new RegExp(`scroll to ${id}`, "i") })
      ).toBeInTheDocument();
    });
  });

  it("calls window.scrollTo when the scroll-to-top button is clicked", async () => {
    render(<ScrollControls sections={sections} />);
    await userEvent.click(screen.getByRole("button", { name: /scroll to top/i }));
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });

  it("calls scrollIntoView on the section when a dot is clicked", async () => {
    render(<ScrollControls sections={sections} />);
    const aboutDot = screen.getByRole("button", { name: /scroll to about/i });
    await userEvent.click(aboutDot);
    const aboutEl = document.getElementById("about");
    expect(aboutEl?.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("observes all sections on mount", () => {
    render(<ScrollControls sections={sections} />);
    expect(observeSpy).toHaveBeenCalledTimes(sections.length);
  });

  it("disconnects the observer on unmount", () => {
    const { unmount } = render(<ScrollControls sections={sections} />);
    unmount();
    expect(disconnectSpy).toHaveBeenCalledOnce();
  });

  it("shows the scroll-to-top button as visible when scrolled past 300px", () => {
    render(<ScrollControls sections={sections} />);
    const button = screen.getByRole("button", { name: /scroll to top/i });
    expect(button).not.toHaveClass("visible");

    Object.defineProperty(window, "scrollY", { value: 400, writable: true, configurable: true });
    fireEvent.scroll(window);

    expect(button).toHaveClass("visible");
  });
});
