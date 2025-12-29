'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/constants'

interface StorySection {
  id: string
  title?: string
  text: string
  image?: string
  imagePosition?: 'left' | 'right' | 'center'
}

const storySections: StorySection[] = [
  {
    id: 'legend',
    title: 'THE LEGEND RETURNS',
    text: `The **FireHorse (Bing-Wu)** cycle returns in **2026**, marking another **60-year milestone** in the Chinese zodiac calendar!

This **RARE** and **POWERFUL** combination occurs only once every six decades. It brings transformation, opportunity, and **UNSTOPPABLE MOMENTUM!** ⚡

Last FireHorse: **1966** | Before that: **1906** | Next: **2026** 🚀`,
    image: '/horse.png',
    imagePosition: 'right'
  },
  {
    id: 'cycle60',
    title: '⚡ THE 60-YEAR CYCLE ⚡',
    text: `Chinese zodiac operates on a 60-year cycle. FireHorse returns every 60 years!

📅 **1906**
The first FireHorse of the modern era. The cycle begins! 🔥

⚡ **1966**
Cultural revolution era. FireHorse energy unleashed! 🚀

🔥 **2026**
THE NEXT CHAPTER! Be part of history! 🚀 TO THE MOON! 🌙

⏰ **Next FireHorse: 2086**
Don&apos;t miss this rare 60-year opportunity!`,
    image: '/horse.png',
    imagePosition: 'left'
  },
  {
    id: 'symbolism',
    title: '🔮 THE POWER OF FIREHORSE',
    text: `The **FireHorse** represents **PASSION, ENERGY**, and **UNSTOPPABLE MOMENTUM!** 🚀

🔥 **FIRE ELEMENT**
Represents **PASSION, TRANSFORMATION**, and the burning drive to succeed! Fire brings **ENERGY** and **INTENSITY** to everything! ⚡

🐴 **HORSE SIGN**
Symbolizes **FREEDOM, SPEED**, and unstoppable forward motion! The Horse **NEVER LOOKS BACK**, always charging ahead! 🚀

🔥 **FIRE + HORSE = UNSTOPPABLE FORCE** 🔥
Transformation • Innovation • Greatness Against All Odds`,
    image: '/horse.png',
    imagePosition: 'center'
  },
  {
    id: 'token',
    title: 'THE TOKEN',
    text: `FireHorse 2026 represents more than just a token—it&apos;s a **SYMBOL** of the cycle&apos;s return and a **COMMUNITY** united by tradition and forward momentum! 🚀

👥 **COMMUNITY-DRIVEN**
This is a **COMMUNITY PROJECT** celebrating the **60-YEAR CYCLE** tradition! Join us in commemorating this **RARE ASTRONOMICAL EVENT**! ✨

⚠️ **DISCLAIMER:** This is **NOT** financial advice. Always do your own research (DYOR) and never invest more than you can afford to lose! ⚠️`,
    image: '/horse.png',
    imagePosition: 'right'
  },
  {
    id: 'cta',
    title: 'JOIN THE FIREHORSE ARMY',
    text: `Be part of the 60-year cycle tradition!

Connect with the community. Ride the wave! 🌊`,
    image: '/horse.png',
    imagePosition: 'left'
  }
]

// Generate star positions once (consistent between SSR and client)
const generateStarPositions = () => {
  return Array.from({ length: 20 }, () => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
    opacity: Math.random() * 0.4 + 0.6,
    shadowSize: Math.random() * 0.3 + 0.3
  }))
}

const starPositions = generateStarPositions()

