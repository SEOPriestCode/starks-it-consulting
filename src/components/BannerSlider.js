'use client';

import { useState, useEffect, useCallback } from 'react';

const SLIDE_INTERVAL = 5000; // 5 seconds

const images = [
  {
    src: '/slider_1.png',
    alt: 'Two Black professionals collaborating with a tablet in a premium corporate conference room'
  },
  {
    src: '/slider_2.png',
    alt: 'Modern office technology workspace'
  },
  {
    src: '/slider_3.png',
    alt: 'Team of Black software developers and managers discussing design in a vibrant open-plan workspace'
  }
];

export default function BannerSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="banner-slider">
      <div 
        className="banner-slider-track" 
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="banner-slide">
            <img 
              src={img.src} 
              alt={img.alt} 
              loading={index === 0 ? 'eager' : 'lazy'} 
            />
          </div>
        ))}
      </div>
      
      {/* Pagination indicators */}
      <div className="banner-slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`banner-slider-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
