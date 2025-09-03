import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroSection } from '@/components/ui/hero-section';

import chairmanImage from '@/assets/chairman.jpg';
import principalImage from '@/assets/principal.jpg';
import mdImage from '@/assets/md.jpg';

const leaders = [
  {
    id: 1,
    name: "Yam Bahadur Rana",
    designation: "Principal",
    message:
      "It is truly rewarding to witness our students thriving in various areas, a reflection of the academic strength and values instilled during their time with us. This success would not have been achievable without the dedication of our teaching and non-teaching staff, the trust of our guardians, and the constant support of our management team. I sincerely thank everyone for their role in nurturing a vibrant and disciplined learning environment. Let us continue this journey with the same passion and commitment.",
    image: principalImage,
    signature: "Yam Bahadur Rana — Principal",
  },
  {
    id: 2,
    name: "Ram Lal Shrestha",
    designation: "Chairperson",
    message:
      "We can proudly say that we have laid strong foundation for the students which have enabled them to excel in different fields. This would not have been possible without commitment and the dedication of the promoters, faith and support of the guardians and the active co-operation of the staff. I would like to express my sincere gratitude to them.",
    image: chairmanImage,
    signature: "Ram Lal Shrestha — Chairperson",
  },
  {
    id: 3,
    name: "Babu Ram Khanal",
    designation: "Managing Director",
    message:
      "We are aware of the fact that we are nurturing the smart generation of the 21st century. We never compromise in creating congenial educational environment. We firmly believe that in addition to qualified faculty members, students need physical facilities with modern teaching aids. But at the same time we strive for sustaining the ethical and moral values.",
    image: mdImage,
    signature: "Babu Ram Khanal — Managing Director",
  },
];

export default function LeadershipMessages() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-20 bg-gradient-to-b from-background to-muted/20 min-h-screen">
      <HeroSection
        title="Leadership Messages"
        subtitle="Our Esteemed Leaders"
        description="Inspiring words from our educational leaders"
        height="md"
      />

      <div className="container mx-auto px-6 max-w-7xl mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {leaders.map((leader) => (
            <Card
              key={leader.id}
              className="relative flex flex-col items-center p-8 shadow-lg border border-muted-foreground/20 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
            >
              {/* Circular Background Accent */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full bg-gradient-to-tr from-primary/30 to-secondary/20 filter blur-xl -z-10"></div>

              {/* Leader Image */}
              <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-white shadow-xl mb-6">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <h3 className="text-2xl font-semibold text-primary text-center mb-1">
                {leader.name}
              </h3>
              <p className="text-secondary font-medium mb-4 text-center">
                {leader.designation}
              </p>

              {/* Message justified */}
              <p className="text-justify text-muted-foreground text-base leading-relaxed px-2 md:px-6 mb-6">
                {leader.message}
              </p>

              {/* Signature justified */}
              <div className="text-justify text-sm text-primary italic tracking-wide select-none border-t border-primary/30 pt-3 w-full">
                {leader.signature}
              </div>
            </Card>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Link to="/">
            <Button
              variant="outline"
              size="lg"
              className="inline-flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Return to Home Page
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
