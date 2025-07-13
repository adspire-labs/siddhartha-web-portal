import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import { Link } from 'react-router-dom';
import { 
  Baby, 
  BookOpen, 
  GraduationCap, 
  CheckCircle, 
  Clock, 
  Users,
  Target,
  ArrowRight
} from 'lucide-react';
import heroImage from '@/assets/hero-students.jpg';

const programs = [
  {
    id: 'early-childhood',
    title: 'Early Childhood Education',
    subtitle: 'Ages 3-5',
    icon: Baby,
    description: 'Foundation learning program designed to nurture young minds through play-based curriculum and developmental activities.',
    duration: '2 years',
    capacity: '20 students per class',
    features: [
      'Play-based learning approach',
      'Motor skills development',
      'Social and emotional learning',
      'Creative arts and crafts',
      'Basic numeracy and literacy',
      'Interactive storytelling'
    ],
    subjects: [
      'Pre-Reading Skills',
      'Basic Mathematics',
      'Creative Arts',
      'Physical Activities',
      'Social Skills',
      'Language Development'
    ],
    highlights: [
      'Qualified early childhood educators',
      'Safe and nurturing environment',
      'Low teacher-to-student ratio',
      'Regular parent-teacher interactions'
    ]
  },
  {
    id: 'primary',
    title: 'Primary Education',
    subtitle: 'Grade 1-5',
    icon: BookOpen,
    description: 'Comprehensive primary education program building strong academic foundations with emphasis on core subjects and character development.',
    duration: '5 years',
    capacity: '25 students per class',
    features: [
      'Core academic subjects',
      'English language proficiency',
      'Mathematical reasoning',
      'Science exploration',
      'Physical education',
      'Arts and music'
    ],
    subjects: [
      'English Language',
      'Mathematics',
      'Science',
      'Social Studies',
      'Nepali',
      'Computer Basics',
      'Arts & Crafts',
      'Physical Education'
    ],
    highlights: [
      'Experienced primary teachers',
      'Interactive learning methods',
      'Regular assessments and feedback',
      'Extracurricular activities'
    ]
  },
  {
    id: 'secondary',
    title: 'Secondary Education',
    subtitle: 'Grade 6-12',
    icon: GraduationCap,
    description: 'Advanced learning program preparing students for higher education with specialized streams and career guidance.',
    duration: '7 years',
    capacity: '30 students per class',
    features: [
      'Science and Mathematics focus',
      'Language arts mastery',
      'Critical thinking skills',
      'Research and projects',
      'Career counseling',
      'College preparation'
    ],
    subjects: [
      'Advanced Mathematics',
      'Physics, Chemistry, Biology',
      'English Literature',
      'Social Sciences',
      'Computer Science',
      'Economics',
      'Optional Subjects',
      'Life Skills'
    ],
    highlights: [
      'Specialized subject teachers',
      'Laboratory facilities',
      'Career guidance programs',
      'College admission support'
    ]
  }
];

export default function Programs() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection
        subtitle="Our Educational Programs"
        title="Nurturing Young Minds at Every Stage"
        description="Comprehensive education programs designed to provide excellent learning experiences from early childhood through secondary education."
        backgroundImage={heroImage}
        height="md"
      />

      {/* Programs Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Complete Educational Journey</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              From the first steps in learning to preparation for higher education, our programs are designed 
              to support students at every stage of their academic journey with age-appropriate curriculum and methodologies.
            </p>
          </div>

          <div className="space-y-20">
            {programs.map((program, index) => (
              <div key={program.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Program Details */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center">
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold">{program.title}</h3>
                      <div className="text-primary font-medium">{program.subtitle}</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-8 leading-relaxed">{program.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-sm">Duration</div>
                        <div className="text-muted-foreground text-sm">{program.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium text-sm">Class Size</div>
                        <div className="text-muted-foreground text-sm">{program.capacity}</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-lg">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button className="shadow-card">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                {/* Program Cards */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Card className="p-6 shadow-card">
                    <h4 className="font-semibold text-lg mb-4 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-primary" />
                      Subjects Offered
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.subjects.map((subject, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground p-2 bg-muted/50 rounded">
                          {subject}
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-6 shadow-card">
                    <h4 className="font-semibold text-lg mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-primary" />
                      Program Highlights
                    </h4>
                    <div className="space-y-3">
                      {program.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission CTA */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Enroll Your Child?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Take the next step in your child's educational journey. Contact us to learn more about our admission process and schedule a campus visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="shadow-glow">
                Contact Admissions
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Schedule Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}