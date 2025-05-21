import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParallaxLayer from '../UI/ParallaxLayer';
import { Music, Headphones, AudioWaveform as Waveform } from 'lucide-react';

const MusicIdentity: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section id="music" className="parallax-section relative overflow-hidden" ref={ref}>
      {/* Background with waveform effect */}
      <div className="absolute inset-0">
        {/* Insert background video for music section */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-light via-background-light/90 to-background-light dark:from-background-dark dark:via-background-dark/90 dark:to-background-dark"></div>
        
        {/* Waveform visualization placeholder */}
        <ParallaxLayer className="absolute bottom-0 left-0 right-0 h-48 opacity-20" speed={0.2}>
          <div className="h-full flex items-end">
            {Array.from({ length: 120 }).map((_, i) => {
              const height = Math.sin(i * 0.2) * 0.5 + 0.5;
              return (
                <div 
                  key={i}
                  className="w-1 mx-0.5 bg-primary dark:bg-primary"
                  style={{ 
                    height: `${height * 100}%`,
                    opacity: 0.2 + height * 0.8, 
                    animationDelay: `${i * 0.05}s`,
                    animation: 'float 2s ease-in-out infinite'
                  }}
                ></div>
              );
            })}
          </div>
        </ParallaxLayer>
        
        {/* Abstract shapes */}
        <ParallaxLayer className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" speed={0.3} />
        <ParallaxLayer className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl" speed={0.4} direction="down" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-24 pb-16 min-h-screen flex flex-col justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title flex items-center">
            <Music className="w-10 h-10 mr-4 text-primary" />
            Music & Identity
          </h2>
          <div className="h-1 w-20 bg-accent mb-8"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                Music isn't just something I create—it's an extension of my consciousness, a 
                channel for expressing concepts that transcend language. Under the artist name 
                "The Messengers," I explore sonic landscapes that mirror the complexity and wonder 
                of our universe.
              </p>
              
              <div className="bg-surface-light/60 dark:bg-surface-dark/60 backdrop-blur p-6 rounded-lg shadow-md">
                <Headphones className="w-8 h-8 text-accent mb-3" />
                <h3 className="text-xl font-bold mb-2">The Messengers</h3>
                <p className="opacity-80">
                  Electronic compositions that blend ambient textures, intricate rhythms, and 
                  abstract soundscapes. Each piece is an experiment in pattern recognition, 
                  designed to evoke specific cognitive and emotional states.
                </p>
                
                <div className="mt-4 flex space-x-4">
                  <a 
                    href="https://soundcloud.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                  >
                    <span className="mr-1">SoundCloud</span>
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                  >
                    <span className="mr-1">YouTube</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-surface-light/60 dark:bg-surface-dark/60 backdrop-blur p-6 rounded-lg shadow-md">
                <Waveform className="w-8 h-8 text-secondary mb-3" />
                <h3 className="text-xl font-bold mb-2">Sonic Philosophy</h3>
                <p className="opacity-80">
                  My compositions are algorithmic explorations, using sound as a medium to 
                  investigate mathematical patterns, information theory, and cognitive science. 
                  The music becomes a research tool, a way to encode complex ideas in auditory form.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative aspect-square"
            >
              {/* Transparent cutout image here */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 dark:from-primary/30 dark:via-accent/30 dark:to-secondary/30 backdrop-blur-sm">
                {/* Replace with actual album art or music-related imagery */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-3/4 h-3/4">
                    <div className="absolute inset-0 rounded-full bg-black/30 dark:bg-white/10 animate-pulse" style={{ animationDuration: '4s' }}></div>
                    <div className="absolute inset-8 rounded-full bg-black/20 dark:bg-white/5 animate-pulse" style={{ animationDuration: '6s' }}></div>
                    <div className="absolute inset-16 rounded-full bg-black/10 dark:bg-white/5 animate-pulse" style={{ animationDuration: '8s' }}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Music className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Music player placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur p-4 rounded-xl shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Music className="w-6 h-6 text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Galactic Patterns</h4>
                  <p className="text-sm opacity-70">The Messengers</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div className="h-1 bg-primary rounded-full" style={{ width: '30%' }}></div>
              </div>
              <div className="flex justify-between text-xs mt-1 opacity-70">
                <span>1:26</span>
                <span>4:30</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MusicIdentity;