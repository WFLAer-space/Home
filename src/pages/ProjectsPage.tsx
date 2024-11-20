import React from 'react';
import { Brain, Book, Database, ArrowUpRight, Star } from 'lucide-react';

const projects = [
  {
    category: 'Tools & Resources',
    items: [
      {
        title: 'Derive AI',
        description: 'Advanced AIGC platform for WFLA students and teachers',
        icon: Brain,
        url: 'https://ai.wflaer.space',
        status: 'Beta',
        featured: true
      },
      {
        title: 'Resource Hub',
        description: 'Centralized platform for academic resources',
        icon: Database,
        url: null,
        status: 'In Development',
        details: 'Coming soon in 2024/11.'
      }
    ]
  },
  {
    category: 'Tutorials',
    items: [
      {
        title: 'GDC Tutorial',
        description: 'Exclusive GDC user guide for quick start for beginners',
        icon: Book,
        url: 'https://gdc.wflaer.space',
        status: 'Active'
      }
    ]
  }
];

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-16">Our Projects</h1>
          
          <div className="space-y-16">
            {projects.map((category) => (
              <div key={category.category}>
                <h2 className="text-2xl font-semibold mb-8">{category.category}</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((project) => {
                    const Icon = project.icon;
                    return (
                      <div
                        key={project.title}
                        className="group border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all bg-white/5"
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
                        
                        {project.details && (
                          <div className="mb-4 text-sm text-gray-500">
                            {project.details}
                          </div>
                        )}
                        
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}