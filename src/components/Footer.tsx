import React, { useState } from 'react';
import { 
  Cpu, Mail, Phone, MapPin, Globe, ShieldCheck, 
  Github, Linkedin, Twitter, ArrowRight, CheckCircle2, Search 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { NavTab } from '../types';

interface FooterProps {
  setCurrentTab: (tab: NavTab) => void;
  openSEOModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab, openSEOModal }) => {
  const { t, lang, toggleLang, isRTL } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-white dark:bg-[#07132b] text-slate-700 dark:text-slate-300 border-t border-blue-100 dark:border-blue-900/40 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-blue-100 dark:border-blue-900/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/30">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-2xl text-blue-950 dark:text-white tracking-wide">
                {t('companyFull')}
              </span>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md">
              {t('heroSubtitle')}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-blue-950 dark:text-white text-base tracking-wide border-b border-blue-200 dark:border-blue-800 pb-2 inline-block">
              {lang === 'ar' ? 'روابط سريعة' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setCurrentTab('services')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left cursor-pointer">
                  {t('navServices')}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('courses')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left cursor-pointer">
                  {t('navCourses')}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('projects')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left cursor-pointer">
                  {t('navProjects')}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('internships')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left cursor-pointer">
                  {t('navInternships')}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentTab('blog')} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left cursor-pointer">
                  {t('navBlog')}
                </button>
              </li>
            </ul>
          </div>

          {/* Regional Offices */}
          <div className="space-y-3">
            <h4 className="font-bold text-blue-950 dark:text-white text-base tracking-wide border-b border-blue-200 dark:border-blue-800 pb-2 inline-block">
              {lang === 'ar' ? 'مقراتنا الإقليمية' : 'Global Hubs'}
            </h4>
            <div className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
              <div>
                <p className="font-semibold text-blue-700 dark:text-blue-300 text-xs mb-1">{t('officeRiyadhTitle')}</p>
                <p className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{t('officeRiyadhAddr')}</span>
                </p>
              </div>
              <div>
                <p className="font-semibold text-blue-700 dark:text-blue-300 text-xs mb-1">{t('officeDubaiTitle')}</p>
                <p className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{t('officeDubaiAddr')}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Tech Dispatch / Newsletter */}
          <div className="space-y-3">
            <h4 className="font-bold text-blue-950 dark:text-white text-base tracking-wide border-b border-blue-200 dark:border-blue-800 pb-2 inline-block">
              {lang === 'ar' ? 'النشرة البرمجية' : 'Tech Dispatch'}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {lang === 'ar'
                ? 'اشترك في نشرتنا البرمجية الأسبوعية للحصول على أحدث التحليلات والدروس.'
                : 'Subscribe to our weekly engineering dispatch for code architecture & AI updates.'}
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex items-center gap-1 bg-blue-50/80 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 rounded-lg p-1 focus-within:border-blue-500">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={lang === 'ar' ? 'بريدك الإلكتروني...' : 'Enter your email...'}
                  required
                  className="bg-transparent text-xs text-slate-900 dark:text-white px-2 py-1.5 outline-none w-full placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shrink-0 shadow-sm"
                >
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {lang === 'ar' ? 'تم الاشتراك بنجاح!' : 'Subscribed successfully!'}
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} {t('companyFull')}. {lang === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={openSEOModal}
              className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>{t('seoInspectorBtn')}</span>
            </button>
            <span>•</span>
            <button
              onClick={toggleLang}
              className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>
            <span>•</span>
            <button
              onClick={() => setCurrentTab('admin')}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer font-mono"
            >
              {t('navAdmin')}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
