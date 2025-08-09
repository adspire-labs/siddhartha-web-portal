import React, { useEffect } from 'react';

const Playground = () => {
  useEffect(() => {
    document.title = "Playground and Sports Facilities - Siddhartha School";
  }, []);

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

          {/* Image Placeholder */}
          <div className="lg:w-1/2 rounded-lg overflow-hidden shadow-elegant bg-gray-200 flex items-center justify-center h-64">
            <span className="text-gray-500 italic">Playground Photo Placeholder</span>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Playground;
