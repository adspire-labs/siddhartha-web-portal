import React, { useEffect } from 'react';
import projectorHall from '@/assets/projector-hall.jpg';
import avRoom from '@/assets/av-room.jpg';

const ProjectorAndAV = () => {
  useEffect(() => {
    document.title = "Projector Hall & Audio Visual Room - Siddhartha School";
  }, []);

  return (
    <div className="pt-16">
      <section className="py-20 bg-muted/10 min-h-screen">
        <div className="container mx-auto px-4 space-y-20">

          {/* Projector Hall */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Projector Hall</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our well-equipped Projector Hall serves as an interactive learning environment where students regularly engage with multimedia presentations. This facility enhances classroom learning by integrating audio-visual aids such as slides, videos, and animations, making complex topics more accessible and engaging for students across all grade levels.
              </p> 
            </div>
            <div className="lg:w-1/2 flex items-center justify-center">
              <img
                src={projectorHall}
                alt="Projector Hall"
                className="w-full max-w-md h-64 object-cover rounded-lg shadow-elegant"
              />
            </div>
          </div>

          {/* Audio Visual Room */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image Left */}
            <div className="lg:w-1/2 flex items-center justify-center order-last lg:order-first">
              <img
                src={avRoom}
                alt="Audio Visual Room"
                className="w-full max-w-md h-64 object-cover rounded-lg shadow-elegant"
              />
            </div>

            {/* Text Right */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Audio Visual Room</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Dedicated to our youngest learners, the Audio Visual Room is specially designed for Pre-Primary classes. Equipped with age-appropriate teaching materials and computers, this space nurtures various developmental skills including language acquisition, motor skills, and creativity through interactive activities and multimedia resources.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProjectorAndAV;
