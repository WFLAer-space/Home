import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog/posts';
import BlogPreview from './BlogPreview';

export default function Blog() {
  // Get the latest 2 blog posts
  const latestPosts = blogPosts.slice(0, 2);

  return (
    <section id="blog" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-bold flex items-center flex-grow">
            <span className="mr-4">Blog</span>
            <div className="h-px bg-white/20 flex-grow"></div>
          </h2>
          <Link 
            to="/blog" 
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            View all articles
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {latestPosts.map((post) => (
            <BlogPreview key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}