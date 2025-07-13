import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell, Calendar, AlertCircle } from 'lucide-react';
import { Button } from './button';
import { Card } from './card';

interface Notice {
  id: string;
  title: string;
  content: string;
  type: 'important' | 'general' | 'urgent';
  date: string;
}

interface NoticeOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

// This would normally come from an API or CMS
const notices: Notice[] = [
  {
    id: '1',
    title: 'Annual Sports Day 2024',
    content: 'Join us for our Annual Sports Day on March 15th, 2024. All students and parents are invited to participate in this exciting event.',
    type: 'important',
    date: '2024-03-01'
  },
  {
    id: '2',
    title: 'Admission Open for Session 2024-25',
    content: 'Admissions are now open for the academic session 2024-25. Limited seats available. Apply now!',
    type: 'urgent',
    date: '2024-02-15'
  },
  {
    id: '3',
    title: 'Parent-Teacher Meeting',
    content: 'Parent-Teacher meeting scheduled for March 8th, 2024. Please check your ward\'s performance and discuss future plans.',
    type: 'general',
    date: '2024-02-28'
  }
];

export function NoticeOverlay({ isOpen, onClose }: NoticeOverlayProps) {
  const getNoticeIcon = (type: Notice['type']) => {
    switch (type) {
      case 'urgent':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'important':
        return <Bell className="w-5 h-5 text-orange-500" />;
      default:
        return <Calendar className="w-5 h-5 text-blue-500" />;
    }
  };

  const getNoticeBorder = (type: Notice['type']) => {
    switch (type) {
      case 'urgent':
        return 'border-l-4 border-red-500';
      case 'important':
        return 'border-l-4 border-orange-500';
      default:
        return 'border-l-4 border-blue-500';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Notice Modal */}
          <motion.div
            className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center">
                    <Bell className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Important Notice</h2>
                    <p className="text-muted-foreground text-sm">Stay updated with latest announcements</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-4">
                {notices.map((notice, index) => (
                  <motion.div
                    key={notice.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className={`p-4 ${getNoticeBorder(notice.type)} hover:shadow-md transition-shadow`}>
                      <div className="flex items-start space-x-3">
                        {getNoticeIcon(notice.type)}
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{notice.title}</h3>
                          <p className="text-muted-foreground text-sm mb-2">{notice.content}</p>
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(notice.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Button onClick={onClose} className="shadow-card">
                  Close Notice
                </Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}