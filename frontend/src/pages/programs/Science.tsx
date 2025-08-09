import { motion } from 'framer-motion';
import { HeroSection } from '@/components/ui/hero-section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { 
  Microscope, 
  Beaker, 
  Calculator, 
  Atom, 
  CheckCircle, 
  Clock, 
  Users, 
  ArrowRight,
  Lightbulb,
  Award,
  BookOpen,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-students.jpg';

export default function Science() {

  const subjects = [
    {
      name: 'Physics',
      icon: Atom,
      description: 'Understanding the fundamental laws of nature, mechanics, electricity, magnetism, and modern physics.',
      topics: ['Mechanics', 'Thermodynamics', 'Waves & Optics', 'Electricity & Magnetism', 'Modern Physics']
    },
    {
      name: 'Chemistry',
      icon: Beaker,
      description: 'Exploring the composition, structure, properties and behavior of matter and chemical reactions.',
      topics: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Analytical Chemistry', 'Biochemistry']
    },
    {
      name: 'Biology',
      icon: Microscope,
      description: 'Study of living organisms, their structure, function, growth, evolution, and distribution.',
      topics: ['Cell Biology', 'Genetics', 'Ecology', 'Human Biology', 'Plant Biology', 'Evolution']
    },
    {
      name: 'Mathematics',
      icon: Calculator,
      description: 'Advanced mathematical concepts essential for scientific analysis and problem-solving.',
      topics: ['Calculus', 'Algebra', 'Trigonometry', 'Statistics', 'Coordinate Geometry']
    }
  ];

  const careerPaths = [
    {
      category: 'Medical Sciences',
      careers: ['MBBS (Doctor)', 'BDS (Dentistry)', 'Nursing', 'Pharmacy', 'Physiotherapy', 'Medical Technology']
    },
    {
      category: 'Engineering',
      careers: ['Computer Engineering', 'Civil Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Chemical Engineering', 'Biomedical Engineering']
    },
    {
      category: 'Research & Development',
      careers: ['Research Scientist', 'Laboratory Technician', 'Quality Control Analyst', 'Environmental Scientist', 'Biotechnology Researcher']
    },
    {
      category: 'Technology',
      careers: ['Software Developer', 'Data Scientist', 'Cybersecurity Specialist', 'AI/ML Engineer', 'Web Developer']
    }
  ];

  const facilities = [
    'Well-equipped Physics Laboratory',
    'Modern Chemistry Laboratory',
    'Advanced Biology Laboratory',
    'Computer Lab with latest software',
    'Science Library with reference materials',
    'Microscopy and instrumentation room'
  ];

  const highlights = [
    'Experienced science faculty with advanced degrees',
    'Hands-on laboratory experiments and practicals',
    'Regular science projects and research activities',
    'Medical and engineering entrance exam preparation',
    'Science olympiad and competition participation',
    'Guest lectures by industry experts'
  ];

  return (
    <div className="pt-16 overflow-x-hidden">
      <HeroSection
        subtitle="Science Stream"
        title="Explore the Wonders of Science"
        description="Grade XI-XII Science stream with Physics, Chemistry, Biology, and Mathematics. Preparing future doctors, engineers, and scientists."
        backgroundImage={heroImage}
        height="md"
      />

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-full md:max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Science Stream Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our Science stream for Grade XI-XII provides comprehensive education in Physics, Chemistry, 
              Biology, and Mathematics. This program is designed to prepare students for medical studies, 
              engineering, and various scientific careers while developing critical thinking and analytical skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Duration</h3>
                <p className="text-muted-foreground">2 Years (Grade XI-XII)</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Class Size</h3>
                <p className="text-muted-foreground">35 Students Maximum</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300">
                <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Exam Board</h3>
                <p className="text-muted-foreground">NEB (National Examination Board)</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-full md:max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Core Science Subjects</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Comprehensive curriculum covering essential scientific disciplines with practical applications and laboratory work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center">
                      <subject.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{subject.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{subject.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Topics:</h4>
                    <div className="flex flex-wrap gap-1">
                      {subject.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-full md:max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Career Opportunities</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Science stream opens doors to diverse career paths in medical sciences, engineering, research, and technology sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 h-full">
                  <h3 className="text-lg font-bold mb-4 text-primary">{path.category}</h3>
                  <div className="space-y-2">
                    {path.careers.map((career, careerIndex) => (
                      <div key={careerIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{career}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-full md:max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 shadow-card h-full">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3 text-primary" />
                  Laboratory Facilities
                </h3>
                <div className="space-y-3">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{facility}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 shadow-card h-full">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-primary" />
                  Program Highlights
                </h3>
                <div className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-full md:max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Start Your Scientific Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join our Science stream and explore the fascinating world of scientific discovery. 
              Prepare for a bright future in medical sciences, engineering, or research.
            </p>
            <Link to="/contact">
              <Button size="lg" className="shadow-card">
                Apply for Science Stream
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
