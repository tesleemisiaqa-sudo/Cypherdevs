import React from 'react';
import { X, GraduationCap, CheckCircle2, Calendar, Clock, BookOpen, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { Course } from '../types';

interface SyllabusModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  openRegisterModal: (course: Course) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  course,
  isOpen,
  onClose,
  openRegisterModal
}) => {
  const { t, lang, isRTL } = useLanguage();

  if (!isOpen || !course) return null;

  const title = lang === 'ar' ? course.titleAr : course.titleEn;
  const desc = lang === 'ar' ? course.descriptionAr : course.descriptionEn;
  const syllabus = lang === 'ar' ? course.syllabusAr : course.syllabusEn;
  const features = lang === 'ar' ? course.featuresAr : course.featuresEn;
  const schedule = lang === 'ar' ? course.scheduleAr : course.scheduleEn;

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
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">{course.duration} • {schedule}</p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 pb-4">
          {desc}
        </p>

        {/* Syllabus Timeline */}
        <div className="space-y-3">
          <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span>{t('syllabusLabel')}</span>
          </h4>

          <div className="space-y-2">
            {syllabus.map((week, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 text-xs text-slate-200 dark:text-slate-200 light:text-slate-700 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 font-mono font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{week}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features Checklist */}
        <div className="space-y-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 pt-4">
          <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider font-mono">{t('keyFeaturesLabel')}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {features.map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex items-center gap-3">
          <button
            onClick={() => {
              onClose();
              openRegisterModal(course);
            }}
            className="w-full py-3 rounded-xl font-bold text-xs sleek-glow-btn text-white shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{t('registerCourse')} (${course.price} USD)</span>
            <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
          </button>
        </div>

      </div>
    </div>
  );
};
