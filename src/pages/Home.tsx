import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { HeroSection } from '@/components/ui/hero-section';
import { LoadingScreen } from '@/components/ui/loading-screen';
import { NoticeOverlay } from '@/components/ui/notice-overlay';
import { LeadershipSlider } from '@/components/ui/leadership-slider';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen, 
  Heart, 
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Lightbulb,
  Trophy
} from 'lucide-react';
import heroImage from '@/assets/hero-students.jpg';
import schoolBuilding from '@/assets/school-building.jpg';

const features = [
  {
    icon: GraduationCap,
    title: 'Quality Education',
    description: 'Comprehensive curriculum designed for holistic development'
  },
  {
    icon: Users,
    title: 'Experienced Faculty',
    description: 'Dedicated teachers committed to student success'
  },
  {
    icon: Award,
    title: 'Academic Excellence',
    description: 'Proven track record of outstanding results'
  },
  {
    icon: Heart,
    title: 'Caring Environment',
    description: 'Nurturing atmosphere for personal growth'
  }
];

const stats = [
  { number: '25+', label: 'Years of Excellence' },
  { number: '500+', label: 'Happy Students' },
  { number: '50+', label: 'Expert Teachers' },
  { number: '95%', label: 'Success Rate' }
];

const programs = [
  {
    title: 'Early Childhood',
    description: 'Foundation learning for ages 3-5 with play-based curriculum',
    age: 'Ages 3-5',
    features: ['Play-based Learning', 'Motor Skills Development', 'Social Skills']
  },
  {
    title: 'Primary Education',
    description: 'Comprehensive primary education with strong academic foundation',
    age: 'Grade 1-5',
    features: ['Core Subjects', 'Creative Arts', 'Physical Education']
  },
  {
    title: 'Secondary Education',
    description: 'Advanced learning preparing students for higher education',
    age: 'Grade 6-12',
    features: ['Science & Math', 'Language Arts', 'Career Guidance']
  }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { MotionDiv: FadeInDiv } = useScrollAnimation('fade');
  const { MotionDiv: SlideInLeft } = useScrollAnimation('left');
  const { MotionDiv: SlideInRight } = useScrollAnimation('right');
  const { MotionDiv: SlideInUp } = useScrollAnimation('up');

  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = 'Siddhartha School - Best School in Butwal | Quality Education in Nepal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Top-rated school in Butwal, Nepal offering quality education from Early Childhood to Grade XII. Science and Management streams available. Join the best school for academic excellence and holistic development.');
    }
  }, []);

  if (isLoading) {
    return (
      <AnimatePresence>
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      </AnimatePresence>
    );
  }

  return (
    <>
      <NoticeOverlay />
      <div className="pt-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection
          subtitle="Welcome to Siddhartha School"
          title="Learn and Achieve in Peaceful Environment"
          description="Enter to LEARN, Leave to SERVE. We provide quality education that prepares students for a bright future with strong moral values and academic excellence."
          backgroundImage={heroImage}
          height="xl"
        >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="shadow-glow">
            <BookOpen className="w-5 h-5 mr-2" />
            Explore Programs
          </Button>
          <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
            <Users className="w-5 h-5 mr-2" />
            Visit Campus
          </Button>
        </div>
        </HeroSection>
      </motion.div>

      {/* ====================== FIXED STATS SECTION ====================== */}
      {/* Stats Section - Updated with visibility fix */}
      <section className="py-16 bg-primary text-white"> {/* Changed text color to white */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                <div>{stat.label}</div> {/* Removed opacity modifier */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ====================== END FIXED SECTION ====================== */}

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeInDiv className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Siddhartha School?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are committed to providing the best educational experience with a focus on academic excellence and character development in Butwal, Nepal.
            </p>
          </FadeInDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth h-full">
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-4 rounded-full hero-gradient flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Mega Structures Stand on Strong Foundations
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Education, in today's context, carries different meaning than the yesteryear. 
                It has much wider scope now. In this age of globalization, education must be of 
                international level. It shouldn't be confined to the text books or just excelling 
                in the examinations, rather it should help in the overall development of a student.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Value-based Quality Education',
                  'International Standard Learning',
                  'Character Development Focus',
                  'Peaceful Learning Environment'
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button className="shadow-card">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-elegant">
                <img 
                  src={schoolBuilding} 
                  alt="Siddhartha School Campus" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground p-4 rounded-lg shadow-card">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Academic Streams</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Specialized programs designed to prepare students for their future careers with focused curriculum and practical skills.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Science Stream Card */}
      <Card className="p-6 shadow-card hover:shadow-elegant transition-smooth">
        <div className="mb-4">
          <div className="text-sm font-medium text-blue-600 mb-2 flex items-center">
            <Globe className="w-4 h-4 mr-2" />
            SCIENCE & TECHNOLOGY
          </div>
          <h3 className="text-xl font-bold mb-3">Science Stream</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Focused curriculum in Physics, Chemistry, Biology, and Mathematics to prepare students for careers in medicine, engineering, and technology.
          </p>
        </div>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
            <span className="text-sm">Advanced Physics & Chemistry Labs</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
            <span className="text-sm">Mathematics & Computer Science</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
            <span className="text-sm">Research Projects & Science Fairs</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
            <span className="text-sm">Entrance Exam Preparation</span>
          </div>
        </div>
        
        <Link to="/programs/science">
          <Button variant="outline" size="sm" className="w-full">
            Explore Science Stream
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </Card>

      {/* Management Stream Card */}
      <Card className="p-6 shadow-card hover:shadow-elegant transition-smooth">
        <div className="mb-4">
          <div className="text-sm font-medium text-green-600 mb-2 flex items-center">
            <Lightbulb className="w-4 h-4 mr-2" />
            BUSINESS & COMMERCE
          </div>
          <h3 className="text-xl font-bold mb-3">Management Stream</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Comprehensive program in Business Studies, Accountancy, and Economics to develop future leaders in business and finance.
          </p>
        </div>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span className="text-sm">Business Studies & Accountancy</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span className="text-sm">Economics & Entrepreneurship</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span className="text-sm">Financial Literacy Programs</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span className="text-sm">Industry Visits & Internships</span>
          </div>
        </div>
        
        <Link to="/programs/management">
          <Button variant="outline" size="sm" className="w-full">
            Explore Management Stream
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </Card>
    </div>
    
    {/* Additional info about other programs */}
    <div className="mt-16 text-center">
      <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
        We also offer comprehensive programs for Early Childhood, Primary, and Secondary education.
      </p>
      <Link to="/programs">
        <Button variant="ghost" className="text-primary">
          View All Educational Programs
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Join Our School Community?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards your child's bright future. Contact us today to learn more about our admission process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="shadow-glow">
                Get in Touch
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership Messages Section */}
      <LeadershipSlider />
    </div>
    </>
  );
}