import React, { useEffect, useState } from 'react';

// Import your local images from src/assets/ folder
import playground1 from '@/assets/playground-1.jpg';
import playground2 from '@/assets/playground-2.jpg';
import playground3 from '@/assets/playground-3.jpg';


const Playground = () => {
  useEffect(() => {
    document.title = "Playground and Sports Facilities - Siddhartha School";
  }, []);

  // Use the imported images
  const playgroundImages = [playground1, playground2, playground3];

  // ImageCarousel component
  const ImageCarousel = ({ images, altText }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }, [images.length]);

    const goToNext = () => {
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    const goToPrev = () => {
      setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    return (
      <div className="relative rounded-lg overflow-hidden shadow-elegant h-64 md:h-80 w-full">
        <div className="relative h-full overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`${altText} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          aria-label="Next image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-muted/10 min-h-screen">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Section */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Playground & Sports Facilities</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              The school has ample space for students to play outdoor games. Besides provision for indoor games, it has a football ground, basketball court, lawn tennis court, badminton court, and volleyball court. Athletics and cricket are also manageable.
            </p>
          </div>

          {/* Image Carousel */}
          <div className="lg:w-1/2">
            <ImageCarousel 
              images={playgroundImages} 
              altText="Playground" 
            />
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Playground;