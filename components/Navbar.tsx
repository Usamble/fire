'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-900 via-red-800 to-red-900 backdrop-blur-md border-b-4 border-red-600 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:opacity-80 transition-opacity"
            >
              <span className="text-2xl sm:text-3xl font-calligraphy">FIREHORSE</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-6">
            <button
              onClick={() => scrollToSection('lore')}
              className="text-white hover:text-red-200 transition-colors px-4 py-2 rounded-lg hover:bg-red-700/50"
            >
              <span className="font-calligraphy font-bold">📖 Lore</span>
            </button>
            <button
              onClick={() => scrollToSection('cycle')}
              className="text-white hover:text-red-200 transition-colors px-4 py-2 rounded-lg hover:bg-red-700/50"
            >
              <span className="font-calligraphy font-bold">⚡ 60-Year Cycle</span>
            </button>
            <button
              onClick={() => scrollToSection('symbolism')}
              className="text-white hover:text-red-200 transition-colors px-4 py-2 rounded-lg hover:bg-red-700/50"
            >
              <span className="font-calligraphy font-bold">🔮 Symbolism</span>
            </button>
            <button
              onClick={() => scrollToSection('token')}
              className="text-white hover:text-red-200 transition-colors px-4 py-2 rounded-lg hover:bg-red-700/50"
            >
              <span className="font-calligraphy font-bold">Token</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-200 transition-colors"
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
          <div className="md:hidden pb-4 space-y-2 bg-red-900/95 rounded-lg mt-2 p-4">
            <button
              onClick={() => scrollToSection('lore')}
              className="block w-full text-left px-4 py-3 text-white hover:text-red-200 transition-colors rounded-lg hover:bg-red-700/50"
            >
              <span className="font-calligraphy font-bold">📖 Lore</span>
            </button>
            <button
              onClick={() => scrollToSection('cycle')}
              className="block w-full text-left px-4 py-3 text-white hover:text-red-200 transition-colors rounded-lg hover:bg-red-700/50"
            >
              <span className="font-calligraphy font-bold">⚡ 60-Year Cycle</span>
            </button>
            <button
              onClick={() => scrollToSection('symbolism')}
              className="block w-full text-left px-4 py-3 text-white hover:text-red-200 transition-colors rounded-lg hover:bg-red-700/50"
            >
              <span className="font-calligraphy font-bold">🔮 Symbolism</span>
            </button>
            <button
              onClick={() => scrollToSection('token')}
              className="block w-full text-left px-4 py-3 text-white hover:text-red-200 transition-colors rounded-lg hover:bg-red-700/50"
            >
              <span className="font-calligraphy font-bold">Token</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

