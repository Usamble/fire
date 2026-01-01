'use client'

import { SITE_CONFIG } from '@/lib/constants'
import { AnimateOnScroll } from './AnimateOnScroll'
import Image from 'next/image'

// Generate ember positions once (consistent between SSR and client)
const generateEmberPositions = (count: number) => {
  return Array.from({ length: count }, () => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    width: Math.random() * 4 + 2,
    height: Math.random() * 4 + 2,
    opacity: Math.random() * 0.6 + 0.3,
    delay: Math.random() * 2,
    shadowSize: Math.random() * 10 + 5
  }))
}

const ctaEmberPositions = generateEmberPositions(25)

export function SectionCTA() {
  const handleTelegramClick = () => {
    window.open(SITE_CONFIG.links.telegram, '_blank', 'noopener,noreferrer')
  }

  const handleTwitterClick = () => {
    window.open(SITE_CONFIG.links.twitter, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900 via-red-800 to-red-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 text-8xl animate-float">🚀</div>
        <div className="absolute bottom-10 right-10 text-8xl animate-float" style={{ animationDelay: '1.5s' }}>🌙</div>
      </div>
      
      {/* Fire horse background */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <Image
          src="/cartoon-6.jpg"
          alt="Fire Horse Background"
          fill
          className="object-cover"
          style={{ objectPosition: 'center' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-red-950/70 via-red-900/60 to-red-950/70"></div>
      
      {/* Fire embers */}
      <div className="absolute inset-0 overflow-hidden">
        {ctaEmberPositions.map((ember, i) => (
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
              boxShadow: `0 0 ${ember.shadowSize}px rgba(255, 107, 53, 0.8)`
            }}
          />
        ))}
      </div>
      
      {/* Red stylized horse in background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden lg:block">
        <Image
          src="/cartoon-2.jpg"
          alt="FireHorse"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <AnimateOnScroll direction="down" delay={0}>
          <div className="mb-6">
            <span className="text-7xl animate-bounce-slow">🔥</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
            JOIN THE FIREHORSE ARMY
          </h2>
          <p className="text-2xl sm:text-3xl text-white font-black mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
            Be part of the 60-year cycle tradition
          </p>
          <p className="text-xl sm:text-2xl text-white mb-12 font-bold drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]">
            Connect with the community. Ride the wave! 🌊
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll direction="up" delay={200}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={handleTelegramClick}
            className="group px-12 py-6 bg-white hover:bg-red-50 text-red-900 font-black text-2xl rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-white/50 hover:scale-110 transform border-4 border-red-600"
          >
            <span className="flex items-center justify-center gap-3">
              💬 Join Telegram
            </span>
          </button>
          <button
            onClick={handleTwitterClick}
            className="group px-12 py-6 bg-black hover:bg-gray-900 text-white font-black text-2xl rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-black/50 hover:scale-110 transform border-4 border-white"
          >
            <span className="flex items-center justify-center gap-3">
              🐦 Follow on X
            </span>
          </button>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll direction="fade" delay={400}>
          <div className="mt-12 text-white text-3xl sm:text-4xl font-black drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
            🚀 TO THE MOON! 🚀
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

