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
        <div className="absolute inset-0 overlay-gradient opacity-90" />
      )}
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
         {subtitle && (
  <div className="text-white font-medium tracking-wide uppercase text-sm">
    {subtitle}
  </div>
)}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
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
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1 h-3 bg-white/70 rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};