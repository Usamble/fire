'use client'

import Image from 'next/image'

export function SectionAnnouncement() {
  return (
    <section
      className="relative w-full py-10 sm:py-12 overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at 16% 18%, rgba(255,184,122,0.14) 0, transparent 32%), radial-gradient(circle at 82% 12%, rgba(255,120,120,0.14) 0, transparent 32%), linear-gradient(135deg, #0f172a 0%, #111827 45%, #581c1c 100%)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_22px_60px_rgba(0,0,0,0.35)] bg-neutral-900/50">
          <Image
            src="/Announcements.jpg"
            alt="FireHorse Announcement"
            width={1920}
            height={1080}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
