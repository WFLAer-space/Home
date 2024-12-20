"use client";

import { Calendar } from "lucide-react";

const milestones = [
  {
    date: "September 2024",
    title: "Organization Initiation",
    description: "Official establishment",
  },
  {
    date: "September 2024",
    title: "First Project Completion",
    description: "GDC Tutorial",
  },
  {
    date: "October 2024",
    title: "Project 'Derive AI' Beta Launch",
    description: "Planned",
  },
];

export default function AboutPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            To create an ecosystem of educational tools and resources that make knowledge more accessible 
            to the WFLA International community, leveraging technology to enhance learning experiences, 
            foster collaboration, and build a stronger academic community.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-8">Our Journey</h2>
          <div className="max-w-3xl">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4 mb-8">
                <div className="flex flex-col items-center">
                  <Calendar className="w-6 h-6 text-primary" />
                  <div className="w-px h-full bg-border" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{milestone.date}</p>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Community Engagement</h2>
          <p className="text-lg text-muted-foreground mb-4">
            We welcome participation from students, teachers, and developers who share our vision 
            for enhancing education through technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2">How to Get Involved</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Contribute to projects</li>
                <li>Share ideas and feedback</li>
                <li>Get support for tools</li>
                <li>Collaborate on new initiatives</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Leadership</h3>
              <p className="text-muted-foreground">
                Founded by dbc, our team focuses on innovative technology solutions 
                and educational enhancement.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}