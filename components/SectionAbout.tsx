'use client'

import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/constants'
import { ContractAddress } from './ContractAddress'

export function SectionAbout() {
  const handleTelegramClick = () => {
    window.open(SITE_CONFIG.links.telegram, '_blank', 'noopener,noreferrer')
  }

  const handleTwitterClick = () => {
    window.open(SITE_CONFIG.links.twitter, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(135deg, #F5E6D3 0%, #E8D5B7 25%, #D4C4A8 50%, #E8D5B7 75%, #F5E6D3 100%)'
      }}
    >
      {/* Subtle border separator */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(139, 0, 0, 0.3) 20%, rgba(218, 165, 32, 0.4) 50%, rgba(139, 0, 0, 0.3) 80%, transparent 100%)'
      }}></div>
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{
        background: 'linear-gradient(90deg, transparent 0%, rgba(139, 0, 0, 0.3) 20%, rgba(218, 165, 32, 0.4) 50%, rgba(139, 0, 0, 0.3) 80%, transparent 100%)'
      }}></div>

      {/* Ancient Chinese clouds background */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        {Array.from({ length: 8 }).map((_, i) => (
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
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-black mb-4 uppercase tracking-wider" style={{ 
            color: '#8B0000',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 900,
            letterSpacing: '0.1em',
            textShadow: '2px 2px 0px rgba(0,0,0,0.2)'
          }}>
            ABOUT FIREHORSE
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-4" style={{ borderColor: '#8B0000' }}>
              <p className="text-lg sm:text-xl leading-relaxed mb-4" style={{ color: '#3C2414' }}>
                Fire and fury, the Horse is here! 🔥
              </p>
              <p className="text-lg sm:text-xl leading-relaxed mb-4" style={{ color: '#3C2414' }}>
                Burning passion, unstoppable motion, and power in every stride.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed mb-4" style={{ color: '#3C2414' }}>
                From ancient cycles to modern times, FireHorse charges with style.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed mb-6" style={{ color: '#3C2414' }}>
                Join the ride, let the fire ignite —<br />
                Because when FireHorse runs, there&apos;s no stopping the might! 🚀
              </p>

              {/* Contract Address */}
              <div className="mb-6">
                <ContractAddress />
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleTelegramClick}
                  className="px-8 py-4 text-white font-black text-lg rounded-xl transition-all duration-300 shadow-xl hover:scale-105 transform border-4"
                  style={{
                    background: 'linear-gradient(135deg, #8B0000 0%, #A52A2A 50%, #DC143C 100%)',
                    borderColor: '#6B0000'
                  }}
                >
                  Buy $FIREHORSE
                </button>
                <button
                  onClick={handleTwitterClick}
                  className="px-8 py-4 bg-white hover:bg-gray-50 font-black text-lg rounded-xl transition-all duration-300 shadow-xl hover:scale-105 transform border-4"
                  style={{
                    color: '#8B0000',
                    borderColor: '#8B0000'
                  }}
                >
                  Join the FireHorse Army
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Horse graphics */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <Image
                src="/3.jpg"
                alt="Fire Horse"
                width={600}
                height={600}
                className="object-contain drop-shadow-2xl"
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

