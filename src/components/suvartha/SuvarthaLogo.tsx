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

  const getTextColor = () => {
    switch (variant) {
      case 'light':
        return 'text-white';
      case 'dark':
        return 'text-gray-900';
      default: // color
        return 'text-emerald-800';
    }
  };

  const textColor = getTextColor();

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizeClasses[size]} flex items-center justify-center relative`}>
        <Image
          src="/assets/img/suvartha-logo.svg"
          alt="Suvartha Ministries UK Logo"
          width={size === 'sm' ? 32 : size === 'md' ? 48 : size === 'lg' ? 64 : 96}
          height={size === 'sm' ? 32 : size === 'md' ? 48 : size === 'lg' ? 64 : 96}
          className={sizeClasses[size]}
          priority
        />
      </div>
      
      {showText && (
        <div>
          <h1 className={`${textSizeClasses[size]} font-bold ${textColor} font-serif`}>
            Suvartha Ministries UK
          </h1>
          {size !== 'sm' && (
            <p className={`text-xs opacity-90 ${textColor}`}>
              Year of Replenishment 2025
            </p>
          )}
        </div>
      )}
    </div>
  );
}