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
          accent: '#f3f4f6',
          secondary: '#e5e7eb'
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
      <circle cx="50" cy="50" r="48" fill={colors.primary} stroke={colors.accent} strokeWidth="2"/>
      
      {/* Cross Symbol */}
      <g transform="translate(50,50)">
        {/* Vertical bar of cross */}
        <rect x="-2" y="-20" width="4" height="40" fill={colors.accent} rx="2"/>
        {/* Horizontal bar of cross */}
        <rect x="-12" y="-2" width="24" height="4" fill={colors.accent} rx="2"/>
      </g>
      
      {/* Decorative Elements - Rays */}
      <g transform="translate(50,50)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
          <g key={index} transform={`rotate(${angle})`}>
            <rect
              x="-0.5"
              y="-32"
              width="1"
              height="6"
              fill={colors.secondary}
              rx="0.5"
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
        fontSize="6"
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