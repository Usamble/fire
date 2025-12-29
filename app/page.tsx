import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { SectionLore } from '@/components/SectionLore'
import { SectionCycle60 } from '@/components/SectionCycle60'
import { SectionSymbolism } from '@/components/SectionSymbolism'
import { SectionToken } from '@/components/SectionToken'
import { SectionCTA } from '@/components/SectionCTA'
import { Footer } from '@/components/Footer'
import { MusicPlayer } from '@/components/MusicPlayer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SectionLore />
      <SectionCycle60 />
      <SectionSymbolism />
      <SectionToken />
      <SectionCTA />
      <Footer />
      <MusicPlayer />
    </main>
  )
}

