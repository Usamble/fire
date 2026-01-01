'use client'

import { useState } from 'react'
import { SITE_CONFIG } from '@/lib/constants'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b-4 shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #7f1d1d 90%)',
        borderColor: '#fbbf24'
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:opacity-80 transition-opacity"
            >
              <span className="text-lg sm:text-2xl lg:text-3xl font-headline text-amber-200 drop-shadow-[0_3px_8px_rgba(0,0,0,0.35)]">
                Firehorse
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-4 lg:space-x-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-amber-200 transition-colors px-2 sm:px-4 py-2 font-bold text-sm lg:text-base"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('tokenomics')}
              className="text-white hover:text-amber-200 transition-colors px-2 sm:px-4 py-2 font-bold text-sm lg:text-base"
            >
              Tokenomics
            </button>
            <button
              onClick={() => scrollToSection('howtobuy')}
              className="text-white hover:text-amber-200 transition-colors px-2 sm:px-4 py-2 font-bold text-sm lg:text-base"
            >
              How to buy
            </button>
            <button
              onClick={() => scrollToSection('community')}
              className="text-white hover:text-amber-200 transition-colors px-2 sm:px-4 py-2 font-bold text-sm lg:text-base"
            >
              Community
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-4 py-2 rounded-xl font-bold text-sm lg:text-base text-slate-900 bg-amber-300 shadow-lg hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              Buy $FIREHORSE
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-200 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-slate-900/95 rounded-lg mt-2 p-4 border border-amber-300/40">
            <button
              onClick={() => {
                scrollToSection('about')
                setIsOpen(false)
              }}
              className="block w-full text-left px-4 py-3 text-white hover:text-amber-200 transition-colors rounded-lg hover:bg-white/5 font-bold"
            >
              About
            </button>
            <button
              onClick={() => {
                scrollToSection('tokenomics')
                setIsOpen(false)
              }}
              className="block w-full text-left px-4 py-3 text-white hover:text-amber-200 transition-colors rounded-lg hover:bg-white/5 font-bold"
            >
              Tokenomics
            </button>
            <button
              onClick={() => {
                scrollToSection('howtobuy')
                setIsOpen(false)
              }}
              className="block w-full text-left px-4 py-3 text-white hover:text-amber-200 transition-colors rounded-lg hover:bg-white/5 font-bold"
            >
              How to buy
            </button>
            <button
              onClick={() => {
                scrollToSection('community')
                setIsOpen(false)
              }}
              className="block w-full text-left px-4 py-3 text-white hover:text-amber-200 transition-colors rounded-lg hover:bg-white/5 font-bold"
            >
              Community
            </button>
            <button
              onClick={() => {
                scrollToSection('about')
                setIsOpen(false)
              }}
              className="block w-full text-left px-4 py-3 text-slate-900 bg-amber-300 rounded-lg font-bold hover:brightness-110 transition-all"
            >
              Buy $FIREHORSE
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
