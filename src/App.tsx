import React, { useRef, useEffect } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import CurrentFocus from './components/Sections/CurrentFocus';
import ResearchDomains from './components/Sections/ResearchDomains';
import MusicIdentity from './components/Sections/MusicIdentity';
import SideInterests from './components/Sections/SideInterests';
import DarkWebResearch from './components/Sections/DarkWebResearch';
import Projects from './components/Tabs/Projects';
import { useTheme } from './contexts/ThemeContext';

const App: React.FC = () => {
  useTheme(); // Initialize theme context
  const appRef = useRef<HTMLDivElement>(null);

  // Enable smooth scrolling behavior
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#') && link.origin === window.location.origin) {
        e.preventDefault();
        
        const targetElement = document.querySelector(link.hash);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
          
          // Update URL without scrolling
          window.history.pushState(null, '', link.hash);
        }
      }
    };
    
    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <div ref={appRef} className="min-h-screen w-full">
      <Header />
      
      <main className="relative overflow-hidden pt-24">
        <Hero />
        <CurrentFocus />
        <ResearchDomains />
        <MusicIdentity />
        <SideInterests />
        <DarkWebResearch />
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;