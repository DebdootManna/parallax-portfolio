import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParallaxLayer from '../UI/ParallaxLayer';
import { Shield, Braces, Brain } from 'lucide-react';

const CurrentFocus: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section id="focus" className="parallax-section relative" ref={ref}>
      {/* Background with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Replace this with parallax background for Focus section */}
        <ParallaxLayer 
          className="absolute inset-0 bg-gradient-to-br from-transparent via-secondary/10 to-transparent"
          speed={0.2}
        >
          <div>{/* Background gradient layer */}</div>
        </ParallaxLayer>
        
        {/* Abstract shapes */}
        <ParallaxLayer 
          className="absolute top-1/3 left-1/5 w-72 h-72 rounded-full bg-primary/5 blur-3xl" 
          speed={0.3}
        >
          <div>{/* Primary blur shape */}</div>
        </ParallaxLayer>
        <ParallaxLayer 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl" 
          speed={0.4} 
          direction="down"
        >
          <div>{/* Accent blur shape */}</div>
        </ParallaxLayer>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center">
            <svg className="w-10 h-10 mr-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Current Focus
          </h2>
          <div className="h-1 w-20 bg-accent mb-12"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm p-8 rounded-lg shadow-lg"
            >
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Security of AI</h3>
              <p className="font-body opacity-80 leading-relaxed">
                Exploring vulnerabilities in machine learning systems and developing 
                novel defensive strategies against adversarial attacks.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm p-8 rounded-lg shadow-lg"
            >
              <Brain className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Deep Learning</h3>
              <p className="font-body opacity-80 leading-relaxed">
                Researching emerging architectures and techniques in neural networks, 
                focusing on interpretability and robustness in complex systems.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm p-8 rounded-lg shadow-lg"
            >
              <Braces className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Pattern Recognition</h3>
              <p className="font-body opacity-80 leading-relaxed">
                Investigating theoretical frameworks that bridge computational 
                models with human cognitive patterns and knowledge representation.
              </p>
            </motion.div>
          </div>
          
          {/* Larger zoom-in target area */}
          <motion.div
            className="mt-16 max-w-3xl mx-auto text-center"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative p-8 bg-surface-light/60 dark:bg-surface-dark/60 backdrop-blur-md rounded-xl shadow-xl border border-primary/20">
              <h3 className="text-3xl font-bold mb-4 text-primary">Security of AI + Deep Learning</h3>
              <p className="font-body text-lg opacity-90">
                My current research sits at the intersection of security and artificial intelligence, 
                exploring how complex neural systems can be made resilient against malicious exploitation 
                while maintaining their learning capabilities.
              </p>
              
              {/* Use this block for zoomed visual of AI Security */}
              <div className="absolute -z-10 inset-0 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 blur"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentFocus;