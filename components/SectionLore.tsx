import Image from 'next/image'
import { AnimateOnScroll } from './AnimateOnScroll'

export function SectionLore() {
  return (
    <section
      id="lore"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-red-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute bottom-20 left-20 text-7xl opacity-10">🔥</div>
      
      {/* Red stylized horse in background */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden md:block">
        <Image
          src="/horse.png"
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

