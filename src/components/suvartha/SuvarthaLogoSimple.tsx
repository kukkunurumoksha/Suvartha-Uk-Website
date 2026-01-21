"use client";

interface SuvarthaLogoSimpleProps {
  size?: number;
  variant?: 'light' | 'dark' | 'color';
  className?: string;
}

export default function SuvarthaLogoSimple({ 
  size = 32, 
  variant = 'color',
  className = '' 
}: SuvarthaLogoSimpleProps) {
  const getColors = () => {
    switch (variant) {
      case 'light':
        return {
          primary: '#ffffff',
          accent: '#ffffff',
          secondary: '#f3f4f6'
        };
      case 'dark':
        return {
          primary: '#1f2937',
          accent: '#374151',
          secondary: '#4b5563'
        };
      default: // color
        return {
          primary: '#065f46',
          accent: '#10b981',
          secondary: '#047857'
        };
    }
  };

  const colors = getColors();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/* Outer Circle */}
      <circle cx="50" cy="50" r="48" fill={colors.primary} stroke={colors.accent} strokeWidth="3"/>
      
      {/* Cross Symbol */}
      <g transform="translate(50,50)">
        {/* Vertical bar of cross */}
        <rect x="-3" y="-22" width="6" height="44" fill={colors.accent} rx="3"/>
        {/* Horizontal bar of cross */}
        <rect x="-15" y="-3" width="30" height="6" fill={colors.accent} rx="3"/>
      </g>
      
      {/* Decorative Elements - Rays */}
      <g transform="translate(50,50)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
          <g key={index} transform={`rotate(${angle})`}>
            <rect
              x="-1"
              y="-35"
              width="2"
              height="8"
              fill={colors.secondary}
              rx="1"
            />
          </g>
        ))}
      </g>
      
      {/* Text Arc - "SUVARTHA" */}
      <defs>
        <path
          id={`textCircle-${size}`}
          d="M 50,50 m -25,0 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0"
        />
      </defs>
      <text
        fontSize="7"
        fill={colors.accent}
        fontFamily="serif"
        fontWeight="bold"
      >
        <textPath href={`#textCircle-${size}`} startOffset="25%">
          SUVARTHA
        </textPath>
      </text>
    </svg>
  );
}