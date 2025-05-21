import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Twitter, Youtube, Music, Instagram } from 'lucide-react';
import ThemeSwitcher from '../UI/ThemeSwitcher';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="font-bold text-xl md:text-2xl">Debdoot Manna</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#focus" className="nav-link">Focus</a>
          <a href="#research" className="nav-link">Research</a>
          <a href="#music" className="nav-link">Music</a>
          <a href="#interests" className="nav-link">Interests</a>
          <a href="#darkweb" className="nav-link">Dark Web</a>
          <a href="#projects" className="nav-link">Projects</a>
          
          <div className="ml-4 flex items-center space-x-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Twitter className="w-5 h-5" />
            </a>
            <ThemeSwitcher />
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text-light dark:text-text-dark"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-surface-light dark:bg-surface-dark"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                <a href="#focus" className="nav-link" onClick={() => setIsOpen(false)}>Focus</a>
                <a href="#research" className="nav-link" onClick={() => setIsOpen(false)}>Research</a>
                <a href="#music" className="nav-link" onClick={() => setIsOpen(false)}>Music</a>
                <a href="#interests" className="nav-link" onClick={() => setIsOpen(false)}>Interests</a>
                <a href="#darkweb" className="nav-link" onClick={() => setIsOpen(false)}>Dark Web</a>
                <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a>
                
                <div className="flex items-center space-x-3 pt-2">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Music className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
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