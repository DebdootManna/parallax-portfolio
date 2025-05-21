import { useEffect, useState, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
  offset?: number;
}

export const useParallax = ({
  speed = 0.1,
  direction = 'up',
  offset = 0,
}: ParallaxOptions = {}) => {
  const [scrollY, setScrollY] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setViewportHeight(window.innerHeight);
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        setElementTop(rect.top + window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Initial values
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const isInView = rect.top < viewportHeight && rect.bottom > 0;
    setInView(isInView);
    
  }, [scrollY, viewportHeight]);

  const transformValue = () => {
    if (!inView) return 0;
    
    const relativeScroll = scrollY - elementTop + viewportHeight;
    const value = relativeScroll * speed + offset;
    
    return direction === 'up' ? -value : value;
  };

  return {
    ref: elementRef,
    style: {
      transform: `translate3d(0, ${transformValue()}px, 0)`,
      willChange: 'transform',
    },
    inView,
  };
};

export default useParallax;