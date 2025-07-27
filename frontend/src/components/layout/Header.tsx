import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '@/assets/siddhartha-logo.png';

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '/about',
    subPages: [
      { name: 'Introduction', href: '/about/introduction' },
      { name: 'Our History', href: '/about/history' },
      { name: 'Our Faculty', href: '/about/faculty' },
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
  const [expandedMenu, setExpandedMenu] = useState(null);
  const location = useLocation();
  const menuRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setExpandedMenu(null);
      }
      if (isOpen && !menuRef.current.contains(event.target)) {
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

  const isActive = (href, subPages = []) => {
    const paths = [href, ...subPages.map(sp => sp.href)];
    return paths.includes(location.pathname);
  };

  const toggleSubmenu = (menuName, e) => {
    e.stopPropagation();
    if (expandedMenu === menuName) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(menuName);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 transition-smooth hover:scale-105">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-card">
              <img src={logo} alt="Siddhartha School Logo" className="w-full h-full object-cover" />
            </div>
            <div className="text-lg font-bold text-primary">
              SIDDHARTHA SCHOOL
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
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            className="md:hidden bg-background border-t border-border"
            ref={menuRef}
          >
            <nav className="flex flex-col py-4">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-muted last:border-b-0">
                  {item.subPages ? (
                    <>
                      <button
                        onClick={(e) => toggleSubmenu(item.name, e)}
                        className={cn(
                          "w-full flex items-center justify-between text-base font-medium px-4 py-3",
                          isActive(item.href, item.subPages)
                            ? "text-primary"
                            : "text-foreground"
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
                        <div className="bg-muted/10 pb-2">
                          {item.subPages.map((subPage) => (
                            <Link
                              key={subPage.name}
                              to={subPage.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "block text-sm px-8 py-3",
                                location.pathname === subPage.href
                                  ? "text-primary font-medium bg-primary/10"
                                  : "text-foreground"
                              )}
                            >
                              {subPage.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block text-base font-medium px-4 py-3",
                        location.pathname === item.href
                          ? "text-primary"
                          : "text-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="mt-4 px-4">
                <Button size="sm" className="w-full">
                  Admission
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};