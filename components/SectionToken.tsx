import Image from 'next/image'
import { AnimateOnScroll } from './AnimateOnScroll'

export function SectionToken() {
  return (
    <section
      id="token"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      
      {/* Red stylized horse in background */}
      <div className="absolute left-0 bottom-1/4 opacity-15 pointer-events-none hidden md:block">
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
            <h2 className="text-5xl sm:text-6xl font-black mb-6 gradient-fire-text">
              THE TOKEN
            </h2>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll direction="up" delay={200}>
          <div className="bg-white p-10 rounded-3xl shadow-2xl border-4 border-red-600 mb-8">
            <p className="text-2xl sm:text-3xl text-gray-900 mb-6 font-black text-center leading-relaxed">
              FireHorse 2026 represents more than just a token—it's a <span className="text-red-700">SYMBOL</span> of the cycle's return 
              and a <span className="text-orange-700">COMMUNITY</span> united by tradition and forward momentum! 🚀
            </p>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll direction="fade" delay={400}>
          <div className="bg-gradient-to-br from-red-800 via-red-700 to-red-800 p-10 rounded-3xl shadow-2xl border-4 border-red-500 glow-red">
          <div className="text-center mb-6">
            <span className="text-7xl mb-4 block">👥</span>
            <h3 className="text-4xl font-black text-white mb-6 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">COMMUNITY-DRIVEN</h3>
          </div>
          <p className="text-xl sm:text-2xl text-white font-black mb-6 text-center drop-shadow-[0_0_6px_rgba(0,0,0,0.8)] leading-relaxed">
            This is a <span className="text-red-200">COMMUNITY PROJECT</span> celebrating the <span className="text-red-200">60-YEAR CYCLE</span> tradition! 
            Join us in commemorating this <span className="text-red-200">RARE ASTRONOMICAL EVENT</span>! 🌟
          </p>
          <div className="mt-8 p-6 bg-red-900/40 backdrop-blur-sm rounded-2xl border-3 border-red-400">
            <p className="text-base sm:text-lg text-white font-black text-center drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]">
              <span className="text-xl">⚠️</span> <strong>DISCLAIMER:</strong> This is NOT financial advice. Always do your own research (DYOR) 
              and never invest more than you can afford to lose! <span className="text-xl">⚠️</span>
            </p>
          </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

