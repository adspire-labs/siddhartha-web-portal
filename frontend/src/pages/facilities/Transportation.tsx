import React, { useEffect } from 'react';

const Transportation = () => {
  useEffect(() => {
    document.title = "Transportation Facilities - Siddhartha School";
  }, []);

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
              To avail transportation, students must register as bus-users in the school’s accounts section prior to the commencement of service. This registration process allows us to efficiently manage routes and ensure capacity is sufficient for all passengers.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Students who wish to discontinue transportation services are required to notify the accounts department in advance to avoid unnecessary charges. This helps maintain accurate records and facilitates smooth administrative processes.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              For students relocating to a new residence, changes to bus routes and stops can be accommodated upon official notification and record updates. Please note that transfers between bus routes are not permitted unless a change of address justifies such a request. This policy ensures fairness and consistency in service management.
            </p>
          </div>

          {/* Placeholder Image Section */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <img 
              src="https://via.placeholder.com/400x300?text=Transportation+Image" 
              alt="Transportation Facilities Placeholder" 
              className="w-full max-w-md h-64 object-cover rounded-lg shadow-elegant"
            />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Transportation;
