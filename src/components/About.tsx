import React from 'react';
import { Users, Heart, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 flex items-center">
          <span className="mr-4">About</span>
          <div className="h-px bg-white/20 flex-grow"></div>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6 p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
            <Users className="w-10 h-10 text-blue-400" />
            <h3 className="text-2xl font-semibold">Who We Are</h3>
            <p className="text-gray-400 leading-relaxed">
              We are the WFLAer.space non-profit project, dedicated to supporting WFLA International's academic community through technology and innovation.
            </p>
          </div>

          <div className="space-y-6 p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
            <Heart className="w-10 h-10 text-pink-400" />
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              We aim to provide a user-friendly, quality platform that supports learning and campus life at WFLA International.
            </p>
          </div>

          <div className="space-y-6 p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
            <Sparkles className="w-10 h-10 text-purple-400" />
            <h3 className="text-2xl font-semibold">Future Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              Building cutting-edge tools including AIGC websites, academic resource platforms, and campus information systems to enhance the learning experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}