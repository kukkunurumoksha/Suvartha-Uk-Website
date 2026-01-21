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
  const getBackgroundColor = () => {
    switch (variant) {
      case 'light':
        return '#ffffff';
      case 'dark':
        return '#1f2937';
      default:
        return '#065f46';
    }
  };

  const getCrossColor = () => {
    switch (variant) {
      case 'light':
        return '#000000';
      case 'dark':
        return '#ffffff';
      default:
        return '#ffffff';
    }
  };

  const getBorderColor = () => {
    switch (variant) {
      case 'light':
        return '#000000';
      case 'dark':
        return '#ffffff';
      default:
        return '#10b981';
    }
  };

  return (
    <div 
      className={`${className} relative flex items-center justify-center rounded-full`}
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
        backgroundColor: getBackgroundColor(),
        border: `2px solid ${getBorderColor()}`
      }}
    >
      {/* Cross using CSS */}
      <div className="relative">
        {/* Vertical bar */}
        <div 
          style={{
            width: '3px',
            height: `${size * 0.6}px`,
            backgroundColor: getCrossColor(),
            borderRadius: '2px',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
        {/* Horizontal bar */}
        <div 
          style={{
            width: `${size * 0.6}px`,
            height: '3px',
            backgroundColor: getCrossColor(),
            borderRadius: '2px',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>
      
      {/* Small text at bottom */}
      <div 
        className="absolute bottom-1 text-xs font-bold"
        style={{ 
          color: getCrossColor(),
          fontSize: `${size * 0.15}px`,
          fontFamily: 'serif'
        }}
      >
        SM
      </div>
    </div>
  );
}