export function ScrollStory() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])
  const scrollAccumulator = useRef(0)
  const touchStartX = useRef<number | null>(null)
  const touchCurrentX = useRef<number | null>(null)

  useEffect(() => {
    // Activate when component mounts (after EXPLORE is clicked)
    setIsActive(true)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || !isActive) return

    const updateSection = (direction: 'next' | 'prev') => {
      setCurrentSection((prev) =>
        direction === 'next'
          ? Math.min(storySections.length - 1, prev + 1)
          : Math.max(0, prev - 1)
      )
    }

    const accumulateScroll = (delta: number) => {
      scrollAccumulator.current += delta
      const threshold = 50 // Lower threshold for more responsive scrolling

      if (Math.abs(scrollAccumulator.current) >= threshold) {
        const direction = scrollAccumulator.current > 0 ? 'next' : 'prev'
        scrollAccumulator.current = 0
        updateSection(direction)
      }
    }

    // Convert wheel/trackpad scrolling (including horizontal swipes) into section changes
    const handleWheel = (e: WheelEvent) => {
      // Always use deltaY for vertical scrolling
      const delta = e.deltaY

      if (delta === 0) return

      e.preventDefault()
      e.stopPropagation()
      accumulateScroll(delta)
    }

    // Touch swipe handlers to move between sections
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return
      const touchX = e.touches[0].clientX
      touchStartX.current = touchX
      touchCurrentX.current = touchX
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartX.current === null) return
      touchCurrentX.current = e.touches[0].clientX
    }

    const handleTouchEnd = () => {
      if (touchStartX.current === null || touchCurrentX.current === null) {
        touchStartX.current = null
        touchCurrentX.current = null
        return
      }

      const deltaX = touchStartX.current - touchCurrentX.current
      const swipeThreshold = 50

      if (Math.abs(deltaX) >= swipeThreshold) {
        updateSection(deltaX > 0 ? 'next' : 'prev')
      }

      touchStartX.current = null
      touchCurrentX.current = null
    }

    const container = containerRef.current
    const documentElement = typeof document !== 'undefined' ? document.documentElement : null

    // Add listener to both window and container for better coverage
    window.addEventListener('wheel', handleWheel, { passive: false })
    container?.addEventListener('wheel', handleWheel, { passive: false })
    container?.addEventListener('touchstart', handleTouchStart, { passive: true })
    container?.addEventListener('touchmove', handleTouchMove, { passive: true })
    container?.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      container?.removeEventListener('wheel', handleWheel)
      container?.removeEventListener('touchstart', handleTouchStart)
      container?.removeEventListener('touchmove', handleTouchMove)
      container?.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isActive])

  return (
    <div 
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ 
        minHeight: '100vh',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {storySections.map((section, index) => {
        const isActive = currentSection === index
        // Calculate horizontal position: active section is centered, others slide in from right or left
        const translateX = isActive ? 0 : (index < currentSection ? -100 : 100)
        
        return (
          <div
            key={section.id}
            ref={(el) => { sectionsRef.current[index] = el }}
            className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-in-out"
            style={{ 
              background: index % 2 === 0 
                ? 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 25%, #dc2626 50%, #b91c1c 75%, #7f1d1d 100%)'
                : 'linear-gradient(135deg, #991b1b 0%, #dc2626 25%, #b91c1c 50%, #7f1d1d 75%, #991b1b 100%)',
              transform: `translateX(${translateX}%)`,
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 10 : Math.abs(index - currentSection),
              pointerEvents: isActive ? 'auto' : 'none',
              width: '100%',
              height: '100%',
              minHeight: '100vh'
            }}
          >
            {/* Fire background overlay */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <Image
                src={`/${(index % 6) + 1}.jpg`}
                alt="Fire Horse Background"
                fill
                className="object-cover"
                style={{ objectPosition: 'center' }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-red-950/60 via-red-900/50 to-red-950/60"></div>
            
            {/* Fire embers/sparks */}
            <div className="absolute inset-0 overflow-hidden">
              {starPositions.map((star, i) => (
                <div
                  key={i}
                  className="absolute rounded-full animate-pulse"
                  style={{
                    top: `${star.top}%`,
                    left: `${star.left}%`,
                    width: `${star.size * 2}px`,
                    height: `${star.size * 2}px`,
                    animationDelay: `${star.delay}s`,
                    background: `radial-gradient(circle, rgba(255, 107, 53, ${star.opacity}) 0%, rgba(255, 215, 0, ${star.shadowSize}) 50%, transparent 100%)`,
                    boxShadow: `0 0 ${star.size * 3}px rgba(255, 107, 53, 0.8)`
                  }}
                />
              ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
              <div className={`grid ${section.imagePosition === 'center' ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-12 items-center`}>
                {/* Image */}
                {section.image && (
                  <div className={`flex justify-center ${section.imagePosition === 'right' ? 'lg:order-2' : ''}`}>
                    <div className="relative">
                      <Image
                        src={`/${(index % 6) + 1}.jpg`}
                        alt="FireHorse"
                        width={500}
                        height={500}
                        className={`object-contain transition-all duration-1000 ${
                          isActive ? 'scale-110 opacity-100 brightness-110' : 'scale-95 opacity-50 brightness-75'
                        }`}
                        style={{ 
                          filter: isActive 
                            ? 'drop-shadow(0 0 50px rgba(255, 107, 53, 0.8)) drop-shadow(0 0 80px rgba(255, 215, 0, 0.6))'
                            : 'drop-shadow(0 0 20px rgba(255, 107, 53, 0.4))'
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Text Box */}
                <div className={`lore-text-box rounded-2xl p-8 ${section.imagePosition === 'right' ? 'lg:order-1' : ''}`}>
                  {section.title && (
                    <h3 className="text-3xl sm:text-4xl font-black text-white mb-6 text-center drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
                      {section.title}
                    </h3>
                  )}
                  <div className="text-white space-y-4 text-lg sm:text-xl leading-relaxed">
                    <div 
                      className={isActive ? 'opacity-100' : 'opacity-60'} 
                      style={{ whiteSpace: 'pre-line' }}
                      dangerouslySetInnerHTML={{ 
                        __html: section.text
                          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-orange-300 font-black">$1</strong>')
                          .replace(/\n/g, '<br />')
                      }}
                    />
                    {section.id === 'cta' && (
                      <>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                          <button
                            onClick={() => window.open(SITE_CONFIG.links.telegram, '_blank', 'noopener,noreferrer')}
                            className="px-8 py-4 bg-white hover:bg-red-50 text-red-900 font-black text-xl rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-white/50 hover:scale-110 transform border-4 border-red-600"
                          >
                            💬 Join Telegram
                          </button>
                          <button
                            onClick={() => window.open(SITE_CONFIG.links.twitter, '_blank', 'noopener,noreferrer')}
                            className="px-8 py-4 bg-black hover:bg-gray-900 text-white font-black text-xl rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-black/50 hover:scale-110 transform border-4 border-white"
                          >
                            🐦 Follow on X
                          </button>
                        </div>
                        <div className="text-center mt-6 text-3xl sm:text-4xl font-black drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
                          🚀 TO THE MOON! 🚀
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
