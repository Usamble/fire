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

// Next Chinese New Year (adjust when needed)
const CNY_TARGET = new Date('2026-02-17T00:00:00+08:00').getTime()

const computeCountdown = () => {
  const diff = Math.max(0, CNY_TARGET - Date.now())
  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return { days, hours, minutes, seconds }
}

const pad = (n: number) => n.toString().padStart(2, '0')

export function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const [countdown, setCountdown] = useState(computeCountdown())

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(computeCountdown())
    }, 1000)
    return () => clearInterval(interval)
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
      className="h-screen flex flex-col items-center justify-center px-0 sm:px-6 lg:px-8 pt-0 pb-0 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #7f1d1d 0%, #b91c1c 45%, #ef4444 80%)'
      }}
    >
      {/* Glow fields */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/45" />
        <div className="absolute -left-20 top-10 w-72 h-72 rounded-full bg-amber-400/25 blur-3xl" />
        <div className="absolute -right-12 -top-10 w-80 h-80 rounded-full bg-rose-300/25 blur-3xl" />
        <div className="absolute left-24 bottom-0 w-72 h-72 rounded-full bg-orange-500/20 blur-3xl" />
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

      {/* Large countdown backdrop (subtle center) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="text-white/10 text-5xl sm:text-7xl lg:text-[8rem] font-black tracking-tight text-center"
          style={{
            textShadow:
              '0 0 18px rgba(255, 215, 0, 0.12), 0 0 28px rgba(255, 140, 0, 0.1), 0 0 8px rgba(0, 0, 0, 0.25)',
            WebkitTextStroke: '0.5px rgba(255,255,255,0.05)'
          }}
        >
          {countdown.days}D {pad(countdown.hours)}:{pad(countdown.minutes)}:{pad(countdown.seconds)}
        </div>
      </div>

      <div className="w-full relative z-10 py-0">
        <div className="flex flex-col items-center gap-2 sm:gap-3 text-center">
          <AnimateOnScroll direction="up" delay={100}>
            <div className="relative flex justify-center w-full">
              <div className="absolute -left-8 -top-8 w-48 h-48 bg-amber-200/30 blur-3xl hidden sm:block" />
              <div className="absolute -right-8 bottom-0 w-56 h-56 bg-rose-300/25 blur-3xl hidden sm:block" />
              <div className="relative w-full max-w-[900px] sm:max-w-[1000px] lg:max-w-[1100px] mx-auto">
                <Image
                  src="/cartoon-standing.png"
                  alt="Hero FireHorse"
                  width={3600}
                  height={3600}
                  className="object-contain drop-shadow-[0_0_65px_rgba(255,214,102,0.65)] w-full h-auto"
                  priority
                  quality={90}
                  sizes="(max-width: 640px) 98vw, (max-width: 1024px) 95vw, 1800px"
                />
                {/* Text overlay ako overlay v dolnej polovici obrázka */}
                <div
                  className="absolute left-0 right-0 flex justify-center"
                  style={{ bottom: '12%' }}
                >
                  <h1
                    className="font-headline text-3xl sm:text-7xl lg:text-8xl xl:text-9xl leading-tight text-white"
                    style={{ 
                      textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)',
                      WebkitTextStroke: '1px rgba(0,0,0,0.3)'
                    }}
                  >
                    FireHorse
                  </h1>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
