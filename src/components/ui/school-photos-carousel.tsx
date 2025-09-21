import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import school images
import mainBuilding from '@/assets/main-building.jpg';
import schoolBuilding from '@/assets/school-building.jpg';
import library1 from '@/assets/library-1.jpg';
import library2 from '@/assets/library-2.jpg';
import scienceLab1 from '@/assets/science-lab-1.jpg';
import scienceLab2 from '@/assets/science-lab-2.jpg';
import playground1 from '@/assets/playground-1.jpg';
import canteen1 from '@/assets/canteen-1.jpg';
import projectorHall from '@/assets/projector-hall.jpg';
import avRoom from '@/assets/av-room.jpg';

const schoolImages = [
  { src: mainBuilding, alt: 'Siddhartha School Main Building' },
  { src: schoolBuilding, alt: 'School Campus Building' },
  { src: library1, alt: 'Well-equipped Library' },
  { src: library2, alt: 'Reading Area in Library' },
  { src: scienceLab1, alt: 'Modern Science Laboratory' },
  { src: scienceLab2, alt: 'Physics Laboratory' },
  { src: playground1, alt: 'School Playground' },
  { src: canteen1, alt: 'School Cafeteria' },
  { src: projectorHall, alt: 'Projector Hall' },
  { src: avRoom, alt: 'Audio Visual Room' }
];

export function SchoolPhotosCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % schoolImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + schoolImages.length) % schoolImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % schoolImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative w-full h-[60vh] min-h-[400px] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Main Image Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={schoolImages[currentIndex].src}
            alt={schoolImages[currentIndex].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90 shadow-lg"
        onClick={goToPrevious}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90 shadow-lg"
        onClick={goToNext}
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {schoolImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary w-6' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium z-10">
        {currentIndex + 1} / {schoolImages.length}
      </div>
    </div>
  );
}