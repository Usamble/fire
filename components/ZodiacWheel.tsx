export function ZodiacWheel() {
  return (
    <div className="relative w-64 h-64 mx-auto">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wheelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff0000" />
            <stop offset="100%" stopColor="#ff6b35" />
          </linearGradient>
        </defs>
        
        {/* Outer circle */}
        <circle cx="100" cy="100" r="95" fill="url(#wheelGradient)" stroke="#cc0000" strokeWidth="3" />
        
        {/* Center circle */}
        <circle cx="100" cy="100" r="60" fill="white" stroke="#ff0000" strokeWidth="2" />
        
        {/* Horse segment (highlighted) - positioned at top */}
        <path
          d="M 100 5 L 115 45 L 100 60 L 85 45 Z"
          fill="#ffa500"
          stroke="#cc0000"
          strokeWidth="2"
        />
        
        {/* Horse icon in center */}
        <text x="100" y="110" fontSize="40" fill="#ff0000" textAnchor="middle" fontFamily="serif" fontWeight="bold">
          馬
        </text>
        
        {/* Year 2026 */}
        <text x="100" y="135" fontSize="16" fill="#ff0000" textAnchor="middle" fontWeight="bold">
          2026
        </text>
        
        {/* Decorative elements */}
        <circle cx="100" cy="100" r="70" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
        <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
      </svg>
    </div>
  )
}

