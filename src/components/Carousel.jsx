'use client';

import React, { useState } from 'react';
import Image from 'next/image';

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null; // Return null if no slides are provided
  }

  return (
    <div className="carousel-container relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id} // Assume each slide has a unique id
          className={`slide absolute inset-0 transition-opacity duration-500 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
          style={{ height: '100%' }} // Ensure the slide has a height
        >
          <Image
            src={slide.url}
            alt={slide.alt}
            fill // This will fill the parent element's width and height
            className="object-cover w-full h-full" // Apply Tailwind CSS directly for styling
            priority={index === current}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-0 z-30 inline-flex items-center justify-center p-4 bg-gray-700 bg-opacity-50 text-white hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-label="Previous slide"
      >
        {/* Replace with an icon or text */}
        {'<'}
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-0 z-30 inline-flex items-center justify-center p-4 bg-gray-700 bg-opacity-50 text-white hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-label="Next slide"
      >
        {/* Replace with an icon or text */}
        {'>'}
      </button>
    </div>
  );
}

export default Carousel;
