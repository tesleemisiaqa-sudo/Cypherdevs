import React, { useState } from 'react';
import { 
  BookOpen, Search, Clock, Calendar, User, 
  Tag, ArrowRight, Sparkles 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useData } from '../context/DataContext';
import { BlogPost } from '../types';

interface BlogSectionProps {
  openBlogModal: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ openBlogModal }) => {
  const { t, lang, isRTL } = useLanguage();
  const { blogs } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Architecture', 'Artificial Intelligence', 'Cybersecurity', 'Cloud & DevOps'];

  const filteredBlogs = blogs.filter((post) => {
    const title = lang === 'ar' ? post.titleAr : post.titleEn;
    const excerpt = lang === 'ar' ? post.excerptAr : post.excerptEn;
    const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog-section" className="py-20 bg-[#0a0c10] dark:bg-[#0a0c10] light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 border-b border-blue-500/20 dark:border-blue-500/20 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 dark:text-blue-400 light:text-blue-600 uppercase bg-blue-500/10 px-3.5 py-1 rounded-full border border-blue-500/30 flex items-center gap-1.5 w-max mx-auto">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t('blogBadge')}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {t('blogHeading')}
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('blogSubtitle')}
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 max-w-4xl mx-auto">
          
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchBlogPlaceholder')}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`blog-cat-${cat}-btn`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-500/30'
                    : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-200/80 text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-slate-800 dark:border-slate-800 light:border-slate-300'
                }`}
              >
                {cat === 'all' ? t('filterAll') : cat}
              </button>
            ))}
          </div>

        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((post) => {
            const title = lang === 'ar' ? post.titleAr : post.titleEn;
            const excerpt = lang === 'ar' ? post.excerptAr : post.excerptEn;

            return (
              <article
                key={post.id}
                className="sleek-card overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                    <img
                      src={post.image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent dark:from-[#0a0c10]" />
                    <span className="absolute top-3 left-3 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-slate-900/90 dark:bg-slate-900/90 light:bg-white/90 border border-blue-500/40 text-blue-300 dark:text-blue-300 light:text-blue-700 backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-blue-400" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                      {title}
                    </h3>

                    <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed line-clamp-3">
                      {excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-600 font-mono bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 px-2 py-0.5 rounded border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 mt-4">
                  <div className="flex items-center justify-between pt-4">
                    <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium">
                      <span className="text-blue-400 font-semibold">{post.author}</span>
                    </div>

                    <button
                      id={`read-article-${post.id}-btn`}
                      onClick={() => openBlogModal(post)}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-blue-400 dark:text-blue-300 light:text-blue-700 bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white light:hover:bg-blue-600 light:hover:text-white border border-blue-500/30 dark:border-blue-500/30 light:border-slate-300 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>{t('readArticle')}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
