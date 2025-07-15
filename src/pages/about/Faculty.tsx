import { motion } from 'framer-motion';
import { HeroSection } from '@/components/ui/hero-section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { GraduationCap, Mail, Phone, Award, BookOpen, Users } from 'lucide-react';
import schoolBuilding from '@/assets/school-building.jpg';

export default function Faculty() {

  const facultyDepartments = [
    {
      name: 'English Department',
      description: 'Developing language skills and literature appreciation',
      color: 'bg-blue-500',
      faculty: [
        {
          name: 'Dr. Sarah Johnson',
          position: 'Head of English Department',
          qualification: 'Ph.D. in English Literature',
          experience: '15 years',
          specialization: ['Literature', 'Creative Writing', 'Language Skills'],
          email: 'sarah.johnson@sebs.edu.np',
          phone: '+977-98XXXXXXXX'
        },
        {
          name: 'Mr. Rajesh Sharma',
          position: 'Senior English Teacher',
          qualification: 'M.A. in English',
          experience: '12 years',
          specialization: ['Grammar', 'Communication Skills', 'Phonetics'],
          email: 'rajesh.sharma@sebs.edu.np',
          phone: '+977-98XXXXXXXX'
        }
      ]
    },
    {
      name: 'Nepali Department',
      description: 'Preserving and promoting Nepali language and culture',
      color: 'bg-green-500',
      faculty: [
        {
          name: 'Mrs. Kamala Adhikari',
          position: 'Head of Nepali Department',
          qualification: 'M.A. in Nepali Literature',
          experience: '18 years',
          specialization: ['Nepali Literature', 'Grammar', 'Cultural Studies'],
          email: 'kamala.adhikari@sebs.edu.np',
          phone: '+977-98XXXXXXXX'
        },
        {
          name: 'Mr. Bishnu Prasad Poudel',
          position: 'Senior Nepali Teacher',
          qualification: 'M.A. in Nepali',
          experience: '10 years',
          specialization: ['Poetry', 'Essay Writing', 'Language Development'],
          email: 'bishnu.poudel@sebs.edu.np',
          phone: '+977-98XXXXXXXX'
        }
      ]
    },
    {
      name: 'Mathematics Department',
      description: 'Building logical thinking and problem-solving skills',
      color: 'bg-purple-500',
      faculty: [
        {
          name: 'Dr. Anand Kumar',
          position: 'Head of Mathematics Department',
          qualification: 'Ph.D. in Mathematics',
          experience: '20 years',
          specialization: ['Calculus', 'Statistics', 'Applied Mathematics'],
          email: 'anand.kumar@sebs.edu.np',
          phone: '+977-98XXXXXXXX'
        },
        {
          name: 'Mrs. Sita Regmi',
          position: 'Senior Mathematics Teacher',
          qualification: 'M.Sc. in Mathematics',
          experience: '14 years',
          specialization: ['Algebra', 'Geometry', 'Trigonometry'],
          email: 'sita.regmi@sebs.edu.np',
          phone: '+977-98XXXXXXXX'
        }
      ]
    },
    {
      name: 'Science Department',
      description: 'Exploring the wonders of natural sciences',
      color: 'bg-orange-500',
      faculty: [
        {
          name: 'Dr. Ram Bahadur Thapa',
          position: 'Head of Science Department',
          qualification: 'Ph.D. in Physics',
          experience: '16 years',
          specialization: ['Physics', 'Research Methodology', 'Laboratory Management'],
          email: 'ram.thapa@sebs.edu.np',
          phone: '+977-98XXXXXXXX'
        },
        {
          name: 'Mrs. Sunita Karki',
          position: 'Senior Chemistry Teacher',
          qualification: 'M.Sc. in Chemistry',
          experience: '11 years',
          specialization: ['Organic Chemistry', 'Biochemistry', 'Environmental Science'],
          email: 'sunita.karki@sebs.edu.np',
          phone: '+977-98XXXXXXXX'
        },
        {
          name: 'Mr. Deepak Shrestha',
          position: 'Biology Teacher',
          qualification: 'M.Sc. in Biology',
          experience: '9 years',
          specialization: ['Botany', 'Zoology', 'Genetics'],
          email: 'deepak.shrestha@sebs.edu.np',
          phone: '+977-98XXXXXXXX'
        }
      ]
    },
    {
      name: 'Administration',
      description: 'Managing school operations and student services',
      color: 'bg-red-500',
      faculty: [
        {
          name: 'Mr. Yam Bahadur Rana',
          position: 'Principal',
          qualification: 'M.Ed. in Educational Administration',
          experience: '25 years',
          specialization: ['Educational Leadership', 'Curriculum Development', 'School Management'],
          email: 'principal@sebs.edu.np',
          phone: '+977-98XXXXXXXX'
        },
        {
          name: 'Mrs. Geeta Pandey',
          position: 'Vice Principal',
          qualification: 'M.A. in Education',
          experience: '20 years',
          specialization: ['Academic Coordination', 'Student Affairs', 'Quality Assurance'],
          email: 'vice.principal@sebs.edu.np',
          phone: '+977-98XXXXXXXX'
        },
        {
          name: 'Mr. Bikash Gautam',
          position: 'Administrative Officer',
          qualification: 'MBA in Management',
          experience: '8 years',
          specialization: ['Financial Management', 'Human Resources', 'Operations'],
          email: 'admin@sebs.edu.np',
          phone: '+977-98XXXXXXXX'
        }
      ]
    }
  ];

  const stats = [
    { number: '50+', label: 'Expert Faculty Members' },
    { number: '15+', label: 'Average Years Experience' },
    { number: '80%', label: 'Masters Degree Holders' },
    { number: '20%', label: 'PhD Qualified' }
  ];

  return (
    <div className="pt-16">
      <HeroSection
        subtitle="Our Faculty"
        title="Meet Our Expert Educators"
        description="Dedicated professionals committed to nurturing young minds and providing quality education across all disciplines."
        backgroundImage={schoolBuilding}
        height="md"
      />

      {/* Faculty Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Faculty Excellence</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our team of qualified and experienced educators brings together diverse expertise 
              to provide comprehensive education across all academic disciplines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 text-center shadow-card hover:shadow-elegant transition-all duration-300">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Departments */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {facultyDepartments.map((department, deptIndex) => (
              <motion.div
                key={deptIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: deptIndex * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Department Header */}
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-full ${department.color} flex items-center justify-center`}>
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold">{department.name}</h2>
                  </div>
                  <p className="text-muted-foreground max-w-2xl mx-auto">{department.description}</p>
                </div>

                {/* Faculty Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {department.faculty.map((member, memberIndex) => (
                    <motion.div
                      key={memberIndex}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: memberIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 h-full">
                        {/* Profile Photo Placeholder */}
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                          <Users className="w-12 h-12 text-white" />
                        </div>

                        <div className="text-center mb-4">
                          <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                          <p className="text-primary font-medium text-sm">{member.position}</p>
                        </div>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center text-sm">
                            <GraduationCap className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{member.qualification}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Award className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{member.experience}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-medium text-sm mb-2">Specializations:</h4>
                          <div className="flex flex-wrap gap-1">
                            {member.specialization.map((spec, specIndex) => (
                              <Badge key={specIndex} variant="secondary" className="text-xs">
                                {spec}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2 text-xs">
                          <div className="flex items-center">
                            <Mail className="w-3 h-3 mr-2 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{member.email}</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-3 h-3 mr-2 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{member.phone}</span>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Join Our Academic Excellence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our experienced faculty members are dedicated to providing quality education and 
              guiding students towards academic and personal success.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}