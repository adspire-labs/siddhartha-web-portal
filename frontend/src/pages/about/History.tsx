import { motion } from 'framer-motion';
import { HeroSection } from '@/components/ui/hero-section';
import { Card } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Calendar, Award, Users, Building, BookOpen, Trophy } from 'lucide-react';
import schoolBuilding from '@/assets/school-building.jpg';

export default function History() {

  const milestones = [
    {
      year: '1998',
      title: 'Foundation of SEBS',
      description: 'Siddhartha English Boarding Secondary School was established with a vision to provide quality education in Butwal.',
      icon: Building
    },
    {
      year: '2002',
      title: 'First Graduation Ceremony',
      description: 'Celebrated our first batch of graduates who went on to excel in higher education and professional careers.',
      icon: Award
    },
    {
      year: '2005',
      title: 'Infrastructure Expansion',
      description: 'Major expansion of school facilities including new classrooms, laboratories, and sports facilities.',
      icon: Building
    },
    {
      year: '2010',
      title: 'Academic Excellence Recognition',
      description: 'Received recognition for outstanding academic performance and student achievements at regional level.',
      icon: Trophy
    },
    {
      year: '2015',
      title: 'Technology Integration',
      description: 'Introduced modern technology and digital learning tools to enhance the educational experience.',
      icon: BookOpen
    },
    {
      year: '2020',
      title: 'Online Learning Initiative',
      description: 'Successfully implemented comprehensive online learning during the global pandemic, ensuring continued education.',
      icon: BookOpen
    },
    {
      year: '2023',
      title: '25 Years of Excellence',
      description: 'Celebrating over two and a half decades of educational excellence and community service.',
      icon: Award
    }
  ];

  const achievements = [
    {
      number: '25+',
      label: 'Years of Service',
      description: 'Serving the community with dedication'
    },
    {
      number: '2000+',
      label: 'Graduates',
      description: 'Successful alumni making impact globally'
    },
    {
      number: '95%',
      label: 'Success Rate',
      description: 'Consistent academic excellence'
    },
    {
      number: '50+',
      label: 'Expert Faculty',
      description: 'Qualified and experienced teachers'
    }
  ];

  return (
    <div className="pt-16">
      <HeroSection
        subtitle="Our History"
        title="A Legacy of Educational Excellence"
        description="Over 25 years of dedication to quality education, character building, and community service in Butwal, Nepal."
        backgroundImage={schoolBuilding}
        height="md"
      />

      {/* Historical Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Journey Through Time</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to becoming one of the leading educational institutions in the region, 
              our journey reflects our commitment to excellence and community service.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary lg:left-1/2 lg:-translate-x-0.5"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-start lg:items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg lg:left-1/2 lg:-translate-x-2"></div>

                  {/* Content */}
                  <div className="ml-16 lg:ml-0 lg:w-1/2 lg:px-8">
                    <Card className={`p-6 shadow-card hover:shadow-elegant transition-all duration-300 ${
                      index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                    }`}>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center">
                          <milestone.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                          <h3 className="text-lg font-semibold">{milestone.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to educational excellence and community impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-lg font-semibold mb-2">{achievement.label}</div>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card className="p-8 lg:p-12 shadow-elegant">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-primary">Our Legacy Continues</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As we look back on our rich history, we are proud of the thousands of students who have 
                passed through our halls and gone on to make meaningful contributions to society. Our 
                graduates can be found in leading universities around the world, in successful careers 
                across various fields, and as responsible citizens making positive impacts in their communities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The journey that began over 25 years ago continues with the same passion, dedication, 
                and commitment to excellence. As we move forward, we remain focused on our mission to 
                provide quality education that prepares students for the challenges and opportunities 
                of the future.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}