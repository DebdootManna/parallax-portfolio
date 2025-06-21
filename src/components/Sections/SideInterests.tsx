import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParallaxLayer from '../UI/ParallaxLayer';
import {Camera, Film, Music, Palette} from 'lucide-react';

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
      title: 'Painting',
      description: 'Composing non-figurative pieces with the style of fauvism.',
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Music',
      description: 'Composing electronic sounds and hallucinations in the form of audio.',
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
        >
          <div></div>
        </ParallaxLayer>
        
        <ParallaxLayer
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl"
          speed={0.4}
          direction="down"
        >
          <div></div>
        </ParallaxLayer>
        
        <ParallaxLayer
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl"
          speed={0.4}
          direction="down"
        >
          <div></div>
        </ParallaxLayer>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-24 pb-16 min-h-screen flex flex-col justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center">
            <svg className="w-10 h-10 mr-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Side Interests
          </h2>
          <div className="h-1 w-20 bg-accent mb-12"></div>
          
          <p className="font-body text-lg md:text-xl max-w-3xl opacity-90 mb-12">
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
                <h3 className="font-body text-xl font-bold mb-2">{item.title}</h3>
                <p className="font-body opacity-80">{item.description}</p>
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
                    {/*<div className="text-white text-lg font-medium">Gallery {i + 1}</div>*/}

                    <img
                        src={`/image${i + 1}.jpg`}
                        alt={`Interest visual ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white text-lg font-medium px-4 text-center">
                        {i === 0 && "Distance..."}
                        {i === 1 && "Capture..."}
                        {i === 2 && "Abstractness..."}
                        {i === 3 && "Compose..."}
                      </div>
                    </div>

                  </div>

                  {/* Replace this with image placeholder */}
                  {/*<div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">*/}
                  {/*  {i === 0 && <Camera className="w-8 h-8 text-gray-400 dark:text-gray-600" />}*/}
                  {/*  {i === 1 && <Film className="w-8 h-8 text-gray-400 dark:text-gray-600" />}*/}
                  {/*  {i === 2 && <Palette className="w-8 h-8 text-gray-400 dark:text-gray-600" />}*/}
                  {/*  {i === 3 && <Music className="w-8 h-8 text-gray-400 dark:text-gray-600" />}*/}
                  {/*</div>*/}

                  {/* Actual images */}
                  <img
                      src={`/image1${i + 1}.jpg`}
                      alt={`Interest visual ${i + 1}`}
                      className="w-full h-full object-cover"
                  />

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