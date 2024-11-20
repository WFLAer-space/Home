import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group min-w-[140px]">
          <img 
            src="/favicon.svg" 
            alt="WFLAer.space Logo" 
            className="w-6 h-6 group-hover:opacity-80 transition-opacity" 
          />
          <span className="font-medium">WFLAer.space</span>
        </Link>
        <div className="flex items-center space-x-8">
          <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
          <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
          <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link>
          <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}