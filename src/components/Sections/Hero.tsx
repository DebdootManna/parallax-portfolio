import React from 'react';
import { motion } from 'framer-motion';
import ParallaxLayer from '../UI/ParallaxLayer';

const Hero: React.FC = () => {
  return (
    <section className="parallax-section flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Replace this with parallax background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:from-transparent dark:via-primary/10 dark:to-transparent"></div>
        
        {/* Replace this with abstract background shapes */}
        <ParallaxLayer className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary/20 dark:bg-secondary/10 blur-3xl" speed={0.2}>
          <div />
        </ParallaxLayer>
        <ParallaxLayer className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl" speed={0.3} direction="down">
          <div />
        </ParallaxLayer>
        <ParallaxLayer className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-accent/20 dark:bg-accent/10 blur-3xl" speed={0.4}>
          <div />
        </ParallaxLayer>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20 md:py-0">
        <div className="flex flex-col justify-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Debdoot Manna
            </h1>
            <h2 className="font-body text-xl md:text-2xl lg:text-3xl mb-8 opacity-80">
              Researcher of Ideas | Explorer of the Unseen | Sonic Storyteller
            </h2>
            <div className="max-w-2xl">
              <p className="font-body text-lg md:text-xl leading-relaxed opacity-90 mb-10">
                I explore paradoxes, deep learning, AI security, psychology, and science through raw curiosity. 
                I don't write code—I unravel patterns. Music and research are my soul, the rest is my playground: 
                photography, filmography, tech, theories.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8"
            >
              <a
                href="#focus"
                className="inline-flex items-center bg-primary hover:bg-primary-dark text-white py-2 px-6 rounded-md transition-colors duration-300"
              >
                Explore My World
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2,
        }}
      >
        <span className="font-body block mb-2 text-sm opacity-70">Scroll Down</span>
        <span className="block w-5 h-5 border-b-2 border-r-2 border-text-light dark:border-text-dark transform rotate-45"></span>
      </motion.div>
    </section>
  );
};

export default Hero;