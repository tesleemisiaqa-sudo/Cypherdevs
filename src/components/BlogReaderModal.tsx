import React from 'react';
import { X, Calendar, Clock, User, Tag, Share2, BookOpen } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { BlogPost } from '../types';

interface BlogReaderModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BlogReaderModal: React.FC<BlogReaderModalProps> = ({ post, isOpen, onClose }) => {
  const { lang } = useLanguage();

  if (!isOpen || !post) return null;

  const title = lang === 'ar' ? post.titleAr : post.titleEn;
  const content = lang === 'ar' ? post.contentAr : post.contentEn;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="sleek-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-slate-100">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100/95 backdrop-blur-md px-6 py-4 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-blue-400 font-mono font-bold uppercase">
            <BookOpen className="w-4 h-4" />
            <span>{post.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 dark:border-slate-800 light:border-slate-200">
            <img src={post.image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 font-mono">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-blue-400" />
                <span>{post.author} ({post.authorRole})</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>{post.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>{post.readTime}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {title}
            </h1>
          </div>

          {/* Render Markdown Text */}
          <div className="prose prose-invert max-w-none text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm leading-relaxed space-y-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 pt-6">
            {content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-lg font-bold text-blue-400 dark:text-blue-400 light:text-blue-600 mt-6 mb-2">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              return (
                <p key={idx} className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map(tag => (
                <span key={tag} className="text-xs font-mono text-blue-400 dark:text-blue-400 light:text-blue-600 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 px-3 py-1 rounded border border-slate-800 dark:border-slate-800 light:border-slate-200">
                  #{tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert(lang === 'ar' ? 'تم نسخ رابط المقال' : 'Article link copied!');
              }}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 dark:bg-slate-800 light:bg-slate-200 hover:bg-slate-700 text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-center gap-1.5 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-blue-400" />
              <span>{lang === 'ar' ? 'مشاركة' : 'Share Article'}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
