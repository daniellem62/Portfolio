import { describe, it, expect, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MainNav } from "@/components/main-nav";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe("MainNav", () => {
  it("renders all navigation links", () => {
    render(<MainNav />);
    expect(screen.getAllByRole("link", { name: /home/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /about/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /skills/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /projects/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /experience/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /interests/i })[0]).toBeInTheDocument();
  });

  it("renders all social links", () => {
    render(<MainNav />);
    expect(screen.getAllByRole("link", { name: /github/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /linkedin/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /email/i })[0]).toBeInTheDocument();
  });

  it("GitHub social link points to the correct URL", () => {
    render(<MainNav />);
    const githubLinks = screen.getAllByRole("link", { name: /github/i });
    expect(githubLinks[0]).toHaveAttribute("href", "https://github.com/daniellem62");
  });

  it("mobile dropdown is hidden initially", () => {
    render(<MainNav />);
    // The overlay should not be in the DOM when menu is closed
    expect(screen.queryByRole("presentation")).not.toBeInTheDocument();
  });

  it("opens mobile menu when toggle button is clicked", async () => {
    render(<MainNav />);
    const toggleButton = screen.getByRole("button", { name: /toggle menu/i });

    await userEvent.click(toggleButton);

    // The mobile dropdown nav should now be present — look for a nav element
    // that contains a link rendered by the dropdown (not the desktop sidebar)
    const dropdownLinks = screen.getAllByRole("link", { name: /about/i });
    // There should be at least 2: one in the desktop nav, one in the dropdown
    expect(dropdownLinks.length).toBeGreaterThanOrEqual(2);
  });

  it("closes mobile menu when toggle button is clicked again", async () => {
    render(<MainNav />);
    const toggleButton = screen.getByRole("button", { name: /toggle menu/i });

    await userEvent.click(toggleButton);
    const openCount = screen.getAllByRole("link", { name: /about/i }).length;

    await userEvent.click(toggleButton);
    const closedCount = screen.getAllByRole("link", { name: /about/i }).length;

    expect(closedCount).toBeLessThan(openCount);
  });

  it("closes mobile menu when the overlay is clicked", async () => {
    render(<MainNav />);
    const toggleButton = screen.getByRole("button", { name: /toggle menu/i });
    await userEvent.click(toggleButton);

    const overlay = document.querySelector(".fixed.inset-0.z-20");
    expect(overlay).toBeInTheDocument();

    await userEvent.click(overlay!);

    expect(document.querySelector(".fixed.inset-0.z-20")).not.toBeInTheDocument();
  });

  it("closes mobile menu when a nav link in the dropdown is clicked", async () => {
    render(<MainNav />);
    const toggleButton = screen.getByRole("button", { name: /toggle menu/i });
    await userEvent.click(toggleButton);

    // Click the "About" link — in the dropdown it's the second occurrence
    const aboutLinks = screen.getAllByRole("link", { name: /about/i });
    await userEvent.click(aboutLinks[aboutLinks.length - 1]);

    // After clicking, the dropdown should close (back to only 1 "About" link)
    expect(screen.getAllByRole("link", { name: /about/i })).toHaveLength(1);
  });

  it("displays the current copyright year", () => {
    render(<MainNav />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });
});
