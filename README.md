This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

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
