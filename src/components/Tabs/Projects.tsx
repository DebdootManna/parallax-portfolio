import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookCopy, Brain, FileCode, Music } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Browser Whisperer: Reveal",
      category: "Privacy",
      description: "A modern, responsive web application that reveals the identifiable information your browser shares with websites",
      icon: <FileCode className="w-6 h-6" />,
      tags: ["Browser Fingerprinting", "Online Privacy", "Security"],
      color: "primary",
      link: "https://github.com/DebdootManna/browser-whisperer-reveal",
    },
    {
      title: "The Messengers: Go On EP",
      category: "Music",
      description: "This is my first ever album consisting two future bass tracks, two future pop tracks and a progressive house track.",
      icon: <Music className="w-6 h-6" />,
      tags: ["Electronic", "Ambient", "House"],
      color: "secondary",
      link: "https://soundcloud.com/themessengersmusic/sets/go-on",
    },
    {
      title: "Paradox Framework",
      category: "Theory",
      description: "A theoretical framework for analyzing self-referential systems and logical inconsistencies across disciplines.",
      icon: <BookCopy className="w-6 h-6" />,
      tags: ["Philosophy", "Logic", "Cognitive Science"],
      color: "accent",
      link: "https://debdootmanna.github.io/Paradox-Framework/",
    },
    {
      title: "Privacy-Preserving ML",
      category: "Research",
      description: "Developing machine learning techniques that maintain data privacy while enabling collaborative model training.",
      icon: <Brain className="w-6 h-6" />,
      tags: ["Privacy", "Federated Learning", "Cryptography"],
      color: "primary",
      link: "https://debdootmanna.github.io/Privacy-Preserving-Collaborative-ML-Research/",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
      <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center">
            <svg className="w-10 h-10 mr-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Selected Projects
          </h2>
          <div className="h-1 w-20 bg-accent mb-12"></div>

          <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
                <motion.a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={item}
                    className="project-card group cursor-pointer relative p-8 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    project.color === 'primary' ? 'bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5' : 
                    project.color === 'secondary' ? 'bg-gradient-to-br from-secondary/5 via-primary/5 to-accent/5' : 
                    'bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5'
                  }`}></div>
                  
                  {/* Border animation */}
                  <div className={`absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-primary/20 transition-all duration-500 pointer-events-none`}>
                    <div className={`absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500`}></div>
                  </div>
                  <div className={`w-12 h-12 rounded-full ${
                    project.color === 'primary' ? 'bg-primary/20 text-primary' : 
                    project.color === 'secondary' ? 'bg-secondary/20 text-secondary' : 
                    'bg-accent/20 text-accent'
                  } flex items-center justify-center mb-4`}>
                    {project.icon}
                  </div>

                  <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                    project.color === 'primary' ? 'text-primary bg-primary/10' : 
                    project.color === 'secondary' ? 'text-secondary bg-secondary/10' : 
                    'text-accent bg-accent/10'
                  } mb-3`}>
                    {project.category}
                  </span>

                  <h3 className="font-body text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="font-body text-lg opacity-80 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="font-body px-2 py-1 bg-gray-200/50 dark:bg-gray-800/50 rounded-md text-xs">
                    {tag}
                  </span>
                    ))}
                  </div>

                  <div className={`absolute inset-0 -z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                    project.color === 'primary' ? 'bg-gradient-to-br from-primary/30 via-secondary/10 to-accent/10' : 
                    project.color === 'secondary' ? 'bg-gradient-to-br from-secondary/30 via-primary/10 to-accent/10' : 
                    'bg-gradient-to-br from-accent/30 via-primary/10 to-secondary/10'
                  }`}></div>
                </motion.a>
            ))}
          </motion.div>

          <div className="text-center mt-16">
            <p className="font-body text-lg opacity-80 mb-6">
              These projects represent a small sampling of my work.
              For complete details on current research and ongoing projects:
            </p>

            <a
                href="https://debdootmanna-complete.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary hover:bg-primary-dark text-white py-2 px-6 rounded-md transition-colors duration-300"
            >
              Visit My Detailed Portfolio
            </a>
          </div>
        </div>
      </section>
  );
};

export default Projects;