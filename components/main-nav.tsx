"use client";

import Link from "next/link";
import {
  Home,
  User,
  FileText,
  Code,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/#about", label: "About", icon: User },
  { href: "/#skills", label: "Skills", icon: Code },
  { href: "/#projects", label: "Projects", icon: FileText },
  { href: "/#experience", label: "Experience", icon: Briefcase },
  { href: "/#activities", label: "Interests & Learning", icon: User },
];

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:danielle.m62@outlook.com", icon: Mail, label: "Email" },
];

export function MainNav() {
  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col bg-[#1a1a2e] lg:flex">
      {/* Profile Section */}
      <div className="flex flex-col items-center px-4 pt-6 pb-8">
        <div className="relative">
          <div className="h-48 w-48 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 p-0.5">
            <img
              src="/images/design-mode/1732914956224.jpg"
              alt="Danielle"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-4 flex gap-2">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#252542] text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <social.icon className="h-4 w-4" />
              <span className="sr-only">{social.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-muted-foreground transition-colors hover:bg-[#252542] hover:text-primary"
              >
                <link.icon className="h-5 w-5" />
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-6 py-6 text-center text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Danielle Mcloughlin</p>
      </div>
    </aside>
  );
}
