import { useEffect, useRef, useState } from 'react';

interface UseAdvancedScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  animationType?: 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'fadeIn';
}

export const useAdvancedScrollAnimation = (options: UseAdvancedScrollAnimationOptions = {}) => {
  const { 
    threshold = 0.2, 
    rootMargin = '0px', 
    triggerOnce = true, 
    animationType = 'slideUp' 
  } = options;
  
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
          setIsVisible(true);
          setHasAnimated(true);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasAnimated]);

  const getAnimationClass = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (animationType) {
        case 'slideUp':
          return `${baseClasses} opacity-0 translate-y-20`;
        case 'slideLeft':
          return `${baseClasses} opacity-0 translate-x-20`;
        case 'slideRight':
          return `${baseClasses} opacity-0 -translate-x-20`;
        case 'scaleIn':
          return `${baseClasses} opacity-0 scale-90`;
        case 'fadeIn':
        default:
          return `${baseClasses} opacity-0`;
      }
    }
    
    switch (animationType) {
      case 'slideUp':
        return `${baseClasses} opacity-100 translate-y-0`;
      case 'slideLeft':
        return `${baseClasses} opacity-100 translate-x-0`;
      case 'slideRight':
        return `${baseClasses} opacity-100 translate-x-0`;
      case 'scaleIn':
        return `${baseClasses} opacity-100 scale-100`;
      case 'fadeIn':
      default:
        return `${baseClasses} opacity-100`;
    }
  };

  return { ref, isVisible, animationClass: getAnimationClass() };
};

export const useParallaxScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};