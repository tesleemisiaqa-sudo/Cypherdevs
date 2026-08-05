import React from 'react';
import { 
  Sparkles, ArrowRight, ShieldCheck, Cpu, Code2, 
  Terminal, Server, Users, Award, CheckCircle 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { NavTab } from '../types';

interface HeroProps {
  setCurrentTab: (tab: NavTab) => void;
  openQuoteModal: () => void;
  openAIModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  setCurrentTab,
  openQuoteModal,
  openAIModal
}) => {
  const { t, lang, isRTL } = useLanguage();

  const techBadgeList = [
    'React 19', 'TypeScript', 'Node.js', 'Go (Golang)', 'Python', 
    'PyTorch', 'Gemini 2.5', 'Kubernetes', 'Flutter', 'PostgreSQL'
  ];

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#07132b] text-slate-900 dark:text-slate-100 pt-16 pb-20 lg:pt-24 lg:pb-32 border-b border-blue-100 dark:border-blue-900/40">
      
      {/* Background Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/60 via-white to-white dark:from-blue-950/50 dark:via-[#07132b] dark:to-[#07132b] pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#2563eb 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Floating Ambient Glowing Balls */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Announcement Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/60 border border-blue-200 dark:border-blue-700 text-xs text-blue-700 dark:text-blue-300 font-medium shadow-md shadow-blue-500/10 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="font-semibold">{lang === 'ar' ? 'دفعة سبتمبر 2026 للأكاديمية مفتوحة الآن' : 'September 2026 Bootcamp Cohort Now Open'}</span>
            <button 
              onClick={() => setCurrentTab('courses')}
              className="ml-1 text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline cursor-pointer flex items-center gap-0.5"
            >
              <span>{lang === 'ar' ? 'سجل الآن' : 'Apply'}</span>
              <ArrowRight className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
            <span className="block text-slate-900 dark:text-white">{t('heroTitlePrefix')}</span>
            <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 dark:from-blue-400 dark:via-blue-300 dark:to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
              {t('heroTitleHighlight')}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            {t('heroSubtitle')}
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            <button
              id="hero-quote-cta"
              onClick={openQuoteModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sleek-glow-btn flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/20"
            >
              <Cpu className="w-5 h-5" />
              <span>{t('requestQuote')}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            <button
              id="hero-courses-cta"
              onClick={() => setCurrentTab('courses')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-white dark:bg-blue-950/60 text-blue-900 dark:text-blue-100 border border-blue-200 dark:border-blue-800 hover:border-blue-500 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm"
            >
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>{t('viewAllCourses')}</span>
            </button>

            <button
              id="hero-ai-consult-cta"
              onClick={openAIModal}
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-bold text-sm bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm"
            >
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>{t('aiAssistantBtn')}</span>
            </button>

          </div>

          {/* Tech Marquee Chips */}
          <div className="pt-6">
            <p className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold mb-3">
              {lang === 'ar' ? 'التقنيات ونظاقات العمل المعتمدة' : 'ENTERPRISE TECH STACK & ARCHITECTURES'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
              {techBadgeList.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-blue-50/70 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Live Key Performance Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          <div className="sleek-card p-5 text-center">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-blue-50 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-700 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Server className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-blue-900 dark:text-white font-mono">150+</div>
            <div className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1">{t('heroStatClients')}</div>
          </div>

          <div className="sleek-card p-5 text-center">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-blue-50 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-700 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-blue-900 dark:text-white font-mono">2,500+</div>
            <div className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1">{t('heroStatGraduates')}</div>
          </div>

          <div className="sleek-card p-5 text-center">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-blue-50 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-700 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-blue-900 dark:text-white font-mono">99.4%</div>
            <div className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1">{t('heroStatSatisfaction')}</div>
          </div>

          <div className="sleek-card p-5 text-center">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-blue-50 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-700 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-blue-900 dark:text-white font-mono">300+</div>
            <div className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1">{t('heroStatProjects')}</div>
          </div>

        </div>

      </div>
    </section>
  );
};
