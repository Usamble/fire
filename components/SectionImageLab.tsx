'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import NextImage from 'next/image'

type StyleOption = {
  key: string
  label: string
  blurb: string
  images: string[]
}

const STYLE_OPTIONS: StyleOption[] = [
  {
    key: 'styleA',
    label: 'CZ x FireHorse',
    blurb: 'Sada obrázkov z priečinka CZ',
    images: [
      '/CZ/img1.png',
      '/CZ/img2.png',
      '/CZ/img3.png',
      '/CZ/img4.png',
      '/CZ/img5.png',
      '/CZ/img6.jpg',
      '/CZ/img7.jpg',
      '/CZ/img8.jpg',
      '/CZ/img9.jpg',
      '/CZ/img10.jpg',
      '/CZ/img11.jpg',
      '/CZ/img12.jpg'
    ]
  },
  {
    key: 'styleB',
    label: 'Just Chill',
    blurb: 'Sada obrázkov z priečinka just-chilling',
    images: [
      '/just-chilling/img14.jpg',
      '/just-chilling/img15.jpg',
      '/just-chilling/img16.jpg',
      '/just-chilling/img17.jpg',
      '/just-chilling/img18.jpg',
      '/just-chilling/img19.jpg',
      '/just-chilling/img20.jpg',
      '/just-chilling/img21.png',
      '/just-chilling/img22.png',
      '/just-chilling/img23.png',
      '/just-chilling/img24.jpg',
      '/just-chilling/img25.jpg',
      '/just-chilling/img26.jpg',
      '/just-chilling/img27.jpg',
      '/just-chilling/img28.jpg',
      '/just-chilling/img29.jpg'
    ]
  },
  {
    key: 'random',
    label: 'Random mix',
    blurb: 'Náhodný výber z oboch priečinkov',
    images: [] // will be resolved dynamicky
  }
]

const hashName = (value: string) => {
  if (!value) return 0
  let hash = 0
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0
  }
  return hash
}

