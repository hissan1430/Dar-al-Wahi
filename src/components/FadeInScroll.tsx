import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface FadeInScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  key?: React.Key;
}

export function FadeInScroll({ children, delay = 0, className = '' }: FadeInScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, keep it rendered and disconnect to avoid flickering
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px', // triggers slightly before entering viewport bottom
        threshold: 0.08,
      }
    );

    const el = elementRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        transitionDuration: '700ms',
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-7 pointer-events-none'
      } ${className}`}
    >
      {children}
    </div>
  );
}
