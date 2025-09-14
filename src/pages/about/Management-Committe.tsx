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
import vpImage from '@/assets/members/vp.jpg';
import tukImage from '@/assets/members/tuk.jpg';
import chaImage from '@/assets/members/chavvi.png';
import dineshImage from '@/assets/members/dinesh.png';
import narayanImage from '@/assets/members/narayan.jpg';



// You can add placeholder image for members without photos or add their real images if available
const placeholderImage = 'https://via.placeholder.com/150?text=No+Image';

const leaders = [
  {
    id: 1,
    name: "Yam Bahadur Rana",
    designation: "Principal",
    image: principalImage,
    signature: "Yam Bahadur Rana — Principal"
  },
  {
    id: 2,
    name: "Ram Lal Shrestha",
    designation: "Chairperson",
    image: chairmanImage,
    signature: "Ram Lal Shrestha — Chairperson"
  },
  {
    id: 3,
    name: "Babu Ram Khanal",
    designation: "Managing Director",
    image: mdImage,
    signature: "Babu Ram Khanal — Managing Director"
  },
  {
    id: 4,
    name: "Ramesh Prasad Bashyal",
    designation: "Member (Vice Principal)",
    image: vpImage,
    signature: "Ramesh Prasad Bashyal — Member (Vice Principal)"
  },
  {
    id: 5,
    name: "Tuk Bahadur Chhetri",
    designation: "Member",
    image: tukImage,
    signature: "Tuk Bahadur Chhetri — Member"
  },
  {
    id: 6,
    name: "Chhavi Nepal",
    designation: "Member",
    image: chaImage,
    signature: "Chhavi Nepal — Member"
  },
  {
    id: 7,
    name: "Dinesh Kumar Tamang",
    designation: "Member",
    image: dineshImage,
    signature: "Dinesh Kumar Tamang — Member"
  },
  {
    id: 8,
    name: "Narayan Prasad Bhandari",
    designation: "Member",
    image: narayanImage,
    signature: "Narayan Prasad Bhandari — Member"
  }
];

export default function ManagementCommittee() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-24 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <HeroSection
        title="Management Committee"
        subtitle="Meet the SEBSS Management Committee"
        description="Dedicated professionals guiding the institution’s growth and vision."
        height="md"
      />

      <div className="container mx-auto px-6 max-w-7xl mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14"
        >
          {leaders.map((leader) => (
            <Card
              key={leader.id}
              className="flex flex-col bg-gradient-to-tr from-primary/10 via-white to-secondary/10 rounded-xl shadow-lg border border-primary/30 p-8 hover:scale-[1.04] transition-transform duration-300"
            >
              {/* Image & Name */}
              <div className="flex flex-col items-center mb-8">
                <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-primary shadow-md mb-5">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary text-center">{leader.name}</h3>
                <p className="text-secondary font-semibold text-sm tracking-wider uppercase text-center">{leader.designation}</p>
              </div>

              {/* Signature Footer Centered */}
              <div className="w-full border-t border-primary/40 pt-4 select-none text-center">
                <div className="text-sm font-serif italic text-primary">
                  {leader.signature}
                </div>
                <div className="text-xs text-gray-500 italic mt-1">
                  SEBSS Management Community
                </div>
              </div>
            </Card>
          ))}
        </motion.div>

        <div className="mt-24 text-center">
          <Link to="/">
            <Button variant="outline" size="lg" className="inline-flex items-center justify-center">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Return to Home Page
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
