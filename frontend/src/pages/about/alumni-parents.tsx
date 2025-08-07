import { Card } from '@/components/ui/card';
import { HeroSection } from '@/components/ui/hero-section';
import { Users, Mail, Calendar, GraduationCap, Heart, Award } from 'lucide-react';
import alumniHeroImage from '@/assets/meet.jpeg';

// Alumni Images
import drRuchiImage from '@/assets/ruchi.png';
import erRakshyaImage from '@/assets/rakshya.jpg';
import majorJhapendraImage from '@/assets/jhapendra.jpg';
import surendraImage from '@/assets/surendra.png';

// Parent Images
import mrAshokaImage from '@/assets/parents/mr-ashoka.jpg';
import mrSantoshImage from '@/assets/parents/mr-santosh.png';
import mrBhojRajImage from '@/assets/parents/mr-bhojraj.jpg';
import mrMrigendraImage from '@/assets/parents/mr-mrigendra.jpg';

const alumniTestimonials = [
  {
    name: "Dr. Ruchi Shrestha",
    graduationYear: "2005",
    profession: "Ophthalmologist",
    image: drRuchiImage,
    quote: "The strong foundation I received at Siddhartha School shaped my career in medicine. The teachers' dedication and the school's values continue to inspire me."
  },
  {
    name: "Er. Rakshya Shrestha",
    graduationYear: "2010",
    profession: "Software Engineer",
    image: erRakshyaImage,
    quote: "The problem-solving skills and discipline I learned here have been invaluable in my tech career. I'm proud to be a Siddharthian!"
  },
  {
    name: "Major Jhapendra Chaudhary",
    graduationYear: "2012",
    profession: "Military Officer",
    image: majorJhapendraImage,
    quote: "SEBSS is an institution which not only provides fishes but also teaches children how to fish. I really 'SALUTE' the Teachers of SEBSS."
  },
  {
    name: "Dr. Surendra Sapkota",
    graduationYear: "2012",
    profession: "Medical Doctor",
    image: surendraImage,
    quote: "SEBSS is an institution which not only provides fishes but also teaches children how to fish. I really 'SALUTE' the Teachers of SEBSS."
  }
];

const parentTestimonials = [
  {
    name: "Mr. Ashoka Darlami",
    relation: "Parent of Grade 10 Student",
    image: mrAshokaImage,
    quote: "Choice of this school has made me comfort. I need not worry about my children's education up to Secondary Level. It's simply the best. My good wishes to Siddhartha."
  },
  {
    name: "Mr. Santosh Aale",
    relation: "Parent for 10+ Years",
    image: mrSantoshImage,
    quote: "For last one decade, I have been in touched with the school as a parent and I can say that SEBSS is one of the best schools because of the discipline, excellent infrastructure, enough space for games and sports, highly qualified and experienced faculties."
  },
  {
    name: "Mr. Bhoj Raj Kandel",
    relation: "Parent of Alumni",
    image: mrBhojRajImage,
    quote: "My both the sons have passed out from this school. My first son, Dr. Ramesh Kandel is the first geriatric doctor of Nepal and the next one is studying Astronomy. The credit goes to Siddhartha English Boarding Secondary School."
  },
  {
    name: "Mr. Mrigendra Sherchan",
    relation: "Parent of Alumni",
    image: mrMrigendraImage,
    quote: "I have seen many of the private schools from very close since their inception. Siddhartha has maintained its quality consistently. All my children studied in this school and now they are excelling in different fields."
  }
];

export default function AlumniParents() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection
        subtitle="Our Community"
        title="Alumni & Parents"
        description="Hear from those who have been part of the Siddhartha family"
        backgroundImage={alumniHeroImage}
        height="md"
      />

      {/* Alumni Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Distinguished Alumni</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Success stories from our graduates making an impact worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alumniTestimonials.map((alumni, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-smooth group">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-colors flex-shrink-0">
                    <img 
                      src={alumni.image} 
                      alt={alumni.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold">{alumni.name}</h3>
                  <p className="text-primary mb-3">
                    Class of {alumni.graduationYear} • {alumni.profession}
                  </p>
                  <blockquote className="text-muted-foreground italic">
                    "{alumni.quote}"
                  </blockquote>
                </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parents Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Parents' Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by families for quality education and holistic development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {parentTestimonials.map((parent, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-smooth group">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-colors flex-shrink-0">
                    <img 
                      src={parent.image} 
                      alt={parent.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold">{parent.name}</h3>
                    <p className="text-primary mb-3">{parent.relation}</p>
                    <blockquote className="text-muted-foreground italic">
                      "{parent.quote}"
                    </blockquote>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Stay Connected With Our Community
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Join our network of alumni and parents to stay updated with school activities and events
            </p>
          
          </div>
        </div>
      </section>
    </div>
  );
}