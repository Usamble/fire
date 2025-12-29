'use client'

import { SITE_CONFIG } from '@/lib/constants'
import { ZodiacWheel } from './ZodiacWheel'
import { AnimateOnScroll } from './AnimateOnScroll'
import Image from 'next/image'

export function Hero() {
  const handleTelegramClick = () => {
    window.open(SITE_CONFIG.links.telegram, '_blank', 'noopener,noreferrer')
  }

  const handleTwitterClick = () => {
    window.open(SITE_CONFIG.links.twitter, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-8 relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-700"
    >
      {/* Red stylized horse in background - using provided horse.png */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none hidden lg:block">
        <Image
          src="/horse.png"
          alt="Fire Horse"
          width={600}
          height={600}
          className="object-contain"
          priority
        />
      </div>
      
      {/* Red stylized horse on left side */}
      <div className="absolute left-0 bottom-1/4 opacity-35 pointer-events-none hidden md:block">
        <Image
          src="/horse.png"
          alt="Fire Horse"
          width={500}
          height={500}
          className="object-contain"
          priority
        />
      </div>
      
      {/* Additional smaller red horse for mobile */}
      <div className="absolute right-0 top-1/3 opacity-30 pointer-events-none md:hidden">
        <Image
          src="/horse.png"
          alt="Fire Horse"
          width={400}
          height={400}
          className="object-contain"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Graphics */}
          <div className="order-2 lg:order-1">
            <AnimateOnScroll direction="right" delay={100}>
              <div className="flex flex-col items-center">
                {/* Chinese New Year Text */}
                <div className="mb-12 text-center">
                  <h2 className="text-5xl sm:text-6xl font-black text-white mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] animate-bounce-slow" style={{ fontFamily: 'serif' }}>
                    新年快乐
                  </h2>
                  <p className="text-2xl sm:text-3xl font-bold text-red-200 drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]">
                    HAPPY CHINESE NEW YEAR
                  </p>
                </div>

                {/* Zodiac Wheel */}
                <div className="bg-red-900/40 backdrop-blur-sm rounded-full p-8 border-4 border-red-600 animate-scale-in">
                  <ZodiacWheel />
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <AnimateOnScroll direction="left" delay={200}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-4 leading-tight font-calligraphy" style={{ lineHeight: '1.1' }}>
              FIREHORSE
            </h1>
            
            <div className="mb-6">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-calligraphy">
                2026
              </span>
            </div>
            
            <div className="mb-6">
              <p className="text-2xl sm:text-3xl font-black text-white mb-2 drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]">
                Bing-Wu
              </p>
              <p className="text-xl sm:text-2xl font-bold text-red-200 drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]">
                60-Year Signal Returns
              </p>
            </div>
            
            <p className="text-xl sm:text-2xl text-white mb-8 max-w-xl mx-auto lg:mx-0 font-bold drop-shadow-[0_0_4px_rgba(0,0,0,0.8)] leading-relaxed">
              The FireHorse cycle returns in 2026. A rare 60-year astronomical event. 
              The meme that waited six decades.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={handleTelegramClick}
                className="group px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-black text-lg rounded-xl transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transform border-2 border-blue-300"
              >
                <span className="flex items-center justify-center gap-2">
                  💬 Join Telegram
                </span>
              </button>
              <button
                onClick={handleTwitterClick}
                className="group px-8 py-4 bg-black hover:bg-gray-900 text-white font-black text-lg rounded-xl transition-all duration-300 shadow-2xl hover:shadow-black/50 hover:scale-105 transform border-2 border-white"
              >
                <span className="flex items-center justify-center gap-2">
                  🐦 Follow on X
                </span>
              </button>
            </div>
            
            <div className="bg-red-900/50 backdrop-blur-sm rounded-xl p-5 border-3 border-red-500 max-w-md mx-auto lg:mx-0 shadow-xl">
              <p className="text-white font-black text-base mb-2 drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">⚡ Rare 60-Year Cycle ⚡</p>
              <p className="text-red-200 text-sm font-bold drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">Last: 1966 • Before: 1906 • Next: 2026</p>
            </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 text-center">
          <AnimateOnScroll direction="up" delay={500}>
            <div className="inline-block bg-red-900/50 backdrop-blur-sm px-8 py-4 rounded-full border-3 border-red-500 shadow-xl">
              <p className="text-white font-black text-xl drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]">
                🚀 TO THE MOON! 🌙
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

