import React from 'react';
import { 
  Briefcase, Rocket, Users, Award, CheckCircle2, 
  ArrowRight, Code, Terminal, Brain, Shield, Palette 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface InternshipsSectionProps {
  openInternshipModal: (track?: string) => void;
}

export const InternshipsSection: React.FC<InternshipsSectionProps> = ({ openInternshipModal }) => {
  const { t, lang, isRTL } = useLanguage();

  const tracks = [
    {
      id: 'Frontend',
      titleEn: 'Frontend & Web Engineering Track',
      titleAr: 'مسار هندسة وتطوير الويب (Frontend)',
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      descEn: 'Master React 19, Next.js, TypeScript, state management, and web accessibility with production code reviews.',
      descAr: 'احتراف React 19 و TypeScript و Next.js وإدارة الحالة وتطوير واجهات المستخدم الإنتاجية.'
    },
    {
      id: 'Backend & Cloud',
      titleEn: 'Backend & Cloud Microservices Track',
      titleAr: 'مسار الخدمات المصغرة والحوسبة السحابية (Backend)',
      icon: <Terminal className="w-5 h-5 text-cyan-400" />,
      descEn: 'Build resilient backends using Node.js, Go, PostgreSQL, Redis, Docker, and Kubernetes deployment.',
      descAr: 'بناء سيرفرات عالية الأداء باستعمال Node.js و Go و PostgreSQL و Docker والنشر السحابي.'
    },
    {
      id: 'AI & Data Science',
      titleEn: 'AI Engineering & LLM Systems Track',
      titleAr: 'مسار الذكاء الاصطناعي ونماذج اللغات (AI & Data)',
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      descEn: 'Engineer custom RAG search pipelines, vector embeddings, fine-tuning, and Gemini AI agentic tools.',
      descAr: 'بناء قواعد المعرفة الذكية (RAG) وتطبيق نماذج Gemini وإعداد وكلاء الذكاء الاصطناعي.'
    },
    {
      id: 'UI/UX Design',
      titleEn: 'UI/UX & Product Architecture Track',
      titleAr: 'مسار تصميم الواجهات وأنظمة المنتجات (UI/UX)',
      icon: <Palette className="w-5 h-5 text-cyan-400" />,
      descEn: 'Design scalable Figma UI systems, conduct user research, wireframing, and interactive prototyping.',
      descAr: 'تصميم أنظمة واجهات مستخدم متكاملة على Figma وإجراء أبحاث سلوك المستفيدين.'
    },
    {
      id: 'Cybersecurity',
      titleEn: 'Cybersecurity Defensive Ops Track',
      titleAr: 'مسار العمليات والأمن السيبراني (Cybersecurity)',
      icon: <Shield className="w-5 h-5 text-cyan-400" />,
      descEn: 'Learn vulnerability auditing, SAST/DAST code analysis, SOC monitoring, and security hardening.',
      descAr: 'تعلم تقييم الثغرات، وتدقيق الكود البرمجي، ومراقبة مراكز العمليات السيبرانية.'
    }
  ];

  return (
    <section id="internships-section" className="py-20 bg-[#0a0c10] dark:bg-[#0a0c10] light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 border-b border-blue-500/20 dark:border-blue-500/20 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 dark:text-blue-400 light:text-blue-600 uppercase bg-blue-500/10 px-3.5 py-1 rounded-full border border-blue-500/30 flex items-center gap-1.5 w-max mx-auto">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t('internshipsBadge')}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {t('internshipsHeading')}
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('internshipsSubtitle')}
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="sleek-card p-6">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{t('internshipPerk1Title')}</h3>
            <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">{t('internshipPerk1Desc')}</p>
          </div>

          <div className="sleek-card p-6">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{t('internshipPerk2Title')}</h3>
            <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">{t('internshipPerk2Desc')}</p>
          </div>

          <div className="sleek-card p-6">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{t('internshipPerk3Title')}</h3>
            <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">{t('internshipPerk3Desc')}</p>
          </div>

        </div>

        {/* Tracks List */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            {t('tracksHeading')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track) => {
              const title = lang === 'ar' ? track.titleAr : track.titleEn;
              const desc = lang === 'ar' ? track.descAr : track.descEn;

              return (
                <div
                  key={track.id}
                  className="sleek-card p-6 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-4">
                      {track.icon}
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2 group-hover:text-blue-400 transition-colors">
                      {title}
                    </h4>
                    <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-4">
                      {desc}
                    </p>
                  </div>

                  <button
                    id={`apply-track-${track.id}-btn`}
                    onClick={() => openInternshipModal(track.id)}
                    className="w-full py-2.5 rounded-xl font-bold text-xs bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white light:hover:bg-blue-600 light:hover:text-white text-blue-400 dark:text-blue-300 light:text-slate-800 border border-blue-500/30 dark:border-blue-500/30 light:border-slate-300 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>{t('applyInternship')}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
