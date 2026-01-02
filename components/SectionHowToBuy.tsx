'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/constants'

export function SectionHowToBuy() {
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
      id="howtobuy"
      className="relative py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8"
      style={{
        background:
          'radial-gradient(circle at 16% 12%, rgba(255, 222, 138, 0.35) 0, transparent 28%), radial-gradient(circle at 80% 12%, rgba(255, 200, 100, 0.3) 0, transparent 25%), linear-gradient(135deg, #ff6b6b 0%, #ef4444 40%, #c81e1e 80%, #7f1d1d 100%)'
      }}
    >
      {/* Halftone vibe */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 14px 14px, rgba(255, 241, 196, 0.2) 7px, transparent 0), radial-gradient(circle at 40px 40px, rgba(255, 241, 196, 0.18) 7px, transparent 0)',
          backgroundSize: '160px 160px'
        }}
      ></div>
      {/* Sticker horses for extra cartoon energy */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/cartoon-standing.png"
          alt="Standing firehorse"
          width={340}
          height={340}
          className="absolute -left-10 bottom-0 rotate-3 opacity-75 drop-shadow-[0_30px_35px_rgba(0,0,0,0.3)] hidden lg:block"
          quality={85}
        />
        <Image
          src="/cartoon-falling.png"
          alt="Badge"
          width={150}
          height={150}
          className="absolute right-6 top-6 -rotate-6 opacity-80 drop-shadow-[0_18px_20px_rgba(0,0,0,0.2)] hidden sm:block"
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
          <h2
            className="font-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4 text-white px-2 drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)]"
          >
            HOW TO BUY?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left side - Steps */}
          <div className="order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              {/* Step 1 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-4 lg:p-6 shadow-2xl border-3 sm:border-4" style={{ borderColor: '#8B0000' }}>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 text-white rounded-full flex items-center justify-center font-black text-xl sm:text-2xl" style={{
                    background: 'linear-gradient(135deg, #8B0000 0%, #A52A2A 50%, #DC143C 100%)'
                  }}>
                    1
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-base sm:text-lg lg:text-2xl font-black mb-1 sm:mb-2 text-center sm:text-left" style={{ color: '#8B0000' }}>CREATE A WALLET</h3>
                    <p className="text-xs sm:text-sm lg:text-base leading-relaxed" style={{ color: '#3C2414' }}>
                      Visit <a href="https://metamask.io" target="_blank" rel="noopener noreferrer" className="font-bold underline" style={{ color: '#8B0000' }}>metamask.io</a> or download MetaMask or Trust Wallet.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-4 lg:p-6 shadow-2xl border-3 sm:border-4" style={{ borderColor: '#8B0000' }}>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 text-white rounded-full flex items-center justify-center font-black text-xl sm:text-2xl" style={{
                    background: 'linear-gradient(135deg, #8B0000 0%, #A52A2A 50%, #DC143C 100%)'
                  }}>
                    2
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-base sm:text-lg lg:text-2xl font-black mb-1 sm:mb-2 text-center sm:text-left" style={{ color: '#8B0000' }}>GET SOME $BNB</h3>
                    <p className="text-xs sm:text-sm lg:text-base leading-relaxed" style={{ color: '#3C2414' }}>
                      Buy or deposit BNB to your wallet. Purchase on Binance, Coinbase, or in your wallet.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-4 lg:p-6 shadow-2xl border-3 sm:border-4" style={{ borderColor: '#8B0000' }}>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 text-white rounded-full flex items-center justify-center font-black text-xl sm:text-2xl" style={{
                    background: 'linear-gradient(135deg, #8B0000 0%, #A52A2A 50%, #DC143C 100%)'
                  }}>
                    3
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-base sm:text-lg lg:text-2xl font-black mb-1 sm:mb-2 text-center sm:text-left" style={{ color: '#8B0000' }}>SWAP $BNB FOR $FIREHORSE</h3>
                    <p className="text-xs sm:text-sm lg:text-base leading-relaxed" style={{ color: '#3C2414' }}>
                      Use PancakeSwap to swap $BNB for $FIREHORSE on BSC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Horse graphic */}
          <div className="order-1 lg:order-2">
              <div className="relative max-w-[320px] sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
              <div className="absolute -left-10 -top-8 hidden sm:block">
                <Image
                  src="/cartoon-standing.png"
                  alt="Badge"
                  width={130}
                  height={130}
                  className="rotate-6 drop-shadow-[0_14px_18px_rgba(0,0,0,0.2)]"
                  quality={85}
                />
              </div>
              <div className="absolute -right-8 bottom-6 hidden lg:block">
                <Image
                  src="/cartoon-falling.png"
                  alt="Flying horse"
                  width={210}
                  height={210}
                  className="-rotate-6 opacity-80 drop-shadow-[0_24px_28px_rgba(0,0,0,0.22)]"
                  quality={85}
                />
              </div>
              <Image
                src="/car.jpg"
                alt="Fire Horse"
                width={600}
                height={600}
                className="object-contain drop-shadow-[0_0_45px_rgba(255,199,102,0.5)] w-full h-auto"
                loading="lazy"
                quality={85}
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 620px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
