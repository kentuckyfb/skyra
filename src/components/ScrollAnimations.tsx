import { useEffect, useRef } from 'react';

interface ScrollAnimationsProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ScrollAnimations = ({ children, className = '', delay = 0 }: ScrollAnimationsProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('in-view');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={elementRef} className={`scroll-fade-in ${className}`}>
      {children}
    </div>
  );
};

export default ScrollAnimations;