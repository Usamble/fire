'use client'

import Image from 'next/image'

export function SectionTokenomics() {
  return (
    <section
      id="tokenomics"
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
            TOKENOMICS
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Horse graphic */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src="/4.jpg"
                alt="Fire Horse"
                width={500}
                height={500}
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right side - Tokenomics boxes */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* BUY/SELL TAX */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-4 text-center" style={{ borderColor: '#8B0000' }}>
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-2xl font-black mb-2" style={{ color: '#8B0000' }}>BUY / SELL TAX</h3>
                <p className="text-4xl font-black" style={{ color: '#3C2414' }}>0%</p>
              </div>

              {/* SUPPLY */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-4 text-center" style={{ borderColor: '#8B0000' }}>
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-black mb-2" style={{ color: '#8B0000' }}>SUPPLY</h3>
                <p className="text-4xl font-black" style={{ color: '#3C2414' }}>1,000 M</p>
              </div>

              {/* Additional info box */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-4 text-center sm:col-span-2" style={{ borderColor: '#8B0000' }}>
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-2xl font-black mb-2" style={{ color: '#8B0000' }}>60-YEAR CYCLE</h3>
                <p className="text-lg" style={{ color: '#3C2414' }}>
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

