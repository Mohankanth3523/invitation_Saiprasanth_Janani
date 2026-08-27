export default function Thoranam({ className = '' }) {
  const hangers = Array.from({ length: 11 }, (_, i) => i)

  return (
    <svg
      viewBox="0 0 600 92"
      preserveAspectRatio="none"
      className={`h-auto w-full text-gold ${className}`}
      aria-hidden="true"
    >
      <line x1="0" y1="6" x2="600" y2="6" stroke="currentColor" strokeWidth="2" />

      {hangers.map((i) => {
        const x = 20 + i * 56
        const isFlower = i % 3 === 1

        return (
          <g key={i} transform={`translate(${x} 6)`}>
            <line x1="0" y1="0" x2="0" y2="14" stroke="currentColor" strokeWidth="1.25" opacity="0.8" />

            {isFlower ? (
              <g className="text-maroon" fill="currentColor">
                {[0, 60, 120, 180, 240, 300].map((angle) => (
                  <ellipse
                    key={angle}
                    cx="0"
                    cy="19"
                    rx="2"
                    ry="4"
                    opacity="0.85"
                    transform={`rotate(${angle} 0 25)`}
                  />
                ))}
                <circle cx="0" cy="25" r="2.4" className="text-gold" fill="currentColor" />
              </g>
            ) : (
              <path
                d="M0 14C-6.5 20 -6.5 31 0 38C6.5 31 6.5 20 0 14Z"
                fill="currentColor"
                opacity="0.9"
              />
            )}
          </g>
        )
      })}
    </svg>
  )
}
