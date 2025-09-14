import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function useScrollAnimation(direction: 'left' | 'right' | 'up' | 'down' | 'fade' = 'fade') {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variants = {
    left: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 }
    },
    right: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 }
    },
    up: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 }
    },
    down: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 }
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    }
  };

  const MotionDiv = ({ children, className = '', delay = 0, duration = 0.6 }: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
  }) => (
    <motion.div
      ref={ref}
      initial={variants[direction].initial}
      animate={isInView ? variants[direction].animate : variants[direction].initial}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );

  return { MotionDiv, isInView };
}