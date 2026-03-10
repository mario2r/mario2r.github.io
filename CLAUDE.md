# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Mario Romero Rodriguez (Principal iOS Engineer). Built with Create React App, TypeScript, and SCSS. Deployed to GitHub Pages via Netlify with `_redirects` in `public/`.

## Commands

- **Dev server:** `npm start` (runs on http://localhost:3000)
- **Build:** `npm run build`
- **Tests:** `npm test` (Jest + React Testing Library)
- **Deploy:** `npm run deploy` (builds then deploys to GitHub Pages via gh-pages)

## Architecture

- **Entry point:** `src/index.tsx` → `src/App.tsx`
- **Components:** `src/components/` — each section is a standalone component (Main, Expertise, Timeline, Project, Navigation, Footer) exported via `src/components/index.js` barrel file
- **Component rendering order in App.tsx:** Navigation → Main → Expertise → Timeline → Project → Footer (wrapped in FadeIn for animations)
- **Styles:** Each component has a matching SCSS file in `src/assets/styles/` (e.g., `Main.scss` for `Main.tsx`)
- **Images:** `src/assets/images/` — avatar, backgrounds, project mockups
- **Dark/light mode:** Managed via `mode` state in App.tsx, toggled through Navigation, applied as CSS class on root container

## Key Patterns

- Components use FontAwesome icons (`@fortawesome/free-brands-svg-icons`) and MUI components (`@mui/material`, `@mui/icons-material`)
- Navigation uses MUI AppBar with a responsive drawer for mobile
- Images must be imported as modules (not referenced by string path) for the bundler to resolve them
- Section scroll targets use element `id` attributes (e.g., `id="expertise"`, `id="history"`, `id="projects"`)
