'use client'

import { SITE_CONFIG } from '@/lib/constants'
import { AnimateOnScroll } from './AnimateOnScroll'
import { ContractAddress } from './ContractAddress'
import Image from 'next/image'

// Generate ember positions once (consistent between SSR and client)
const generateEmberPositions = (count: number) => {
  return Array.from({ length: count }, () => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    width: Math.random() * 4 + 2,
    height: Math.random() * 4 + 2,
    opacity: Math.random() * 0.8 + 0.2,
    delay: Math.random() * 2,
    duration: Math.random() * 2 + 1,
    shadowSize: Math.random() * 10 + 5
  }))
}

const heroEmberPositions = generateEmberPositions(30)

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
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 25%, #dc2626 50%, #b91c1c 75%, #7f1d1d 100%)'
      }}
    >
      {/* Fire horse background images */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/1.jpg"
            alt="Fire Horse Background"
            fill
            className="object-cover"
            priority
            style={{ objectPosition: 'center' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/80 via-red-900/70 to-red-950/80"></div>
      </div>
      
      {/* Fire embers/sparks */}
      <div className="absolute inset-0 overflow-hidden">
        {heroEmberPositions.map((ember, i) => (
          <div
            key={i}
            className="absolute bg-orange-400 rounded-full animate-pulse"
            style={{
              top: `${ember.top}%`,
              left: `${ember.left}%`,
              width: `${ember.width}px`,
              height: `${ember.height}px`,
              opacity: ember.opacity,
              animationDelay: `${ember.delay}s`,
              animationDuration: `${ember.duration}s`,
              boxShadow: `0 0 ${ember.shadowSize}px rgba(255, 107, 53, 0.8)`
            }}
          />
        ))}
      </div>
      
      {/* Fire horse graphics in background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
        <Image
          src="/2.jpg"
          alt="Fire Horse"
          width={600}
          height={600}
          className="object-contain"
          priority
        />
      </div>
      
      <div className="absolute left-0 bottom-1/4 opacity-15 pointer-events-none hidden md:block">
        <Image
          src="/3.jpg"
          alt="Fire Horse"
          width={500}
          height={500}
          className="object-contain"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - Graphics */}
          <div className="order-2 lg:order-1">
            <AnimateOnScroll direction="right" delay={100}>
              <div className="flex flex-col items-center">
                {/* Chinese New Year Text */}
                <div className="mb-6 text-center px-4">
                  <h2 className="text-4xl sm:text-5xl font-black text-white mb-3 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] animate-bounce-slow" style={{ fontFamily: 'serif' }}>
                    新年快乐
                  </h2>
                  <p className="text-xl sm:text-2xl font-bold text-red-200 drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]">
                    HAPPY CHINESE NEW YEAR
                  </p>
                </div>

                {/* Fire Horse Graphic */}
                <div className="relative animate-scale-in w-full max-w-xs sm:max-w-sm">
                  <Image
                    src="/3.jpg"
                    alt="Fire Horse"
                    width={400}
                    height={400}
                    className="object-contain drop-shadow-[0_0_40px_rgba(255,140,0,0.8)] w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <AnimateOnScroll direction="left" delay={200}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-4 leading-tight font-calligraphy" style={{ 
              lineHeight: '1.1',
              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 25%, #ffd700 50%, #ff6b35 75%, #dc2626 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(255, 107, 53, 0.8))'
            }}>
              FIREHORSE
            </h1>
            
            <div className="mb-6">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-calligraphy" style={{
                background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 25%, #ffd700 50%, #ff6b35 75%, #dc2626 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(255, 107, 53, 0.8))'
              }}>
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
                className="group px-8 py-4 text-white font-black text-lg rounded-xl transition-all duration-300 shadow-2xl hover:scale-105 transform border-2"
                style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffd700 100%)',
                  borderColor: '#ffd700',
                  boxShadow: '0 0 30px rgba(255, 107, 53, 0.8), 0 0 60px rgba(255, 215, 0, 0.6)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(255, 107, 53, 1), 0 0 80px rgba(255, 215, 0, 0.8)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 107, 53, 0.8), 0 0 60px rgba(255, 215, 0, 0.6)'
                }}
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
            
            <div className="mb-6 w-full">
              <ContractAddress />
            </div>
            
            <div className="bg-red-900/50 backdrop-blur-sm rounded-xl p-5 border-3 border-red-500 w-full max-w-md mx-auto lg:mx-0 shadow-xl">
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

