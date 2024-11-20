import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-16">Get in Touch</h1>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
            <div className="space-y-8 p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
              <Mail className="w-10 h-10 text-blue-400" />
              <h3 className="text-2xl font-semibold">Email</h3>
              <a 
                href="mailto:service@wflaer.space" 
                className="text-gray-400 hover:text-blue-400 transition-colors block"
              >
                service@wflaer.space
              </a>
            </div>

            <div className="space-y-8 p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
              <MessageCircle className="w-10 h-10 text-green-400" />
              <h3 className="text-2xl font-semibold">WeChat</h3>
              <p className="text-gray-400">dbccccwx</p>
            </div>
          </div>

          <div className="mt-16 max-w-2xl">
            <h2 className="text-2xl font-semibold mb-6">Join Our Community</h2>
            <p className="text-gray-400 mb-8">
              Whether you're a student, teacher, or developer, we'd love to have you join our community. 
              Reach out to us through any of the channels above to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Contribute to our projects</li>
              <li>Share your ideas and feedback</li>
              <li>Get support for our tools</li>
              <li>Collaborate on new initiatives</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}