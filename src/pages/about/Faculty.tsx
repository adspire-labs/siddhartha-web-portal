import { motion } from 'framer-motion';
import { HeroSection } from '@/components/ui/hero-section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Mail, Phone, Award, BookOpen } from 'lucide-react';
import schoolBuilding from '@/assets/school-building.jpg';

// This would come from your backend API in a real application
const fetchFacultyData = async () => {
  // In a real app, this would be an API call:
  // const response = await fetch('/api/faculty');
  // return await response.json();
  
  return {
    stats: [
      { number: '50+', label: 'Expert Faculty Members' },
      { number: '15+', label: 'Average Years Experience' },
      { number: '80%', label: 'Masters Degree Holders' },
      { number: '20%', label: 'PhD Qualified' }
    ],
    departments: [
      {
        id: 1,
        name: 'English Department',
        description: 'Developing language skills and literature appreciation',
        color: 'bg-blue-500',
        faculty: [
          {
            id: 101,
            name: 'Dr. Sarah Johnson',
            position: 'Head of English Department',
            qualification: 'Ph.D. in English Literature',
            experience: '15 years',
            specialization: ['Literature', 'Creative Writing', 'Language Skills'],
            email: 'sarah.johnson@sebs.edu.np',
            phone: '+977-98XXXXXXXX',
            image: '/images/faculty/english/sarah-johnson.jpg' // Backend would provide this path
          },
          {
            id: 102,
            name: 'Mr. Rajesh Sharma',
            position: 'Senior English Teacher',
            qualification: 'M.A. in English',
            experience: '12 years',
            specialization: ['Grammar', 'Communication Skills', 'Phonetics'],
            email: 'rajesh.sharma@sebs.edu.np',
            phone: '+977-98XXXXXXXX',
            image: '/images/faculty/english/rajesh-sharma.jpg'
          }
        ]
      },
      // Other departments would follow the same structure
    ]
  };
};

