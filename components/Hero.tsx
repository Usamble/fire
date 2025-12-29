'use client'

import { useState, useEffect } from 'react'
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

// Generate fewer embers - will be filtered on mobile in component
const heroEmberPositions = generateEmberPositions(30)

export function Hero() {
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

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-3 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-6 sm:pb-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #8B0000 0%, #A52A2A 25%, #DC143C 50%, #8B0000 75%, #6B0000 100%)'
      }}
    >
      {/* Fire horse background images - lazy load on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/1.jpg"
            alt="Fire Horse Background"
            fill
            className="object-cover"
            priority
            loading="eager"
            quality={75}
            style={{ objectPosition: 'center' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/80 via-red-900/70 to-red-950/80"></div>
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
          src="/image.png"
          alt="Fire Horse"
          width={500}
          height={500}
          className="object-contain"
          loading="lazy"
          quality={75}
        />
      </div>
      
      {/* Ancient Chinese beige/cream clouds background - fewer on mobile */}
      <div className="absolute inset-0 overflow-hidden opacity-25">
        {Array.from({ length: 15 }).slice(0, isMobile ? 8 : 15).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${120 + Math.random() * 250}px`,
              height: `${70 + Math.random() * 120}px`,
              background: 'rgba(245, 230, 211, 0.25)',
              filter: 'blur(50px)'
            }}
          />
        ))}
      </div>
      
      {/* Fire embers/sparks - fewer on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden">
        {heroEmberPositions.slice(0, isMobile ? 15 : 30).map((ember, i) => (
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

      <div className="max-w-7xl mx-auto relative z-10 py-4 sm:py-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left side - Graphics */}
          <div className="order-1 lg:order-1">
            <AnimateOnScroll direction="right" delay={100}>
              <div className="flex flex-col items-center">
                {/* Chinese New Year Text */}
                <div className="mb-4 sm:mb-6 text-center px-2 sm:px-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 sm:mb-3 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] animate-bounce-slow" style={{ fontFamily: 'serif' }}>
                    新年快乐
                  </h2>
                  <p className="text-base sm:text-xl lg:text-2xl font-bold drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]" style={{ color: '#FFD700' }}>
                    HAPPY CHINESE NEW YEAR
                  </p>
                </div>

                {/* Fire Horse Graphic - without background */}
                <div className="relative animate-scale-in w-full max-w-[280px] sm:max-w-md lg:max-w-lg xl:max-w-xl">
                  <Image
                    src="/image.png"
                    alt="Fire Horse"
                    width={800}
                    height={800}
                    className="object-contain drop-shadow-[0_0_50px_rgba(218,165,32,0.9)] w-full h-auto"
                    priority
                    quality={85}
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 400px, 600px"
                    style={{
                      filter: 'drop-shadow(0 0 30px rgba(255, 215, 0, 0.7)) drop-shadow(0 0 60px rgba(255, 140, 0, 0.5))'
                    }}
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right side - Content */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <AnimateOnScroll direction="left" delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 leading-tight font-calligraphy" style={{ 
              lineHeight: '1.1',
              background: 'linear-gradient(135deg, #FFD700 0%, #DAA520 25%, #FFA500 50%, #FFD700 75%, #F4A460 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(218, 165, 32, 0.8))'
            }}>
              FIREHORSE
            </h1>
            
            <div className="mb-4 sm:mb-6">
              <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-calligraphy" style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #DAA520 25%, #FFA500 50%, #FFD700 75%, #F4A460 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(218, 165, 32, 0.8))'
              }}>
                2026
              </span>
            </div>
            
            <div className="mb-4 sm:mb-6">
              <p className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-1 sm:mb-2 drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]">
                Bing-Wu
              </p>
              <p className="text-base sm:text-xl lg:text-2xl font-bold drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]" style={{ color: '#FFD700' }}>
                60-Year Signal Returns
              </p>
            </div>
            
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 font-bold drop-shadow-[0_0_4px_rgba(0,0,0,0.8)] leading-relaxed px-2 sm:px-0">
              The FireHorse cycle returns in 2026. A rare 60-year astronomical event. 
              The meme that waited six decades.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 px-2 sm:px-0">
              <button
                onClick={handleTelegramClick}
                className="group px-6 sm:px-8 py-3 sm:py-4 text-white font-black text-base sm:text-lg rounded-xl transition-all duration-300 shadow-2xl hover:scale-105 transform border-2"
                style={{
                  background: 'linear-gradient(135deg, #8B0000 0%, #A52A2A 50%, #DC143C 100%)',
                  borderColor: '#DAA520',
                  boxShadow: '0 0 30px rgba(139, 0, 0, 0.8), 0 0 60px rgba(218, 165, 32, 0.6)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(139, 0, 0, 1), 0 0 80px rgba(218, 165, 32, 0.8)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(139, 0, 0, 0.8), 0 0 60px rgba(218, 165, 32, 0.6)'
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  💬 Join Telegram
                </span>
              </button>
              <button
                onClick={handleTwitterClick}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-black hover:bg-gray-900 text-white font-black text-base sm:text-lg rounded-xl transition-all duration-300 shadow-2xl hover:shadow-black/50 hover:scale-105 transform border-2 border-white"
              >
                <span className="flex items-center justify-center gap-2">
                  🐦 Follow on X
                </span>
              </button>
            </div>
            
            <div className="mb-4 sm:mb-6 w-full px-2 sm:px-0">
              <ContractAddress />
            </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center px-2">
          <AnimateOnScroll direction="up" delay={500}>
            <div className="inline-block backdrop-blur-sm px-4 sm:px-8 py-3 sm:py-4 rounded-full border-3 shadow-xl" style={{
              background: 'rgba(139, 0, 0, 0.5)',
              borderColor: '#DAA520'
            }}>
              <p className="text-white font-black text-base sm:text-lg lg:text-xl drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]">
                🚀 TO THE MOON! 🌙
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

