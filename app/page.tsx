import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { SectionAbout } from '@/components/SectionAbout'
import { SectionTokenomics } from '@/components/SectionTokenomics'
import { SectionHowToBuy } from '@/components/SectionHowToBuy'
import { SectionCommunity } from '@/components/SectionCommunity'
import { Footer } from '@/components/Footer'
import { MusicPlayer } from '@/components/MusicPlayer'
import { SectionImageLab } from '@/components/SectionImageLab'
import { SectionAnnouncement } from '@/components/SectionAnnouncement'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SectionAnnouncement />
      <SectionAbout />
      <SectionImageLab />
      <SectionTokenomics />
      <SectionHowToBuy />
      <SectionCommunity />
      <Footer />
      <MusicPlayer />
    </main>
  )
}
