import React, { useState, useEffect } from 'react';
import { X, Cpu, Send, CheckCircle2, DollarSign, Clock } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useData } from '../context/DataContext';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillServiceCategory?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  prefillServiceCategory = ''
}) => {
  const { t, lang } = useLanguage();
  const { addQuote } = useData();

  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [serviceCategory, setServiceCategory] = useState('Custom Enterprise Software');
  const [projectBudget, setProjectBudget] = useState('$10,000 - $25,000');
  const [timeline, setTimeline] = useState('1 - 2 Months');
  const [projectDetails, setProjectDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefillServiceCategory) {
      setServiceCategory(prefillServiceCategory);
    }
  }, [prefillServiceCategory]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientName && email && projectDetails) {
      addQuote({
        clientName,
        email,
        phone,
        companyName,
        serviceCategory,
        projectBudget,
        timeline,
        projectDetails
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 dark:bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="sleek-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-slate-900 dark:text-slate-100 bg-white dark:bg-[#07132b] border border-blue-100 dark:border-blue-900/60">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white bg-blue-50 dark:bg-blue-900/40 rounded-lg cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/60 border border-blue-200 dark:border-blue-700 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-950 dark:text-white">{t('requestQuote')}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {lang === 'ar' ? 'قم بتعبير متطلبات نظامك البرمجي للحصول على عرض سعر رسمي' : 'Define your software requirements for an official proposal'}
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/40 border border-emerald-500 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-blue-950 dark:text-white">{lang === 'ar' ? 'تم استلام طلب التقييم بنجاح!' : 'Proposal Request Received!'}</h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
              {lang === 'ar' ? 'سوف يقوم مهندس حلول من سيفرديفز بدراسة متطلباتك وإعداد العرض الفني خلال 24 ساعة.' : 'Our solution architect will audit your technical scope and send a customized proposal within 24 hours.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">{t('fullName')} *</label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Sultan Al-Rashid"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">{t('emailAddress')} *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="client@enterprise.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">{t('phoneNo')}</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+966 50 123 4567"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">{t('companyName')}</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Company / Organization"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Service Category</label>
                <select
                  value={serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-500"
                >
                  <option value="Custom Enterprise Software">Custom Enterprise Software</option>
                  <option value="AI & Machine Learning Integration">AI & ML Solutions</option>
                  <option value="Cybersecurity & Code Auditing">Cybersecurity & Audit</option>
                  <option value="Mobile App Engineering">Mobile App Dev</option>
                  <option value="Cloud Infrastructure & DevOps">Cloud & DevOps</option>
                  <option value="UI/UX & Product Design System">UI/UX Design</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">{t('budgetRange')}</label>
                <select
                  value={projectBudget}
                  onChange={(e) => setProjectBudget(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-500"
                >
                  <option value="< $10,000">Less than $10,000</option>
                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                  <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                  <option value="$50,000+">$50,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">{t('timeline')}</label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-500"
                >
                  <option value="Urgent (< 1 Month)">Urgent (&lt; 1 Month)</option>
                  <option value="1 - 2 Months">1 - 2 Months</option>
                  <option value="3 - 4 Months">3 - 4 Months</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">{t('messageDetails')} *</label>
              <textarea
                required
                rows={4}
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
                placeholder={lang === 'ar' ? 'اشرح بالتفصيل أهداف المشـروع، التقنيات المطلوبة، والأنظمة المراد الربط معها...' : 'Detail your project goals, technical requirements, integrations...'}
                className="w-full px-3.5 py-2.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-700 text-white transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
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
