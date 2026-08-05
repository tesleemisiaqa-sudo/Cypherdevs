import React from 'react';
import { X, FolderGit2, Building2, TrendingUp, Code2, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, isOpen, onClose }) => {
  const { lang } = useLanguage();

  if (!isOpen || !project) return null;

  const title = lang === 'ar' ? project.titleAr : project.titleEn;
  const desc = lang === 'ar' ? project.descriptionAr : project.descriptionEn;
  const fullCaseStudy = lang === 'ar' ? project.fullCaseStudyAr : project.fullCaseStudyEn;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="sleek-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-slate-100 p-6 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-lg cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase">
          <FolderGit2 className="w-4 h-4" />
          <span>Case Study • {project.category}</span>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">{title}</h2>
          <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
            <Building2 className="w-4 h-4 text-blue-400" />
            <span>Client: <strong className="text-slate-200 dark:text-slate-200 light:text-slate-800">{project.client}</strong></span>
          </div>
        </div>

        <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 dark:border-slate-800 light:border-slate-200">
          <img src={project.image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-3 gap-3 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 p-4 rounded-xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
          {project.metrics.map((metric, i) => (
            <div key={i} className="text-center">
              <div className="text-lg font-extrabold text-blue-400 font-mono">{metric.value}</div>
              <div className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600">{lang === 'ar' ? metric.labelAr : metric.labelEn}</div>
            </div>
          ))}
        </div>

        {/* Summary & Deep Dive */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 pt-4">
          <h3 className="font-bold text-slate-900 dark:text-white text-base">Engineering Overview</h3>
          <p>{desc}</p>
          
          {fullCaseStudy && (
            <div className="p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 space-y-2">
              <h4 className="font-semibold text-blue-400 dark:text-blue-400 light:text-blue-600 text-xs">Solution Architecture Detail</h4>
              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">{fullCaseStudy}</p>
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div className="space-y-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 pt-4">
          <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider font-mono">Tech Stack & Infrastructure</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(tech => (
              <span key={tech} className="px-3 py-1 rounded bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-blue-400 dark:text-blue-400 light:text-blue-600 font-mono text-xs border border-slate-800 dark:border-slate-800 light:border-slate-200">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl font-bold text-xs bg-slate-800 dark:bg-slate-800 light:bg-slate-200 hover:bg-slate-700 text-white dark:text-white light:text-slate-900 cursor-pointer"
        >
          Close Case Study
        </button>

      </div>
    </div>
  );
};
