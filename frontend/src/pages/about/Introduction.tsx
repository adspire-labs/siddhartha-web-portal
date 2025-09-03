import { motion } from 'framer-motion';
import { HeroSection } from '@/components/ui/hero-section';
import { Card } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { BookOpen, Target, Heart, Award, Users, Globe } from 'lucide-react';
import schoolBuilding from '@/assets/school-building.jpg';
import schoolLogo from '@/assets/siddhartha-logo.png'; // add your logo path

export default function Introduction() {
  const keyPoints = [
    {
      icon: Target,
      title: 'Academic Excellence',
      description:
        'Committed to providing high-quality education with a focus on academic achievement and personal growth.',
    },
    {
      icon: Heart,
      title: 'Nurturing Environment',
      description:
        'Creating a supportive and caring atmosphere where every student feels valued and encouraged.',
    },
    {
      icon: Users,
      title: 'Community Focus',
      description:
        'Building strong relationships between students, families, teachers, and the wider community.',
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description:
        'Preparing students for an interconnected world with international standards of education.',
    },
  ];

  return (
    <div className="pt-16">
      <HeroSection
        subtitle="Introduction"
        title="Welcome to Siddhartha English Boarding Secondary School"
        description="A leading educational institution committed to nurturing young minds and building future leaders through quality education and character development."
        backgroundImage={schoolBuilding}
        height="md"
      />

      {/* Introduction Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 lg:p-12 shadow-elegant">
              <div className="prose prose-lg mx-auto">
                <h2 className="flex items-center justify-between text-2xl lg:text-3xl font-bold mb-6 text-primary">
                  About Our Institution
                  <img
                    src={schoolLogo}
                    alt="School Logo"
                    className="h-20 w-auto ml-6"
                  />
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
                  Siddhartha English Boarding Secondary School (SEBS) stands as a beacon of educational excellence
                  in Butwal, Nepal. Established with the vision of providing world-class education that goes beyond
                  traditional teaching methods, we have been shaping young minds for over two and a half decades.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
                  Our institution is built on the foundation of academic rigor, character development, and holistic
                  growth. We believe that education in today's context carries a much wider scope than yesteryears.
                  In this age of globalization, education must be of international standards, extending far beyond
                  textbooks and examinations to encompass the overall development of every student.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8 text-justify">
                  At SEBS, we are committed to value-based quality education that prepares students not just for
                  academic success, but for life itself. Our dedicated faculty, modern facilities, and innovative
                  teaching methodologies create an environment where students can discover their potential and
                  develop into confident, capable, and compassionate individuals.
                </p>

                <div className="bg-primary/5 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Our Educational Philosophy</h3>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    We believe in nurturing the whole child - intellectually, emotionally, physically, and socially.
                    Our educational approach combines traditional values with modern teaching techniques, ensuring
                    that our students are well-prepared for the challenges and opportunities of the 21st century.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Makes Us Special</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence is reflected in every aspect of our educational approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300 h-full">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full hero-gradient flex items-center justify-center">
                    <point.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{point.title}</h3>
                  <p className="text-muted-foreground text-sm text-justify">{point.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Join Our Educational Community</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover how Siddhartha School can help your child reach their full potential through our
              comprehensive educational programs and supportive learning environment.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
