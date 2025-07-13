import { Card } from '@/components/ui/card';
import { HeroSection } from '@/components/ui/hero-section';
import { Camera, Play, Award, Users } from 'lucide-react';
import heroImage from '@/assets/hero-students.jpg';
import schoolBuilding from '@/assets/school-building.jpg';

const galleryCategories = [
  {
    title: 'Campus Life',
    description: 'Daily activities and student life',
    icon: Users,
    images: [
      { url: schoolBuilding, title: 'Main School Building', description: 'Our modern campus facilities' },
      { url: heroImage, title: 'Students in Classroom', description: 'Engaged learning environment' },
      { url: schoolBuilding, title: 'Library', description: 'Well-stocked learning resources' },
      { url: heroImage, title: 'Science Laboratory', description: 'Hands-on learning experiences' }
    ]
  },
  {
    title: 'Events & Activities',
    description: 'School events and extracurricular activities',
    icon: Award,
    images: [
      { url: heroImage, title: 'Annual Sports Day', description: 'Athletic competitions and team spirit' },
      { url: schoolBuilding, title: 'Cultural Program', description: 'Showcasing student talents' },
      { url: heroImage, title: 'Science Fair', description: 'Student research presentations' },
      { url: schoolBuilding, title: 'Graduation Ceremony', description: 'Celebrating academic achievements' }
    ]
  },
  {
    title: 'Achievements',
    description: 'Awards and recognition',
    icon: Award,
    images: [
      { url: heroImage, title: 'Academic Awards', description: 'Excellence in academics' },
      { url: schoolBuilding, title: 'Sports Trophies', description: 'Athletic achievements' },
      { url: heroImage, title: 'Art Competition', description: 'Creative talents on display' },
      { url: schoolBuilding, title: 'School Recognition', description: 'Institutional awards' }
    ]
  }
];

export default function Gallery() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection
        subtitle="School Gallery"
        title="Capturing Moments of Excellence"
        description="Explore the vibrant life at Siddhartha School through our collection of photos showcasing academic achievements, campus life, and memorable events."
        backgroundImage={heroImage}
        height="md"
      />

      {/* Gallery Navigation */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryCategories.map((category, index) => (
              <Card key={index} className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth cursor-pointer">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full hero-gradient flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-sm">{category.description}</p>
                <div className="text-xs text-primary font-medium mt-2">
                  {category.images.length} Photos
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      {galleryCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.images.map((image, index) => (
                <Card key={index} className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth cursor-pointer group">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1">{image.title}</h4>
                    <p className="text-muted-foreground text-xs">{image.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">School Video Tour</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a virtual tour of our campus and see what makes Siddhartha School special.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-elegant">
              <div className="relative aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Campus Virtual Tour</h3>
                  <p className="text-muted-foreground">Click to watch our school tour video</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}