# Fire Horse 2026 Website

A fast, mobile-first landing page for Fire Horse 2026 memecoin built with Next.js and Tailwind CSS.

## Features

- 🚀 Next.js 14+ with App Router and Static Site Generation
- 🎨 Tailwind CSS for styling
- 📱 Mobile-first responsive design
- ⚡ Performance optimized

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Update environment variables (optional):
   - `NEXT_PUBLIC_TELEGRAM_URL`: Telegram link (defaults to '#')
   - `NEXT_PUBLIC_TWITTER_URL`: X/Twitter link (defaults to '#')

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main landing page
│   ├── privacy/           # Privacy policy page
│   └── terms/             # Terms of service page
├── components/             # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Section*.tsx       # Content sections
│   ├── FAQ.tsx
│   └── Footer.tsx
├── content/               # Content files
│   ├── home.mdx
│   ├── faq.mdx
│   └── metadata.json
├── lib/                   # Utilities
│   ├── utils.ts           # Utility functions
│   └── constants.ts       # Site constants
└── public/                # Static assets
    └── favicon.ico        # Favicon
```

## Content Management

Edit content directly in the component files or update the `content/` directory files.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The site uses Static Site Generation (SSG), so it can be deployed to any static hosting service:
- Cloudflare Pages
- Netlify
- GitHub Pages (with export)

## Performance

The site is optimized for fast loading with:
- Static Site Generation (SSG)
- System fonts (no external font loading)
- Minimal JavaScript bundle

## License

Private project - All rights reserved

