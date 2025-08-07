import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import chairmanImage from '@/assets/chairman.jpg';
import principalImage from '@/assets/principal.jpg';
import mdImage from '@/assets/md.jpg';

const leaders = [
  {
    id: 1,
    name: "Yam Bahadur Rana",
    designation: "Principal",
    message: "It is truly rewarding to witness our students thriving in various areas, a reflection of the academic strength and values instilled during their time with us. This success would not have been achievable without the dedication of our teaching and non-teaching staff, the trust of our guardians, and the constant support of our management team. I sincerely thank everyone for their role in nurturing a vibrant and disciplined learning environment. Let us continue this journey with the same passion and commitment.",
    image: principalImage
  },
  {
    id: 2,
    name: "Ram Lal Shrestha",
    designation: "Chairperson",
    message: "We can proudly say that we have laid strong foundation for the students which have enabled them to excel in different fields. This would not have been possible without commitment and the dedication of the promoters, faith and support of the guardians and the active co-operation of the staff. I would like to express my sincere gratitude to them.",
    image: chairmanImage
  },
  {
    id: 3,
    name: "Babu Ram Khanal",
    designation: "Managing Director",
    message: "We are aware of the fact that we are nurturing the smart generation of the 21st century. We never compromise in creating congenial educational environment. We firmly believe that in addition to qualified faculty members, students need physical facilities with modern teaching aids. But at the same time we strive for sustaining the ethical and moral values.",
    image: mdImage
  }
];

export default function LeadershipMessages() {
  return (
    <div className="py-12 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <Link to="/about" className="inline-flex items-center text-primary hover:underline">
            <ChevronLeft className="w-5 h-20 mr-1" />
            Back to About Us
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Leadership Messages</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Inspiring words from our educational leaders
          </p>
        </div>

        <div className="space-y-12">
          {leaders.map((leader) => (
            <Card key={leader.id} className="p-8 shadow-lg border border-muted-foreground/10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
                {/* Leader Image */}
                <div className="md:col-span-1 flex flex-col items-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-center">{leader.name}</h3>
                  <p className="text-primary font-medium text-center">{leader.designation}</p>
                </div>

                {/* Message */}
                <div className="md:col-span-3">
                  <div className="relative">
                    <blockquote className="text-lg leading-relaxed text-muted-foreground pl-6 border-l-4 border-primary/50">
                      <p className="mb-4">{leader.message}</p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/">
            <Button variant="outline" size="lg">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Return to Home Page
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}