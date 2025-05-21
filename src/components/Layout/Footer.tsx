import React from 'react';
import ThemeSwitcher from '../UI/ThemeSwitcher';
import { ArrowDown, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark py-10 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Other Sources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://debdootmanna-old-portfolio.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link flex items-center"
                >
                  Old Portfolio <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/debdootmanna/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link flex items-center"
                >
                  LinkedIn <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="footer-link flex items-center"
                >
                  Download Resume <ArrowDown className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Theme</h3>
            <div className="flex items-center">
              <ThemeSwitcher />
              <span className="ml-2 text-sm opacity-70">
                {/* Toggle between light, dark, and system theme */}
                Switch theme
              </span>
            </div>
            <div className="mt-auto pt-8">
              <p className="text-sm opacity-60">
                &copy; {new Date().getFullYear()} Debdoot Manna. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;