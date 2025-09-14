import React, { useEffect, useState } from 'react';

// Import your local images from src/assets/ folder
import transportation1 from '@/assets/transportation-1.jpg';
import transportation2 from '@/assets/transportation-2.jpg';

const Transportation = () => {
  useEffect(() => {
    document.title = "Transportation Facilities - Siddhartha School";
  }, []);

  // Use the imported images
  const transportationImages = [transportation1, transportation2];

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
        
        {/* Navigation arrows - Only show if there are multiple images */}
        {images.length > 1 && (
          <>
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
          </>
        )}
        
        {/* Indicators - Only show if there are multiple images */}
        {images.length > 1 && (
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
        )}
      </div>
    );
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-muted/10 min-h-screen">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">

          {/* Text Section */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Transportation Facilities</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Siddhartha School is committed to providing safe, reliable, and convenient transportation services to students residing in and around Butwal. Our well-maintained fleet of buses ensures timely pick-up and drop-off, making the daily commute stress-free for both students and parents.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              To avail transportation, students must register as bus-users in the school's accounts section prior to the commencement of service. This registration process allows us to efficiently manage routes and ensure capacity is sufficient for all passengers.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Students who wish to discontinue transportation services are required to notify the accounts department in advance to avoid unnecessary charges. This helps maintain accurate records and facilitates smooth administrative processes.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              For students relocating to a new residence, changes to bus routes and stops can be accommodated upon official notification and record updates. Please note that transfers between bus routes are not permitted unless a change of address justifies such a request. This policy ensures fairness and consistency in service management.
            </p>
          </div>

          {/* Image Carousel Section */}
          <div className="lg:w-1/2">
            <ImageCarousel 
              images={transportationImages} 
              altText="Transportation" 
            />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Transportation;