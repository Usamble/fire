'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mb-4">Niečo sa pokazilo!</h2>
        <p className="text-white/70 mb-6">{error.message || 'Nastala neočakávaná chyba'}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold transition"
        >
          Skúsiť znova
        </button>
      </div>
    </div>
  )
}

