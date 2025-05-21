import React from 'react';
import { motion, MotionStyle } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  style?: React.CSSProperties;
  threshold?: number;
  triggerOnce?: boolean;
}

const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  speed = 0.5,
  className = '',
  direction = 'up',
  style = {},
  threshold = 0.1,
  triggerOnce = false,
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin: '50px 0px',
  });

  let motionStyle: MotionStyle = {
    ...style,
    transition: 'transform 0.6s cubic-bezier(0.17, 0.55, 0.55, 1)',
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={motionStyle}
      data-parallax-layer
      data-speed={speed}
      data-direction={direction}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxLayer;