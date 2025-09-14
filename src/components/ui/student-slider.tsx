import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Import student images (replace with your actual images)
import ruchiImage from '@/assets/ruchi.png';
import surendraImage from '@/assets/surendra.png';
import rakshyaImage from '@/assets/rakshya.jpg';
import jhapendraImage from '@/assets/jhapendra.jpg';

const students = [
  {
    id: 1,
    name: "Dr. Ruchi Shrestha",
    profession: "Ophthalmologist",
    message: "Siddhartha English Boarding School is a beautiful place where I gained plenty of knowledge more than 20 years back. Because of the strong foundation the school gave me I am a successful doctor today, in the field of ophthalmology. Thanks to all my teachers.",
    image: ruchiImage
  },
  {
    id: 2,
    name: "Dr. Surendra Sapkota",
    profession: "Medical Doctor",
    message: "It is rightly said, 'Education is the foundation upon which we build our future'. Great academic atmosphere, motivating teachers and ECAs of my school have helped me build a strong foundation and pave my way towards becoming a doctor. I am always indebted to my school. Life lessons learnt and moments cherished in my alma mater are engraved in my mind and heart forever.",
    image: surendraImage
  },
  {
    id: 3,
    name: "Er. Rakshya Shrestha (Ph.D)",
    profession: "Engineer",
    message: "It has been twenty years that I left school. Over these years, the tremendous progress the school has made and the outstanding performances show cased every year would not have been possible without a group of dedicated team-members who go extra mile in helping the students and creating a positive learning environment. I am a proud ex-Siddharthian! I wish every child could attend a school like this.",
    image: rakshyaImage
  },
  {
    id: 4,
    name: "Major Jhapendra Chaudhary",
    profession: "Military Officer",
    message: "SEBSS is an institution which not only provides fishes but also teaches children & students (who are the future of Nation) how to fish. The Board Members, Teachers, Staffs and Students of SEBSS make a joint family which is functioning as a single unit. It has been playing vital role in order to enhance the children's behavior and to shape them to a responsible citizens, no matter whichever field they are in. I really 'SALUTE' the Teachers of SEBSS.",
    image: jhapendraImage
  }
];

export function StudentsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0); // 0: right, 1: left

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(0);
      setCurrentIndex((prev) => (prev + 1) % students.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setDirection(0);
    setCurrentIndex((prev) => (prev + 1) % students.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev - 1 + students.length) % students.length);
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
      scale: 1
    },
    exit: (direction) => ({
      x: direction === 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95
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
            <span className="relative z-10">Our Proud Students</span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary/80 rounded-full" style={{ bottom: '-10px' }}></div>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Success stories from our alumni who are making a difference in the world
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
              transition={{ duration: 0.5 }}
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
                        src={students[currentIndex].image} 
                        alt={students[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-primary mb-1">
                        {students[currentIndex].name}
                      </h3>
                      <div className="inline-block bg-primary/10 px-4 py-1 rounded-full">
                        <p className="text-secondary font-medium">
                          {students[currentIndex].profession}
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
                        {students[currentIndex].message}
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
              {students.map((_, index) => (
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