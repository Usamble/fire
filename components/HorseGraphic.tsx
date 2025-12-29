export function HorseGraphic({ variant = 1 }: { variant?: 1 | 2 | 3 | 4 }) {
  // Different horse poses inspired by the Chinese New Year image
  const horses = {
    1: {
      // Galloping horse
      body: "M 30 140 Q 25 100 35 70 Q 45 50 65 55 Q 85 60 95 70 Q 105 80 115 75 Q 125 70 130 80 Q 135 90 130 100 Q 125 110 120 120 Q 115 130 105 135 Q 95 140 85 135 Q 75 130 65 125 Q 55 120 45 125 Q 35 130 30 140 Z",
      head: "M 65 55 Q 60 45 55 50 Q 50 55 55 65 Q 60 75 70 70 Q 75 65 70 60 Q 65 55 65 55 Z",
      mane: "M 55 50 Q 45 40 35 45 Q 30 50 35 60 Q 40 70 50 65 Q 55 60 55 50 Z",
      tail: "M 30 140 Q 20 150 25 160 Q 30 170 40 165 Q 35 155 30 140 Z",
      frontLegs: "M 45 125 L 40 150 L 50 150 Z M 55 120 L 50 145 L 60 145 Z",
      backLegs: "M 105 135 L 100 160 L 110 160 Z M 120 130 L 115 155 L 125 155 Z"
    },
    2: {
      // Rearing horse
      body: "M 40 130 Q 35 90 45 60 Q 55 40 75 45 Q 95 50 105 60 Q 115 70 125 65 Q 135 60 140 70 Q 145 80 140 90 Q 135 100 130 110 Q 125 120 115 125 Q 105 130 95 125 Q 85 120 75 115 Q 65 110 55 115 Q 45 120 40 130 Z",
      head: "M 75 45 Q 70 30 60 35 Q 55 40 60 55 Q 65 70 80 65 Q 85 60 80 50 Q 75 45 75 45 Z",
      mane: "M 60 35 Q 50 20 40 25 Q 35 30 40 45 Q 45 60 60 55 Q 65 50 60 35 Z",
      tail: "M 40 130 Q 30 140 35 150 Q 40 160 50 155 Q 45 145 40 130 Z",
      frontLegs: "M 75 115 L 70 140 L 80 140 Z",
      backLegs: "M 115 125 L 110 150 L 120 150 Z M 130 120 L 125 145 L 135 145 Z"
    },
    3: {
      // Another rearing pose
      body: "M 35 135 Q 30 95 40 65 Q 50 45 70 50 Q 90 55 100 65 Q 110 75 120 70 Q 130 65 135 75 Q 140 85 135 95 Q 130 105 125 115 Q 120 125 110 130 Q 100 135 90 130 Q 80 125 70 120 Q 60 115 50 120 Q 40 125 35 135 Z",
      head: "M 70 50 Q 65 35 55 40 Q 50 45 55 60 Q 60 75 75 70 Q 80 65 75 55 Q 70 50 70 50 Z",
      mane: "M 55 40 Q 45 25 35 30 Q 30 35 35 50 Q 40 65 55 60 Q 60 55 55 40 Z",
      tail: "M 35 135 Q 25 145 30 155 Q 35 165 45 160 Q 40 150 35 135 Z",
      frontLegs: "M 70 120 L 65 145 L 75 145 Z",
      backLegs: "M 110 130 L 105 155 L 115 155 Z M 125 125 L 120 150 L 130 150 Z"
    },
    4: {
      // Striding horse
      body: "M 25 145 Q 20 105 30 75 Q 40 55 60 60 Q 80 65 90 75 Q 100 85 110 80 Q 120 75 125 85 Q 130 95 125 105 Q 120 115 115 125 Q 110 135 100 140 Q 90 145 80 140 Q 70 135 60 130 Q 50 125 40 130 Q 30 135 25 145 Z",
      head: "M 60 60 Q 55 50 50 55 Q 45 60 50 70 Q 55 80 65 75 Q 70 70 65 65 Q 60 60 60 60 Z",
      mane: "M 50 55 Q 40 45 30 50 Q 25 55 30 65 Q 35 75 50 70 Q 55 65 50 55 Z",
      tail: "M 25 145 Q 15 155 20 165 Q 25 175 35 170 Q 30 160 25 145 Z",
      frontLegs: "M 40 130 L 35 155 L 45 155 Z M 50 125 L 45 150 L 55 150 Z",
      backLegs: "M 100 140 L 95 165 L 105 165 Z M 115 135 L 110 160 L 120 160 Z"
    }
  }

  const horse = horses[variant]

  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={`horsePattern${variant}`} x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
          <circle cx="7.5" cy="7.5" r="1" fill="white" opacity="0.4" />
          <circle cx="2" cy="2" r="0.5" fill="white" opacity="0.3" />
          <circle cx="13" cy="13" r="0.5" fill="white" opacity="0.3" />
        </pattern>
        <linearGradient id={`fireGradient${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dc2626" />
          <stop offset="50%" stopColor="#ea580c" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
      
      {/* Horse body - stylized silhouette in paper-cut style */}
      <path
        d={horse.body}
        fill="url(#fireGradient1)"
        stroke="#991b1b"
        strokeWidth="2.5"
      />
      
      {/* Horse head */}
      <path
        d={horse.head}
        fill="url(#fireGradient1)"
        stroke="#991b1b"
        strokeWidth="2.5"
      />
      
      {/* Mane */}
      <path
        d={horse.mane}
        fill="url(#fireGradient1)"
        stroke="#991b1b"
        strokeWidth="2.5"
      />
      
      {/* Tail */}
      <path
        d={horse.tail}
        fill="url(#fireGradient1)"
        stroke="#991b1b"
        strokeWidth="2.5"
      />
      
      {/* Legs */}
      <path d={horse.frontLegs} fill="url(#fireGradient1)" stroke="#991b1b" strokeWidth="2" />
      <path d={horse.backLegs} fill="url(#fireGradient1)" stroke="#991b1b" strokeWidth="2" />
      
      {/* Decorative patterns on horse - paper-cut style flowers/snowflakes */}
      <circle cx="85" cy="85" r="6" fill="white" opacity="0.5" />
      <circle cx="105" cy="100" r="5" fill="white" opacity="0.5" />
      <circle cx="90" cy="115" r="6" fill="white" opacity="0.5" />
      <circle cx="70" cy="95" r="4" fill="white" opacity="0.4" />
      
      {/* Small decorative circles */}
      <circle cx="80" cy="75" r="2" fill="white" opacity="0.6" />
      <circle cx="100" cy="90" r="2" fill="white" opacity="0.6" />
      <circle cx="75" cy="105" r="2" fill="white" opacity="0.6" />
    </svg>
  )
}

