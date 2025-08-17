import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Original Enhanced Floating Curves */}
      <div 
        className="curve-line w-96 h-3"
        style={{
          top: '15%',
          left: '8%',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02 + scrollY * 0.1}px)`,
        }}
      />
      <div 
        className="curve-line-2 w-64 h-4"
        style={{
          top: '25%',
          right: '15%',
          animationDelay: '2s',
          transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.01 + scrollY * -0.05}px)`,
        }}
      />
      <div 
        className="curve-line-3 w-48 h-2"
        style={{
          bottom: '35%',
          left: '12%',
          animationDelay: '4s',
          transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * -0.015 + scrollY * 0.08}px)`,
        }}
      />

      {/* New Curved Arc Elements */}
      <div 
        className="curve-arc w-80 h-80"
        style={{
          top: '10%',
          right: '20%',
          animationDelay: '1s',
          transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * 0.012 + scrollY * 0.03}px)`,
        }}
      />
      <div 
        className="curve-arc w-60 h-60"
        style={{
          bottom: '25%',
          left: '25%',
          animationDelay: '6s',
          transform: `translate(${mousePosition.x * -0.012}px, ${mousePosition.y * 0.008 + scrollY * -0.04}px)`,
        }}
      />

      {/* Flowing Wave Elements */}
      <div 
        className="curve-wave w-72 h-6"
        style={{
          top: '40%',
          left: '5%',
          animationDelay: '3s',
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * -0.01 + scrollY * 0.06}px) rotate(25deg)`,
        }}
      />
      <div 
        className="curve-wave w-96 h-4"
        style={{
          bottom: '40%',
          right: '10%',
          animationDelay: '7s',
          transform: `translate(${mousePosition.x * -0.005}px, ${mousePosition.y * 0.015 + scrollY * -0.07}px) rotate(-15deg)`,
        }}
      />

      {/* Spiral Elements */}
      <div 
        className="curve-spiral w-44 h-44"
        style={{
          top: '60%',
          right: '35%',
          animationDelay: '5s',
          transform: `translate(${mousePosition.x * 0.006}px, ${mousePosition.y * -0.008 + scrollY * 0.05}px)`,
        }}
      />
      <div 
        className="curve-spiral w-56 h-56"
        style={{
          bottom: '60%',
          left: '40%',
          animationDelay: '9s',
          transform: `translate(${mousePosition.x * -0.009}px, ${mousePosition.y * 0.011 + scrollY * -0.03}px)`,
        }}
      />

      {/* Morphing Path Elements */}
      <div 
        className="curve-path w-64 h-48"
        style={{
          top: '30%',
          left: '30%',
          animationDelay: '2.5s',
          transform: `translate(${mousePosition.x * 0.004}px, ${mousePosition.y * 0.007 + scrollY * 0.04}px)`,
        }}
      />
      <div 
        className="curve-path w-80 h-60"
        style={{
          bottom: '15%',
          right: '25%',
          animationDelay: '8s',
          transform: `translate(${mousePosition.x * -0.007}px, ${mousePosition.y * -0.005 + scrollY * -0.06}px)`,
        }}
      />

      {/* Helix Elements */}
      <div 
        className="curve-helix w-52 h-8"
        style={{
          top: '50%',
          left: '15%',
          animationDelay: '4.5s',
          transform: `translate(${mousePosition.x * 0.012}px, ${mousePosition.y * 0.009 + scrollY * 0.07}px) rotate(45deg)`,
        }}
      />
      <div 
        className="curve-helix w-68 h-6"
        style={{
          bottom: '45%',
          right: '20%',
          animationDelay: '6.5s',
          transform: `translate(${mousePosition.x * -0.011}px, ${mousePosition.y * -0.013 + scrollY * -0.05}px) rotate(-30deg)`,
        }}
      />

      {/* Ribbon Flow Elements */}
      <div 
        className="curve-ribbon w-88 h-3"
        style={{
          top: '20%',
          left: '50%',
          animationDelay: '1.5s',
          transform: `translate(${mousePosition.x * 0.003}px, ${mousePosition.y * 0.014 + scrollY * 0.02}px) rotate(60deg)`,
        }}
      />
      <div 
        className="curve-ribbon w-76 h-4"
        style={{
          bottom: '30%',
          left: '60%',
          animationDelay: '7.5s',
          transform: `translate(${mousePosition.x * -0.006}px, ${mousePosition.y * 0.006 + scrollY * -0.08}px) rotate(-45deg)`,
        }}
      />

      {/* Additional Small Accent Curves */}
      <div 
        className="curve-line w-32 h-2"
        style={{
          top: '80%',
          left: '20%',
          animationDelay: '10s',
          transform: `translate(${mousePosition.x * 0.018}px, ${mousePosition.y * -0.012 + scrollY * 0.09}px) rotate(75deg)`,
        }}
      />
      <div 
        className="curve-line-2 w-28 h-3"
        style={{
          top: '5%',
          left: '70%',
          animationDelay: '11s',
          transform: `translate(${mousePosition.x * -0.014}px, ${mousePosition.y * 0.016 + scrollY * -0.04}px) rotate(-60deg)`,
        }}
      />
      <div 
        className="curve-line-3 w-36 h-2"
        style={{
          bottom: '10%',
          right: '45%',
          animationDelay: '12s',
          transform: `translate(${mousePosition.x * 0.009}px, ${mousePosition.y * -0.007 + scrollY * 0.06}px) rotate(90deg)`,
        }}
      />

      {/* Enhanced Gradient Orbs */}
      <div 
        className="absolute w-96 h-96 rounded-full opacity-5"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 40% 60%, hsl(0 0% 100% / 0.15), transparent)',
          top: '5%',
          right: '5%',
          filter: 'blur(60px)',
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01 + scrollY * 0.02}px) scale(${1 + Math.sin(Date.now() * 0.001) * 0.1})`,
        }}
      />
      <div 
        className="absolute w-80 h-80 rounded-full opacity-4"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 60% 40%, hsl(0 0% 70% / 0.12), transparent)',
          bottom: '10%',
          left: '10%',
          filter: 'blur(80px)',
          transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * 0.012 + scrollY * -0.03}px) scale(${1 + Math.cos(Date.now() * 0.0008) * 0.15})`,
        }}
      />
      <div 
        className="absolute w-64 h-64 rounded-full opacity-6"
        style={{
          background: 'radial-gradient(circle at 30% 70%, hsl(0 0% 90% / 0.1), transparent)',
          top: '40%',
          right: '40%',
          filter: 'blur(40px)',
          transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * -0.008 + scrollY * 0.04}px) scale(${1 + Math.sin(Date.now() * 0.0012) * 0.08})`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;