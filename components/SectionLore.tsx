import Image from 'next/image'
import { AnimateOnScroll } from './AnimateOnScroll'

// Generate ember positions once (consistent between SSR and client)
const generateEmberPositions = (count: number) => {
  return Array.from({ length: count }, () => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    width: Math.random() * 3 + 1,
    height: Math.random() * 3 + 1,
    opacity: Math.random() * 0.5 + 0.2,
    delay: Math.random() * 2
  }))
}

const loreEmberPositions = generateEmberPositions(20)

export function SectionLore() {
  return (
    <section
      id="lore"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #fff5f5 0%, #ffe5e5 50%, #ffd5d5 100%)'
      }}
    >
      {/* Fire horse background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <Image
          src="/cartoon-4.jpg"
          alt="Fire Horse Background"
          fill
          className="object-cover"
          style={{ objectPosition: 'center' }}
        />
      </div>
      
      {/* Fire embers */}
      <div className="absolute inset-0 overflow-hidden">
        {loreEmberPositions.map((ember, i) => (
          <div
            key={i}
            className="absolute bg-orange-400 rounded-full animate-pulse"
            style={{
              top: `${ember.top}%`,
              left: `${ember.left}%`,
              width: `${ember.width}px`,
              height: `${ember.height}px`,
              opacity: ember.opacity,
              animationDelay: `${ember.delay}s`
            }}
          />
        ))}
      </div>
      
      {/* Red stylized horse in background */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden md:block">
        <Image
          src="/cartoon-5.jpg"
          alt="FireHorse"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <AnimateOnScroll direction="down" delay={0}>
          <div className="text-center mb-12">
            <span className="text-6xl mb-4 block animate-bounce-slow">📖</span>
            <h2 className="text-5xl sm:text-6xl font-black mb-6 gradient-fire-text">
              THE LEGEND RETURNS
            </h2>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll direction="up" delay={200}>
          <div className="bg-white p-10 rounded-3xl shadow-2xl border-4 border-red-600">
          <p className="text-2xl sm:text-3xl text-gray-900 mb-8 font-black leading-relaxed">
            The <span className="text-red-700">FireHorse (Bing-Wu)</span> cycle returns in <span className="text-red-700">2026</span>, marking another <span className="text-orange-700">60-year milestone</span> in the Chinese zodiac calendar!
          </p>
          <p className="text-xl sm:text-2xl text-gray-800 mb-6 font-bold">
            This <span className="text-red-700">RARE</span> and <span className="text-orange-700">POWERFUL</span> combination occurs only once every six decades. 
            It brings transformation, opportunity, and <span className="text-red-700">UNSTOPPABLE MOMENTUM</span>! ⚡
          </p>
          <div className="mt-8 p-6 bg-gradient-to-r from-red-100 to-orange-100 rounded-2xl border-3 border-red-600">
            <p className="text-xl sm:text-2xl text-gray-900 font-black">
              <span className="text-3xl">🔥</span> Last FireHorse: <span className="text-red-700">1966</span> | 
              Before that: <span className="text-red-700">1906</span> | 
              Next: <span className="text-red-700 text-3xl">2026</span> <span className="text-3xl">🚀</span>
            </p>
          </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

