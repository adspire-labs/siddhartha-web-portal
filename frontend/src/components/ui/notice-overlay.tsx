import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import axios from "axios";

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

export function NoticeOverlay() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [noticeNews, setNoticeNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Show notice overlay after 2 seconds delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const fetchNews = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/news");
      console.log("API response:", res.data);
      const allNews: NewsItem[] = res.data.newsData;

      // Filter news with category 'notice'
      const filtered = allNews.filter(
        (item) => item.category.toLowerCase() === "notice"
      );

      // Sort by createdAt descending (newest first)
      filtered.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      setNoticeNews(filtered);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Show the most recent notice
  const notice = noticeNews[0];

  return (
    <AnimatePresence>
      {isVisible && notice && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative max-w-md w-full"
          >
            <Card className="p-6 bg-white shadow-elegant border-0">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                onClick={handleClose}
              >
                <X className="h-4 w-4" />
              </Button>

              <div className="text-center">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 hero-gradient rounded-full flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Bell className="w-8 h-8 text-white" />
                </motion.div>

                {/* Important Notice Label */}
                <div className="inline-block mb-2 px-3 py-1 bg-primary text-white font-semibold rounded-full text-sm tracking-wide select-none">
                  Important Notice
                </div>

                <h3 className="text-xl font-bold text-primary mb-3">
                  {notice.title || "Important Notice"}
                </h3>

                <div className="space-y-3 text-sm text-muted-foreground text-left">
                  <p className="font-medium text-foreground">
                    {notice.excerpt || ""}
                  </p>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2 pt-4 border-t border-muted"
                    >
                      <p>
                        Published on:{" "}
                        {new Date(notice.createdAt).toLocaleDateString()}
                      </p>
                      {/* Add more detailed info here if available */}
                    </motion.div>
                  )}
                </div>

                <div className="mt-6 space-y-2">
                  <Button
                    className="w-full shadow-glow"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
