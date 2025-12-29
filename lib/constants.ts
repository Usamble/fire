export const SITE_CONFIG = {
  name: 'FireHorse 2026',
  description: 'The FireHorse cycle returns in 2026. Join the community.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://firehorse2026.com',
  ogImage: '/og-image.png',
  contractAddress: '0x704a78f1cee689f52aa691d966d38d4be01942a9',
  links: {
    telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL || '#',
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || '#',
  },
} as const

