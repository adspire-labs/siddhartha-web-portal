import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '@/assets/siddhartha-logo.png';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '/about',
    subPages: [
      { name: 'Introduction', href: '/about/introduction' },
      { name: 'Our History', href: '/about/history' },
      { name: 'Our Faculty', href: '/about/faculty' },
      { name: 'Alumni & Parents', href: '/about/alumni-parents' },
    ]
  },
  { 
    name: 'Programs', 
    href: '/programs',
    subPages: [
      { name: 'Science Stream', href: '/programs/science' },
      { name: 'Management Stream', href: '/programs/management' },
    ]
  },
  { name: 'Gallery', href: '/gallery' },
  { name: 'News & Notice', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const isInitialRender = useRef(true);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setExpandedMenu(null);
      }
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
    setExpandedMenu(null);
  }, [location]);

  // Prevent layout shifts on mobile
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          '--header-height', 
          `${headerRef.current.offsetHeight}px`
        );
      }
    };
    
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      document.documentElement.style.removeProperty('--header-height');
    };
  }, [isOpen]);

  // Fix for mobile refresh bug
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);

  const isActive = (href: string, subPages: { href: string }[] = []) => {
    const paths = [href, ...subPages.map(sp => sp.href)];
    return paths.includes(location.pathname);
  };

  const toggleSubmenu = (menuName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedMenu(expandedMenu === menuName ? null : menuName);
  };

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Optimized for mobile */}
          <Link to="/" className="flex items-center space-x-3 transition-smooth hover:scale-105 min-w-0 flex-shrink">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-card flex-shrink-0">
              <img src={logo} alt="Siddhartha School Logo" className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block text-sm font-bold text-primary leading-tight whitespace-nowrap">
              <div>SIDDHARTHA</div>
              <div className="text-xs font-normal">English Boarding Seconday School</div>
            </div>
            <div className="sm:hidden text-xs font-bold text-primary whitespace-nowrap">
              <div>SIDDHARTHA ENGLISH</div>
              <div className="text-[10px] font-normal">BOARDING SECONDARY SCHOOL</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" ref={menuRef}>
            {navigation.map((item) => (
              item.subPages ? (
                <div 
                  key={item.name}
                  className="relative"
                >
                  <button
                    onClick={(e) => toggleSubmenu(item.name, e)}
                    className={cn(
                      "text-sm font-medium transition-smooth flex items-center",
                      isActive(item.href, item.subPages)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.name}
                    <ChevronDown 
                      className={cn(
                        "w-4 h-4 ml-1 transition-transform duration-200",
                        expandedMenu === item.name && "rotate-180"
                      )} 
                    />
                  </button>
                  
                  {/* Submenu Dropdown */}
                  {expandedMenu === item.name && (
                    <div className="absolute left-0 top-full mt-2 w-48 rounded-lg shadow-lg bg-background border border-border z-50 animate-in fade-in slide-in-from-top-1">
                      <div className="py-1">
                        {item.subPages.map((subPage) => (
                          <Link
                            key={subPage.name}
                            to={subPage.href}
                            className={cn(
                              "block px-4 py-2 text-sm hover:bg-muted/50",
                              location.pathname === subPage.href
                                ? "text-primary bg-primary/10"
                                : "text-muted-foreground"
                            )}
                          >
                            {subPage.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-smooth hover:text-primary relative",
                    location.pathname === item.href
                      ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button size="sm" className="shadow-card">
              Admission
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-muted transition-smooth"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation with Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-background rounded-lg shadow-xl border border-border overflow-hidden"
              ref={menuRef}
            >
              <nav className="flex flex-col py-3">
                {navigation.map((item) => (
                  <div key={item.name} className="px-3 py-1">
                    {item.subPages ? (
                      <>
                        <button
                          onClick={(e) => toggleSubmenu(item.name, e)}
                          className={cn(
                            "w-full flex items-center justify-between text-base font-medium px-3 py-3 rounded-lg transition-colors",
                            isActive(item.href, item.subPages)
                              ? "text-primary bg-primary/10"
                              : "text-foreground hover:bg-muted/50"
                          )}
                        >
                          <span>{item.name}</span>
                          <ChevronDown 
                            className={cn(
                              "w-5 h-5 ml-2 transition-transform duration-200",
                              expandedMenu === item.name && "rotate-180"
                            )} 
                          />
                        </button>
                        
                        {/* Submenu items */}
                        {expandedMenu === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-5 space-y-1 py-2 overflow-hidden"
                          >
                            {item.subPages.map((subPage) => (
                              <Link
                                key={subPage.name}
                                to={subPage.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                  "block text-sm px-4 py-3 rounded-lg transition-colors",
                                  location.pathname === subPage.href
                                    ? "text-primary font-medium bg-primary/10"
                                    : "text-foreground hover:bg-muted/30"
                                )}
                              >
                                {subPage.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "block text-base font-medium px-3 py-3 rounded-lg transition-colors",
                          location.pathname === item.href
                            ? "text-primary bg-primary/10"
                            : "text-foreground hover:bg-muted/50"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="mt-2 px-3 py-3">
                  <Button size="sm" className="w-full">
                    Admission
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};