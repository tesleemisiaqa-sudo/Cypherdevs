import React from 'react';
import { 
  ShieldCheck, Cpu, Brain, Users, Award, 
  Target, Eye, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t, lang, isRTL } = useLanguage();

  const leadershipTeam = [
    {
      name: lang === 'ar' ? 'م. طارق المنصور' : 'Eng. Tariq Al-Mansoor',
      role: lang === 'ar' ? 'الرئيس التنفيذي للتكنولوجيا (CTO)' : 'Chief Technology Officer (CTO)',
      bio: lang === 'ar' ? 'خبير معمارية نظم سحابية يمتلك 15 عاماً من الخبرة في بناء الأنظمة الموزعة عالية الأداء.' : 'Cloud architect with 15+ years of experience designing high-scale distributed systems.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: lang === 'ar' ? 'د. سارة الحسن' : 'Dr. Sarah Al-Hassan',
      role: lang === 'ar' ? 'رئيسة أبحاث الأمن السيبراني' : 'Head of Cybersecurity Research',
      bio: lang === 'ar' ? 'مختصة باختبارات الاختراق والامتثال المعياري وتدقيق أمان التطبيقات والمؤسسات.' : 'Cybersecurity strategist specializing in vulnerability auditing and Zero-Trust architecture.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: lang === 'ar' ? 'م. فيصل العتيبي' : 'Eng. Faisal Al-Otaibi',
      role: lang === 'ar' ? 'قائد الذكاء الاصطناعي وتعلّم الآلة' : 'Lead AI & Machine Learning Architect',
      bio: lang === 'ar' ? 'باحث بالتعلم العميق ومحركات الذكاء الاصطناعي التوليدي ونماذج اللغات الضخمة RAG.' : 'Deep learning researcher focused on Generative AI agentic workflows and RAG architectures.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section id="about-section" className="py-20 bg-[#0a0c10] dark:bg-[#0a0c10] light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 border-b border-blue-500/20 dark:border-blue-500/20 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 dark:text-blue-400 light:text-blue-600 uppercase bg-blue-500/10 px-3.5 py-1 rounded-full border border-blue-500/30">
            {t('aboutBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {t('aboutHeading')}
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('aboutParagraph1')}
          </p>
        </div>

        {/* Mission & Vision Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div className="sleek-card p-8">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{t('missionTitle')}</h3>
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              {t('missionDesc')}
            </p>
          </div>

          <div className="sleek-card p-8">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{t('visionTitle')}</h3>
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed">
              {t('visionDesc')}
            </p>
          </div>

        </div>

        {/* Core Values Grid */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 text-center flex items-center justify-center gap-2">
            <span className="w-8 h-0.5 bg-blue-500"></span>
            <span>{lang === 'ar' ? 'قيمنا الجوهرية' : 'Our Engineering Core Values'}</span>
            <span className="w-8 h-0.5 bg-blue-500"></span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="sleek-card p-6">
              <Cpu className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">{t('value1Title')}</h4>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">{t('value1Desc')}</p>
            </div>

            <div className="sleek-card p-6">
              <ShieldCheck className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">{t('value2Title')}</h4>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">{t('value2Desc')}</p>
            </div>

            <div className="sleek-card p-6">
              <Brain className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">{t('value3Title')}</h4>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">{t('value3Desc')}</p>
            </div>

            <div className="sleek-card p-6">
              <Users className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">{t('value4Title')}</h4>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">{t('value4Desc')}</p>
            </div>

          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {lang === 'ar' ? 'القادة والخبراء الموجهون' : 'Leadership & Mentorship Team'}
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              {lang === 'ar' ? 'مهندسون ومستشارون يقودون ابتكارات سيفرديفز ومعسكراتها' : 'Engineers and researchers leading CypherDevs products and academies'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, i) => (
              <div 
                key={i} 
                className="sleek-card p-6 text-center group"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-500/40 group-hover:scale-105 transition-transform shadow-lg shadow-blue-500/10">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-lg">{leader.name}</h4>
                <p className="text-xs font-semibold text-blue-400 mb-3">{leader.role}</p>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
