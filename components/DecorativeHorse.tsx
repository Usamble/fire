export function DecorativeHorse() {
  return (
    <svg
      viewBox="0 0 500 500"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="starPattern" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="0.4" fill="white" opacity="0.5" />
        </pattern>
        <pattern id="starPattern2" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="5" cy="5" r="0.3" fill="white" opacity="0.3" />
        </pattern>
      </defs>
      
      {/* Deep black background with white speckles */}
      <rect width="500" height="500" fill="#000000" />
      <rect width="500" height="500" fill="url(#starPattern)" />
      <rect width="500" height="500" fill="url(#starPattern2)" />
      
      {/* Bright saturated red horse - facing left, trotting pose */}
      <g transform="translate(250, 250)">
        {/* Main body - organic, elongated shape */}
        <path
          d="M -60 40 Q -70 20 -65 0 Q -60 -15 -50 -10 Q -40 -5 -30 0 Q -20 5 -10 10 Q 0 15 15 20 Q 30 25 45 30 Q 60 35 70 40 Q 75 45 70 50 Q 65 55 55 50 Q 45 45 30 40 Q 15 35 0 30 Q -15 25 -30 30 Q -45 35 -55 40 Q -60 40 -60 40 Z"
          fill="#ff0000"
        />
        
        {/* Neck - arched, raised */}
        <path
          d="M -60 20 Q -70 0 -75 -20 Q -78 -35 -70 -45 Q -60 -50 -50 -48 Q -40 -45 -35 -38 Q -30 -30 -35 -20 Q -40 -10 -50 -5 Q -60 0 -60 20 Z"
          fill="#ff0000"
        />
        
        {/* Head - slightly raised, facing left */}
        <path
          d="M -50 -5 Q -55 -18 -58 -30 Q -60 -40 -55 -48 Q -48 -52 -40 -50 Q -32 -47 -28 -40 Q -25 -32 -28 -22 Q -32 -12 -40 -8 Q -48 -4 -50 -5 Z"
          fill="#ff0000"
        />
        
        {/* Muzzle */}
        <ellipse cx="-45" cy="-15" rx="8" ry="6" fill="#ff0000" />
        
        {/* Stylized spiky mane - distinct segments flowing along neck */}
        <path
          d="M -50 -5 Q -58 -12 -65 -15 Q -72 -18 -78 -12 Q -72 -8 -65 -5 Q -58 -2 -50 -5 Z"
          fill="#ff0000"
        />
        <path
          d="M -55 -10 Q -63 -17 -70 -20 Q -77 -23 -83 -17 Q -77 -13 -70 -10 Q -63 -7 -55 -10 Z"
          fill="#ff0000"
        />
        <path
          d="M -60 -15 Q -68 -22 -75 -25 Q -82 -28 -88 -22 Q -82 -18 -75 -15 Q -68 -12 -60 -15 Z"
          fill="#ff0000"
        />
        <path
          d="M -65 -20 Q -73 -27 -80 -30 Q -87 -33 -93 -27 Q -87 -23 -80 -20 Q -73 -17 -65 -20 Z"
          fill="#ff0000"
        />
        <path
          d="M -70 -25 Q -78 -32 -85 -35 Q -92 -38 -98 -32 Q -92 -28 -85 -25 Q -78 -22 -70 -25 Z"
          fill="#ff0000"
        />
        
        {/* Front left leg - LIFTED and bent at knee (trotting) */}
        <path
          d="M -40 30 Q -45 15 -50 20 Q -55 25 -52 35 Q -48 45 -38 40 Q -33 35 -35 25 Q -37 20 -40 30 Z"
          fill="#ff0000"
        />
        <path
          d="M -50 20 L -55 30 L -45 30 Z"
          fill="#ff0000"
        />
        <path
          d="M -52 35 L -58 50 L -46 50 Z"
          fill="#ff0000"
        />
        
        {/* Front right leg - on ground */}
        <path
          d="M -20 30 L -15 75 L -5 75 Z"
          fill="#ff0000"
        />
        
        {/* Back legs */}
        <path
          d="M 40 40 L 35 80 L 45 80 Z"
          fill="#ff0000"
        />
        <path
          d="M 50 40 L 45 80 L 55 80 Z"
          fill="#ff0000"
        />
        
        {/* Full tail - curving downward and slightly forward */}
        <path
          d="M 60 30 Q 75 25 85 35 Q 95 45 92 55 Q 88 60 78 55 Q 72 50 68 45 Q 65 40 60 30 Z"
          fill="#ff0000"
        />
        <path
          d="M 78 55 Q 82 60 85 65 Q 88 70 85 75 Q 82 70 80 65 Q 78 60 78 55 Z"
          fill="#ff0000"
        />
        
        {/* LARGE five-petaled floral cut-outs on main body - prominent and distributed */}
        {/* Large flower on main body */}
        <g transform="translate(0, 25)">
          <circle cx="0" cy="0" r="18" fill="#000000" />
          <circle cx="0" cy="0" r="9" fill="#000000" />
          <line x1="0" y1="-18" x2="0" y2="18" stroke="#000000" strokeWidth="2" />
          <line x1="-18" y1="0" x2="18" y2="0" stroke="#000000" strokeWidth="2" />
          <line x1="-12.7" y1="-12.7" x2="12.7" y2="12.7" stroke="#000000" strokeWidth="2" />
          <line x1="-12.7" y1="12.7" x2="12.7" y2="-12.7" stroke="#000000" strokeWidth="2" />
        </g>
        
        {/* Large flower on upper body */}
        <g transform="translate(-30, 15)">
          <circle cx="0" cy="0" r="16" fill="#000000" />
          <circle cx="0" cy="0" r="8" fill="#000000" />
          <line x1="0" y1="-16" x2="0" y2="16" stroke="#000000" strokeWidth="1.8" />
          <line x1="-16" y1="0" x2="16" y2="0" stroke="#000000" strokeWidth="1.8" />
          <line x1="-11.3" y1="-11.3" x2="11.3" y2="11.3" stroke="#000000" strokeWidth="1.8" />
          <line x1="-11.3" y1="11.3" x2="11.3" y2="-11.3" stroke="#000000" strokeWidth="1.8" />
        </g>
        
        {/* Large flower on lower body */}
        <g transform="translate(30, 40)">
          <circle cx="0" cy="0" r="15" fill="#000000" />
          <circle cx="0" cy="0" r="7.5" fill="#000000" />
          <line x1="0" y1="-15" x2="0" y2="15" stroke="#000000" strokeWidth="1.8" />
          <line x1="-15" y1="0" x2="15" y2="0" stroke="#000000" strokeWidth="1.8" />
          <line x1="-10.6" y1="-10.6" x2="10.6" y2="10.6" stroke="#000000" strokeWidth="1.8" />
          <line x1="-10.6" y1="10.6" x2="10.6" y2="-10.6" stroke="#000000" strokeWidth="1.8" />
        </g>
        
        {/* Medium flowers on neck */}
        <g transform="translate(-45, -5)">
          <circle cx="0" cy="0" r="12" fill="#000000" />
          <circle cx="0" cy="0" r="6" fill="#000000" />
          <line x1="0" y1="-12" x2="0" y2="12" stroke="#000000" strokeWidth="1.5" />
          <line x1="-12" y1="0" x2="12" y2="0" stroke="#000000" strokeWidth="1.5" />
          <line x1="-8.5" y1="-8.5" x2="8.5" y2="8.5" stroke="#000000" strokeWidth="1.5" />
          <line x1="-8.5" y1="8.5" x2="8.5" y2="-8.5" stroke="#000000" strokeWidth="1.5" />
        </g>
        
        <g transform="translate(-40, -20)">
          <circle cx="0" cy="0" r="10" fill="#000000" />
          <circle cx="0" cy="0" r="5" fill="#000000" />
          <line x1="0" y1="-10" x2="0" y2="10" stroke="#000000" strokeWidth="1.3" />
          <line x1="-10" y1="0" x2="10" y2="0" stroke="#000000" strokeWidth="1.3" />
          <line x1="-7.1" y1="-7.1" x2="7.1" y2="7.1" stroke="#000000" strokeWidth="1.3" />
          <line x1="-7.1" y1="7.1" x2="7.1" y2="-7.1" stroke="#000000" strokeWidth="1.3" />
        </g>
        
        {/* Medium flower on head */}
        <g transform="translate(-35, -25)">
          <circle cx="0" cy="0" r="9" fill="#000000" />
          <circle cx="0" cy="0" r="4.5" fill="#000000" />
          <line x1="0" y1="-9" x2="0" y2="9" stroke="#000000" strokeWidth="1.2" />
          <line x1="-9" y1="0" x2="9" y2="0" stroke="#000000" strokeWidth="1.2" />
          <line x1="-6.4" y1="-6.4" x2="6.4" y2="6.4" stroke="#000000" strokeWidth="1.2" />
          <line x1="-6.4" y1="6.4" x2="6.4" y2="-6.4" stroke="#000000" strokeWidth="1.2" />
        </g>
        
        {/* Smaller scattered flowers on body and upper legs */}
        <g transform="translate(15, 20)">
          <circle cx="0" cy="0" r="8" fill="#000000" />
          <circle cx="0" cy="0" r="4" fill="#000000" />
          <line x1="0" y1="-8" x2="0" y2="8" stroke="#000000" strokeWidth="1" />
          <line x1="-8" y1="0" x2="8" y2="0" stroke="#000000" strokeWidth="1" />
          <line x1="-5.7" y1="-5.7" x2="5.7" y2="5.7" stroke="#000000" strokeWidth="1" />
          <line x1="-5.7" y1="5.7" x2="5.7" y2="-5.7" stroke="#000000" strokeWidth="1" />
        </g>
        
        <g transform="translate(-20, 35)">
          <circle cx="0" cy="0" r="7" fill="#000000" />
          <circle cx="0" cy="0" r="3.5" fill="#000000" />
          <line x1="0" y1="-7" x2="0" y2="7" stroke="#000000" strokeWidth="0.9" />
          <line x1="-7" y1="0" x2="7" y2="0" stroke="#000000" strokeWidth="0.9" />
          <line x1="-4.9" y1="-4.9" x2="4.9" y2="4.9" stroke="#000000" strokeWidth="0.9" />
          <line x1="-4.9" y1="4.9" x2="4.9" y2="-4.9" stroke="#000000" strokeWidth="0.9" />
        </g>
        
        <g transform="translate(25, 50)">
          <circle cx="0" cy="0" r="6" fill="#000000" />
          <circle cx="0" cy="0" r="3" fill="#000000" />
          <line x1="0" y1="-6" x2="0" y2="6" stroke="#000000" strokeWidth="0.8" />
          <line x1="-6" y1="0" x2="6" y2="0" stroke="#000000" strokeWidth="0.8" />
          <line x1="-4.2" y1="-4.2" x2="4.2" y2="4.2" stroke="#000000" strokeWidth="0.8" />
          <line x1="-4.2" y1="4.2" x2="4.2" y2="-4.2" stroke="#000000" strokeWidth="0.8" />
        </g>
        
        {/* Small patterns on head */}
        <g transform="translate(-25, -15)">
          <circle cx="0" cy="0" r="5" fill="#000000" />
          <circle cx="0" cy="0" r="2.5" fill="#000000" />
        </g>
        
        {/* Small patterns on upper legs */}
        <g transform="translate(-45, 25)">
          <circle cx="0" cy="0" r="4" fill="#000000" />
          <circle cx="0" cy="0" r="2" fill="#000000" />
        </g>
      </g>
    </svg>
  )
}
