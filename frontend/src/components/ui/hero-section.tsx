import { ReactNode } from 'react';
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
}

export const HeroSection = ({
  title,
  subtitle,
  description,
  backgroundImage,
  children,
  className,
  overlay = true,
  height = 'lg'
}: HeroSectionProps) => {
  const heightClasses = {
    sm: 'h-[40vh] min-h-[300px]',
    md: 'h-[50vh] min-h-[400px]',
    lg: 'h-[60vh] min-h-[500px]',
    xl: 'h-[80vh] min-h-[600px]'
  };

  return (
    <section 
      className={cn(
        "relative flex items-center justify-center",
        heightClasses[height],
        className
      )}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      } : {}}
    >
      {/* Background Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-indigo-900/85 to-blue-900/80" />
      )}
      
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:20px_20px]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          {subtitle && (
            <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-white/90 font-medium tracking-wider uppercase text-sm md:text-base drop-shadow-sm">
                {subtitle}
              </span>
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight drop-shadow-lg">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              {description}
            </p>
          )}
          
          {children && (
            <div className="pt-4">
              {children}
            </div>
          )}
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/60 flex items-start justify-center p-2 bg-white/10 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          </div>
          <span className="mt-2 text-xs text-white/90 font-medium tracking-wide">Scroll</span>
        </div>
      </div>
    </section>
  );
};