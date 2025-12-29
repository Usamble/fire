export const SITE_CONFIG = {
  name: 'FireHorse 2026',
  description: 'The FireHorse cycle returns in 2026. Join the community.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://firehorse2026.com',
  ogImage: '/og-image.png',
  links: {
    telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL || '#',
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || '#',
  },
} as const

