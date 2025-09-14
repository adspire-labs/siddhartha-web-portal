import { motion } from 'framer-motion';
import { HeroSection } from '@/components/ui/hero-section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  BarChart3, 
  Calculator, 
  Building2, 
  CheckCircle, 
  Clock, 
  Users, 
  ArrowRight,
  Target,
  Award,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/main-building.jpg';

export default function Management() {
  const subjects = [
    {
      name: 'Accountancy',
      icon: Calculator,
      description: 'Comprehensive study of financial accounting, cost accounting, and management accounting principles.',
      topics: ['Financial Accounting', 'Cost Accounting', 'Management Accounting', 'Auditing', 'Taxation']
    },
    {
      name: 'Economics',
      icon: TrendingUp,
      description: 'Understanding economic theories, market dynamics, and economic policies at micro and macro levels.',
      topics: ['Microeconomics', 'Macroeconomics', 'International Trade', 'Development Economics', 'Economic Planning']
    },
    {
      name: 'Business Studies',
      icon: Briefcase,
      description: 'Exploring business operations, management principles, and entrepreneurship concepts.',
      topics: ['Business Environment', 'Management Principles', 'Marketing', 'Human Resource', 'Business Ethics']
    },
    {
      name: 'Mathematics',
      icon: BarChart3,
      description: 'Applied mathematics with focus on business calculations, statistics, and data analysis.',
      topics: ['Business Mathematics', 'Statistics', 'Probability', 'Linear Programming', 'Financial Mathematics']
    }
  ];

  const careerPaths = [
    {
      category: 'Business Administration',
      careers: ['BBA', 'MBA', 'Business Analyst', 'Operations Manager', 'Project Manager', 'Business Consultant']
    },
    {
      category: 'Finance & Banking',
      careers: ['Chartered Accountant (CA)', 'Banking Officer', 'Financial Analyst', 'Investment Advisor', 'Insurance Agent']
    },
    {
      category: 'Marketing & Sales',
      careers: ['Marketing Manager', 'Sales Executive', 'Digital Marketing Specialist', 'Brand Manager', 'Market Research Analyst']
    },
    {
      category: 'Entrepreneurship',
      careers: ['Business Owner', 'Startup Founder', 'Franchise Owner', 'E-commerce Entrepreneur', 'Social Entrepreneur']
    }
  ];

  const facilities = [
    'Modern computer lab with business software',
    'Business simulation and case study materials',
    'Economics and business reference library',
    'Guest lecture hall for industry experts',
    'Entrepreneurship development resources',
    'Career counseling and guidance services'
  ];

  const highlights = [
    'Industry-experienced business faculty',
    'Real-world business case studies and projects',
    'Entrepreneurship development programs',
    'Internship opportunities with local businesses',
    'Business plan competitions and events',
    'Preparation for CA, BBA, and other entrance exams'
  ];

  return (
    <div className="pt-16 overflow-x-hidden">
      <HeroSection
        subtitle="Management Stream"
        title="Shape Your Business Future"
        description="Grade XI-XII Management stream with Accountancy, Economics, and Business Studies. Preparing future business leaders and entrepreneurs."
        backgroundImage={heroImage}
        height="md"
      />

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Management Stream Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our Management stream for Grade XI-XII provides comprehensive business education covering 
              Accountancy, Economics, Business Studies, and Mathematics. This program prepares students 
              for successful careers in business, finance, marketing, and entrepreneurship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300 w-full max-w-md mx-auto md:max-w-none">
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
              <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300 w-full max-w-md mx-auto md:max-w-none">
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
              <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300 w-full max-w-md mx-auto md:max-w-none">
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
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Core Business Subjects</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Comprehensive business curriculum designed to build strong foundation in accounting, economics, and management principles.
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
                <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 h-full w-full max-w-md mx-auto md:max-w-none">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full hero-gradient flex items-center justify-center">
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
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Career Opportunities</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Management stream opens diverse career paths in business administration, finance, marketing, and entrepreneurship sectors.
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
                <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 h-full w-full max-w-md mx-auto md:max-w-none">
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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 shadow-card h-full w-full max-w-md mx-auto lg:max-w-none">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Building2 className="w-6 h-6 mr-3 text-primary" />
                  Business Facilities
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
              <Card className="p-8 shadow-card h-full w-full max-w-md mx-auto lg:max-w-none">
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

      {/* Business Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Essential Business Skills</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our curriculum focuses on developing practical business skills that are essential for success in the modern business world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { skill: 'Financial Analysis', description: 'Learn to analyze financial statements and make informed business decisions' },
              { skill: 'Strategic Planning', description: 'Develop skills in creating and implementing business strategies' },
              { skill: 'Market Research', description: 'Understanding market dynamics and consumer behavior' },
              { skill: 'Leadership', description: 'Building leadership qualities and team management skills' },
              { skill: 'Communication', description: 'Effective business communication and presentation skills' },
              { skill: 'Entrepreneurship', description: 'Innovation and business creation skills' }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 h-full w-full max-w-md mx-auto md:max-w-none">
                  <h3 className="text-lg font-bold mb-3">{skill.skill}</h3>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Launch Your Business Career</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join our Management stream and build the foundation for a successful career in business, 
              finance, marketing, or entrepreneurship.
            </p>
            <Link to="/contact">
              <Button size="lg" className="shadow-card">
                Apply for Management Stream
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