export function SectionImageLab() {
  const [selectedStyle, setSelectedStyle] = useState<string>('')
  const [handle, setHandle] = useState<string>('')
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [status, setStatus] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [generatedSize, setGeneratedSize] = useState<{ w: number; h: number } | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const storageKey = useCallback(
    (style: string, name: string) => `firehorse_gen_${style}_${(name || '').trim().toLowerCase()}`,
    []
  )

  const pickImage = (style: string, name: string) => {
    const option = STYLE_OPTIONS.find((o) => o.key === style)
    const pool =
      style === 'random'
        ? [...STYLE_OPTIONS[0].images, ...STYLE_OPTIONS[1].images]
        : option?.images || STYLE_OPTIONS[0].images
    const idx = pool.length > 0 ? hashName(name || 'firehorse') % pool.length : 0
    return pool[idx] || pool[0]
  }

  const checkExisting = useCallback(
    (style: string, name: string) => {
      if (!style || !name.trim()) return { found: false, url: null }
      if (typeof window === 'undefined') return { found: false, url: null }
      const key = storageKey(style, name)
      const stored = localStorage.getItem(key)
      if (stored) return { found: true, url: stored }
      return { found: false, url: null }
    },
    [storageKey]
  )

  const persistResult = useCallback(
    (style: string, name: string, url: string) => {
      if (typeof window === 'undefined') return
      const key = storageKey(style, name)
      localStorage.setItem(key, url)
    },
    [storageKey]
  )

  const loadDomImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const DomImage = typeof window !== 'undefined' ? window.Image : Image
      const el = new DomImage()
      el.onload = () => resolve(el as HTMLImageElement)
      el.onerror = () => reject(new Error('Load failed'))
      el.src = src
    })
  }

  const loadFirstAvailable = async (style: string, name: string) => {
    const option = STYLE_OPTIONS.find((o) => o.key === style)
    const pool =
      style === 'random'
        ? [...STYLE_OPTIONS[0].images, ...STYLE_OPTIONS[1].images]
        : option?.images || STYLE_OPTIONS[0].images

    if (pool.length === 0) throw new Error('No images available')

    const startIdx = hashName(name || 'firehorse') % pool.length
    for (let i = 0; i < pool.length; i += 1) {
      const idx = (startIdx + i) % pool.length
      try {
        const img = await loadDomImage(pool[idx])
        return { img, src: pool[idx] }
      } catch {
        // try next
      }
    }
    throw new Error('No valid image found')
  }

  const handleGenerate = async () => {
    if (!selectedStyle || !handle.trim()) return
    const existing = checkExisting(selectedStyle, handle)
    if (existing.found && existing.url) {
      setImageUrl(existing.url)
      setGeneratedSize(null)
      setStatus('Pre toto meno a štýl už máš obrázok (max 1 per name per style).')
      return
    }

    setLoading(true)
    setStatus('Generujem tvoj FireHorse…')

    try {
      const { img } = await loadFirstAvailable(selectedStyle, handle)

      const canvas = canvasRef.current
      if (!canvas) throw new Error('Canvas not ready')

      const maxW = 1280
      const scale = img.width > maxW ? maxW / img.width : 1
      const w = Math.round(img.width * scale)
      const h = Math.round(img.height * scale)
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext('2d')
      if (!ctx) throw new Error('No ctx')

      ctx.clearRect(0, 0, w, h)
      ctx.drawImage(img, 0, 0, w, h)

      // Overlay @name in bottom-right (larger, no box)
      const label = `@${handle.trim()}`
      ctx.save()
      ctx.font = '800 34px "Manrope", "Inter", system-ui, sans-serif'
      ctx.textAlign = 'right'
      ctx.textBaseline = 'bottom'
      ctx.shadowColor = 'rgba(0,0,0,0.65)'
      ctx.shadowBlur = 16
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 6
      ctx.strokeStyle = 'rgba(0,0,0,0.65)'
      ctx.lineWidth = 4
      ctx.strokeText(label, w - 24, h - 18)
      ctx.fillStyle = '#f8fafc'
      ctx.fillText(label, w - 24, h - 18)
      ctx.restore()

      // Add $FIREHORSE label bottom-left
      ctx.save()
      ctx.font = '800 34px "Manrope", "Inter", system-ui, sans-serif'
      ctx.textAlign = 'left'
      ctx.textBaseline = 'bottom'
      ctx.shadowColor = 'rgba(0,0,0,0.6)'
      ctx.shadowBlur = 12
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 5
      ctx.strokeStyle = 'rgba(0,0,0,0.55)'
      ctx.lineWidth = 3
      ctx.strokeText('$FIREHORSE', 20, h - 18)
      ctx.fillStyle = '#f8fafc'
      ctx.fillText('$FIREHORSE', 20, h - 18)
      ctx.restore()

      // Add 火马 label (large) near bottom center
      ctx.save()
      ctx.font = '900 120px "Manrope", "Inter", system-ui, sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'bottom'
      ctx.shadowColor = 'rgba(0,0,0,0.55)'
      ctx.shadowBlur = 22
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 8
      ctx.strokeStyle = 'rgba(0,0,0,0.65)'
      ctx.lineWidth = 6
      ctx.strokeText('火马', w / 2, h - 32)
      ctx.fillStyle = '#f8fafc'
      ctx.fillText('火马', w / 2, h - 32)
      ctx.restore()

      const url = canvas.toDataURL('image/png')
      setImageUrl(url)
      setGeneratedSize({ w, h })
      persistResult(selectedStyle, handle, url)
      setStatus('Done – download your image below.')
    } catch (err) {
      console.error(err)
      setStatus('')
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = () => {
    if (!imageUrl) return
    const link = document.createElement('a')
    link.href = imageUrl
    link.download = 'firehorse.png'
    link.click()
  }

  // Pri zmene štýlu alebo mena skontroluj, či už existuje vygenerovaný obrázok
  useEffect(() => {
    const existing = checkExisting(selectedStyle, handle)
    if (existing.found && existing.url) {
      setImageUrl(existing.url)
      setStatus('Pre toto meno a štýl už máš obrázok (max 1 per name per style).')
    } else {
      setImageUrl(null)
      setStatus('')
    }
  }, [selectedStyle, handle, checkExisting])

  return (
    <section
      id="generator"
      className="relative py-14 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          'radial-gradient(circle at 16% 18%, rgba(255,184,122,0.18) 0, transparent 32%), radial-gradient(circle at 82% 12%, rgba(255,120,120,0.18) 0, transparent 32%), linear-gradient(135deg, #0f172a 0%, #111827 45%, #581c1c 100%)'
      }}
    >
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="font-headline text-3xl sm:text-4xl text-white">
          Generate your $FIREHORSE
        </h2>
        <p className="text-sm uppercase tracking-[0.25em] text-amber-200/80 font-semibold">
          select your style
        </p>
        <div className="flex flex-col items-center gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {STYLE_OPTIONS.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setSelectedStyle(opt.key)}
                className={clsx(
                  'h-32 sm:h-36 rounded-2xl border-2 text-white text-base sm:text-lg font-semibold transition relative overflow-hidden px-5',
                  'bg-gradient-to-b from-slate-800 to-slate-900 border-amber-200/70',
                  'shadow-[0_20px_44px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(0,0,0,0.5)]',
                  selectedStyle === opt.key && 'ring-2 ring-amber-300'
                )}
              >
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,214,102,0.35),transparent_40%)]" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_0%,rgba(255,125,125,0.35),transparent_40%)]" />
                <span className="relative z-10 font-headline uppercase tracking-wide text-lg sm:text-xl">
                  {opt.label}
                </span>
              </button>
            ))}
          </div>
          {selectedStyle && (
            <div className="space-y-3 w-full">
              <h3 className="font-headline text-2xl sm:text-3xl text-white mt-6">
                TYPE YOUR X NAME
              </h3>
              <div
                className={clsx(
                  'h-20 sm:h-24 rounded-2xl border-2 text-white text-base sm:text-lg font-semibold transition relative overflow-hidden px-5',
                  'bg-gradient-to-b from-slate-800 to-slate-900 border-amber-200/70',
                  'shadow-[0_20px_44px_rgba(0,0,0,0.4)]'
                )}
              >
                <input
                  type="text"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                  placeholder="@X_name"
                  className="w-full h-full bg-transparent border-none outline-none text-white placeholder-white/70 text-lg sm:text-xl font-medium text-center"
                />
              </div>
              {handle.trim() && (
                <div className="flex flex-col items-center gap-3">
                  <button
                    className={clsx(
                      'w-full sm:w-64 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg shadow-emerald-500/30 transition',
                      loading && 'opacity-70 cursor-not-allowed'
                    )}
                    onClick={handleGenerate}
                    disabled={loading}
                  >
                    {loading ? 'Generujem…' : 'Generate'}
                  </button>
                  <div className="text-xs text-white/60">Max 1 per name per style.</div>
                  {status && <div className="text-sm text-white/70">{status}</div>}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {imageUrl && (
        <div className="max-w-4xl mx-auto mt-8 flex flex-col items-center gap-4">
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.35)] bg-black/20">
            <NextImage
              src={imageUrl}
              alt="Generated FireHorse"
              width={generatedSize?.w || 1200}
              height={generatedSize?.h || 1200}
              className="w-auto h-auto max-h-[520px] object-contain"
              unoptimized
              priority
            />
          </div>
          <button
            onClick={handleDownload}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-red-500 text-white font-semibold shadow-lg shadow-amber-500/30 hover:scale-[1.02] transition"
          >
            Download
          </button>
        </div>
      )}

      <canvas ref={canvasRef} className="hidden" />
    </section>
  )
}
