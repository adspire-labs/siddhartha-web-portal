import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from './button';
import { Card } from './card';

interface Leader {
  id: string;
  name: string;
  position: string;
  message: string;
  image: string;
  qualifications?: string;
}

const leaders: Leader[] = [
  {
    id: 'principal',
    name: 'Yam Bahadur Rana',
    position: 'Principal',
    message: 'Education, in today\'s context, carries different meaning than the yesteryear. It has much wider scope now. In this age of globalization, education must be of international level. It shouldn\'t be confined to the text books or just excelling in the examinations, rather it should help in the overall development of a student. Keeping this fact in mind, we have been striving for value based quality education.',
    image: '/api/placeholder/200/200',
    qualifications: 'M.Ed, B.Ed'
  },
  {
    id: 'md',
    name: 'Dr. Rajesh Kumar Sharma',
    position: 'Managing Director',
    message: 'Our vision is to create a learning environment where students not only excel academically but also develop strong moral values and leadership qualities. We believe in nurturing young minds to become responsible global citizens who can contribute meaningfully to society.',
    image: '/api/placeholder/200/200',
    qualifications: 'Ph.D in Education, MBA'
  },
  {
    id: 'chairman',
    name: 'Mr. Siddhartha Raj Pandey',
    position: 'Chairman',
    message: 'Since our establishment over two decades ago, Siddhartha School has been committed to providing quality education that goes beyond textbooks. We focus on holistic development, ensuring our students are prepared for the challenges of tomorrow while maintaining strong ethical foundations.',
    image: '/api/placeholder/200/200',
    qualifications: 'M.A, B.Ed, Educational Leadership Certificate'
  }
];

export function LeadershipSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % leaders.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + leaders.length) % leaders.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Leadership Messages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our dedicated leadership team who guide our educational mission
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 shadow-elegant">
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-primary/20">
                        <img
                          src={leaders[currentIndex].image}
                          alt={leaders[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full hero-gradient flex items-center justify-center">
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-1">{leaders[currentIndex].name}</h3>
                      <p className="text-primary font-semibold mb-1">{leaders[currentIndex].position}</p>
                      {leaders[currentIndex].qualifications && (
                        <p className="text-muted-foreground text-sm">{leaders[currentIndex].qualifications}</p>
                      )}
                    </div>

                    <blockquote className="text-muted-foreground leading-relaxed italic">
                      "{leaders[currentIndex].message}"
                    </blockquote>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="rounded-full p-2"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {leaders.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="rounded-full p-2"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}