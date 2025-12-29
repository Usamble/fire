'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
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
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b-4 shadow-2xl" style={{
      background: 'linear-gradient(135deg, #6B0000 0%, #8B0000 25%, #A52A2A 50%, #8B0000 75%, #6B0000 100%)',
      borderColor: '#8B0000'
    }}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:opacity-80 transition-opacity"
            >
              <span className="text-lg sm:text-2xl lg:text-3xl font-calligraphy">FIREHORSE</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-4 lg:space-x-6">
            <button
              onClick={() => {
                window.open(SITE_CONFIG.links.twitter, '_blank', 'noopener,noreferrer')
              }}
              className="text-white hover:text-red-200 transition-colors px-2 sm:px-4 py-2 font-bold text-sm lg:text-base"
            >
              TWITTER
            </button>
            <button
              onClick={() => {
                window.open(`https://dexscreener.com/bsc/${SITE_CONFIG.contractAddress}`, '_blank', 'noopener,noreferrer')
              }}
              className="text-white hover:text-red-200 transition-colors px-2 sm:px-4 py-2 font-bold text-sm lg:text-base"
            >
              CHART
            </button>
            <button
              onClick={() => {
                window.open(SITE_CONFIG.links.twitter, '_blank', 'noopener,noreferrer')
              }}
              className="text-white hover:text-red-200 transition-colors px-2 sm:px-4 py-2 font-bold text-sm lg:text-base"
            >
              X COMMUNITY
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
              onClick={() => {
                window.open(SITE_CONFIG.links.twitter, '_blank', 'noopener,noreferrer')
                setIsOpen(false)
              }}
              className="block w-full text-left px-4 py-3 text-white hover:text-red-200 transition-colors rounded-lg hover:bg-red-700/50 font-bold"
            >
              TWITTER
            </button>
            <button
              onClick={() => {
                window.open(`https://dexscreener.com/bsc/${SITE_CONFIG.contractAddress}`, '_blank', 'noopener,noreferrer')
                setIsOpen(false)
              }}
              className="block w-full text-left px-4 py-3 text-white hover:text-red-200 transition-colors rounded-lg hover:bg-red-700/50 font-bold"
            >
              CHART
            </button>
            <button
              onClick={() => {
                window.open(SITE_CONFIG.links.twitter, '_blank', 'noopener,noreferrer')
                setIsOpen(false)
              }}
              className="block w-full text-left px-4 py-3 text-white hover:text-red-200 transition-colors rounded-lg hover:bg-red-700/50 font-bold"
            >
              X COMMUNITY
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

