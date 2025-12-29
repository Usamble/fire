import Image from 'next/image'
import { AnimateOnScroll } from './AnimateOnScroll'

export function SectionCycle60() {
  return (
    <section
      id="cycle"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-100 via-red-50 to-red-100 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 text-6xl opacity-10">🔥</div>
      
      {/* Red stylized horse in background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden lg:block">
        <Image
          src="/horse.png"
          alt="FireHorse"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimateOnScroll direction="down" delay={0}>
          <div className="text-center mb-12">
            <h2 className="text-5xl sm:text-6xl font-black mb-4 gradient-fire-text">
              ⚡ THE 60-YEAR CYCLE ⚡
            </h2>
            <p className="text-xl sm:text-2xl text-gray-900 font-black">
              Chinese zodiac operates on a 60-year cycle. FireHorse returns every 60 years!
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <AnimateOnScroll direction="up" delay={100}>
            <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-gray-300 transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-4">
            </div>
            <h3 className="text-4xl font-black text-gray-900 mb-4 text-center">1906</h3>
            <p className="text-gray-800 font-bold text-lg text-center">
              The first FireHorse of the modern era. The cycle begins! 🔥
            </p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll direction="up" delay={200}>
            <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-orange-400 transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-4">
              <span className="text-6xl">⚡</span>
            </div>
            <h3 className="text-4xl font-black text-gray-900 mb-4 text-center">1966</h3>
            <p className="text-gray-800 font-bold text-lg text-center">
              Cultural revolution era. FireHorse energy unleashed! 🚀
            </p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll direction="up" delay={300}>
            <div className="bg-gradient-to-br from-red-800 via-red-700 to-red-800 p-8 rounded-3xl shadow-2xl border-4 border-red-500 transform hover:scale-110 transition-all duration-300 glow-red">
            <div className="text-center mb-4">
              <span className="text-6xl">🔥</span>
            </div>
            <h3 className="text-4xl font-black text-white mb-4 text-center drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">2026</h3>
            <p className="text-white font-black text-lg text-center drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]">
              THE NEXT CHAPTER! Be part of history! 🚀 TO THE MOON! 🌙
            </p>
            </div>
          </AnimateOnScroll>
        </div>
        
        <div className="mt-12 text-center">
          <AnimateOnScroll direction="fade" delay={400}>
            <div className="inline-block bg-white px-8 py-4 rounded-2xl shadow-lg border-4 border-red-700">
            <p className="text-2xl sm:text-3xl font-black text-gray-900">
              ⏰ Next FireHorse: <span className="text-red-700">2086</span>
            </p>
            <p className="text-base text-gray-700 mt-2 font-bold">Don&apos;t miss this rare 60-year opportunity!</p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

