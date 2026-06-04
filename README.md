# Sino-Africa

Marketing website for Sino-Africa Trading, built with Next.js 16 (App Router) and backed by a Strapi CMS.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, standalone output, Webpack)
- **UI:** React 19, [Tailwind CSS v4](https://tailwindcss.com), [Framer Motion](https://www.framer.com/motion/), [lucide-react](https://lucide.dev) icons
- **State / data:** [Redux Toolkit](https://redux-toolkit.js.org) + RTK Query (`src/store/strapiApi.ts`)
- **CMS:** [Strapi](https://strapi.io), rendered via `@strapi/blocks-react-renderer`

## Project Structure

The UI is organized by feature under [`src/features/`](src/features/):

| Feature | Description |
| --- | --- |
| `home` | Landing page (hero, verticals, why-choose-us, contact sections) |
| `about` | Company about page |
| `our-verticals` / `vertical-detail` | Business verticals listing and detail pages |
| `technology` | Technology offering page |
| `projects` | Projects showcase |
| `blogs` | Blog listing and detail pages (CMS-driven) |
| `careers` | Career listings and detail pages |
| `contact` | Contact page |

Shared layout (`Nav`, `Footer`, `FloatingSocialBar`) lives in [`src/components/layout/`](src/components/layout/), and Strapi/contact helpers live in [`src/lib/`](src/lib/).

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server (Webpack) |
| `npm run build` | Production build (standalone output) |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Environment Variables

Copy [`.env.example`](.env.example) and fill in the values:

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_STRAPI_URL` | Base URL of the Strapi CMS (exposed to the browser). The optional trailing `/api` is stripped automatically. |
| `STRAPI_URL` | Optional server-only override for the CMS origin; takes precedence over `NEXT_PUBLIC_STRAPI_URL`. |

## ⚙️ Deployment

This project is deployed automatically to cPanel (CloudLinux) via GitHub Actions on every push to `dev`.

### How it works

The CI/CD pipeline ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) runs three stages:

1. **Build on the GitHub Actions runner**
   - Installs all dependencies with `npm ci`
   - Builds the Next.js app with `npm run build` (standalone output, Node 22)
   - Running on the GitHub-hosted runner avoids memory limits on the shared cPanel server

2. **Copy build artifacts to the server**
   - Transfers the compiled `.next/` directory and `public/` assets to the cPanel server via SCP

3. **Update code and restart**
   - Uses `git fetch` + `git reset --hard origin/dev` to update source files (avoids triggering CloudLinux's post-merge hook)
   - Touches `tmp/restart.txt` to trigger a Passenger app restart

### Required GitHub Secrets

Set these in **Settings → Secrets and variables → Actions**:

| Secret | Description |
| --- | --- |
| `DEPLOY_HOST` | cPanel server hostname or IP |
| `DEPLOY_USER` | SSH username (cPanel account) |
| `DEPLOY_SSH_KEY` | Private SSH key for the cPanel user |
