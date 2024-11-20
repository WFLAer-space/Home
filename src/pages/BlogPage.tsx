import React from 'react';
import { blogPosts } from '../data/blog/posts';
import BlogPreview from '../components/BlogPreview';

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-16">Latest Articles</h1>
          
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <BlogPreview key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}