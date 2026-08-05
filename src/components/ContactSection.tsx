import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, 
  CheckCircle2, Building, MessageSquare, Globe 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useData } from '../context/DataContext';

export const ContactSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const { addEnquiry } = useData();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: 'General' as const,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      addEnquiry(formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: 'General',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact-section" className="py-20 bg-[#0a0c10] dark:bg-[#0a0c10] light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 border-b border-blue-500/20 dark:border-blue-500/20 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 dark:text-blue-400 light:text-blue-600 uppercase bg-blue-500/10 px-3.5 py-1 rounded-full border border-blue-500/30 flex items-center gap-1.5 w-max mx-auto">
            <Mail className="w-3.5 h-3.5" />
            <span>{t('contactBadge')}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {t('contactHeading')}
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Office Contact Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Riyadh Office Card */}
            <div className="sleek-card p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">{t('officeRiyadhTitle')}</h4>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">{t('officeRiyadhAddr')}</p>
                </div>
              </div>
              
              {/* Simulated Map Visual Badge */}
              <div className="h-28 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative text-center space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-blue-500/40 text-[11px] font-mono text-blue-400 dark:text-blue-300 light:text-blue-700">
                    <MapPin className="w-3 h-3 text-blue-400 animate-bounce" />
                    <span>24.7136° N, 46.6753° E (Riyadh Tech)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dubai Office Card */}
            <div className="sleek-card p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">{t('officeDubaiTitle')}</h4>
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">{t('officeDubaiAddr')}</p>
                </div>
              </div>

              <div className="h-28 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative text-center space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-blue-500/40 text-[11px] font-mono text-blue-400 dark:text-blue-300 light:text-blue-700">
                    <MapPin className="w-3 h-3 text-blue-400 animate-bounce" />
                    <span>25.1221° N, 55.3789° E (Dubai Silicon)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="sleek-card p-6 space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>contact@cypherdevs.com</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>+966 11 400 9900 / +971 4 500 8800</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{t('officeHoursVal')}</span>
              </div>
            </div>

          </div>

          {/* Contact Form (7 Cols) */}
          <div className="lg:col-span-7 sleek-card p-8 relative">
            
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-400" />
              <span>{lang === 'ar' ? 'إرسال استفسار مباشر' : 'Send an Inquiry'}</span>
            </h3>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 dark:bg-emerald-950/80 light:bg-emerald-50 border border-emerald-500/50 text-emerald-300 dark:text-emerald-300 light:text-emerald-800 text-xs flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{t('successMsg')}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">
                    {t('fullName')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tariq Al-Subaie"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">
                    {t('emailAddress')} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">
                    {t('phoneNo')}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+966 50 000 0000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">
                    {lang === 'ar' ? 'فئة الاستفسار' : 'Inquiry Category'}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="General">{lang === 'ar' ? 'عام' : 'General'}</option>
                    <option value="Enterprise Development">{lang === 'ar' ? 'تطوير برمجيات مؤسسية' : 'Enterprise Software'}</option>
                    <option value="Training & Academies">{lang === 'ar' ? 'التدريب والمعسكرات' : 'Training & Academies'}</option>
                    <option value="Partnerships">{lang === 'ar' ? 'الشراكات' : 'Partnerships'}</option>
                    <option value="Careers">{lang === 'ar' ? 'التدريب والتوظيف' : 'Careers & Internships'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">
                  {lang === 'ar' ? 'الموضوع' : 'Subject'}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={lang === 'ar' ? 'عنوان الرسالة...' : 'Summary of your inquiry...'}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">
                  {t('messageDetails')} *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={lang === 'ar' ? 'اكتب استفسارك بالتفصيل...' : 'Please describe your request...'}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                id="submit-contact-form-btn"
                className="w-full sleek-glow-btn text-white font-bold text-xs py-3.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{t('submit')}</span>
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
