import { ReactNode, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  children?: ReactNode;
  className?: string;
  overlay?: boolean;
  height?: 'sm' | 'md' | 'lg' | 'xl';
  overlayGradient?: 'default' | 'vibrant' | 'minimal';
}

export const HeroSection = ({
  title,
  subtitle,
  description,
  backgroundImage,
  children,
  className,
  overlay = true,
  height = 'lg',
  overlayGradient = 'default',
}: HeroSectionProps) => {
  const heightClasses = {
    sm: 'h-[40vh] min-h-[300px]',
    md: 'h-[50vh] min-h-[400px]',
    lg: 'h-[65vh] min-h-[500px]',
    xl: 'h-[85vh] min-h-[600px]'
  };

  const gradientClasses = {
    default: 'bg-gradient-to-b from-slate-900/90 via-indigo-900/85 to-blue-900/80',
    vibrant: 'bg-gradient-to-r from-rose-900/80 via-fuchsia-900/80 to-indigo-900/80',
    minimal: 'bg-gradient-to-b from-black/60 to-black/40'
  };

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const hero = heroRef.current;
      if (hero) {
        hero.style.backgroundPositionY = `${-scrollY * 0.2}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className={cn(
        "relative flex items-center justify-center overflow-hidden text-center",
        heightClasses[height],
        className
      )}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        transition: 'background 0.5s ease'
      } : {}}
    >
      {/* Background Overlay */}
      {overlay && (
        <div className={cn(
          "absolute inset-0 transition-all duration-1000 ease-in-out",
          gradientClasses[overlayGradient]
        )} />
      )}
      
      {/* Animated gradient texture */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at center, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          animation: 'pulse 8s infinite alternate'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {subtitle && (
            <div 
              className="inline-block px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full mx-auto"
              style={{
                animation: 'fadeInUp 0.8s ease-out forwards',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}
            >
              <span className="text-white/95 font-medium tracking-wider uppercase text-sm md:text-base">
                {subtitle}
              </span>
            </div>
          )}
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.15] tracking-tight"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              animation: 'fadeInUp 0.8s ease-out 0.1s forwards'
            }}
          >
            {title}
          </h1>
          
          {description && (
            <p 
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light mt-4"
              style={{
                animation: 'fadeInUp 0.8s ease-out 0.2s forwards',
                textShadow: '0 1px 5px rgba(0,0,0,0.2)'
              }}
            >
              {description}
            </p>
          )}
          
          {children && (
            <div 
              className="pt-6 mx-auto"
              style={{
                animation: 'fadeInUp 0.8s ease-out 0.3s forwards'
              }}
            >
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Inline styles for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
      `}</style>
    </section>
  );
};