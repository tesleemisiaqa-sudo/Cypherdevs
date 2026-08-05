import React, { useState, useEffect } from 'react';
import { X, Briefcase, Upload, CheckCircle2, Send, Github, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useData } from '../context/DataContext';

interface InternshipModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledTrack?: string;
}

export const InternshipModal: React.FC<InternshipModalProps> = ({
  isOpen,
  onClose,
  prefilledTrack = 'Frontend'
}) => {
  const { t, lang } = useLanguage();
  const { addInternshipApp } = useData();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [track, setTrack] = useState<'Frontend' | 'Backend & Cloud' | 'AI & Data Science' | 'UI/UX Design' | 'Cybersecurity'>('Frontend');
  const [experienceLevel, setExperienceLevel] = useState<'Student' | 'Recent Graduate' | 'Self-Taught' | 'Career Switcher'>('Recent Graduate');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [whyCypherDevs, setWhyCypherDevs] = useState('');
  const [cvFileName, setCvFileName] = useState('My_Resume.pdf');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledTrack && ['Frontend', 'Backend & Cloud', 'AI & Data Science', 'UI/UX Design', 'Cybersecurity'].includes(prefilledTrack)) {
      setTrack(prefilledTrack as any);
    }
  }, [prefilledTrack]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName && email && whyCypherDevs) {
      addInternshipApp({
        fullName,
        email,
        phone,
        track,
        experienceLevel,
        portfolioUrl,
        githubUrl,
        whyCypherDevs,
        cvFileName
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="sleek-card rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-slate-100">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-lg cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t('applyInternship')}</h3>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              {lang === 'ar' ? 'التحق ببرنامج سيفرديفز للتدريب المدفوع واكتسب خبرة حقيقية' : 'Join CypherDevs paid internship program & gain real engineering experience'}
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">{lang === 'ar' ? 'تم تقديم طلب التدريب بنجاح!' : 'Application Submitted!'}</h4>
            <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 max-w-md mx-auto">
              {lang === 'ar' ? 'سوف يقوم فريق الاستقطاب بفحص سيرتك الذاتية والتواصل معك لإجراء المقابلة التقييمية.' : 'Our engineering hiring committee will review your application and contact you for the screening round.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">{t('fullName')} *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Faisal Al-Harbi"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">{t('emailAddress')} *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="applicant@university.edu"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">{t('phoneNo')}</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+966 50 111 2222"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">Internship Track *</label>
                <select
                  value={track}
                  onChange={(e) => setTrack(e.target.value as any)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-500"
                >
                  <option value="Frontend">Frontend Engineering</option>
                  <option value="Backend & Cloud">Backend & Cloud Microservices</option>
                  <option value="AI & Data Science">AI & Machine Learning</option>
                  <option value="UI/UX Design">UI/UX Product Design</option>
                  <option value="Cybersecurity">Cybersecurity Operations</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">Experience Level</label>
                <select
                  value={experienceLevel}
                  onChange={(e) => setExperienceLevel(e.target.value as any)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-500"
                >
                  <option value="Recent Graduate">Recent Graduate</option>
                  <option value="Student">Current Student</option>
                  <option value="Self-Taught">Self-Taught Developer</option>
                  <option value="Career Switcher">Career Switcher</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">GitHub / Code Link</label>
                <input
                  type="url"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/username"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">Portfolio / Resume Link</label>
              <input
                type="url"
                value={portfolioUrl}
                onChange={(e) => setPortfolioUrl(e.target.value)}
                placeholder="https://my-portfolio.dev"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">Why CypherDevs? *</label>
              <textarea
                required
                rows={3}
                value={whyCypherDevs}
                onChange={(e) => setWhyCypherDevs(e.target.value)}
                placeholder={lang === 'ar' ? 'اكتب باختصار عن شغفك وتطلعاتك للانضمام إلى سيفرديفز...' : 'Briefly share why you want to intern at CypherDevs...'}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-500 resize-none"
              />
            </div>

            {/* CV Attachment Simulation */}
            <div className="p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-dashed border-slate-800 dark:border-slate-800 light:border-slate-300 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Upload className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300 dark:text-slate-300 light:text-slate-700 font-mono text-[11px]">{cvFileName}</span>
              </div>
              <span className="text-[10px] text-blue-400 font-semibold cursor-pointer hover:underline">
                {lang === 'ar' ? 'تغيير الملف' : 'Change PDF'}
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-xs sleek-glow-btn text-white transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{t('submit')}</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
