export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="text-center p-8">
        <h2 className="text-4xl font-bold mb-4">404</h2>
        <p className="text-white/70 mb-6">Stránka sa nenašla</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold transition"
        >
          Späť na hlavnú stránku
        </a>
      </div>
    </div>
  )
}



