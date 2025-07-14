import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Import face images (replace with your actual images)
import chairmanImage from '@/assets/chairman.jpg';
import principalImage from '@/assets/principal.jpg';
import mdImage from '@/assets/md.jpg';

const leaders = [
  {
    id: 1,
    name: "Yam Bahadur Rana",
    designation: "Principal",
    message: "We can proudly say that we have laid strong foundation for the students which have enabled them to excel in different fields. This would not have been possible without commitment and the dedication of the promoters, faith and support of the guardians and the active co-operation of the staff. I would like to express my sincere gratitude to them.",
    image: principalImage
  },
  {
    id: 2,
    name: "Ram Lal Shrestha",
    designation: "Chairperson",
    message: "We can proudly say that we have laid strong foundation for the students which have enabled them to excel in different fields. This would not have been possible without commitment and the dedication of the promoters, faith and support of the guardians and the active co-operation of the staff. I would like to express my sincere gratitude to them.",
    image: chairmanImage
  },
  {
    id: 3,
    name: "Babu Ram Khanal",
    designation: "Managing Director",
    message: "We are aware of the fact that we are nurturing the smart generation of the 21st century. We never compromise in creating congenial educational environment. We firmly believe that in addition to qualified faculty members, students need physical facilities with modern teaching aids. But at the same time we strive for sustaining the ethical and moral values.",
    image: mdImage
  }
];

export function LeadershipSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0); // 0: right, 1: left

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(0);
      setCurrentIndex((prev) => (prev + 1) % leaders.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setDirection(0);
    setCurrentIndex((prev) => (prev + 1) % leaders.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev - 1 + leaders.length) % leaders.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 0 : 1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Animation variants
  const variants = {
    enter: (direction) => ({
      x: direction === 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    },
    exit: (direction) => ({
      x: direction === 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 }
    })
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">Leadership Messages</span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary/80 rounded-full"></div>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Inspiring words from our educational leaders who guide our mission of excellence
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <Card className="p-8 shadow-xl border border-muted-foreground/10 bg-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/10 rounded-full transform -translate-x-20 translate-y-16"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center relative z-10">
                  {/* Profile Section */}
                  <div className="lg:col-span-2 flex flex-col items-center">
                    <motion.div
                      className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
                      <img 
                        src={leaders[currentIndex].image} 
                        alt={leaders[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-primary mb-1">
                        {leaders[currentIndex].name}
                      </h3>
                      <div className="inline-block bg-primary/10 px-4 py-1 rounded-full">
                        <p className="text-secondary font-medium">
                          {leaders[currentIndex].designation}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Message Section */}
                  <div className="lg:col-span-3">
                    <div className="relative">
                      <svg 
                        className="absolute -top-8 -left-8 w-16 h-16 text-primary/20" 
                        viewBox="0 0 24 24"
                      >
                        <path fill="currentColor" d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <motion.blockquote
                        className="text-muted-foreground leading-relaxed text-lg lg:text-xl pl-8 pr-4 py-6 italic relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <span className="absolute top-0 left-0 text-6xl text-primary/30 font-serif leading-none -mt-2">"</span>
                        {leaders[currentIndex].message}
                        <span className="absolute bottom-0 right-0 text-6xl text-primary/30 font-serif leading-none -mb-4">"</span>
                      </motion.blockquote>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-10 space-x-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full w-12 h-12 shadow-md hover:shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-3">
              {leaders.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary scale-125'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full w-12 h-12 shadow-md hover:shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
        
        {/* Decorative bottom pattern */}
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-2">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className={`w-3 h-1 rounded-full ${
                  i === 2 ? 'bg-primary w-8' : 'bg-muted-foreground/20'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}