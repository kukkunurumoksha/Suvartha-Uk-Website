"use client";

interface SuvarthaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'color';
  showText?: boolean;
  className?: string;
}

export default function SuvarthaLogo({ 
  size = 'md', 
  variant = 'color', 
  showText = true,
  className = '' 
}: SuvarthaLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const sizePixels = {
    sm: 32,
    md: 48,
    lg: 64,
    xl: 96
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  const getColors = () => {
    switch (variant) {
      case 'light':
        return {
          primary: '#ffffff',
          accent: '#f3f4f6',
          secondary: '#e5e7eb',
          text: 'text-white'
        };
      case 'dark':
        return {
          primary: '#1f2937',
          accent: '#374151',
          secondary: '#4b5563',
          text: 'text-gray-900'
        };
      default: // color
        return {
          primary: '#065f46',
          accent: '#10b981',
          secondary: '#047857',
          text: 'text-emerald-800'
        };
    }
  };

  const colors = getColors();

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizeClasses[size]} flex items-center justify-center relative`}>
        <svg
          width={sizePixels[size]}
          height={sizePixels[size]}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={sizeClasses[size]}
        >
          {/* Outer Circle */}
          <circle cx="50" cy="50" r="48" fill={colors.primary} stroke={colors.accent} strokeWidth="2"/>
          
          {/* Inner Decorative Circle */}
          <circle cx="50" cy="50" r="38" fill="none" stroke={colors.secondary} strokeWidth="1" strokeDasharray="3,2"/>
          
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
              SUVARTHA MINISTRIES
            </textPath>
          </text>
          
          {/* Bottom Text - "EST 1925" */}
          <text
            x="50"
            y="85"
            textAnchor="middle"
            fontSize="4"
            fill={colors.secondary}
            fontFamily="serif"
            fontWeight="600"
          >
            EST 1925
          </text>
        </svg>
      </div>
      
      {showText && (
        <div>
          <h1 className={`${textSizeClasses[size]} font-bold ${colors.text} font-serif`}>
            Suvartha Ministries UK
          </h1>
          {size !== 'sm' && (
            <p className={`text-xs font-medium ${colors.text}`} style={{
              textShadow: variant === 'light' ? '1px 1px 2px rgba(0,0,0,0.5)' : 'none'
            }}>
              Year of Transformation 2026
            </p>
          )}
        </div>
      )}
    </div>
  );
}