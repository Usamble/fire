'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimateOnScrollProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
}

export function AnimateOnScroll({ 
  children, 
  className, 
  delay = 0,
  direction = 'up' 
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(currentRef)

    return () => {
      observer.unobserve(currentRef)
    }
  }, [delay])

  const directionClasses = {
    up: isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8',
    down: isVisible ? 'animate-slide-down' : 'opacity-0 -translate-y-8',
    left: isVisible ? 'animate-slide-left' : 'opacity-0 translate-x-8',
    right: isVisible ? 'animate-slide-right' : 'opacity-0 -translate-x-8',
    fade: isVisible ? 'animate-fade-in' : 'opacity-0',
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        directionClasses[direction],
        className
      )}
    >
      {children}
    </div>
  )
}

