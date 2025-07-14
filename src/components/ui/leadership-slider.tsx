import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const leaders = [
  {
    id: 1,
    name: "Dr. Ramesh Sharma",
    designation: "Chairman",
    message: "Education is the most powerful weapon which you can use to change the world. At Siddhartha School, we are committed to providing world-class education that nurtures both academic excellence and moral values. Our students are prepared not just for exams, but for life.",
    image: null // Placeholder for now
  },
  {
    id: 2,
    name: "Prof. Sunita Acharya",
    designation: "Principal",
    message: "As Principal, I believe in creating an environment where every student can discover their potential and pursue their dreams. Our dedicated faculty and modern teaching methods ensure that each child receives personalized attention and guidance for their holistic development.",
    image: null
  },
  {
    id: 3,
    name: "Mr. Prakash Thapa",
    designation: "Managing Director",
    message: "Siddhartha School stands as a beacon of quality education in Nepal. We continuously invest in infrastructure, technology, and teacher training to provide the best learning experience. Our goal is to shape future leaders who will contribute positively to society.",
    image: null
  }
];

export function LeadershipSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % leaders.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % leaders.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + leaders.length) % leaders.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Leadership Messages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Inspiring words from our educational leaders who guide our mission of excellence
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 shadow-elegant bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Profile Section */}
                  <div className="text-center">
                    <motion.div
                      className="w-32 h-32 mx-auto mb-4 hero-gradient rounded-full flex items-center justify-center overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {leaders[currentIndex].image ? (
                        <img 
                          src={leaders[currentIndex].image} 
                          alt={leaders[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-16 h-16 text-white" />
                      )}
                    </motion.div>
                    <h3 className="text-xl font-bold text-primary mb-1">
                      {leaders[currentIndex].name}
                    </h3>
                    <p className="text-secondary font-medium">
                      {leaders[currentIndex].designation}
                    </p>
                  </div>

                  {/* Message Section */}
                  <div className="lg:col-span-2">
                    <motion.blockquote
                      className="text-muted-foreground leading-relaxed text-base lg:text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <span className="text-4xl text-primary font-serif leading-none">"</span>
                      {leaders[currentIndex].message}
                      <span className="text-4xl text-primary font-serif leading-none">"</span>
                    </motion.blockquote>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {leaders.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary scale-125'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 10000);
                  }}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}