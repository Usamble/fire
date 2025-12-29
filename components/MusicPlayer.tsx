'use client'

import { useRef, useEffect } from 'react'

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    let hasStarted = false

    const start = async () => {
      if (!audio || hasStarted) return
      try {
        audio.muted = true
        await audio.play()
        hasStarted = true
        // Unmute on next frame to satisfy autoplay policies
        requestAnimationFrame(() => {
          if (audio) {
            audio.muted = false
          }
        })
      } catch {
        // Ignore here; we'll retry on interaction
      }
    }

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
        const audio = audioRef.current
        if (!audio) return
        audio.muted = true
        audio.play().then(() => {
          requestAnimationFrame(() => {
            if (audioRef.current) {
              audioRef.current.muted = false
            }
          })
        }).catch(() => {})
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
  )
}
