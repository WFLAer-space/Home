import React from 'react';
import { Users, Heart, Rocket, Book, Globe, Code2, MessageSquare, Sparkles, GraduationCap, GitBranch, Star } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      title: 'Innovation',
      description: 'Embracing cutting-edge technology to enhance education',
      icon: Sparkles,
    },
    {
      title: 'Accessibility',
      description: 'Making knowledge accessible to all WFLA members',
      icon: Globe,
    },
    {
      title: 'Collaboration',
      description: 'Fostering a supportive learning community',
      icon: MessageSquare,
    },
  ];

  const timelineEvents = [
    {
      date: '2024.10',
      title: 'Project "Derive AI" Beta',
      description: 'The Derive AI project enters beta testing phase',
      icon: Rocket,
    },
    {
      date: '2024.09',
      title: 'First Project Completion',
      description: 'Successfully completed our first project "GDC Tutorial"',
      icon: Star,
    },
    {
      date: '2024.09',
      title: 'Organization Initiation',
      description: 'Official establishment of WFLAer.space',
      icon: GitBranch,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About WFLAer.space</h1>
            <p className="text-xl text-gray-300 mb-8">
              A non-profit organization dedicated to enhancing the educational experience at WFLA International through technology and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                WFLAer.space was founded with a clear purpose: to create an ecosystem of educational tools and resources that make knowledge more accessible to the WFLA International community.
              </p>
              <p className="text-gray-300">
                We believe in leveraging technology to enhance learning experiences, foster collaboration, and build a stronger academic community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-white/5 p-6 rounded-lg">
                    <Icon className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Members Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Core Members</h2>
          <div className="max-w-2xl">
            <div className="border border-white/10 rounded-lg p-8 hover:border-white/20 transition-all bg-black/30">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">dbc</h3>
                  <p className="text-blue-400">Founder</p>
                </div>
              </div>
              <p className="text-gray-400">
                Founder of WFLAer.space, dedicated to making knowledge accessible and enhancing the educational experience at WFLA International through innovative technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <div key={index} className="relative pl-8 pb-12 last:pb-0">
                  {/* Timeline line */}
                  {index !== timelineEvents.length - 1 && (
                    <div className="absolute left-[15px] top-10 bottom-0 w-px bg-white/10"></div>
                  )}
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="pt-1">
                    <div className="text-sm text-blue-400 mb-1">{event.date}</div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}