import { motion } from 'framer-motion';
import { HeroSection } from '@/components/ui/hero-section';
import { Card } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Calendar, Award, Users, Building, BookOpen, Trophy, Globe, GraduationCap } from 'lucide-react';
import schoolBuilding from '@/assets/school-building.jpg';

export default function History() {

  const milestones = [
    {
      year: '1979',
      title: 'Foundation as Pre-Primary School',
      description: 'Established in Kalikanagar, Butwal as one of the first private schools in the region with a vision for quality education.',
      icon: Building
    },
    {
      year: '1993',
      title: 'Revival and Transformation',
      description: 'Teacher-led team revived the school, gaining high school recognition from Nepal Government with initial 300 students.',
      icon: Users
    },
    {
      year: '2000',
      title: 'Campus Relocation',
      description: 'Moved to Dingarnagar in Tilottama Municipality, a peaceful 7-block campus with modern amenities.',
      icon: Building
    },
    {
      year: '2014',
      title: 'Plus Two Program Launch',
      description: 'Introduced NEB-accredited higher secondary education in Science and Management.',
      icon: BookOpen
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Implemented comprehensive online learning during global pandemic, maintaining educational continuity.',
      icon: Globe
    },
    {
      year: '2023',
      title: 'Academic Excellence',
      description: 'Celebrated outstanding SEE results: 17 students scored A+ and 65 scored A.',
      icon: Trophy
    },
    {
      year: 'Present',
      title: 'Educational Leadership',
      description: '2,000+ students from ECD to Grade 12, with holistic "Education for all-round Development" approach.',
      icon: GraduationCap
    }
  ];

  const achievements = [
    {
      number: '45+',
      label: 'Years of Service',
      description: 'Serving since 1979 with educational excellence'
    },
    {
      number: '2000+',
      label: 'Current Students',
      description: 'From ECD to Grade 12'
    },
    {
      number: '82%',
      label: 'High Achievers',
      description: 'A/A+ scorers in 2023 SEE exams'
    },
    {
      number: '7',
      label: 'Building Blocks',
      description: 'Academic, admin and hostel facilities'
    }
  ];

  return (
    <div className="pt-16">
      <HeroSection
        subtitle="Our Heritage"
        title="Legacy of Educational Excellence"
        description="Since 1979, providing quality education, character building, and holistic development in Butwal, Nepal."
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
              From pioneering private education in Butwal to becoming a leading institution with 2,000+ students, 
              our journey reflects our commitment to holistic development.
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Institutional Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quantifying our impact through decades of educational excellence
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
              <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-primary">Enduring Educational Legacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From our humble beginnings with just 10 SLC candidates to now educating 2,000+ students annually, 
                Siddhartha English Boarding School has consistently evolved while maintaining our core philosophy 
                of "Education for all-round Development". Our journey reflects our commitment to academic 
                excellence, modern infrastructure, and holistic education that prepares students for global 
                citizenship.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our spacious 7-building campus in Dingarnagar provides an ideal learning environment with 
                well-equipped labs, library facilities, and hostel accommodations. The institution continues 
                to pioneer educational innovation, recently adding the NEB-accredited Plus Two program in 
                Science and Management, furthering our mission to develop responsible citizens equipped with 
                both academic knowledge and moral values.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Citations Footer */}
      <footer className="py-8 bg-muted text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <h3 className="font-semibold mb-2">References</h3>
          <ol className="list-decimal inline-block text-left space-y-1">
            <li>School historical records and official documents</li>
            <li>Nepal National Examinations Board (NEB) curriculum guidelines</li>
            <li>Tilottama Municipality education reports</li>
            <li>School annual achievement reports (2020-2023)</li>
            <li>Campus infrastructure blueprints and planning documents</li>
          </ol>
        </div>
      </footer>
    </div>
  );
}