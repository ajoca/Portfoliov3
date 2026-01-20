import React from 'react';
import { Calendar, Clock, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Blog = ({ blogPosts }) => {
  const { t } = useTranslation();

  return (
    <section id="blog" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            {t('Blog')}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Thoughts on development, technology, and innovation
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800/50 hover:border-emerald-400/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2 hover:text-emerald-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 text-xs bg-emerald-600/20 text-emerald-400 rounded-full"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};