export default function Faculty() {
  // In a real app, this would come from API/data fetching
  const facultyData = {
    stats: [
      { number: '50+', label: 'Expert Faculty Members' },
      { number: '15+', label: 'Average Years Experience' },
      { number: '80%', label: 'Masters Degree Holders' },
      { number: '20%', label: 'PhD Qualified' }
    ],
    departments: [
      {
        id: 1,
        name: 'English Department',
        description: 'Developing language skills and literature appreciation',
        color: 'bg-blue-500',
        faculty: [
          {
            id: 101,
            name: 'Dr. Sarah Johnson',
            position: 'Head of English Department',
            qualification: 'Ph.D. in English Literature',
            experience: '15 years',
            specialization: ['Literature', 'Creative Writing', 'Language Skills'],
            email: 'sarah.johnson@sebs.edu.np',
            phone: '+977-98XXXXXXXX',
            image: '/images/faculty/english/sarah-johnson.jpg'
          },
          {
            id: 102,
            name: 'Mr. Rajesh Sharma',
            position: 'Senior English Teacher',
            qualification: 'M.A. in English',
            experience: '12 years',
            specialization: ['Grammar', 'Communication Skills', 'Phonetics'],
            email: 'rajesh.sharma@sebs.edu.np',
            phone: '+977-98XXXXXXXX',
            image: '/images/faculty/english/rajesh-sharma.jpg'
          }
        ]
      },
      {
        id: 2,
        name: 'Nepali Department',
        description: 'Preserving and promoting Nepali language and culture',
        color: 'bg-green-500',
        faculty: [
          {
            id: 201,
            name: 'Mrs. Kamala Adhikari',
            position: 'Head of Nepali Department',
            qualification: 'M.A. in Nepali Literature',
            experience: '18 years',
            specialization: ['Nepali Literature', 'Grammar', 'Cultural Studies'],
            email: 'kamala.adhikari@sebs.edu.np',
            phone: '+977-98XXXXXXXX',
            image: '/images/faculty/nepali/kamala-adhikari.jpg'
          },
          {
            id: 202,
            name: 'Mr. Bishnu Prasad Poudel',
            position: 'Senior Nepali Teacher',
            qualification: 'M.A. in Nepali',
            experience: '10 years',
            specialization: ['Poetry', 'Essay Writing', 'Language Development'],
            email: 'bishnu.poudel@sebs.edu.np',
            phone: '+977-98XXXXXXXX',
            image: '/images/faculty/nepali/bishnu-poudel.jpg'
          }
        ]
      },
      {
        id: 3,
        name: 'Mathematics Department',
        description: 'Building logical thinking and problem-solving skills',
        color: 'bg-purple-500',
        faculty: [
          {
            id: 301,
            name: 'Dr. Anand Kumar',
            position: 'Head of Mathematics Department',
            qualification: 'Ph.D. in Mathematics',
            experience: '20 years',
            specialization: ['Calculus', 'Statistics', 'Applied Mathematics'],
            email: 'anand.kumar@sebs.edu.np',
            phone: '+977-98XXXXXXXX',
            image: '/images/faculty/math/anand-kumar.jpg'
          },
          {
            id: 302,
            name: 'Mrs. Sita Regmi',
            position: 'Senior Mathematics Teacher',
            qualification: 'M.Sc. in Mathematics',
            experience: '14 years',
            specialization: ['Algebra', 'Geometry', 'Trigonometry'],
            email: 'sita.regmi@sebs.edu.np',
            phone: '+977-98XXXXXXXX',
            image: '/images/faculty/math/sita-regmi.jpg'
          }
        ]
      },
      {
        id: 4,
        name: 'Science Department',
        description: 'Exploring the wonders of natural sciences',
        color: 'bg-orange-500',
        faculty: [
          {
            id: 401,
            name: 'Dr. Ram Bahadur Thapa',
            position: 'Head of Science Department',
            qualification: 'Ph.D. in Physics',
            experience: '16 years',
            specialization: ['Physics', 'Research Methodology', 'Laboratory Management'],
            email: 'ram.thapa@sebs.edu.np',
            phone: '+977-98XXXXXXXX',
            image: '/images/faculty/science/ram-thapa.jpg'
          },
          {
            id: 402,
            name: 'Mrs. Sunita Karki',
            position: 'Senior Chemistry Teacher',
            qualification: 'M.Sc. in Chemistry',
            experience: '11 years',
            specialization: ['Organic Chemistry', 'Biochemistry', 'Environmental Science'],
            email: 'sunita.karki@sebs.edu.np',
            phone: '+977-98XXXXXXXX',
            image: '/images/faculty/science/sunita-karki.jpg'
          },
          {
            id: 403,
            name: 'Mr. Deepak Shrestha',
            position: 'Biology Teacher',
            qualification: 'M.Sc. in Biology',
            experience: '9 years',
            specialization: ['Botany', 'Zoology', 'Genetics'],
            email: 'deepak.shrestha@sebs.edu.np',
            phone: '+977-98XXXXXXXX',
            image: '/images/faculty/science/deepak-shrestha.jpg'
          }
        ]
      },
      {
        id: 5,
        name: 'Administration',
        description: 'Managing school operations and student services',
        color: 'bg-red-500',
        faculty: [
          {
            id: 501,
            name: 'Mr. Yam Bahadur Rana',
            position: 'Principal',
            qualification: 'M.Ed. in Educational Administration',
            experience: '25 years',
            specialization: ['Educational Leadership', 'Curriculum Development', 'School Management'],
            email: 'principal@sebs.edu.np',
            phone: '+977-98XXXXXXXX',
            image: '/images/faculty/admin/yam-rana.jpg'
          },
          {
            id: 502,
            name: 'Mrs. Geeta Pandey',
            position: 'Vice Principal',
            qualification: 'M.A. in Education',
            experience: '20 years',
            specialization: ['Academic Coordination', 'Student Affairs', 'Quality Assurance'],
            email: 'vice.principal@sebs.edu.np',
            phone: '+977-98XXXXXXXX',
            image: '/images/faculty/admin/geeta-pandey.jpg'
          },
          {
            id: 503,
            name: 'Mr. Bikash Gautam',
            position: 'Administrative Officer',
            qualification: 'MBA in Management',
            experience: '8 years',
            specialization: ['Financial Management', 'Human Resources', 'Operations'],
            email: 'admin@sebs.edu.np',
            phone: '+977-98XXXXXXXX',
            image: '/images/faculty/admin/bikash-gautam.jpg'
          }
        ]
      }
    ]
  };

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
            {facultyData.stats.map((stat, index) => (
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
            {facultyData.departments.map((department) => (
              <motion.div
                key={department.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
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
                  {department.faculty.map((member) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 h-full flex flex-col">
                        {/* Profile Photo */}
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
                            <img 
                              src={member.image} 
                              alt={member.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.parentNode.innerHTML = `
                                  <div class="bg-gray-100 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-400">
                                    <div class="text-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                      </svg>
                                      <span class="text-xs mt-2">Photo</span>
                                    </div>
                                  </div>
                                `;
                              }}
                            />
                          </div>
                        </div>

                        <div className="text-center mb-4">
                          <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                          <p className="text-primary font-medium text-sm">{member.position}</p>
                        </div>

                        <div className="space-y-3 mb-4 flex-grow">
                          <div className="flex items-center text-sm">
                            <GraduationCap className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{member.qualification}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Award className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{member.experience} experience</span>
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

                        <div className="space-y-2 text-xs mt-auto">
                          <div className="flex items-center">
                            <Mail className="w-3 h-3 mr-2 text-primary flex-shrink-0" />
                            <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary hover:underline">
                              {member.email}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-3 h-3 mr-2 text-primary flex-shrink-0" />
                            <a href={`tel:${member.phone}`} className="text-muted-foreground hover:text-primary hover:underline">
                              {member.phone}
                            </a>
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