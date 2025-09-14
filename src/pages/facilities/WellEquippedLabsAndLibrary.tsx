import React, { useEffect, useState } from 'react';

// Import your local images (adjust paths according to your folder structure)
import scienceLab1 from '@/assets/science-lab-1.jpg';
import scienceLab2 from '@/assets/science-lab-2.jpg';
import scienceLab3 from '@/assets/science-lab-3.jpg';
import scienceLab4 from '@/assets/science-lab-4.jpg';
import scienceLab5 from '@/assets/science-lab-5.jpg';
import scienceLab6 from '@/assets/science-lab-6.jpg';

import hmLab1 from '@/assets/hm-1.jpg';
import hmLab2 from '@/assets/hm-2.jpg';
import hmLab3 from '@/assets/hm-3.jpg';
import hmLab4 from '@/assets/hm-4.jpg';
import hmLab5 from '@/assets/hm-5.jpg';

import library1 from '@/assets/library-1.jpg';
import library2 from '@/assets/library-2.jpg';
import library3 from '@/assets/library-3.jpg';
import library4 from '@/assets/library-4.jpg';
import library5 from '@/assets/library-5.jpg';

const WellEquippedLibrary = () => {
  useEffect(() => {
    document.title = "Science Lab, Computer Lab & Library - Siddhartha School";
  }, []);

  // Use the imported images
  const sectionImages = {
    scienceLab: [scienceLab1, scienceLab2, scienceLab3],
    hmLab: [hmLab1, hmLab2, hmLab3, hmLab4, hmLab5],
    library: [library1, library2, library3]
  };

  // ImageCarousel component for each section
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
      <div className="relative rounded-lg overflow-hidden shadow-elegant h-64">
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
        <div className="container mx-auto px-4 space-y-16">

          {/* Science Lab */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Science Lab</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                The school has sophisticated laboratories for Physics, Chemistry and Biology.
              </p>
            </div>

            <ImageCarousel 
              images={sectionImages.scienceLab} 
              altText="Science Lab" 
            />
          </div>

          {/* Hotel Management Lab */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Hotel Management Lab</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                The school has sophisticated laboratories for Hotel Management.
              </p>
            </div>

            <ImageCarousel 
              images={sectionImages.hmLab} 
              altText="Hotel Management Lab" 
            />
          </div>

          {/* Library */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Library</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                The school has a well-stocked library, having specialized books on different subjects, daily newspapers, popular magazines and journals. The library is up to date and fully computerized.
              </p>
            </div>

            <ImageCarousel 
              images={sectionImages.library} 
              altText="Library" 
            />
          </div>

        </div>
      </section>
    </div>
  );
};

export default WellEquippedLibrary;