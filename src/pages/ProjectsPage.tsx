import React from 'react';
import { Brain, Book, Database, ArrowUpRight, Star, Search, Calculator } from 'lucide-react';

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
        title: 'Campus Guide',
        description: 'Quick Search for Campus and Teacher Information',
        icon: Search,
        url: 'https://campus.guide',
        status: 'Active'
      },
      {
        title: 'Resource Hub',
        description: 'Centralized platform for academic resources',
        icon: Database,
        url: 'https://files.wflaer.space',
        status: 'Active',
      },
      {
        title: 'Links Collection',
        description: 'Collection of useful links and resources',
        icon: Book,
        url: 'https://links.wflaer.space',
        status: 'Active'
      }
    ]
  },
  {
    category: 'Tutorials',
    items: [
      {
        title: 'GDC Tutorial',
        description: 'Exclusive GDC user guide for quick start for beginners',
        icon: Calculator,
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
          
          <div className="space-y-20">
            {projects.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold mb-8">{section.category}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.items.map((project, projectIndex) => (
                    <a
                      key={projectIndex}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors relative h-full">
                        {project.featured && (
                          <div className="absolute top-4 right-4">
                            <Star className="w-5 h-5 text-yellow-400" fill="currentColor" />
                          </div>
                        )}
                        <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-lg bg-white/10">
                            <project.icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h3 className="text-lg font-semibold">{project.title}</h3>
                              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-gray-400 mt-2">{project.description}</p>
                            <div className="mt-4">
                              <span className={`text-sm px-3 py-1 rounded-full ${
                                project.status === 'Beta' 
                                  ? 'bg-yellow-400/10 text-yellow-400' 
                                  : 'bg-green-400/10 text-green-400'
                              }`}>
                                {project.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}