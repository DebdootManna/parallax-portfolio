import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParallaxLayer from '../UI/ParallaxLayer';
import { Music, Headphones, Waves as Waveform, Play, Pause } from 'lucide-react';

const MusicIdentity: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section id="music" className="parallax-section relative overflow-hidden" ref={ref}>
      {/* Background with waveform effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background-light via-background-light/90 to-background-light dark:from-background-dark dark:via-background-dark/90 dark:to-background-dark"></div>
        
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
        <ParallaxLayer className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" speed={0.3}>
          <div></div>
        </ParallaxLayer>
        <ParallaxLayer className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl" speed={0.4} direction="down">
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
                <h3 className="text-2xl font-bold mb-2">The Messengers</h3>
                <p className="opacity-80">
                  Electronic compositions that blend ambient textures, intricate rhythms, and 
                  abstract soundscapes. Each piece is an experiment in pattern recognition, 
                  designed to evoke specific cognitive and emotional states.
                </p>
                
                <div className="mt-4 flex space-x-4">
                  <a 
                    href="https://open.spotify.com/album/26QlxsORL2Yh7zPt8Xh6gj?si=fjG9Oz1USKuDobfS11TY6g" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                  >
                    <span className="mr-1">Spotify</span>
                  </a>
                  <a 
                    href="https://music.apple.com/gh/album/solitary-star/1797310730" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                  >
                    <span className="mr-1">Apple Music</span>
                  </a>
                  <a 
                    href="https://music.youtube.com/playlist?list=OLAK5uy_kxCrYIWW-TWI7nWocG4eFqcJZtgr-UxS4&si=DCWoDQO8oNlNOPjf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                  >
                    <span className="mr-1">YouTube Music</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-surface-light/60 dark:bg-surface-dark/60 backdrop-blur p-6 rounded-lg shadow-md">
                <Waveform className="w-8 h-8 text-secondary mb-3" />
                <h3 className="text-2xl font-bold mb-2">Sonic Philosophy</h3>
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
              {/* Album art with border effects */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 dark:from-primary/30 dark:via-accent/30 dark:to-secondary/30 backdrop-blur-sm">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-3/4 h-3/4">
                      {/* Animated border effects */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-secondary opacity-30 blur-lg animate-pulse"></div>
                      <div className="absolute inset-0 bg-surface-light dark:bg-surface-dark rounded-lg shadow-xl">
                        {/* Album art content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                          <img
                            src="/Album_Cover.jpg"
                            alt="Album Cover"
                            className="w-full h-full object-cover rounded-lg shadow-xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Audio player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur p-6 rounded-xl shadow-lg"
          >
            <audio
              ref={audioRef}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/gravity.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>
                <div className="ml-4">
                  <h4 className="font-semibold">Gravity</h4>
                  <p className="text-sm opacity-70">The Messengers</p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{
                    width: `${(currentTime / (audioRef.current?.duration || 1)) * 100}%`
                  }}
                ></div>
              </div>
              <div className="flex justify-between text-xs mt-1 opacity-70">
                <span>{formatTime(currentTime)}</span>
                <span>{audioRef.current ? formatTime(audioRef.current.duration || 0) : '0:30'}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MusicIdentity;