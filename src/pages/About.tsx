import { Card } from '@/components/ui/card';
import { HeroSection } from '@/components/ui/hero-section';
import { Users, Target, Heart, Award, CheckCircle } from 'lucide-react';
import schoolBuilding from '@/assets/school-building.jpg';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for academic and personal excellence in everything we do.'
  },
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We foster a caring environment where every student feels valued.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We build strong relationships between students, families, and staff.'
  },
  {
    icon: Award,
    title: 'Integrity',
    description: 'We maintain the highest standards of honesty and ethical behavior.'
  }
];

const achievements = [
  'Over 25 years of educational excellence',
  'Consistently high academic performance',
  '95% student satisfaction rate',
  'Award-winning faculty members',
  'Modern facilities and resources',
  'Strong alumni network'
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection
        subtitle="About Siddhartha School"
        title="Education for All-Round Development"
        description="Building strong foundations for future leaders through quality education and character development."
        backgroundImage={schoolBuilding}
        height="md"
      />

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Card className="p-8 shadow-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide quality education that develops students academically, socially, and emotionally. 
                We are committed to creating a nurturing environment where every child can discover their 
                potential and develop the skills necessary for lifelong learning and responsible citizenship.
              </p>
            </Card>

            <Card className="p-8 shadow-card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading educational institution that empowers students to become confident, 
                compassionate, and capable individuals who contribute positively to society. We envision 
                a world where our graduates make meaningful differences in their communities and beyond.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Our Story</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-6">
                Established over two and a half decades ago, Siddhartha English Boarding Secondary School 
                has been a beacon of educational excellence in the region. Our journey began with a simple 
                yet powerful vision: to provide quality education that goes beyond textbooks and examinations.
              </p>
              <p className="mb-6">
                Education, in today's context, carries different meaning than the yesteryear. It has much 
                wider scope now. In this age of globalization, education must be of international level. 
                It shouldn't be confined to the text books or just excelling in the examinations, rather 
                it should help in the overall development of a student.
              </p>
              <p>
                Keeping this fact in mind, we have been striving for value-based quality education. 
                It is the assiduous endeavor of our management and staff that has raised Siddhartha 
                to this height of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide everything we do and shape the character of our school community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full hero-gradient flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-elegant">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Message from the Principal</h2>
                <div className="text-primary font-semibold">Yam Bahadur Rana</div>
                <div className="text-muted-foreground">Principal</div>
              </div>
              
              <div className="prose prose-lg mx-auto text-muted-foreground text-center">
                <p className="text-lg italic mb-6">
                  "Dear students, parents and teachers,
                </p>
                <p className="leading-relaxed">
                  Education, in today's context, carries different meaning than the yesteryear. 
                  It has much wider scope now. In this age of globalization, education must be of 
                  international level. It shouldn't be confined to the text books or just excelling 
                  in the examinations, rather it should help in the overall development of a student. 
                  Keeping this fact in mind, it has been striving for value based quality education. 
                  It is the assiduous endeavor of the management and staffs for more than two and a 
                  half decade that has raised SIDDHARTHA to this height."
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">Our Achievements</h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center shadow-card">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </Card>
              <Card className="p-6 text-center shadow-card">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Students Graduated</div>
              </Card>
              <Card className="p-6 text-center shadow-card">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Expert Teachers</div>
              </Card>
              <Card className="p-6 text-center shadow-card">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}