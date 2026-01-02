export const SITE_CONFIG = {
  name: 'FireHorse 2026',
  description: 'The FireHorse cycle returns in 2026. Join the community.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://firehorse2026.com',
  ogImage: '/og-image.png',
  contractAddress: '0x6a9540a84cd1a798a3b1a7cd74c7196cc3e24444',
  links: {
    telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/FireHorseOfficial',
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://x.com/BscFirehorse',
  },
} as const
