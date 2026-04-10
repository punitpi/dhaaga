# Dhaaga by Nayana

Website for **Dhaaga by Nayana** — a handmade crochet business selling flowers, plushies, coasters, accessories, and custom gifts.

Live at [dhaaga.nayanamurthy.com](https://dhaaga.nayanamurthy.com) · Built with [Next.js 16](https://nextjs.org/) and deployed on [Vercel](https://vercel.com/).

## Features

- Responsive single-page layout
- Photo gallery with lightbox
- Vercel Analytics integrated
- OpenGraph metadata for social sharing
- Easy content configuration via a single `siteConfig` object in `app/page.tsx`

## Local Development

**Prerequisites:** Node.js 18+, npm

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm run start
```

## Updating Content

All site content (brand name, tagline, contact info, event details) is configured in the `siteConfig` object at the top of `app/page.tsx`.

Product images go in the `public/products/` folder. Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`.

## Deploying to Vercel

1. Push this repository to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no build configuration needed
4. Deploy. Vercel Analytics works automatically once deployed.

The custom domain `dhaaga.nayanamurthy.com` is configured in `app/layout.tsx`. Point the DNS to Vercel and add the domain under **Project Settings → Domains**.

## License

MIT — see [LICENSE](./LICENSE)
