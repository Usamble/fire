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
        background: 'linear-gradient(135deg, #8B0000 0%, #A52A2A 25%, #DC143C 50%, #8B0000 75%, #6B0000 100%)'
      }}
    >
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 sm:mb-4 text-white uppercase tracking-wider px-2" style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 900,
            letterSpacing: '0.1em',
            textShadow: '2px 2px 0px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.8)'
          }}>
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
                      Use PancakeSwap to swap $BNB for $FIREHORSE on BSC. Contract: <strong className="font-mono text-xs sm:text-sm" style={{ color: '#8B0000' }}>{SITE_CONFIG.contractAddress.slice(0, 6)}...{SITE_CONFIG.contractAddress.slice(-4)}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Horse graphic */}
          <div className="order-1 lg:order-2">
            <div className="relative max-w-[280px] sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
              <Image
                src="/5.jpg"
                alt="Fire Horse"
                width={600}
                height={600}
                className="object-contain drop-shadow-2xl w-full h-auto"
                loading="lazy"
                quality={75}
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 400px, 600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

