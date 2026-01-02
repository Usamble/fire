'use client'

import { useState } from 'react'
import { SITE_CONFIG } from '@/lib/constants'

export function ContractAddress() {
  const [copied, setCopied] = useState(false)
  const contractAddress = String(SITE_CONFIG.contractAddress)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const formatAddress = (address: string) => {
    if (address.length <= 10) return address
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const getDexScreenerUrl = (address: string) => {
    if (!address.startsWith('0x')) return '#'
    return `https://dexscreener.com/bsc/${address}:4meme`
  }

  return (
    <div className="backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-5 shadow-xl max-w-2xl mx-auto border-3 sm:border-4" style={{
      background: 'rgba(139, 0, 0, 0.9)',
      borderColor: '#DAA520'
    }}>
      <p className="text-xs sm:text-sm font-bold mb-2 sm:mb-3 text-center" style={{ color: '#FFD700' }}>Contract Address</p>
      
      <div 
        onClick={handleCopy}
        className="rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 cursor-pointer transition-colors border-2 group"
        style={{
          background: 'rgba(107, 0, 0, 0.8)',
          borderColor: '#8B0000'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#DAA520'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = '#8B0000'
        }}
      >
        <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-white font-mono font-bold text-center break-all select-all">
          {contractAddress}
        </p>
        <p className="text-xs text-center mt-1 sm:mt-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#FFD700' }}>
          Click anywhere to copy
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
        <button
          onClick={handleCopy}
          className={`px-4 sm:px-6 py-2 sm:py-3 text-white text-sm sm:text-base font-bold rounded-lg transition-all border-2 hover:scale-105 ${
            copied 
              ? 'bg-green-600 border-green-500 hover:bg-green-700' 
              : ''
          }`}
          style={copied ? {} : {
            background: 'linear-gradient(135deg, #8B0000 0%, #A52A2A 50%, #DC143C 100%)',
            borderColor: '#DAA520'
          }}
          title="Copy address"
        >
          {copied ? '✓ Copied!' : '📋 Copy Address'}
        </button>
        <a
          href={getDexScreenerUrl(contractAddress)}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 sm:px-6 py-2 sm:py-3 text-white text-sm sm:text-base font-bold rounded-lg transition-all border-2 hover:scale-105 flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #8B0000 0%, #A52A2A 50%, #DC143C 100%)',
            borderColor: '#DAA520'
          }}
          title="View on DexScreener"
        >
          <span className="text-center">📊 View on DexScreener</span>
        </a>
      </div>
    </div>
  )
}
