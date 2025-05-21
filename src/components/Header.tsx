
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Code, User, Briefcase, Mail, Image } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActivePath(window.location.hash || '/');
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    setActivePath(sectionId);

    if (sectionId === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" onClick={() => scrollToSection('/')}>
          <Code className="h-8 w-8 text-primary" />
          <span className="font-semibold text-xl">Peter Mbuthia</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.path} 
              href={link.path === '/' ? '#' : link.path}
              className={`nav-link ${activePath === link.path ? 'active-nav-link' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.path);
              }}
            >
              {link.name}
            </a>
          ))}
          <Button>Download CV</Button>
        </nav>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden flex items-center text-gray-600 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-4 px-6 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.path} 
                href={link.path === '/' ? '#' : link.path}
                className={`text-gray-700 dark:text-gray-300 py-2 ${activePath === link.path ? 'text-primary font-medium' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.path);
                }}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full">Download CV</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
