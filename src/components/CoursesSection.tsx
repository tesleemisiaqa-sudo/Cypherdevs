import React, { useState } from 'react';
import { 
  GraduationCap, Clock, Signal, Calendar, Star, 
  Users, CheckCircle2, ArrowRight, BookOpen, DollarSign 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useData } from '../context/DataContext';
import { Course } from '../types';

interface CoursesSectionProps {
  openRegisterModal: (course: Course) => void;
  openSyllabusModal: (course: Course) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  openRegisterModal,
  openSyllabusModal
}) => {
  const { t, lang, isRTL } = useLanguage();
  const { courses } = useData();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t('filterAll') },
    { id: 'web', label: t('filterWeb') },
    { id: 'cybersecurity', label: t('filterCyber') },
    { id: 'ai', label: t('filterAi') },
    { id: 'mobile', label: t('filterMobile') },
    { id: 'cloud', label: t('filterCloud') },
  ];

  const filteredCourses = activeCategory === 'all'
    ? courses.filter(c => c.active)
    : courses.filter(c => c.active && c.category === activeCategory);

  return (
    <section id="courses-section" className="py-20 bg-[#0a0c10] dark:bg-[#0a0c10] light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 border-b border-blue-500/20 dark:border-blue-500/20 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 dark:text-blue-400 light:text-blue-600 uppercase bg-blue-500/10 px-3.5 py-1 rounded-full border border-blue-500/30 flex items-center gap-1.5 w-max mx-auto">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t('coursesBadge')}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {t('coursesHeading')}
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('coursesSubtitle')}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`course-filter-${cat.id}-btn`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 border border-blue-400/40'
                  : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-200/80 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-slate-800 dark:border-slate-800 light:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const title = lang === 'ar' ? course.titleAr : course.titleEn;
            const desc = lang === 'ar' ? course.descriptionAr : course.descriptionEn;
            const level = lang === 'ar' ? course.levelAr : course.level;
            const schedule = lang === 'ar' ? course.scheduleAr : course.scheduleEn;
            const features = lang === 'ar' ? course.featuresAr : course.featuresEn;

            return (
              <div
                key={course.id}
                className="sleek-card overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Image Cover */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                    <img
                      src={course.image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent dark:from-[#0a0c10]" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-slate-900/90 dark:bg-slate-900/90 light:bg-white/90 border border-blue-500/40 text-blue-300 dark:text-blue-300 light:text-blue-700 backdrop-blur-md">
                        {course.category}
                      </span>
                      <div className="flex items-center gap-1 bg-slate-900/90 dark:bg-slate-900/90 light:bg-white/90 border border-amber-500/40 text-amber-300 text-xs px-2 py-0.5 rounded-md backdrop-blur-md font-bold">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span>{course.rating}</span>
                        <span className="text-[10px] text-slate-400">({course.reviewsCount})</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors leading-snug">
                      {title}
                    </h3>

                    <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed line-clamp-2">
                      {desc}
                    </p>

                    {/* Meta Specs */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 pt-2 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Signal className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{level}</span>
                      </div>
                      <div className="col-span-2 flex items-center gap-1.5 text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600">
                        <Calendar className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span className="truncate">{schedule}</span>
                      </div>
                    </div>

                    {/* Features checklist highlights */}
                    <div className="space-y-1.5 pt-2">
                      {features.slice(0, 2).map((feat, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Pricing & Registration CTA */}
                <div className="p-6 pt-0 space-y-3">
                  <div className="flex items-center justify-between border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 pt-4">
                    <div>
                      <span className="text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase block font-medium">{t('priceLabel')}</span>
                      <span className="text-xl font-extrabold text-slate-900 dark:text-white font-mono">
                        ${course.price} <span className="text-xs font-normal text-slate-400 dark:text-slate-400 light:text-slate-500">{course.currency}</span>
                      </span>
                    </div>

                    <button
                      id={`syllabus-${course.id}-btn`}
                      onClick={() => openSyllabusModal(course)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-blue-400 dark:text-blue-300 light:text-blue-700 bg-slate-900/70 dark:bg-slate-900/70 light:bg-slate-100 hover:bg-slate-800 border border-slate-700 dark:border-slate-700 light:border-slate-300 cursor-pointer"
                    >
                      {lang === 'ar' ? 'المنهج التفصيلي' : 'Syllabus'}
                    </button>
                  </div>

                  <button
                    id={`register-course-${course.id}-btn`}
                    onClick={() => openRegisterModal(course)}
                    className="w-full py-3 rounded-xl font-bold text-xs sleek-glow-btn flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t('registerCourse')}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
