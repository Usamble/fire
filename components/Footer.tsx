import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t-4" style={{
      background: 'linear-gradient(135deg, #6B0000 0%, #8B0000 25%, #A52A2A 50%, #8B0000 75%, #6B0000 100%)',
      borderColor: '#DAA520'
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <div>
            <h3 className="text-3xl font-calligraphy font-black mb-4" style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #DAA520 50%, #FFA500 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
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
          <p className="text-lg font-black mt-2" style={{ color: '#FFD700' }}>
            TO THE MOON!
          </p>
        </div>
      </div>
    </footer>
  )
}

