import { useEffect, useState, useCallback } from 'react';

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const newProgress = totalHeight > 0 ? currentScrollY / totalHeight : 0;
    
    setProgress(newProgress);
    setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { progress, scrollDirection };
};

export default useScrollProgress;