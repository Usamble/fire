'use client'

import { useState } from 'react'
import { SITE_CONFIG } from '@/lib/constants'

export function ContractAddress() {
  const [copied, setCopied] = useState(false)
  const contractAddress = SITE_CONFIG.contractAddress

  // Show placeholder if address is the default placeholder
  const isPlaceholder = contractAddress === '0x0000000000000000000000000000000000000000'

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
    // DexScreener URL for Ethereum/EVM chains
    if (address.startsWith('0x')) {
      return `https://dexscreener.com/ethereum/${address}`
    }
    return `#`
  }

  return (
    <div className="bg-red-900/80 backdrop-blur-sm rounded-xl p-5 border-3 border-red-500 shadow-xl max-w-2xl mx-auto">
      <p className="text-sm text-red-200 font-bold mb-3 text-center">Contract Address</p>
      
      {isPlaceholder ? (
        <div className="bg-red-950/80 rounded-lg p-4 mb-4 border-2 border-red-600">
          <p className="text-base sm:text-lg text-red-300 font-mono font-bold text-center">
            Add contract address in .env.local or lib/constants.ts
          </p>
          <p className="text-xs text-red-400 text-center mt-2">
            Set NEXT_PUBLIC_CONTRACT_ADDRESS environment variable
          </p>
        </div>
      ) : (
        <>
          <div 
            onClick={handleCopy}
            className="bg-red-950/80 rounded-lg p-4 mb-4 cursor-pointer hover:bg-red-950 transition-colors border-2 border-red-600 hover:border-red-400 group"
          >
            <p className="text-base sm:text-lg text-white font-mono font-bold text-center break-all select-all">
              {contractAddress}
            </p>
            <p className="text-xs text-red-300 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Click anywhere to copy
            </p>
          </div>
          
          <div className="flex gap-3 justify-center">
            <button
              onClick={handleCopy}
              className={`px-6 py-3 text-white text-base font-bold rounded-lg transition-all border-2 ${
                copied 
                  ? 'bg-green-600 border-green-500 hover:bg-green-700' 
                  : 'bg-red-700 hover:bg-red-600 border-red-500 hover:scale-105'
              }`}
              title="Copy address"
            >
              {copied ? '✓ Copied!' : '📋 Copy Address'}
            </button>
            <a
              href={getDexScreenerUrl(contractAddress)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-red-800 hover:bg-red-700 text-white text-base font-bold rounded-lg transition-all border-2 border-red-500 hover:scale-105"
              title="View on DexScreener"
            >
              📊 View on DexScreener
            </a>
          </div>
        </>
      )}
    </div>
  )
}

