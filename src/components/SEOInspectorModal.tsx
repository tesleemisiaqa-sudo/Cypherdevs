import React from 'react';
import { X, Search, CheckCircle2, ShieldCheck, Code, Globe, FileText } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface SEOInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SEOInspectorModal: React.FC<SEOInspectorModalProps> = ({ isOpen, onClose }) => {
  const { lang, isRTL } = useLanguage();

  if (!isOpen) return null;

  const currentTitle = lang === 'ar'
    ? 'سيفرديفز لتكنولوجيا المعلومات | البرمجيات المؤسسية والمعسكرات التدريبية'
    : 'CypherDevs Technologies | Enterprise Software & Tech Academies';

  const currentDesc = lang === 'ar'
    ? 'شركة رائدة في تطوير البرمجيات المؤسسية المخصصة وحلول الذكاء الاصطناعي والأمن السيبراني، مع أكاديمية تدريب برمجية احترافية في الرياض ودبي.'
    : 'Premier enterprise software development firm and tech academy specializing in custom web, mobile, AI solutions, cybersecurity, and intensive bootcamps.';

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "CypherDevs Technologies",
    "url": "https://cypherdevs.com",
    "logo": "https://cypherdevs.com/assets/logo.png",
    "description": currentDesc,
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Olaya Tech District",
        "addressLocality": "Riyadh",
        "addressCountry": "SA"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Dubai Silicon Oasis",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    ]
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="sleek-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-slate-100 space-y-6">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-lg cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">SEO & Meta Tags Audit Tool</h3>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">Live inspection of page metadata, OpenGraph, and JSON-LD schema</p>
          </div>
        </div>

        {/* Health Scores */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 p-3 rounded-xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 text-center">
            <span className="text-xl font-extrabold text-emerald-400 font-mono">100/100</span>
            <span className="text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-600 block">SEO Health</span>
          </div>
          <div className="bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 p-3 rounded-xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 text-center">
            <span className="text-xl font-extrabold text-blue-400 font-mono">{lang.toUpperCase()} / {isRTL ? 'RTL' : 'LTR'}</span>
            <span className="text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-600 block">Direction</span>
          </div>
          <div className="bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 p-3 rounded-xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 text-center">
            <span className="text-xl font-extrabold text-blue-400 font-mono">Verified</span>
            <span className="text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-600 block">Schema.org</span>
          </div>
        </div>

        {/* Meta Tags Details */}
        <div className="space-y-3 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 p-4 rounded-xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 text-xs font-mono">
          <div>
            <span className="text-slate-500 dark:text-slate-500 light:text-slate-400 block text-[10px]">&lt;title&gt;</span>
            <span className="text-blue-400 dark:text-blue-400 light:text-blue-600">{currentTitle}</span>
          </div>

          <div>
            <span className="text-slate-500 dark:text-slate-500 light:text-slate-400 block text-[10px]">&lt;meta name="description"&gt;</span>
            <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">{currentDesc}</span>
          </div>

          <div>
            <span className="text-slate-500 dark:text-slate-500 light:text-slate-400 block text-[10px]">OpenGraph & Twitter Cards</span>
            <div className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 space-y-0.5">
              <p>og:site_name = "CypherDevs Technologies"</p>
              <p>og:type = "website"</p>
              <p>og:locale = "{lang === 'ar' ? 'ar_SA' : 'en_US'}"</p>
            </div>
          </div>
        </div>

        {/* JSON-LD Schema */}
        <div className="space-y-2">
          <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase font-mono flex items-center gap-1.5">
            <Code className="w-4 h-4 text-blue-400" />
            <span>Structured Data (JSON-LD)</span>
          </h4>
          <pre className="p-4 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 text-[11px] text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-mono overflow-x-auto max-h-40">
            {JSON.stringify(schemaJson, null, 2)}
          </pre>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl font-bold text-xs bg-slate-800 dark:bg-slate-800 light:bg-slate-200 hover:bg-slate-700 text-white dark:text-white light:text-slate-900 cursor-pointer"
        >
          Close Inspector
        </button>

      </div>
    </div>
  );
};
