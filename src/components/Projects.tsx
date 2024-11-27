import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Brain, Book, Database, Star } from 'lucide-react';

const projects = [
  {
    title: 'Derive AI',
    description: 'Advanced AI-powered learning assistant for WFLA students.',
    status: 'Beta',
    icon: Brain,
    url: 'https://ai.wflaer.space',
    featured: true
  },
  {
    title: 'GDC Tutorial',
    description: 'Exclusive GDC user guide for quick start for beginners.',
    status: 'Active',
    icon: Book,
    url: 'https://gdc.wflaer.space'
  },
  {
    title: 'Resource Hub',
    description: 'Centralized platform for academic resources and learning materials.',
    status: 'Active',
    icon: Database,
    url: 'https://files.wflaer.space'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-bold flex items-center flex-grow">
            <span className="mr-4">Projects</span>
            <div className="h-px bg-white/20 flex-grow"></div>
          </h2>
          <Link 
            to="/projects" 
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            View all projects
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={index}
                className="group border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon className="w-8 h-8 text-blue-400" />
                    {project.featured && (
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    )}
                  </div>
                  {project.url && (
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 group-hover:text-white transition-colors"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="text-sm">
                  <span className={`px-2 py-1 rounded-full ${
                    project.status === 'Active' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                    project.status === 'Beta' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                    'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}