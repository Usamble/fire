import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t-4" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1f2937 40%, #7f1d1d 95%)',
      borderColor: '#fbbf24'
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <div>
            <h3
              className="text-3xl font-headline font-black mb-4 text-white"
              style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 60%, #fb923c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              FIREHORSE 2026
            </h3>
            <p className="text-sm font-semibold" style={{ color: '#F5E6D3' }}>
              Celebrating the 60-year cycle tradition. Join the community!
            </p>
          </div>
        </div>
        
        <div className="border-t-2 pt-8 text-center" style={{ borderColor: '#DAA520' }}>
          <p className="text-sm font-bold" style={{ color: '#D4C4A8' }}>
            &copy; {currentYear} FireHorse 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
