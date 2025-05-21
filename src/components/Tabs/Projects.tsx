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
      link: "https://github.com/yourusername/privacy-ml",
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
          <h2 className="section-title mb-12">Selected Projects</h2>

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
                    className="project-card group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-full bg-${project.color}/20 flex items-center justify-center text-${project.color} mb-4`}>
                    {project.icon}
                  </div>

                  <span className={`inline-block px-3 py-1 rounded-full text-xs text-${project.color} bg-${project.color}/10 mb-3`}>
                {project.category}
              </span>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="opacity-80 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-200/50 dark:bg-gray-800/50 rounded-md text-xs">
                    {tag}
                  </span>
                    ))}
                  </div>

                  <div className="absolute inset-0 -z-10 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 from-primary via-secondary to-accent"></div>
                </motion.a>
            ))}
          </motion.div>

          <div className="text-center mt-16">
            <p className="text-lg opacity-80 mb-6">
              These projects represent a small sampling of my work.
              For complete details on current research and ongoing projects:
            </p>

            <a
                href="https://www.debdootmanna.me/"
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