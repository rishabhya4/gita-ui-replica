import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

interface HeroSliderProps {
  images: {
    src: string;
    alt: string;
  }[];
  interval?: number;
}

export function HeroSlider({ images, interval = 5000 }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, images.length, interval, isPaused]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <section className="relative w-full overflow-hidden">
      <div 
        className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides */}
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full overflow-hidden"
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover object-top"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] animate-fade-up">
            BHAGAVAD GĪTĀ
          </h1>
          <p className="mt-4 font-heading text-xl sm:text-2xl md:text-3xl text-amber-300 font-medium italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] animate-fade-up" style={{ animationDelay: '0.1s' }}>
            श्रीमद्भगवद्गीता
          </p>
          <p className="mt-3 text-base sm:text-lg text-white/90 font-medium max-w-xl animate-fade-up drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" style={{ animationDelay: '0.2s' }}>
            The Song of the Lord - Ancient wisdom for modern seekers
          </p>
        </div>

      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-300" />
    </section>
  );
}
