import React, { useEffect } from 'react';

const ExcursionAndFieldVisits = () => {
  useEffect(() => {
    document.title = "Excursion & Field Visits - Siddhartha School";
  }, []);

  return (
    <div className="pt-16">
      <section className="py-20 bg-muted/10 min-h-screen">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">

          {/* Text Left */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Excursion & Field Visits</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              At Siddhartha School, we believe that learning extends beyond the classroom. Every year, students are given the enriching opportunity to explore and learn through excursions. These visits include tours of industrial areas and historically significant sites, allowing students to connect theoretical knowledge with real-world applications.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Additionally, our students visit plant nurseries, farm houses, and various local bodies. These field visits provide hands-on experiences that foster curiosity, environmental awareness, and a deeper understanding of community and industry operations.
            </p>
          </div>

          {/* Image Right */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <img
              src="https://via.placeholder.com/400x300?text=Excursion+and+Field+Visits"
              alt="Excursion and Field Visits Placeholder"
              className="w-full max-w-md h-64 object-cover rounded-lg shadow-elegant"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExcursionAndFieldVisits;
