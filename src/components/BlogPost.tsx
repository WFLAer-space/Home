import React from 'react';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blog/posts';

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const processLinks = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      // Add the link
      parts.push(
        <a
          key={match.index}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          {match[1]}
        </a>
      );

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      const trimmedLine = line.trim();
      
      if (!trimmedLine) return null;

      if (trimmedLine.startsWith('#')) {
        const level = trimmedLine.match(/^#+/)[0].length;
        const text = trimmedLine.replace(/^#+\s*/, '');
        const headerClasses = {
          1: 'text-4xl font-bold mb-6',
          2: 'text-3xl font-bold mb-5',
          3: 'text-2xl font-bold mb-4',
          4: 'text-xl font-bold mb-3',
          5: 'text-lg font-bold mb-2',
          6: 'text-base font-bold mb-2'
        };
        return (
          <div key={index} className="mt-8 mb-4">
            {React.createElement(`h${level}`, { className: headerClasses[level] }, processLinks(text))}
          </div>
        );
      }

      if (trimmedLine.startsWith('-')) {
        return (
          <ul key={index} className="list-disc list-inside mb-4 ml-4">
            <li className="text-gray-300">{processLinks(trimmedLine.substring(1).trim())}</li>
          </ul>
        );
      }

      if (/^\d+\./.test(trimmedLine)) {
        return (
          <ol key={index} className="list-decimal list-inside mb-4 ml-4">
            <li className="text-gray-300">
              {processLinks(trimmedLine.substring(trimmedLine.indexOf('.') + 1).trim())}
            </li>
          </ol>
        );
      }

      return (
        <p key={index} className="mb-6 text-gray-300 leading-relaxed">
          {processLinks(trimmedLine)}
        </p>
      );
    });
  };

  return (
    <div className="pt-20">
      <article className="py-20 bg-black min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <Link 
            to="/blog"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center space-x-4 text-sm text-gray-400 mb-12">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {post.readTime}
            </span>
          </div>
          
          <div className="prose prose-invert max-w-none">
            {renderContent(post.content)}
          </div>
        </div>
      </article>
    </div>
  );
}