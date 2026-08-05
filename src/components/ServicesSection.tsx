import React from 'react';
import { 
  Code, BrainCircuit, ShieldCheck, Smartphone, 
  Cloud, Palette, CheckCircle2, ArrowRight, FileText 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useData } from '../context/DataContext';
import { Service } from '../types';

interface ServicesSectionProps {
  openQuoteModal: (prefillServiceCategory?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ openQuoteModal }) => {
  const { t, lang, isRTL } = useLanguage();
  const { services } = useData();

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'BrainCircuit': return <BrainCircuit className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'Palette': return <Palette className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      default: return <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="services-section" className="py-20 bg-blue-50/40 dark:bg-[#07132b] text-slate-900 dark:text-slate-100 border-b border-blue-100 dark:border-blue-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-700 dark:text-blue-300 uppercase bg-blue-100 dark:bg-blue-900/60 px-3.5 py-1 rounded-full border border-blue-200 dark:border-blue-700">
            {t('servicesBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 dark:text-white">
            {t('servicesHeading')}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {t('servicesSubtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const title = lang === 'ar' ? service.titleAr : service.titleEn;
            const desc = lang === 'ar' ? service.descriptionAr : service.descriptionEn;
            const features = lang === 'ar' ? service.featuresAr : service.featuresEn;

            return (
              <div
                key={service.id}
                className="sleek-card p-7 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/60 border border-blue-200 dark:border-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {renderIcon(service.iconName)}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 uppercase">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {desc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-6 border-t border-blue-100 dark:border-blue-900/60 pt-4">
                    {features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote Button CTA */}
                <button
                  id={`service-quote-${service.id}-btn`}
                  onClick={() => openQuoteModal(title)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-blue-50 dark:bg-blue-900/40 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{t('requestQuote')}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom Solution Banner */}
        <div className="mt-16 sleek-card p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {lang === 'ar' ? 'هل تحتاج إلى نظام برمجي مخصص أو استشارة معمارية؟' : 'Need a Bespoke Enterprise System Architecture?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-2xl">
              {lang === 'ar'
                ? 'فريق مهندسي سيفرديفز مستعد لتحليل متطلباتك وتصميم البنية التحتية المناسبة لمنظومتك.'
                : 'Our solutions architects will audit your current workflow, design high-scale backends, and provide a fixed-price proposal.'}
            </p>
          </div>

          <button
            id="services-consult-cta"
            onClick={() => openQuoteModal('Bespoke Architecture')}
            className="px-6 py-3 rounded-xl font-bold text-xs sleek-glow-btn shrink-0 cursor-pointer"
          >
            {t('requestQuote')}
          </button>
        </div>

      </div>
    </section>
  );
};
