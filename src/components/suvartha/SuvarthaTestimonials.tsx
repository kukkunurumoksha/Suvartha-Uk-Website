"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SuvarthaTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Soby Eldho",
      text: "God has done wonders for me, I want to thank Lord Jesus Christ and thank you to all the people in church for their prayers and support. My life has been completely renewed.",
      role: "Community Member",
      image: "/assets/img/Soby Eldho.jpg"
    },
    {
      name: "Sandhya Ratheesh", 
      text: "I was COVID +ve, given birth to a baby with sound health and no COVID-19, though the baby was predicted to be +ve and to suffer long time skin disease. All the glory to Lord Jesus Christ.",
      role: "Community Member",
      image: "/assets/img/Sandhya Ratheesh.jpg"
    }
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);



  return (
    <section id="testimonials" className="pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">Testimonials</h2>
          <div className="w-16 sm:w-24 h-1 bg-emerald-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Hear from our community members about their experiences and faith journey with us
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto mb-12 overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl mx-4 border-2 border-black">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-emerald-400 shadow-lg">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={160}
                          height={160}
                          className="w-full h-full object-cover"
                          priority={index === 0}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                        {testimonial.name}
                      </h3>
                      <div className="w-16 sm:w-20 h-1 bg-gray-800 mx-auto md:mx-0 mb-4 sm:mb-6"></div>
                      <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6 text-justify">
                        {testimonial.text}
                      </p>
                      <p className="text-emerald-600 font-semibold text-base sm:text-lg">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-black' : 'bg-white border border-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}