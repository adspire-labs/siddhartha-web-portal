import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import siddharthaLogo from '@/assets/siddhartha-logo.png';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center hero-gradient"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex flex-col items-center space-y-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src={siddharthaLogo}
          alt="Siddhartha School"
          className="w-24 h-24 rounded-full shadow-glow"
          animate={{ 
            rotateY: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotateY: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Siddhartha School
          </h1>
          <p className="text-white/80 text-sm">Enter to LEARN, Leave to SERVE</p>
        </div>

        <div className="w-64 bg-white/20 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-white rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        <p className="text-white/70 text-sm">Loading... {progress}%</p>
      </motion.div>
    </motion.div>
  );
}