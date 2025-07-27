import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  ArrowRight,
  Bell,
  BookOpen,
  Award,
} from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";
import axios from "axios";
import { apiEndpoint } from "../../apiEndpoint";

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  type: string;
  featured: boolean;
  createdAt: string; // ISO date string
}

export interface NewsResponse {
  data: {
    newsData: NewsItem[];
  };
}

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case "events":
    case "event":
      return Calendar;
    case "achievement":
      return Award;
    case "admission":
      return BookOpen;
    default:
      return Bell;
  }
};

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case "events":
    case "event":
      return "bg-blue-100 text-blue-800";
    case "achievement":
      return "bg-green-100 text-green-800";
    case "admission":
      return "bg-purple-100 text-purple-800";
    case "notice":
      return "bg-orange-100 text-orange-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function News() {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const featuredNews = newsList.filter((item) => item.featured);
  const regularNews = newsList.filter((item) => !item.featured);
  const [isExpanded, setIsExpanded] = useState(false);

  const fetchNews = async () => {
    const res = (await axios.get(
      apiEndpoint.fetchNews
    )) as NewsResponse;
    setNewsList(res.data.newsData);
  };
  useEffect(() => {
    fetchNews();
  }, []);
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
              <span>
                HOLIDAY ON LAST FRIDAY - School will be closed for staff
                development
              </span>
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
              <p className="text-muted-foreground">
                Important updates and highlights from our school
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((item) => {
                const CategoryIcon = getCategoryIcon(item.category);

                return (
                  <Card
                    key={item.id}
                    className="overflow-hidden shadow-elegant hover:shadow-glow transition-smooth"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <Badge className={getCategoryColor(item.category)}>
                          <CategoryIcon className="w-3 h-3 mr-1" />
                          {item.category}
                        </Badge>
                        <div className="text-sm text-muted-foreground flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(item.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3 hover:text-primary transition-smooth cursor-pointer">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.excerpt}
                      </p>

                      <AnimatePresence> 
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-4 space-y-3 text-sm text-muted-foreground"
                          >
                            <p>
                              This is the detailed content of the news article.
                              It would contain the full story with all the
                              important details about the announcement, event,
                              or information being shared with the school
                              community.
                            </p>
                            <p>
                              Additional paragraphs would follow here with more
                              detailed information about the topic, including
                              relevant dates, procedures, or any action items
                              that students, parents, or staff need to be aware
                              of.
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="flex items-center justify-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setIsExpanded(!isExpanded)}
                        >
                          {isExpanded ? "Show Less" : "Read More"}
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
            <p className="text-muted-foreground">
              Complete list of announcements and updates
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {newsList.map((item) => {
              const CategoryIcon = getCategoryIcon(item.category);

              return (
                <Card
                  key={item.id}
                  className="p-6 shadow-card hover:shadow-elegant transition-smooth"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge className={getCategoryColor(item.category)}>
                          <CategoryIcon className="w-3 h-3 mr-1" />
                          {item.category}
                        </Badge>
                        <div className="text-sm text-muted-foreground flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(item.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-smooth cursor-pointer">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground text-sm">
                        {item.excerpt}
                      </p>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-3 space-y-2 text-sm text-muted-foreground"
                          >
                            <p>
                              This is the detailed content of the news article.
                              It provides comprehensive information about the
                              announcement or event being shared with the school
                              community.
                            </p>
                            <p>
                              Additional details and relevant information would
                              be included here to give readers a complete
                              understanding of the topic.
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="flex-shrink-0">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsExpanded(!isExpanded)}
                      >
                        {isExpanded ? "Show Less" : "Read More"}
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
    </div>
  );
}
