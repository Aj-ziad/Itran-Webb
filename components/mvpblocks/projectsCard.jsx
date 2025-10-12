'use client';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({
  title,
  description,
  images = [],
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const nextSlide = () => setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  const prevSlide = () => setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentIndex * carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    if (images.length <= 1) return;
    if (!isHovered && !isPaused) {
      autoPlayRef.current = setInterval(nextSlide, 4000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isHovered, isPaused, images.length]);

  return (
    <motion.div
      className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-800"
      style={{
        background: 'linear-gradient(180deg, #0e0e0e 0%, #181818 100%)',
      }}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel */}
      <div className="relative h-64 overflow-hidden bg-black">
        <div ref={carouselRef} className="flex h-full snap-x snap-mandatory overflow-x-auto scrollbar-hide">
          {images.map((src, index) => (
            <div key={index} className="snap-start min-w-full h-full relative">
              <img
                src={src}
                alt={`${title} ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(i);
                }}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? 'w-6 bg-primary' : 'w-2 bg-gray-400/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        )}

        {/* Counter */}
        {images.length > 1 && (
          <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow relative">
        <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm mb-5 line-clamp-3">{description}</p>
        <button className="mt-auto w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all">
          <span>Voir les détails</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}