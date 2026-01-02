'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/constants'

export function SectionCommunity() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  const handleTelegramClick = () => {
    window.open(SITE_CONFIG.links.telegram, '_blank', 'noopener,noreferrer')
  }

  const handleTwitterClick = () => {
    window.open(SITE_CONFIG.links.twitter, '_blank', 'noopener,noreferrer')
  }

  const handleChartClick = () => {
    window.open('https://dexscreener.com/bsc/0x2888025faa7172285607fbb0993fba1edfdce58d', '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="community"
      className="relative py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8"
      style={{
        background:
          'radial-gradient(circle at 20% 18%, rgba(255, 216, 130, 0.25) 0, transparent 26%), radial-gradient(circle at 84% 12%, rgba(255, 170, 130, 0.28) 0, transparent 24%), linear-gradient(135deg, #ff7b54 0%, #ef4444 40%, #9f1239 90%)'
      }}
    >
      <div
        className="absolute inset-0 opacity-45 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 10px 10px, rgba(255, 239, 199, 0.2) 6px, transparent 0), radial-gradient(circle at 34px 34px, rgba(255, 239, 199, 0.18) 6px, transparent 0)',
          backgroundSize: '150px 150px'
        }}
      ></div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/cartoon-standing.png"
          alt="Sticker horse"
          width={260}
          height={260}
          className="absolute -left-8 bottom-0 rotate-6 opacity-80 drop-shadow-[0_28px_32px_rgba(0,0,0,0.28)] hidden lg:block"
          quality={85}
        />
        <Image
          src="/cartoon-falling.png"
          alt="Sticker horse"
          width={220}
          height={220}
          className="absolute right-4 -top-6 -rotate-6 opacity-70 drop-shadow-[0_24px_26px_rgba(0,0,0,0.24)] hidden md:block"
          quality={85}
        />
        <Image
          src="/cartoon-standing.png"
          alt="Badge"
          width={140}
          height={140}
          className="absolute right-6 bottom-6 rotate-12 opacity-80 drop-shadow-[0_18px_20px_rgba(0,0,0,0.18)] hidden sm:block"
          quality={85}
        />
      </div>
      {/* Ancient Chinese clouds background - fewer on mobile */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 10 }).slice(0, isMobile ? 5 : 10).map((_, i) => (
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
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4 text-white px-2 drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)]">
            JOIN OUR COMMUNITY!
          </h2>
        </div>

        {/* Social Media Buttons */}
        <div className="flex justify-center gap-4 sm:gap-6">
          <button
            onClick={handleTwitterClick}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_18px_24px_rgba(0,0,0,0.35)] hover:scale-110 hover:-translate-y-1 transform border-[3px] sm:border-4"
            style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1f2937 50%, #0b1224 100%)',
              borderColor: 'rgba(255,255,255,0.8)'
            }}
          >
            <span className="text-white text-2xl sm:text-3xl font-black">X</span>
          </button>
          <button
            onClick={handleTelegramClick}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_18px_24px_rgba(0,0,0,0.35)] hover:scale-110 hover:-translate-y-1 transform border-[3px] sm:border-4"
            style={{
              background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 50%, #60a5fa 100%)',
              borderColor: 'rgba(255,255,255,0.8)'
            }}
          >
            <span className="text-white text-2xl sm:text-3xl">💬</span>
          </button>
          <button
            onClick={handleChartClick}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_18px_24px_rgba(0,0,0,0.35)] hover:scale-110 hover:-translate-y-1 transform border-[3px] sm:border-4"
            style={{
              background: 'linear-gradient(135deg, #15803d 0%, #22c55e 50%, #bbf7d0 100%)',
              borderColor: 'rgba(255,255,255,0.85)'
            }}
          >
            <span className="text-white text-2xl sm:text-3xl">📊</span>
          </button>
        </div>
      </div>
    </section>
  )
}
