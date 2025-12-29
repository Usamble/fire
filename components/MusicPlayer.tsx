'use client'

import { useRef, useEffect } from 'react'

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    let hasStarted = false

    const playAudio = async () => {
      if (!audio || hasStarted) return
      
      try {
        // Try muted autoplay first (browsers allow this)
        audio.muted = true
        await audio.play()
        hasStarted = true
        
        // Unmute immediately after it starts
        requestAnimationFrame(() => {
          if (audio) {
            audio.muted = false
          }
        })
      } catch (error) {
        // If muted fails, try unmuted
        try {
          audio.muted = false
          await audio.play()
          hasStarted = true
        } catch (unmutedError) {
          // If both fail, wait for any user interaction
          const handleInteraction = () => {
            if (audio && !hasStarted) {
              audio.muted = false
              audio.play().then(() => {
                hasStarted = true
              }).catch(() => {})
            }
          }
          
          document.addEventListener('click', handleInteraction, { once: true })
          document.addEventListener('touchstart', handleInteraction, { once: true })
          document.addEventListener('keydown', handleInteraction, { once: true })
          document.addEventListener('mousemove', handleInteraction, { once: true })
        }
      }
    }

    // Try when audio can play - immediate
    const handleCanPlay = () => {
      if (!hasStarted) {
        playAudio()
      }
    }

    audio.addEventListener('canplay', handleCanPlay, { once: true })
    audio.addEventListener('canplaythrough', handleCanPlay, { once: true })
    audio.addEventListener('loadeddata', handleCanPlay, { once: true })
    
    // Try immediately - no delays
    playAudio()
    
    // Try on window load
    if (document.readyState === 'complete') {
      playAudio()
    } else {
      window.addEventListener('load', playAudio, { once: true })
      document.addEventListener('DOMContentLoaded', playAudio, { once: true })
    }

    return () => {
      audio.removeEventListener('canplay', handleCanPlay)
      audio.removeEventListener('canplaythrough', handleCanPlay)
      audio.removeEventListener('loadeddata', handleCanPlay)
      window.removeEventListener('load', playAudio)
      document.removeEventListener('DOMContentLoaded', playAudio)
    }
  }, [])

  return (
    <audio
      ref={audioRef}
      loop
      autoPlay
      preload="auto"
      playsInline
      onLoadedData={() => {
        // Try to play immediately when data is loaded
        if (audioRef.current && !audioRef.current.paused) {
          return // Already playing
        }
        if (audioRef.current) {
          audioRef.current.muted = true
          audioRef.current.play().then(() => {
            // Unmute immediately
            requestAnimationFrame(() => {
              if (audioRef.current) {
                audioRef.current.muted = false
              }
            })
          }).catch(() => {})
        }
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

