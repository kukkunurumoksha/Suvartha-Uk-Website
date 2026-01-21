"use client";

import Image from 'next/image';

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
  // For light backgrounds, we'll use a white version of the logo
  const logoSrc = variant === 'light' 
    ? "/assets/img/suvartha-logo-simple.svg" 
    : "/assets/img/suvartha-logo-simple.svg";

  return (
    <Image
      src={logoSrc}
      alt="Suvartha Ministries UK Logo"
      width={size}
      height={size}
      className={`${className} ${variant === 'light' ? 'filter brightness-0 invert' : ''}`}
      priority
    />
  );
}