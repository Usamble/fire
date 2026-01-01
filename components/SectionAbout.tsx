'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/constants'
import { ContractAddress } from './ContractAddress'

export function SectionAbout() {
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
      id="about"
      className="relative py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8"
      style={{
        background:
          'radial-gradient(circle at 18% 20%, rgba(255, 196, 154, 0.35) 0, transparent 32%), radial-gradient(circle at 82% 12%, rgba(255, 255, 255, 0.35) 0, transparent 26%), linear-gradient(135deg, #fff4e6 0%, #ffe0d2 38%, #ffd1ba 70%, #ffe6cf 100%)'
      }}
    >
      {/* Subtle border separator */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(139, 0, 0, 0.3) 20%, rgba(218, 165, 32, 0.4) 50%, rgba(139, 0, 0, 0.3) 80%, transparent 100%)'
      }}></div>
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(139, 0, 0, 0.3) 20%, rgba(218, 165, 32, 0.4) 50%, rgba(139, 0, 0, 0.3) 80%, transparent 100%)'
      }}></div>

      {/* Comic halftone layer */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 10px 10px, rgba(255, 166, 122, 0.15) 6px, transparent 0), radial-gradient(circle at 30px 30px, rgba(255, 166, 122, 0.12) 6px, transparent 0)',
          backgroundSize: '120px 120px'
        }}
      ></div>

      {/* Ancient Chinese clouds background - fewer on mobile */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        {Array.from({ length: 8 }).slice(0, isMobile ? 4 : 8).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${100 + Math.random() * 200}px`,
              height: `${60 + Math.random() * 100}px`,
              background: 'rgba(139, 0, 0, 0.08)',
              filter: 'blur(40px)'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className="font-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4 px-2 text-rose-900 drop-shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
          >
            ABOUT FIREHORSE
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border-[3px]" style={{ borderColor: '#8B0000' }}>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-3 sm:mb-4" style={{ color: '#3C2414' }}>
                The FireHorse legend is back as a loud, stickered meme — bright gradients, transparent art, zero filler.
              </p>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-3 sm:mb-4" style={{ color: '#3C2414' }}>
                Born from a 60-year celestial cycle, rebuilt for degen speedruns and community chaos.
              </p>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6" style={{ color: '#3C2414' }}>
                No dusty mascots, just clean-cut cartoon horses and a tribe that rides together.
              </p>

              {/* Contract Address */}
              <div className="mb-4 sm:mb-6">
                <ContractAddress />
              </div>
            </div>
          </div>

          {/* Right side - Horse graphics */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-[320px] sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
              <Image
                src="/cartoon-4no bg.jpg"
                alt="Fire Horse"
                width={600}
                height={600}
                className="object-contain drop-shadow-[0_0_45px_rgba(255,138,76,0.45)] w-full h-auto"
                loading="lazy"
                quality={85}
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 600px"
              />
            </div>
            
            {/* Chinese lanterns with gold accents */}
            <div className="absolute -top-8 -right-8 hidden lg:block">
              <div className="flex flex-col gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-16 h-20 rounded-full relative"
                    style={{
                      background: 'linear-gradient(135deg, #8B0000 0%, #A52A2A 50%, #DC143C 100%)',
                      boxShadow: '0 0 20px rgba(139, 0, 0, 0.6)'
                    }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full" style={{ background: '#6B0000' }}></div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 rounded" style={{ background: '#DAA520' }}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
