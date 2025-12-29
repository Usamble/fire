import Image from 'next/image'
import { AnimateOnScroll } from './AnimateOnScroll'

export function SectionSymbolism() {
  return (
    <section
      id="symbolism"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-100 via-red-50 to-red-100 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-8xl opacity-10">🔥</div>
      <div className="absolute bottom-10 right-10 text-8xl opacity-10">⚡</div>
      
      {/* Red stylized horse in background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden lg:block">
        <Image
          src="/horse.png"
          alt="FireHorse"
          width={450}
          height={450}
          className="object-contain"
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimateOnScroll direction="down" delay={0}>
          <div className="text-center mb-12">
            <span className="text-6xl mb-4 block animate-bounce-slow">🔮</span>
            <h2 className="text-5xl sm:text-6xl font-black mb-6 gradient-fire-text">
              THE POWER OF FIREHORSE
            </h2>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll direction="fade" delay={200}>
          <div className="bg-white p-8 rounded-3xl shadow-2xl border-4 border-orange-600 mb-8">
            <p className="text-2xl sm:text-3xl text-gray-900 font-black text-center leading-relaxed">
              The <span className="text-red-700">FireHorse</span> represents <span className="text-orange-700">PASSION</span>, <span className="text-red-700">ENERGY</span>, and <span className="text-orange-700">UNSTOPPABLE MOMENTUM</span>! 🚀
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <AnimateOnScroll direction="right" delay={300}>
            <div className="bg-gradient-to-br from-red-800 to-red-700 p-8 rounded-3xl shadow-2xl border-4 border-red-500 transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-4">
              <span className="text-7xl">🔥</span>
            </div>
            <h3 className="text-3xl font-black text-white mb-4 text-center drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">FIRE ELEMENT</h3>
            <p className="text-white font-black text-xl text-center drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]">
              Represents <span className="text-red-200">PASSION</span>, <span className="text-red-200">TRANSFORMATION</span>, and the burning drive to succeed! 
              Fire brings <span className="text-red-200">ENERGY</span> and <span className="text-red-200">INTENSITY</span> to everything! ⚡
            </p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll direction="left" delay={400}>
            <div className="bg-gradient-to-br from-red-700 to-red-800 p-8 rounded-3xl shadow-2xl border-4 border-red-500 transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-4">
            </div>
            <h3 className="text-3xl font-black text-white mb-4 text-center drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">HORSE SIGN</h3>
            <p className="text-white font-black text-xl text-center drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]">
              Symbolizes <span className="text-red-200">FREEDOM</span>, <span className="text-red-200">SPEED</span>, and unstoppable forward motion! 
              The Horse <span className="text-red-200">NEVER LOOKS BACK</span>, always charging ahead! 🚀
            </p>
            </div>
          </AnimateOnScroll>
        </div>
        
        <div className="mt-12 text-center">
          <AnimateOnScroll direction="up" delay={500}>
            <div className="inline-block bg-gradient-to-r from-red-800 via-red-700 to-red-800 px-10 py-6 rounded-3xl shadow-2xl border-4 border-red-500 glow-red">
            <p className="text-3xl sm:text-4xl font-black text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
              🔥 FIRE + HORSE = UNSTOPPABLE FORCE 🔥
            </p>
            <p className="text-xl sm:text-2xl text-white mt-2 font-black drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]">
              Transformation • Innovation • Greatness Against All Odds
            </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

