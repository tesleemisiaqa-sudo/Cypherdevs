import React, { useState } from 'react';
import { 
  FolderGit2, ExternalLink, TrendingUp, Layers, 
  CheckCircle2, ArrowRight, Building2, Code2 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useData } from '../context/DataContext';
import { Project } from '../types';

interface ProjectsSectionProps {
  openCaseStudyModal: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ openCaseStudyModal }) => {
  const { t, lang, isRTL } = useLanguage();
  const { projects } = useData();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: lang === 'ar' ? 'جميع المشاريع' : 'All Projects' },
    { id: 'fintech', label: lang === 'ar' ? 'المدفوعات والمالية' : 'FinTech & Banking' },
    { id: 'healthcare', label: lang === 'ar' ? 'القطاع الطبي' : 'Healthcare AI' },
    { id: 'ecommerce', label: lang === 'ar' ? 'التجارة الإلكترونية' : 'E-Commerce' },
    { id: 'cybersecurity', label: lang === 'ar' ? 'الأمن السيبراني' : 'Cybersecurity' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects-section" className="py-20 bg-[#0a0c10] dark:bg-[#0a0c10] light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 border-b border-blue-500/20 dark:border-blue-500/20 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 dark:text-blue-400 light:text-blue-600 uppercase bg-blue-500/10 px-3.5 py-1 rounded-full border border-blue-500/30 flex items-center gap-1.5 w-max mx-auto">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{t('projectsBadge')}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            {t('projectsHeading')}
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('projectsSubtitle')}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`project-filter-${cat.id}-btn`}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const title = lang === 'ar' ? project.titleAr : project.titleEn;
            const desc = lang === 'ar' ? project.descriptionAr : project.descriptionEn;

            return (
              <div
                key={project.id}
                className="sleek-card overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent dark:from-[#0a0c10]" />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-slate-900/90 dark:bg-slate-900/90 light:bg-white/90 border border-blue-500/40 text-blue-300 dark:text-blue-300 light:text-blue-700 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium bg-slate-900/90 dark:bg-slate-900/90 light:bg-white/90 px-3 py-1.5 rounded-lg border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 backdrop-blur-md">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-blue-400" />
                        <span>{project.client}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors">
                      {title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                      {desc}
                    </p>

                    {/* Tech Stack Chips */}
                    <div className="space-y-1.5 pt-2">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500">
                        {t('techStackLabel')}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-blue-400 dark:text-blue-300 light:text-blue-700 text-[11px] font-mono border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 p-2.5 rounded-lg text-center border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                          <div className="text-sm sm:text-base font-extrabold text-blue-400 font-mono">
                            {metric.value}
                          </div>
                          <div className="text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium truncate">
                            {lang === 'ar' ? metric.labelAr : metric.labelEn}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    id={`case-study-${project.id}-btn`}
                    onClick={() => openCaseStudyModal(project)}
                    className="w-full py-3 rounded-xl font-bold text-xs bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white light:hover:bg-blue-600 light:hover:text-white text-blue-400 dark:text-blue-300 light:text-slate-800 border border-blue-500/30 dark:border-blue-500/30 light:border-slate-300 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>{t('viewCaseStudy')}</span>
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
