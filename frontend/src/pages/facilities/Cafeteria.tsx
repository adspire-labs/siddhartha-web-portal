import React, { useEffect } from 'react';

const Canteen = () => {
  useEffect(() => {
    document.title = "School Canteen - Siddhartha School";
  }, []);

  return (
    <div className="pt-16">
      <section className="py-20 bg-muted/10 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <h1 className="text-4xl font-bold mb-6">School Canteen</h1>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                A hygienic canteen provides fresh food items. Junk foods are discouraged at school. The rates are always in accordance with the agreement with the school. However, students are encouraged to carry their Tiffin’s.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="relative rounded-lg overflow-hidden shadow-elegant bg-gray-200 flex items-center justify-center h-64">
              {/* Replace with actual image when ready */}
              <span className="text-gray-500 italic">Photo Placeholder</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Canteen;
