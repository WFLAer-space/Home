import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Blog from '../components/Blog';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Blog />
      <Projects />
    </>
  );
}