const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        purple: { light: "hsl(var(--purple-light))", DEFAULT: "hsl(var(--purple))", dark: "hsl(var(--purple-dark))" },
        truepurple: { light: "hsl(270,70%,85%)", DEFAULT: "hsl(270,70%,50%)", dark: "hsl(270,70%,30%)" },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [...fontFamily.sans], // simplified for v0
      },
      keyframes: {
        "accordion-down": { from: { height: 0 }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: 0 } },
        scroll: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        pulse: { "0%,100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.1)" } },
        "card-expand": { from: { opacity: 0, transform: "translate(-50%, -50%) scale(0.9)" }, to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll: "scroll 30s linear infinite",
        pulse: "pulse 2s infinite",
        "card-expand": "card-expand 0.2s ease-out forwards",
      },
    },
  },
  plugins: [], // no external plugins for v0
}
