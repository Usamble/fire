'use client'

import { useRef, useEffect, useCallback, useState } from 'react'

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const hasStartedRef = useRef(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const start = useCallback(async () => {
    const audio = audioRef.current
    if (!audio || hasStartedRef.current) return

    try {
      audio.muted = true
      await audio.play()
      hasStartedRef.current = true
      setIsPlaying(true)
      // Unmute on next frame to satisfy autoplay policies
      requestAnimationFrame(() => {
        if (audioRef.current) {
          audioRef.current.muted = false
        }
      })
      return
    } catch {
      // muted autoplay failed; try unmuted
    }

    try {
      audio.muted = false
      await audio.play()
      hasStartedRef.current = true
      setIsPlaying(true)
    } catch {
      // still blocked; wait for manual interaction/button
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleInteraction = () => {
      start().catch(() => {})
    }

    // Fire immediately on mount
    start().catch(() => {})

    const interactionEvents: Array<keyof DocumentEventMap> = [
      'pointerdown',
      'keydown',
      'touchstart'
    ]

    interactionEvents.forEach((evt) => {
      document.addEventListener(evt, handleInteraction, { once: true })
    })

    return () => {
      interactionEvents.forEach((evt) => {
        document.removeEventListener(evt, handleInteraction)
      })
    }
  }, [])

  return (
    <audio
      ref={audioRef}
      loop
      muted
      autoPlay
      preload="auto"
      playsInline
      onLoadedData={() => {
        start().catch(() => {})
      }}
      onError={(e) => {
        console.error('Audio error:', e)
        console.log('Make sure music.mp3 exists in the public folder')
      }}
      style={{ display: 'none', position: 'absolute', visibility: 'hidden' }}
    >
      <source src="/music.mp3" type="audio/mpeg" />
      <source src="/music.ogg" type="audio/ogg" />
      <source src="/music.wav" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
    <button
      type="button"
      onClick={() => start().catch(() => {})}
      className="fixed bottom-4 right-4 z-50 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-slate-900"
    >
      {isPlaying ? 'Music playing' : 'Play music'}
    </button>
  )
}
