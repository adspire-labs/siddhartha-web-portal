import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function NoticeOverlay() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Show notice overlay after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
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
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Bell className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-primary mb-3">
                  Important Notice
                </h3>
                
                <div className="space-y-3 text-sm text-muted-foreground text-left">
                  <p className="font-medium text-foreground">
                    Admission Open for Academic Year 2025
                  </p>
                  <p>
                    • Grade XI (Science & Management) - Limited Seats
                  </p>
                  <p>
                    • Early Childhood to Grade X - Now Accepting Applications
                  </p>
                  <p className="text-primary font-medium">
                    Registration Deadline: March 15, 2025
                  </p>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2 pt-4 border-t border-muted"
                      >
                        <p className="font-medium text-foreground">
                          Required Documents:
                        </p>
                        <p>• SEE Certificate (for Grade XI)</p>
                        <p>• Birth Certificate</p>
                        <p>• Passport Size Photos</p>
                        <p>• Transfer Certificate</p>
                        <p className="font-medium text-foreground mt-3">
                          Contact Information:
                        </p>
                        <p>📞 Phone: +977-071-547XXX</p>
                        <p>📧 Email: admission@sebs.edu.np</p>
                        <p>🏢 Address: Butwal-8, Rupandehi</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
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