import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParallaxLayer from '../UI/ParallaxLayer';
import { Lock, Globe, Shield, Eye } from 'lucide-react';

const DarkWebResearch: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section id="darkweb" className="parallax-section relative overflow-hidden" ref={ref}>
      {/* Background with TOR-themed elements */}
      <div className="absolute inset-0">
        {/* Replace with TOR-browser themed background */}
        <ParallaxLayer
          className="absolute inset-0 bg-gradient-to-b from-background-light to-primary/5 dark:from-background-dark dark:to-primary/10"
          speed={0.2}
        />
        
        {/* Dark web themed visual elements */}
        <ParallaxLayer
          className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl opacity-50 dark:opacity-70"
          speed={0.3}
        />
        <ParallaxLayer
          className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl opacity-50 dark:opacity-70"
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
          <h2 className="section-title text-primary">Dark Web Research</h2>
          <div className="h-1 w-20 bg-primary mb-8"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-8">
                My research extends into the less visible corners of the internet, where I explore 
                privacy technologies, information networks, and cryptographic systems. This work 
                provides valuable insights into digital sovereignty and information security.
              </p>
              
              <div className="space-y-6">
                <div className="bg-surface-light/50 dark:bg-surface-dark/50 backdrop-blur p-6 rounded-lg shadow-md border border-primary/20">
                  <Globe className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-bold mb-2">Anonymous Networks</h3>
                  <p className="opacity-80">
                    Studying the architecture and behavior of decentralized networks, 
                    focusing on how privacy-preserving systems maintain functionality 
                    while protecting user identity.
                  </p>
                </div>
                
                <div className="bg-surface-light/50 dark:bg-surface-dark/50 backdrop-blur p-6 rounded-lg shadow-md border border-primary/20">
                  <Lock className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="text-xl font-bold mb-2">Cryptographic Applications</h3>
                  <p className="opacity-80">
                    Investigating practical implementations of theoretical cryptography,
                    examining how mathematical principles translate into real-world
                    privacy and security solutions.
                  </p>
                </div>
                
                <div className="bg-surface-light/50 dark:bg-surface-dark/50 backdrop-blur p-6 rounded-lg shadow-md border border-primary/20">
                  <Shield className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-xl font-bold mb-2">Private Research</h3>
                  <p className="opacity-80">
                    Much of this work remains confidential due to its nature, but contributes 
                    significantly to my understanding of information systems, network dynamics, 
                    and privacy technologies.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative aspect-square flex items-center justify-center"
            >
              {/* TOR browser-themed cutout imagery */}
              <div className="relative w-4/5 h-4/5 rounded-full">
                <div className="absolute inset-0 rounded-full border-8 border-primary/30 animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute inset-8 rounded-full border-8 border-secondary/30 animate-pulse" style={{ animationDuration: '12s' }}></div>
                <div className="absolute inset-16 rounded-full border-8 border-accent/30 animate-pulse" style={{ animationDuration: '16s' }}></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-surface-light dark:bg-surface-dark flex items-center justify-center shadow-xl">
                    <Eye className="w-12 h-12 text-primary" />
                  </div>
                </div>
                
                {/* Orbit elements */}
                {Array.from({ length: 6 }).map((_, i) => {
                  const angle = (i * 60) * (Math.PI / 180);
                  const x = 120 * Math.cos(angle);
                  const y = 120 * Math.sin(angle);
                  return (
                    <div 
                      key={i}
                      className="absolute w-6 h-6 rounded-full bg-primary/80"
                      style={{ 
                        left: `calc(50% + ${x}px)`, 
                        top: `calc(50% + ${y}px)`, 
                        transform: 'translate(-50%, -50%)',
                        animation: 'float 4s ease-in-out infinite',
                        animationDelay: `${i * 0.5}s`
                      }}
                    ></div>
                  );
                })}
              </div>
            </motion.div>
          </div>
          
          {/* Network visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 py-6"
          >
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            <p className="text-center mt-8 opacity-70 italic">
              "The darkest places in hell are reserved for those who maintain their neutrality in times of moral crisis." — Dante Alighieri
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DarkWebResearch;