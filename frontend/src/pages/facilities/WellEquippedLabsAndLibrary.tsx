import React, { useEffect } from 'react';

const WellEquippedLibrary = () => {
  useEffect(() => {
    document.title = "Science Lab, Computer Lab & Library - Siddhartha School";
  }, []);

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

            <div className="relative rounded-lg overflow-hidden shadow-elegant bg-gray-200 flex items-center justify-center h-64">
              <span className="text-gray-500 italic">Science Lab Photo Placeholder</span>
            </div>
          </div>

          {/* Computer Lab */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Computer Lab</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                There are three computer labs where nearly hundred students can operate computers at a time. Each lab is provided with high speed internet facilities.
              </p>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-elegant bg-gray-200 flex items-center justify-center h-64">
              <span className="text-gray-500 italic">Computer Lab Photo Placeholder</span>
            </div>
          </div>

          {/* Library */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Library</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                The school has a well-stocked library, having specialized books on different subjects, daily newspapers, popular magazines and journals. The library is up to date and fully computerized.
              </p>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-elegant bg-gray-200 flex items-center justify-center h-64">
              <span className="text-gray-500 italic">Library Photo Placeholder</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default WellEquippedLibrary;
