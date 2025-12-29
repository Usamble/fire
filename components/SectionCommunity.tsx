'use client'

import { SITE_CONFIG } from '@/lib/constants'

export function SectionCommunity() {
  const handleTelegramClick = () => {
    window.open(SITE_CONFIG.links.telegram, '_blank', 'noopener,noreferrer')
  }

  const handleTwitterClick = () => {
    window.open(SITE_CONFIG.links.twitter, '_blank', 'noopener,noreferrer')
  }

  const handleChartClick = () => {
    window.open(`https://dexscreener.com/bsc/${SITE_CONFIG.contractAddress}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="community"
      className="relative py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(135deg, #8B0000 0%, #A52A2A 25%, #DC143C 50%, #8B0000 75%, #6B0000 100%)'
      }}
    >
      {/* Ancient Chinese clouds background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${100 + Math.random() * 200}px`,
              height: `${60 + Math.random() * 100}px`,
              background: 'rgba(245, 230, 211, 0.15)',
              filter: 'blur(40px)'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 sm:mb-4 text-white uppercase tracking-wider px-2" style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 900,
            letterSpacing: '0.1em',
            textShadow: '2px 2px 0px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.8)'
          }}>
            JOIN OUR COMMUNITY!
          </h2>
        </div>

        {/* Social Media Buttons */}
        <div className="flex justify-center gap-4 sm:gap-6">
          <button
            onClick={handleTwitterClick}
            className="w-16 h-16 sm:w-20 sm:h-20 bg-black hover:bg-gray-900 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-110 transform border-3 sm:border-4 border-white"
          >
            <span className="text-white text-2xl sm:text-3xl font-black">X</span>
          </button>
          <button
            onClick={handleTelegramClick}
            className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-110 transform border-3 sm:border-4 border-white"
          >
            <span className="text-white text-2xl sm:text-3xl">💬</span>
          </button>
          <button
            onClick={handleChartClick}
            className="w-16 h-16 sm:w-20 sm:h-20 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-110 transform border-3 sm:border-4 border-white"
          >
            <span className="text-white text-2xl sm:text-3xl">📊</span>
          </button>
        </div>
      </div>
    </section>
  )
}

