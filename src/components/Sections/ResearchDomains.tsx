import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParallaxLayer from '../UI/ParallaxLayer';
import { Brain, Infinity, Lightbulb, Lock } from 'lucide-react';

const ResearchDomains: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const domainVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 * i,
        duration: 0.6,
      },
    }),
  };

  return (
    <section id="research" className="parallax-section relative overflow-hidden" ref={ref}>
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Replace this with parallax background for Research section */}
        <ParallaxLayer 
          className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5"
          speed={0.2}
        >
          {/* Empty child element to satisfy children prop requirement */}
          <div></div>
        </ParallaxLayer>
        <ParallaxLayer 
          className="absolute top-1/4 left-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"
          speed={0.3}
        >
          <div></div>
        </ParallaxLayer>
        <ParallaxLayer 
          className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
          speed={0.4}
          direction="down"
        >
          <div></div>
        </ParallaxLayer>
        <ParallaxLayer 
          className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            Research Domains
          </h2>
          <div className="h-1 w-20 bg-accent mb-12"></div>
          
          <p className="font-body text-lg md:text-xl max-w-3xl opacity-90 mb-16">
            My research spans multiple disciplines, seeking unexpected connections between seemingly unrelated fields.
            These are the territories I'm currently exploring:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            <motion.div
              custom={0}
              variants={domainVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-surface-light/70 dark:bg-surface-dark/70 backdrop-blur p-8 rounded-xl shadow-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
            >
              <Brain className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Psychology</h3>
              <p className="font-body opacity-80 leading-relaxed">
                Exploring cognitive patterns, decision-making processes, and the nature of consciousness. 
                I focus on how mental models shape our perception of reality and influence technological design.
              </p>
              <ul className="mt-4 space-y-2 opacity-80">
                <li className="font-body flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                  Cognitive biases in information processing
                </li>
                <li className="font-body flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                  Perception modeling in human-AI interactions
                </li>
              </ul>
            </motion.div>

            <motion.div
              custom={1}
              variants={domainVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-surface-light/70 dark:bg-surface-dark/70 backdrop-blur p-8 rounded-xl shadow-lg border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-xl"
            >
              <Infinity className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Theories & Paradoxes</h3>
              <p className="font-body opacity-80 leading-relaxed">
                Investigating logical inconsistencies and theoretical frameworks that challenge conventional understanding.
                I'm particularly drawn to paradoxes that reveal limitations in our mental and computational models.
              </p>
              <ul className="mt-4 space-y-2 opacity-80">
                <li className="font-body flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-secondary mt-2 mr-2"></span>
                  Self-reference and recursive systems
                </li>
                <li className="font-body flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-secondary mt-2 mr-2"></span>
                  Incompleteness in formal systems
                </li>
              </ul>
            </motion.div>

            <motion.div
              custom={2}
              variants={domainVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-surface-light/70 dark:bg-surface-dark/70 backdrop-blur p-8 rounded-xl shadow-lg border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-xl"
            >
              <Lightbulb className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Tech & Science</h3>
              <p className="font-body opacity-80 leading-relaxed">
                Exploring emergent technologies and scientific principles, with a focus on 
                how they reshape our understanding of reality and enable new forms of expression.
              </p>
              <ul className="mt-4 space-y-2 opacity-80">
                <li className="font-body flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-accent mt-2 mr-2"></span>
                  Emergent properties in complex systems
                </li>
                <li className="font-body flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-accent mt-2 mr-2"></span>
                  Computational frameworks for knowledge representation
                </li>
              </ul>
            </motion.div>

            <motion.div
              custom={3}
              variants={domainVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-surface-light/70 dark:bg-surface-dark/70 backdrop-blur p-8 rounded-xl shadow-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
            >
              <Lock className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Privacy</h3>
              <p className="font-body opacity-80 leading-relaxed">
                Researching the intersection of privacy, security, and information theory.
                I explore how cryptographic principles and information control shape our digital existence.
              </p>
              <ul className="mt-4 space-y-2 opacity-80">
                <li className="font-body flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                  Information theory and privacy measures
                </li>
                <li className="font-body flex items-start">
                  <span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 mr-2"></span>
                  Differential privacy in machine learning systems
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Connecting lines visualization */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.7 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="hidden lg:block absolute inset-0 pointer-events-none z-0"
          >
            {/* Replace this with abstract connection visualization */}
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--tw-gradient-from)" />
                  <stop offset="100%" stopColor="var(--tw-gradient-to)" />
                </linearGradient>
              </defs>
              {/* SVG connection lines would be rendered here */}
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchDomains;