import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

        {/* Desktop navigation menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
          <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
          <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link>
          <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
          <a 
            href="https://github.com/WFLAer-space" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors inline-flex items-center"
          >
            GitHub <ArrowUpRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-lg transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="px-6 py-4 space-y-4">
          <Link 
            to="/about" 
            className="block text-gray-400 hover:text-white transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/blog" 
            className="block text-gray-400 hover:text-white transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            to="/projects" 
            className="block text-gray-400 hover:text-white transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className="block text-gray-400 hover:text-white transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <a 
            href="https://github.com/WFLAer-space" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block text-gray-400 hover:text-white transition-colors py-2 inline-flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            GitHub <ArrowUpRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </nav>
  );
}