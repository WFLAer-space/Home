import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPreviewProps {
  id: string;
  title: string;
  date: string;
  readTime: string;
  preview: string;
}

export default function BlogPreview({ id, title, date, readTime, preview }: BlogPreviewProps) {
  return (
    <article className="border-b border-white/10 pb-12 last:border-0">
      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
        <span className="flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          {date}
        </span>
        <span className="flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          {readTime}
        </span>
      </div>
      
      <Link to={`/blog/${id}`}>
        <h2 className="text-2xl font-bold mb-4 hover:text-blue-400 transition-colors">
          {title}
        </h2>
      </Link>
      
      <p className="text-gray-400 mb-6">
        {preview}
      </p>
      
      <Link 
        to={`/blog/${id}`}
        className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
      >
        Read more <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </article>
  );
}