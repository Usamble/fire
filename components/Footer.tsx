import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-red-950 via-red-900 to-red-950 text-gray-200 py-12 px-4 sm:px-6 lg:px-8 border-t-4 border-red-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-3xl font-black text-white mb-4 flex items-center gap-2">
              <span className="text-4xl">🔥</span>
              <span>FIREHORSE 2026</span>
            </h3>
            <p className="text-sm text-gray-300 font-semibold">
              Celebrating the 60-year cycle tradition. Join the community! 🚀
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-black text-white mb-4">⚠️ Disclaimer</h4>
            <p className="text-sm text-gray-300 font-semibold">
              This project is for educational and community purposes only. NOT financial advice. 
              Always do your own research (DYOR)! 🧠
            </p>
          </div>
        </div>
        
        <div className="border-t-2 border-red-600 pt-8 text-center">
          <p className="text-sm text-gray-400 font-bold">
            &copy; {currentYear} FireHorse 2026. All rights reserved. 🔥
          </p>
          <p className="text-lg text-white font-black mt-2">
            🚀 TO THE MOON! 🌙
          </p>
        </div>
      </div>
    </footer>
  )
}

