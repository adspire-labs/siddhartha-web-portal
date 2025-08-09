import React, { useEffect } from "react";

const HostelAndBoarding = () => {
  useEffect(() => {
    document.title = "Hostel & Boarding Facilities - Siddhartha School";
  }, []);

  return (
    <div className="pt-16 bg-muted/10 min-h-screen">
      <div className="container mx-auto px-4 py-20 space-y-16">
        {/* Hostel Overview */}
        <section className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Hostel & Boarding Facilities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Any student enrolled at Siddhartha School may join the hostel as a boarder, subject to vacancy. We have separate buildings for boys and girls, each equipped with all necessary amenities and well-organized dormitories based on age groups. Every boarder receives a single bed and cupboard with ample space.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Assistant wardens and matrons reside in the dormitories to ensure safety and comfort around the clock. Experienced ancillary staff assist in the care of younger children, helping with daily activities such as bathing, dressing, and personal hygiene.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="https://via.placeholder.com/450x300?text=Hostel+Building"
              alt="Hostel Building"
              className="rounded-lg shadow-elegant object-cover w-full max-w-md h-64"
            />
          </div>
        </section>

        {/* Coaching Classes */}
        <section className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 order-2 lg:order-1 flex justify-center">
            <img
              src="https://via.placeholder.com/450x300?text=Coaching+Classes"
              alt="Coaching Classes"
              className="rounded-lg shadow-elegant object-cover w-full max-w-md h-64"
            />
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h3 className="text-2xl font-semibold mb-4">Coaching Classes</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Boarders are provided with additional coaching sessions in the mornings and evenings. Two periods each morning and evening are dedicated to strengthening academic skills under the guidance of qualified teachers from our school. Special attention is given to students who need extra academic support.
            </p>
          </div>
        </section>

        {/* Fooding */}
        <section className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Nutritious Fooding</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The hostel menu is thoughtfully planned with nutrition and student preferences in mind. A special cook prepares a variety of vegetarian and non-vegetarian dishes to avoid monotony. Boarders receive three main meals daily—breakfast, lunch, and dinner—along with tea and refreshments during breaks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Separate dining halls for boys and girls ensure a comfortable dining experience, all supervised by the Hostel Warden and assistants. Good table manners are encouraged at all times.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="https://via.placeholder.com/450x300?text=Hostel+Dining+Hall"
              alt="Hostel Dining Hall"
              className="rounded-lg shadow-elegant object-cover w-full max-w-md h-64"
            />
          </div>
        </section>

        {/* Entertainment */}
        <section className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 order-2 lg:order-1 flex justify-center">
            <img
              src="https://via.placeholder.com/450x300?text=Entertainment+Facilities"
              alt="Entertainment Facilities"
              className="rounded-lg shadow-elegant object-cover w-full max-w-md h-64"
            />
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h3 className="text-2xl font-semibold mb-4">Entertainment & Recreation</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our hostel features a spacious playground for outdoor games and sports. Indoor games like carom, chess, Chinese checkers, ludo, and table tennis are also available for the boarders. Students can watch selected movies and TV programs during their leisure time. An annual picnic provides an opportunity for relaxation and fun outside the school environment.
            </p>
          </div>
        </section>

        {/* Health Care */}
        <section className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Health Care</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The school ensures prompt medical attention for boarders. Minor illnesses are treated in the school infirmary with proper care, while serious cases involve informing the guardians and providing hospital care as needed.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="https://via.placeholder.com/450x300?text=Health+Care+Facility"
              alt="Health Care Facility"
              className="rounded-lg shadow-elegant object-cover w-full max-w-md h-64"
            />
          </div>
        </section>

        {/* Hostel Regulations */}
        <section className="bg-muted p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-6 text-center">Hostel Regulations</h3>

          <div className="space-y-6 max-w-4xl mx-auto">
            <article>
              <h4 className="text-xl font-semibold mb-2">Visiting Day</h4>
              <p className="text-muted-foreground leading-relaxed">
                Visits are allowed only on Saturdays and must be authorized by the guardians. Visitors need prior permission from the Hostel Warden.
              </p>
            </article>

            <article>
              <h4 className="text-xl font-semibold mb-2">Calling Hours</h4>
              <p className="text-muted-foreground leading-relaxed">
                Telephone calls are limited to holidays between 9:30 AM–12:00 PM and 4:00 PM–6:00 PM. Emergency calls are exceptions.
              </p>
            </article>

            <article>
              <h4 className="text-xl font-semibold mb-2">Pocket Money</h4>
              <p className="text-muted-foreground leading-relaxed">
                Pocket money up to Rs. 200/- per month is allowed and must be deposited with the Hostel Warden.
              </p>
            </article>

            <article>
              <h4 className="text-xl font-semibold mb-2">Prohibitions</h4>
              <p className="text-muted-foreground leading-relaxed">
                Ornaments other than a pair of earrings, mobile phones, cameras, iPods, music systems, and junk foods are strictly prohibited.
              </p>
            </article>

            <article>
              <h4 className="text-xl font-semibold mb-2">Home Leave</h4>
              <p className="text-muted-foreground leading-relaxed">
                Boarders may leave for home on the last Friday of every month and on festival holidays, accompanied by authorized guardians. Timely return is mandatory.
              </p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HostelAndBoarding;
