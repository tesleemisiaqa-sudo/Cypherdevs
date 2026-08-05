import React, { useState } from 'react';
import { 
  Terminal, Globe, Sun, Moon, Search, ShieldCheck, 
  Menu, X, Sparkles, LayoutDashboard, Cpu 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { NavTab } from '../types';

interface NavbarProps {
  currentTab: NavTab;
  setCurrentTab: (tab: NavTab) => void;
  openSEOModal: () => void;
  openAIModal: () => void;
  openQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  openSEOModal,
  openAIModal,
  openQuoteModal
}) => {
  const { lang, toggleLang, t, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { tab: NavTab; labelKey: keyof typeof import('../i18n/translations').translations.en }[] = [
    { tab: 'home', labelKey: 'navHome' },
    { tab: 'services', labelKey: 'navServices' },
    { tab: 'courses', labelKey: 'navCourses' },
    { tab: 'projects', labelKey: 'navProjects' },
    { tab: 'internships', labelKey: 'navInternships' },
    { tab: 'blog', labelKey: 'navBlog' },
    { tab: 'about', labelKey: 'navAbout' },
    { tab: 'contact', labelKey: 'navContact' },
  ];

  const handleNavClick = (tab: NavTab) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/95 dark:bg-[#07132b]/95 border-b border-blue-100 dark:border-blue-900/50 text-slate-900 dark:text-slate-100 transition-colors duration-300 shadow-md shadow-blue-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          id="brand-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:bg-blue-700 transition-all duration-200 ring-2 ring-blue-400/30">
            <Cpu className="w-6 h-6 animate-pulse text-blue-100" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 dark:from-white dark:via-blue-100 dark:to-blue-300 bg-clip-text text-transparent">
                {t('brandName')}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 font-mono font-bold tracking-wider">
                TECH
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium tracking-tight">
              {t('brandTagline')}
            </p>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 rounded-xl bg-blue-50/80 dark:bg-[#0e2148] border border-blue-100 dark:border-blue-800/60">
          {navItems.map((item) => {
            const active = currentTab === item.tab;
            return (
              <button
                key={item.tab}
                id={`nav-${item.tab}-btn`}
                onClick={() => handleNavClick(item.tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  active 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 border border-blue-500' 
                    : 'text-slate-600 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white hover:bg-white dark:hover:bg-blue-900/60'
                }`}
              >
                {t(item.labelKey)}
              </button>
            );
          })}
        </nav>

        {/* Right Utility Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* SEO Inspector */}
          <button
            id="seo-modal-trigger-btn"
            onClick={openSEOModal}
            title={t('seoInspectorBtn')}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/50 border border-blue-100 dark:border-blue-800/60 transition-colors cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* AI Assistant shortcut */}
          <button
            id="ai-assistant-header-btn"
            onClick={openAIModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all cursor-pointer shadow-sm shadow-blue-500/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span>{t('aiAssistantBtn')}</span>
          </button>

          {/* Language Switcher */}
          <button
            id="lang-toggle-btn"
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 bg-blue-50/60 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900 border border-blue-200 dark:border-blue-800 transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{lang === 'en' ? 'العربية (AR)' : 'English (EN)'}</span>
          </button>

          {/* Dark/Light Switcher */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/50 border border-blue-200 dark:border-blue-800 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
          </button>

          {/* Admin Portal Button */}
          <button
            id="admin-portal-header-btn"
            onClick={() => handleNavClick('admin')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all ${
              currentTab === 'admin'
                ? 'bg-blue-100 dark:bg-blue-900/80 text-blue-800 dark:text-blue-200 border border-blue-300 dark:border-blue-700'
                : 'bg-blue-50/50 dark:bg-blue-950/40 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-blue-100 dark:hover:bg-blue-900 border border-blue-200 dark:border-blue-800'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{t('navAdmin')}</span>
          </button>

          {/* CTA Quote */}
          <button
            id="request-quote-header-btn"
            onClick={openQuoteModal}
            className="px-4 py-2 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/30 transition-all cursor-pointer transform active:scale-95"
          >
            {t('requestQuote')}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            id="mobile-lang-btn"
            onClick={toggleLang}
            className="p-2 text-xs font-bold text-cyan-400 bg-slate-800 border border-slate-700 rounded-lg"
          >
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800 border border-slate-700 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-blue-100 dark:border-blue-900 bg-white dark:bg-[#07132b] px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.tab}
              id={`mobile-nav-${item.tab}-btn`}
              onClick={() => handleNavClick(item.tab)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                currentTab === item.tab 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                  : 'text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/50'
              }`}
            >
              <span>{t(item.labelKey)}</span>
            </button>
          ))}

          <div className="pt-3 border-t border-blue-100 dark:border-blue-900 grid grid-cols-2 gap-2">
            <button
              id="mobile-admin-btn"
              onClick={() => handleNavClick('admin')}
              className="px-3 py-2.5 rounded-lg text-xs font-bold bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 flex items-center justify-center gap-1.5"
            >
              <LayoutDashboard className="w-4 h-4 text-blue-600" />
              <span>{t('navAdmin')}</span>
            </button>
            <button
              id="mobile-ai-btn"
              onClick={() => { openAIModal(); setMobileMenuOpen(false); }}
              className="px-3 py-2.5 rounded-lg text-xs font-bold bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>{t('aiAssistantBtn')}</span>
            </button>
          </div>

          <button
            id="mobile-quote-btn"
            onClick={() => { openQuoteModal(); setMobileMenuOpen(false); }}
            className="w-full mt-2 py-3 rounded-lg text-sm font-bold bg-blue-600 text-white shadow-md shadow-blue-600/30 text-center"
          >
            {t('requestQuote')}
          </button>
        </div>
      )}
    </header>
  );
};
