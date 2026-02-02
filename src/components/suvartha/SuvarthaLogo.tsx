"use client";

import Image from 'next/image';

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

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  const getTextColors = () => {
    switch (variant) {
      case 'light':
        return 'text-white';
      case 'dark':
        return 'text-gray-900';
      default: // color
        return 'text-gray-800';
    }
  };

  const textColor = getTextColors();

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizeClasses[size]} flex items-center justify-center relative rounded-full overflow-hidden bg-white shadow-sm`}>
        <Image
          src="/assets/img/logo.jpeg"
          alt="Suvartha Ministries UK Logo"
          width={size === 'sm' ? 32 : size === 'md' ? 48 : size === 'lg' ? 64 : 96}
          height={size === 'sm' ? 32 : size === 'md' ? 48 : size === 'lg' ? 64 : 96}
          className="object-cover rounded-full"
          unoptimized
        />
      </div>
      
      {showText && (
        <div>
          <h1 className={`${textSizeClasses[size]} font-bold ${textColor} font-serif`}>
            Suvartha Ministries UK
          </h1>
          {size !== 'sm' && (
            <p className={`text-sm font-bold ${textColor} leading-tight`} style={{
              textShadow: variant === 'light' ? '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 2px rgba(0,0,0,0.8)' : '1px 1px 2px rgba(0,0,0,0.3)',
              fontWeight: '700',
              letterSpacing: '0.5px',
              marginTop: '2px'
            }}>
              <span>Year of Transformation </span>
              <span className={variant === 'light' ? 'text-amber-300' : 'text-amber-600'} style={{
                fontWeight: '800',
                fontSize: '1.1em',
                textShadow: variant === 'light' ? '3px 3px 6px rgba(0,0,0,0.9), 1px 1px 2px rgba(0,0,0,0.8)' : '1px 1px 2px rgba(0,0,0,0.3)'
              }}>
                2026
              </span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}