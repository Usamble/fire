'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function SectionTokenomics() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  return (
    <section
      id="tokenomics"
      className="relative py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8"
      style={{
        background:
          'radial-gradient(circle at 22% 18%, rgba(255, 195, 150, 0.3) 0, transparent 30%), radial-gradient(circle at 78% 14%, rgba(255, 255, 255, 0.25) 0, transparent 24%), linear-gradient(135deg, #fff1f2 0%, #ffe4e6 38%, #fecdd3 70%, #ffe4e6 100%)'
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
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 12px 12px, rgba(255, 126, 95, 0.12) 7px, transparent 0), radial-gradient(circle at 36px 36px, rgba(255, 126, 95, 0.1) 7px, transparent 0)',
          backgroundSize: '140px 140px'
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
            TOKENOMICS
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left side - Horse graphic */}
          <div className="order-2 lg:order-1">
            <div className="relative max-w-[320px] sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
              <Image
                src="/cartoon-falling.png"
                alt="Fire Horse"
                width={500}
                height={500}
                className="object-contain drop-shadow-[0_0_45px_rgba(255,124,76,0.45)] w-full h-auto"
                loading="lazy"
                quality={85}
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 520px"
              />
            </div>
          </div>

          {/* Right side - Tokenomics boxes */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* BUY/SELL TAX */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl border-[3px] text-center" style={{ borderColor: '#8B0000' }}>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📈</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-2" style={{ color: '#8B0000' }}>BUY / SELL TAX</h3>
                <p className="text-3xl sm:text-4xl font-black" style={{ color: '#3C2414' }}>0%</p>
              </div>

              {/* SUPPLY */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl border-[3px] text-center" style={{ borderColor: '#8B0000' }}>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💰</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-2" style={{ color: '#8B0000' }}>SUPPLY</h3>
                <p className="text-3xl sm:text-4xl font-black" style={{ color: '#3C2414' }}>1,000 M</p>
              </div>

              {/* Additional info box */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl border-[3px] text-center sm:col-span-2 relative overflow-hidden" style={{ borderColor: '#8B0000' }}>
                <Image
                  src="/cartoon-standing.png"
                  alt="Mini sticker"
                  width={110}
                  height={110}
                  className="absolute -right-4 -top-8 rotate-6 opacity-70 drop-shadow-[0_10px_15px_rgba(0,0,0,0.12)] pointer-events-none hidden sm:block"
                  quality={85}
                />
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔥</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black mb-2" style={{ color: '#8B0000' }}>60-YEAR CYCLE</h3>
                <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#3C2414' }}>
                  Rare astronomical event. Last: <strong style={{ color: '#8B0000' }}>1966</strong> | Next: <strong style={{ color: '#8B0000' }}>2026</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
