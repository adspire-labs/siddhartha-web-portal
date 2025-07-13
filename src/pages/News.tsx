import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/ui/hero-section';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, Bell, BookOpen, Award } from 'lucide-react';
import heroImage from '@/assets/hero-students.jpg';

const newsItems = [
  {
    id: '1',
    title: 'Annual Sports Day 2024 - Registration Open',
    excerpt: 'Join us for our biggest sporting event of the year. Registration is now open for all students.',
    category: 'Events',
    date: '2024-02-15',
    readTime: '3 min read',
    featured: true,
    type: 'news'
  },
  {
    id: '2',
    title: 'HOLIDAY ON LAST FRIDAY',
    excerpt: 'Please note that school will be closed on the last Friday of this month for staff development.',
    category: 'Notice',
    date: '2024-02-10',
    readTime: '1 min read',
    featured: false,
    type: 'notice'
  },
  {
    id: '3',
    title: 'Outstanding Academic Results - Class 12',
    excerpt: 'We are proud to announce exceptional results from our Class 12 students with 95% pass rate.',
    category: 'Achievement',
    date: '2024-02-08',
    readTime: '4 min read',
    featured: true,
    type: 'news'
  },
  {
    id: '4',
    title: 'New Admission Process for Academic Year 2024-25',
    excerpt: 'Updated admission guidelines and procedures for the upcoming academic session.',
    category: 'Admission',
    date: '2024-02-05',
    readTime: '5 min read',
    featured: false,
    type: 'notice'
  },
  {
    id: '5',
    title: 'Science Fair Winners Announced',
    excerpt: 'Congratulations to all participants and winners of our annual science fair competition.',
    category: 'Achievement',
    date: '2024-02-01',
    readTime: '3 min read',
    featured: false,
    type: 'news'
  },
  {
    id: '6',
    title: 'Parent-Teacher Conference Schedule',
    excerpt: 'Monthly parent-teacher conference scheduled for the third week of February.',
    category: 'Event',
    date: '2024-01-28',
    readTime: '2 min read',
    featured: false,
    type: 'notice'
  }
];

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'events':
    case 'event':
      return Calendar;
    case 'achievement':
      return Award;
    case 'admission':
      return BookOpen;
    default:
      return Bell;
  }
};

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'events':
    case 'event':
      return 'bg-blue-100 text-blue-800';
    case 'achievement':
      return 'bg-green-100 text-green-800';
    case 'admission':
      return 'bg-purple-100 text-purple-800';
    case 'notice':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function News() {
  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection
        subtitle="News & Notices"
        title="Stay Updated with Latest Announcements"
        description="Keep up with the latest news, events, and important notices from Siddhartha School community."
        backgroundImage={heroImage}
        height="md"
      />

      {/* Quick Notice Bar */}
      <section className="py-4 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4">
            <Bell className="w-5 h-5" />
            <div className="text-center">
              <span className="font-medium">Latest Notice: </span>
              <span>HOLIDAY ON LAST FRIDAY - School will be closed for staff development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured News</h2>
              <p className="text-muted-foreground">Important updates and highlights from our school</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((item) => {
                const CategoryIcon = getCategoryIcon(item.category);
                return (
                  <Card key={item.id} className="overflow-hidden shadow-elegant hover:shadow-glow transition-smooth">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <Badge className={getCategoryColor(item.category)}>
                          <CategoryIcon className="w-3 h-3 mr-1" />
                          {item.category}
                        </Badge>
                        <div className="text-sm text-muted-foreground flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 hover:text-primary transition-smooth cursor-pointer">
                        {item.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{item.readTime}</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All News & Notices */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">All News & Notices</h2>
            <p className="text-muted-foreground">Complete list of announcements and updates</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {newsItems.map((item) => {
              const CategoryIcon = getCategoryIcon(item.category);
              return (
                <Card key={item.id} className="p-6 shadow-card hover:shadow-elegant transition-smooth">
                  <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge className={getCategoryColor(item.category)}>
                          <CategoryIcon className="w-3 h-3 mr-1" />
                          {item.category}
                        </Badge>
                        <div className="text-sm text-muted-foreground flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-smooth cursor-pointer">
                        {item.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm">
                        {item.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <Button variant="ghost" size="sm">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More News
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-foreground"
            />
            <Button variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}