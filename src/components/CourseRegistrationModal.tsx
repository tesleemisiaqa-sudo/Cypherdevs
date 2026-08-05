import React, { useState } from 'react';
import { X, GraduationCap, CheckCircle2, Copy, Check, Calendar, CreditCard } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useData } from '../context/DataContext';
import { Course } from '../types';

interface CourseRegistrationModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CourseRegistrationModal: React.FC<CourseRegistrationModalProps> = ({
  course,
  isOpen,
  onClose
}) => {
  const { t, lang } = useLanguage();
  const { addRegistration } = useData();

  const [studentName, setStudentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cohortDate, setCohortDate] = useState('September 2026 Cohort');
  const [paymentMode, setPaymentMode] = useState<'Card' | 'Bank Transfer' | 'Installments'>('Card');
  const [assignedCode, setAssignedCode] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen || !course) return null;

  const title = lang === 'ar' ? course.titleAr : course.titleEn;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentName && email) {
      const code = addRegistration({
        studentName,
        email,
        phone,
        courseId: course.id,
        courseTitle: title,
        cohortDate,
        paymentMode
      });
      setAssignedCode(code);
    }
  };

  const handleCopyCode = () => {
    if (assignedCode) {
      navigator.clipboard.writeText(assignedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDone = () => {
    setAssignedCode('');
    setStudentName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="sleek-card rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-slate-100">
        
        <button
          onClick={handleDone}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-lg cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t('registerCourse')}</h3>
            <p className="text-xs text-blue-400 font-semibold">{title}</p>
          </div>
        </div>

        {assignedCode ? (
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">{t('registrationSuccessTitle')}</h4>
              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 max-w-sm mx-auto">
                {lang === 'ar' ? 'احتفظ برمز التسجيل أدناه للاستفادة من مقعدك والدخول لمنصة التدريب:' : 'Save your registration code below to access your student portal:'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 border border-blue-500/50 flex items-center justify-between max-w-sm mx-auto">
              <div>
                <span className="text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-600 block font-mono">REGISTRATION TICKET CODE</span>
                <span className="text-xl font-extrabold text-blue-400 font-mono tracking-widest">{assignedCode}</span>
              </div>
              <button
                onClick={handleCopyCode}
                className="p-2 rounded-lg bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200 hover:bg-slate-800 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-blue-400 border border-slate-700 dark:border-slate-700 light:border-slate-300 cursor-pointer"
              >
                {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>

            <button
              onClick={handleDone}
              className="w-full py-3 rounded-xl font-bold text-xs sleek-glow-btn text-white shadow-md cursor-pointer"
            >
              {t('close')}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 p-3 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-300 flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-400 dark:text-slate-400 light:text-slate-600 block text-[10px]">PROGRAM TUITION</span>
                <span className="font-extrabold text-slate-900 dark:text-white text-base font-mono">${course.price} USD</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-blue-950/80 dark:bg-blue-950/80 light:bg-blue-100 text-blue-300 dark:text-blue-300 light:text-blue-800 font-mono text-[11px]">
                {course.duration}
              </span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">{t('fullName')} *</label>
              <input
                type="text"
                required
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="e.g. Abdullah Al-Farsi"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">{t('emailAddress')} *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@gmail.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">{t('phoneNo')}</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+966 50 999 8888"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">Select Cohort Batch</label>
                <select
                  value={cohortDate}
                  onChange={(e) => setCohortDate(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-500"
                >
                  <option value="September 2026 Cohort">September 2026 Cohort</option>
                  <option value="October 2026 Cohort">October 2026 Cohort</option>
                  <option value="November 2026 Cohort">November 2026 Cohort</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1">Payment Method</label>
                <select
                  value={paymentMode}
                  onChange={(e) => setPaymentMode(e.target.value as any)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-xs text-slate-900 dark:text-white outline-none focus:border-blue-500"
                >
                  <option value="Card">Credit / Debit Card</option>
                  <option value="Bank Transfer">Direct Bank Transfer</option>
                  <option value="Installments">3 Monthly Installments</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-xs sleek-glow-btn text-white transition-all cursor-pointer"
            >
              {t('submit')}
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
