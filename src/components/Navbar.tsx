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
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#0a0c10]/85 dark:bg-[#0a0c10]/85 light:bg-white/90 border-b border-blue-500/20 dark:border-blue-500/20 light:border-slate-200 text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors duration-300 shadow-xl shadow-blue-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          id="brand-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-200 ring-1 ring-blue-400/40">
            <Cpu className="w-6 h-6 animate-pulse text-cyan-200" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white bg-gradient-to-r from-white via-slate-100 to-blue-300 dark:from-white dark:via-slate-100 dark:to-blue-300 light:from-slate-900 light:to-blue-600 bg-clip-text">
                {t('brandName')}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 font-mono font-bold tracking-wider">
                TECH
              </span>
            </div>
            <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium tracking-tight">
              {t('brandTagline')}
            </p>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 rounded-xl bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
          {navItems.map((item) => {
            const active = currentTab === item.tab;
            return (
              <button
                key={item.tab}
                id={`nav-${item.tab}-btn`}
                onClick={() => handleNavClick(item.tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  active 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 border border-blue-400/30' 
                    : 'text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 light:hover:bg-slate-200/60'
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
            className="p-2 rounded-lg text-slate-300 hover:text-cyan-300 hover:bg-slate-800/80 border border-slate-700/60 transition-colors cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* AI Assistant shortcut */}
          <button
            id="ai-assistant-header-btn"
            onClick={openAIModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 transition-all cursor-pointer shadow-sm shadow-cyan-500/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span>{t('aiAssistantBtn')}</span>
          </button>

          {/* Language Switcher */}
          <button
            id="lang-toggle-btn"
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === 'en' ? 'العربية (AR)' : 'English (EN)'}</span>
          </button>

          {/* Dark/Light Switcher */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-300 hover:text-yellow-300 hover:bg-slate-800 border border-slate-700/60 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
          </button>

          {/* Admin Portal Button */}
          <button
            id="admin-portal-header-btn"
            onClick={() => handleNavClick('admin')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all ${
              currentTab === 'admin'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                : 'bg-slate-800 text-slate-300 hover:text-amber-300 hover:bg-slate-700 border border-slate-700'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5 text-amber-400" />
            <span>{t('navAdmin')}</span>
          </button>

          {/* CTA Quote */}
          <button
            id="request-quote-header-btn"
            onClick={openQuoteModal}
            className="px-4 py-2 rounded-lg text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-md shadow-cyan-500/25 transition-all cursor-pointer transform active:scale-95"
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
        <div className="lg:hidden border-t border-slate-800 bg-slate-900 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.tab}
              id={`mobile-nav-${item.tab}-btn`}
              onClick={() => handleNavClick(item.tab)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                currentTab === item.tab 
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span>{t(item.labelKey)}</span>
            </button>
          ))}

          <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
            <button
              id="mobile-admin-btn"
              onClick={() => handleNavClick('admin')}
              className="px-3 py-2.5 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center gap-1.5"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>{t('navAdmin')}</span>
            </button>
            <button
              id="mobile-ai-btn"
              onClick={() => { openAIModal(); setMobileMenuOpen(false); }}
              className="px-3 py-2.5 rounded-lg text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t('aiAssistantBtn')}</span>
            </button>
          </div>

          <button
            id="mobile-quote-btn"
            onClick={() => { openQuoteModal(); setMobileMenuOpen(false); }}
            className="w-full mt-2 py-3 rounded-lg text-sm font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md text-center"
          >
            {t('requestQuote')}
          </button>
        </div>
      )}
    </header>
  );
};
