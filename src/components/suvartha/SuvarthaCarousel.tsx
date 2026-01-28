"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SuvarthaCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Church images for carousel
  const images = [
    {
      src: '/assets/img/hero-background.jpeg',
      alt: 'Suvartha Ministries UK',
      title: 'Welcome to Suvartha Ministries UK',
      description: 'A place of worship, prayer, and community fellowship since 1925'
    },
    {
      src: '/assets/img/Family.jpeg',
      alt: 'Church Family',
      title: 'Our Family',
      description: 'United in faith, bound by love - our beautiful church family'
    },
    {
      src: '/assets/img/malayalam-verse.jpeg',
      alt: 'Malayalam Scripture Verse',
      title: 'God\'s Promise',
      description: 'Scripture verses and teachings in Malayalam for our community'
    },
    {
      src: '/assets/img/English-verse.jpeg',
      alt: 'English Scripture Verse',
      title: 'Divine Blessing',
      description: 'Scripture verses and teachings in English for our diverse community'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="home" className="relative">
      {/* Carousel Container - Full height hero section */}
      <div className="relative">
        <div className="relative h-screen overflow-hidden">
          {/* Images */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`${
                  image.src.includes('Family.jpeg') || image.src.includes('malayalam-verse.jpeg') || image.src.includes('English-verse.jpeg')
                    ? 'object-contain object-center' 
                    : image.src.includes('hero-background.jpeg')
                    ? 'object-cover object-bottom'
                    : 'object-cover object-center'
                }`}
                priority={index === 0}
                unoptimized
              />
              
              {/* Overlay - darker for home page to make text more visible */}
              <div className={`absolute inset-0 ${
                image.src.includes('Family.jpeg') || image.src.includes('malayalam-verse.jpeg') || image.src.includes('English-verse.jpeg')
                  ? 'bg-black bg-opacity-10' 
                  : 'bg-black bg-opacity-50'
              }`}></div>
              
              {/* Content */}
              <div className={`absolute inset-0 flex ${
                image.src.includes('Family.jpeg') || image.src.includes('malayalam-verse.jpeg') || image.src.includes('English-verse.jpeg')
                  ? 'items-end pb-32' 
                  : 'items-center'
              } justify-center`}>
                <div className={`text-center text-white px-4 max-w-4xl transition-all duration-1000 ease-out ${
                  index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <h1 className={`${
                    image.src.includes('Family.jpeg') || image.src.includes('malayalam-verse.jpeg') || image.src.includes('English-verse.jpeg')
                      ? 'text-2xl md:text-3xl lg:text-4xl font-medium'
                      : 'text-4xl md:text-5xl lg:text-6xl font-bold'
                  } mb-6 text-shadow-lg transform transition-all duration-1200 delay-300 ease-out ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    {image.title}
                  </h1>
                  
                  {!image.src.includes('Family.jpeg') && !image.src.includes('malayalam-verse.jpeg') && !image.src.includes('English-verse.jpeg') && (
                    <p className={`text-xl md:text-2xl lg:text-3xl text-shadow-md opacity-90 mb-8 transform transition-all duration-1200 delay-500 ease-out ${
                      index === currentSlide ? 'translate-y-0 opacity-90' : 'translate-y-4 opacity-0'
                    }`}>
                      {image.description}
                    </p>
                  )}
                  
                  {/* Call to action buttons for first slide */}
                  {index === currentSlide && index === 0 && (
                    <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-8 transform transition-all duration-1200 delay-700 ease-out ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                      <a
                        href="#services"
                        className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Our Services
                      </a>
                      <a
                        href="#contact"
                        className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Join Our Prayer
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scroll down indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Dots Indicator - positioned over the image */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-amber-600 scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play control - positioned over the image */}
        <div className="absolute bottom-4 right-4 z-10">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`text-sm px-3 py-2 rounded-full transition-all duration-300 backdrop-blur-sm ${
              isAutoPlaying
                ? 'bg-amber-600 bg-opacity-80 text-white hover:bg-opacity-100'
                : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
            }`}
          >
            {isAutoPlaying ? '⏸️' : '▶️'}
          </button>
        </div>
      </div>
    </section>
  );
}