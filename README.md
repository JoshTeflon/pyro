# ii6 pyro Official Website

Custom-built multilingual artist website for ii6 pyro, focused on immersive visuals, smooth section transitions, and direct fan connection.

## Portfolio Purpose

This project is the official digital portfolio experience for ii6 pyro.

- Present the artist's brand and story in an interactive format
- Showcase music, visual content, and social touchpoints
- Convert visitors into subscribers via a direct email join flow
- Support an international audience with localized content

## What This Project Includes

- Single-page section flow: Home, Music, Gallery, Connect
- Responsive & high-fidelity media assets for music covers, gallery images, and video posters
- Locale-aware routing with `next-intl` (`en`, `fr`, `es`, `de`, `it`, `nl`, `pt`, `ja`)

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- GSAP & WebGL
- next-intl

## pnpm Workflow

This repo is scoped to `pnpm` commands.

## Local Development

### 1. Install dependencies

```bash
pnpm install
```

### 2. Run the app

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Scripts

```bash
pnpm dev     # Start development server
pnpm build   # Build production bundle
pnpm start   # Start production server
pnpm lint    # Run Next.js lint checks
```