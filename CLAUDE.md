# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # ESLint
npm run test         # Run tests in watch mode (Vitest)
npm run test:run     # Run tests once (CI mode)
```

To run a single test file:
```bash
npx vitest run __tests__/components/hero-section.test.tsx
```

## Architecture

This is a **Next.js 15 App Router** portfolio site with three routes:
- `/` — Single-page app with full-page scroll sections (Hero → About → Skills → Projects → Experience → Combined Activity)
- `/projects` — Full projects showcase page
- `/cv` — PDF viewer for resume

### Key Architectural Patterns

**Full-page scroll navigation**: The home page (`app/page.tsx`) uses a custom full-page scroll system. Sections are controlled by `ScrollControls` and styled via `styles/fullpage-scroll.css` and `styles/scroll-sections.css`.

**Sidebar navigation**: `MainNav` is a fixed sidebar (not a top nav) containing profile info, section links, and social media icons. It drives the scroll-based navigation.

**Theme system**: Dark/light mode uses `next-themes` via `ThemeProvider`. Colors are defined as CSS variables in HSL format in `styles/globals.css` and consumed by Tailwind via `tailwind.config.js`.

**Content data**: All project data lives in `data/projects.ts` as a typed array. This is the single source of truth for both the home projects preview and the full `/projects` page.

**GitHub integration**: `lib/github.ts` fetches live GitHub activity data used in `CombinedActivitySection`.

### Styling

- Tailwind CSS v3 with class-based dark mode
- Custom CSS files in `styles/` for animations (flip cards, carousels, scroll behavior)
- shadcn/ui component conventions (`components.json` configures paths/aliases)
- `lib/utils.ts` exports the `cn()` helper (clsx + tailwind-merge)

### Testing

- Vitest + Testing Library + jsdom
- Tests in `__tests__/` mirroring the source structure (`components/`, `data/`, `lib/`)
- Setup file `vitest.setup.ts` imports `@testing-library/jest-dom`

### Build Notes

- `next.config.mjs` has `eslint.ignoreDuringBuilds: true` and `typescript.ignoreBuildErrors: true` — TypeScript/lint errors won't block builds
- Images are `unoptimized: true` — no Next.js image optimization
- Remote image sources: `i.ibb.co` and `raw.githubusercontent.com`
- Path alias `@/` resolves to the project root
