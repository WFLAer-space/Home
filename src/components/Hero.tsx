import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-black overflow-hidden mt-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(255,255,255,0)_100%)]"></div>
      </div>
      
      <div 
        ref={textRef}
        className="relative z-10 text-center max-w-4xl mx-auto px-6 transform transition-all duration-[2000ms] ease-out opacity-0 translate-y-8"
      >
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-text break-words px-4">
            WFLAer.space
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-400 max-w-2xl mx-auto">
            Making knowledge within reach
          </p>
          
          <div className="flex items-center justify-center space-x-6 pt-8">
            <a
              href="#about"
              className="px-8 py-4 text-lg rounded-full bg-white text-black hover:bg-gray-200 transition-colors duration-300"
            >
              Learn More
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 text-lg rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}