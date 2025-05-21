import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParallaxLayer from '../UI/ParallaxLayer';
import { Camera, Film, Palette, PenTool as Tool } from 'lucide-react';

const SideInterests: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const interestItems = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Photography',
      description: 'Capturing moments that reveal unseen patterns and perspectives in ordinary scenes.',
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: 'Filmmaking',
      description: 'Creating visual narratives that explore consciousness, technology, and human experience.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Digital Art',
      description: 'Generating algorithmic and AI-assisted artworks that visualize complex concepts.',
    },
    {
      icon: <Tool className="w-8 h-8" />,
      title: 'Experimental Tools',
      description: 'Building custom software and hardware interfaces for unique creative expression.',
    },
  ];

  return (
    <section id="interests" className="parallax-section relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        {/* Replace this with parallax background for Side Interests section */}
        <ParallaxLayer 
          className="absolute inset-0 bg-gradient-to-bl from-transparent via-secondary/5 to-transparent"
          speed={0.2}
        />
        
        {/* Abstract elements */}
        <ParallaxLayer 
          className="absolute top-1/3 right-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
          speed={0.3}
        />
        <ParallaxLayer 
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl"
          speed={0.4}
          direction="down"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-24 pb-16 min-h-screen flex flex-col justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Side Interests</h2>
          <div className="h-1 w-20 bg-secondary mb-8"></div>
          
          <p className="text-lg md:text-xl max-w-3xl opacity-90 mb-12">
            Beyond research and music, I explore various creative domains that 
            enhance my understanding of patterns, perception, and human expression.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interestItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-surface-light/70 dark:bg-surface-dark/70 backdrop-blur p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-primary/10 hover:border-primary/20"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="opacity-80">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Gallery preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold mb-6">Visual Explorations</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Replace these with actual gallery images */}
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.2 * i }}
                  className="rounded-lg overflow-hidden aspect-square relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-lg font-medium">Gallery {i + 1}</div>
                  </div>
                  
                  {/* Replace this with image placeholder */}
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    {i === 0 && <Camera className="w-8 h-8 text-gray-400 dark:text-gray-600" />}
                    {i === 1 && <Film className="w-8 h-8 text-gray-400 dark:text-gray-600" />}
                    {i === 2 && <Palette className="w-8 h-8 text-gray-400 dark:text-gray-600" />}
                    {i === 3 && <Tool className="w-8 h-8 text-gray-400 dark:text-gray-600" />}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SideInterests;