import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Twitter, Youtube, Music, Instagram } from 'lucide-react';
import ThemeSwitcher from '../UI/ThemeSwitcher';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const socialMenuRef = useRef<HTMLDivElement>(null);
  const socialButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Handle mobile menu
      if (
          isOpen &&
          !mobileMenuRef.current?.contains(target) &&
          !target.closest('.mobile-menu-button')
      ) {
        setIsOpen(false);
      }

      // Handle social menu
      if (
          isSocialOpen &&
          !socialMenuRef.current?.contains(target) &&
          !socialButtonRef.current?.contains(target)
      ) {
        setIsSocialOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, isSocialOpen]);

  // Close menus on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setIsSocialOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
        setIsSocialOpen(false);
        // Update URL without scrolling
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
      <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
              scrolled
                  ? 'bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md py-3'
                  : 'bg-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/*<a href="#" className="font-bold text-xl md:text-2xl">Debdoot Manna</a>*/}
          <a href="#" className="font-bold text-xl md:text-2xl flex items-center">
            <img
                src="/favicon.ico"
                alt="Debdoot Manna Logo"
                className="w-8 h-8 md:w-10 md:h-10 rounded"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#focus" className="nav-link" onClick={handleNavClick}>Focus</a>
            <a href="#research" className="nav-link" onClick={handleNavClick}>Research</a>
            <a href="#music" className="nav-link" onClick={handleNavClick}>Music</a>
            <a href="#interests" className="nav-link" onClick={handleNavClick}>Interests</a>
            <a href="#darkweb" className="nav-link" onClick={handleNavClick}>Dark Web</a>
            <a href="#projects" className="nav-link" onClick={handleNavClick}>Projects</a>

            <div className="ml-4 flex items-center space-x-3 relative">
              {/* Social Menu Button */}
              <button
                  ref={socialButtonRef}
                  onClick={() => setIsSocialOpen(!isSocialOpen)}
                  className="social-menu-button p-2 rounded-full bg-surface-light dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle social menu"
                  aria-expanded={isSocialOpen}
              >
                {isSocialOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              {/* Desktop Social Menu */}
              <AnimatePresence>
                {isSocialOpen && (
                    <motion.div
                        ref={socialMenuRef}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="social-menu absolute right-0 top-12 bg-surface-light dark:bg-surface-dark rounded-lg shadow-lg p-4 min-w-[200px] z-50"
                    >
                      <div className="flex flex-col space-y-3">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-menu-link flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            onClick={() => setIsSocialOpen(false)}
                        >
                          <Github className="w-5 h-5" />
                          <span>GitHub</span>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-menu-link flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            onClick={() => setIsSocialOpen(false)}
                        >
                          <Twitter className="w-5 h-5" />
                          <span>Twitter</span>
                        </a>
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-menu-link flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            onClick={() => setIsSocialOpen(false)}
                        >
                          <Youtube className="w-5 h-5" />
                          <span>YouTube</span>
                        </a>
                        <a
                            href="https://soundcloud.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-menu-link flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            onClick={() => setIsSocialOpen(false)}
                        >
                          <Music className="w-5 h-5" />
                          <span>SoundCloud</span>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-menu-link flex items-center space-x-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            onClick={() => setIsSocialOpen(false)}
                        >
                          <Instagram className="w-5 h-5" />
                          <span>Instagram</span>
                        </a>
                      </div>
                    </motion.div>
                )}
              </AnimatePresence>

              <ThemeSwitcher />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
              className="mobile-menu-button md:hidden text-text-light dark:text-text-dark"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
              <motion.div
                  ref={mobileMenuRef}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mobile-menu md:hidden bg-surface-light dark:bg-surface-dark"
              >
                <div className="container mx-auto px-4 py-4">
                  <nav className="flex flex-col space-y-3">
                    <a href="#focus" className="nav-link" onClick={handleNavClick}>Focus</a>
                    <a href="#research" className="nav-link" onClick={handleNavClick}>Research</a>
                    <a href="#music" className="nav-link" onClick={handleNavClick}>Music</a>
                    <a href="#interests" className="nav-link" onClick={handleNavClick}>Interests</a>
                    <a href="#darkweb" className="nav-link" onClick={handleNavClick}>Dark Web</a>
                    <a href="#projects" className="nav-link" onClick={handleNavClick}>Projects</a>

                    <div className="flex items-center space-x-3 pt-2">
                      <a href="https://github.com/DebdootManna" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="https://x.com/DebdootManna" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href="https://www.youtube.com/@themessengersstudios" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Youtube className="w-5 h-5" />
                      </a>
                      <a href="https://soundcloud.com/themessengersmusic" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Music className="w-5 h-5" />
                      </a>
                      <a href="https://www.instagram.com/themessengersmusic" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Instagram className="w-5 h-5" />
                      </a>
                      <ThemeSwitcher />
                    </div>
                  </nav>
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </header>
  );
};

export default Header;