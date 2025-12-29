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
        
        // Unmute after it starts
        setTimeout(() => {
          if (audio) {
            audio.muted = false
          }
        }, 500)
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

    // Try when audio can play
    const handleCanPlay = () => {
      if (!hasStarted) {
        playAudio()
      }
    }

    audio.addEventListener('canplay', handleCanPlay)
    audio.addEventListener('canplaythrough', handleCanPlay)
    audio.addEventListener('loadeddata', handleCanPlay)
    
    // Try immediately - multiple attempts
    const timer1 = setTimeout(() => playAudio(), 50)
    const timer2 = setTimeout(() => playAudio(), 200)
    const timer3 = setTimeout(() => playAudio(), 500)
    const timer4 = setTimeout(() => playAudio(), 1000)
    const timer5 = setTimeout(() => playAudio(), 2000)
    
    // Try on window load
    window.addEventListener('load', playAudio)
    
    // Try on DOM ready
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      playAudio()
    } else {
      document.addEventListener('DOMContentLoaded', playAudio)
    }

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
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
        // Try to play when data is loaded
        if (audioRef.current) {
          audioRef.current.muted = true
          audioRef.current.play().then(() => {
            setTimeout(() => {
              if (audioRef.current) {
                audioRef.current.muted = false
              }
            }, 500)
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

