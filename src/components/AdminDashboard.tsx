import React, { useState } from 'react';
import { 
  LayoutDashboard, BookOpen, FolderGit2, FileText, Users, 
  Plus, Trash2, Edit, Download, CheckCircle2, Lock, Key, 
  Search, ShieldCheck, Mail, GraduationCap, Briefcase, Eye, ChevronRight 
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useData } from '../context/DataContext';
import { Course, Project, BlogPost, Enquiry, CourseRegistration, ServiceQuote, InternshipApplication } from '../types';

export const AdminDashboard: React.FC = () => {
  const { t, lang, isRTL } = useLanguage();
  const { 
    courses, projects, blogs, enquiries, registrations, quotes, internships,
    addCourse, updateCourse, deleteCourse,
    addProject, updateProject, deleteProject,
    addBlog, updateBlog, deleteBlog,
    updateEnquiryStatus, updateRegistrationStatus, updateQuoteStatus, updateInternshipStatus
  } = useData();

  // Admin Auth State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('cypherdevs_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);

  // Active Admin Sub-Tab
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'projects' | 'blogs' | 'submissions'>('overview');
  const [submissionSubTab, setSubmissionSubTab] = useState<'enquiries' | 'registrations' | 'quotes' | 'internships'>('enquiries');

  // Modals state
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);

  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);

  // Course Form Fields
  const [courseForm, setCourseForm] = useState({
    titleEn: '', titleAr: '', category: 'web' as const,
    duration: '10 Weeks', level: 'Intermediate' as const, levelAr: 'متوسط',
    price: 1499, currency: 'USD', rating: 4.9, reviewsCount: 50,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    scheduleEn: 'Sundays & Tuesdays', scheduleAr: 'الأحد والثلاثاء',
    syllabusEn: 'Week 1: Foundations\nWeek 2: Advanced APIs',
    syllabusAr: 'الأسبوع 1: الأساسيات\nالأسبوع 2: الواجهات المتقدمة',
    featuresEn: 'Live Labs, Mentorship', featuresAr: 'مختبرات حية، توجيه مباشر',
    active: true
  });

  // Project Form Fields
  const [projectForm, setProjectForm] = useState({
    titleEn: '', titleAr: '', category: 'fintech' as const, client: 'Enterprise Client',
    descriptionEn: '', descriptionAr: '', techStackStr: 'React, Node, Go',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    metricsValue: '99.99%', metricsLabelEn: 'Uptime', metricsLabelAr: 'استقرار النظام'
  });

  // Blog Form Fields
  const [blogForm, setBlogForm] = useState({
    titleEn: '', titleAr: '', category: 'Architecture' as const,
    excerptEn: '', excerptAr: '', contentEn: '', contentAr: '',
    author: 'CypherDevs Lead', authorRole: 'Software Architect',
    date: 'August 2026', readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&w=800&q=80',
    tagsStr: 'Architecture, Go, Cloud'
  });

  // Auth Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'admin123' || passcode === 'admin') {
      setIsAuthenticated(true);
      localStorage.setItem('cypherdevs_admin_auth', 'true');
      setPasscodeError(false);
    } else {
      setPasscodeError(true);
    }
  };

  const handleQuickUnlock = () => {
    setIsAuthenticated(true);
    localStorage.setItem('cypherdevs_admin_auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('cypherdevs_admin_auth');
  };

  // Export CSV Handler
  const exportSubmissionsCSV = () => {
    let csvData = 'Type,ID,Name,Email,Phone,SubjectOrCourse,Status,Date\n';
    
    enquiries.forEach(e => {
      csvData += `Enquiry,"${e.id}","${e.name}","${e.email}","${e.phone}","${e.subject}","${e.status}","${e.createdAt}"\n`;
    });
    registrations.forEach(r => {
      csvData += `Registration,"${r.registrationCode}","${r.studentName}","${r.email}","${r.phone}","${r.courseTitle}","${r.status}","${r.createdAt}"\n`;
    });
    quotes.forEach(q => {
      csvData += `Service Quote,"${q.id}","${q.clientName}","${q.email}","${q.phone}","${q.serviceCategory}","${q.status}","${q.createdAt}"\n`;
    });
    internships.forEach(i => {
      csvData += `Internship,"${i.id}","${i.fullName}","${i.email}","${i.phone}","${i.track} Track","${i.status}","${i.createdAt}"\n`;
    });

    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `CypherDevs_Submissions_Report_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Course Save Handler
  const handleSaveCourse = (e: React.FormEvent) => {
    e.preventDefault();
    const syllabusEnArr = courseForm.syllabusEn.split('\n').filter(Boolean);
    const syllabusArArr = courseForm.syllabusAr.split('\n').filter(Boolean);
    const featuresEnArr = courseForm.featuresEn.split(',').map(s => s.trim());
    const featuresArArr = courseForm.featuresAr.split(',').map(s => s.trim());

    if (editingCourse) {
      updateCourse(editingCourse.id, {
        ...courseForm,
        syllabusEn: syllabusEnArr,
        syllabusAr: syllabusArArr,
        featuresEn: featuresEnArr,
        featuresAr: featuresArArr
      });
    } else {
      addCourse({
        ...courseForm,
        syllabusEn: syllabusEnArr,
        syllabusAr: syllabusArArr,
        featuresEn: featuresEnArr,
        featuresAr: featuresArArr
      });
    }

    setIsCourseModalOpen(false);
    setEditingCourse(null);
  };

  // Project Save Handler
  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    const techStack = projectForm.techStackStr.split(',').map(s => s.trim());
    const metrics = [{
      labelEn: projectForm.metricsLabelEn,
      labelAr: projectForm.metricsLabelAr,
      value: projectForm.metricsValue
    }];

    if (editingProject) {
      updateProject(editingProject.id, {
        titleEn: projectForm.titleEn,
        titleAr: projectForm.titleAr,
        category: projectForm.category,
        client: projectForm.client,
        descriptionEn: projectForm.descriptionEn,
        descriptionAr: projectForm.descriptionAr,
        techStack,
        image: projectForm.image,
        metrics
      });
    } else {
      addProject({
        titleEn: projectForm.titleEn,
        titleAr: projectForm.titleAr,
        category: projectForm.category,
        client: projectForm.client,
        descriptionEn: projectForm.descriptionEn,
        descriptionAr: projectForm.descriptionAr,
        techStack,
        image: projectForm.image,
        metrics
      });
    }

    setIsProjectModalOpen(false);
    setEditingProject(null);
  };

  // Blog Save Handler
  const handleSaveBlog = (e: React.FormEvent) => {
    e.preventDefault();
    const tags = blogForm.tagsStr.split(',').map(s => s.trim());

    if (editingBlog) {
      updateBlog(editingBlog.id, { ...blogForm, tags });
    } else {
      addBlog({ ...blogForm, tags });
    }

    setIsBlogModalOpen(false);
    setEditingBlog(null);
  };

  if (!isAuthenticated) {
    return (
      <section className="py-24 bg-[#0a0c10] dark:bg-[#0a0c10] light:bg-slate-50 text-slate-100 flex items-center justify-center min-h-[70vh]">
        <div className="sleek-card rounded-2xl p-8 max-w-md w-full shadow-2xl text-center space-y-6">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
            <Lock className="w-7 h-7" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t('loginTitle')}</h2>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">{t('loginSubtitle')}</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder={t('enterPasscode')}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-center text-slate-900 dark:text-white outline-none focus:border-blue-500 font-mono tracking-widest"
              />
              {passcodeError && (
                <p className="text-xs text-rose-400 mt-2 font-semibold">{t('invalidPasscode')}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-xs sleek-glow-btn text-white shadow-md cursor-pointer transition-colors"
            >
              {t('loginBtn')}
            </button>
          </form>

          <div className="pt-2 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-300">
            <button
              onClick={handleQuickUnlock}
              className="text-xs text-blue-400 hover:underline font-bold cursor-pointer"
            >
              ⚡ {t('quickDemoLogin')}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-[#0a0c10] dark:bg-[#0a0c10] light:bg-slate-50 text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Dashboard Top Title Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sleek-card rounded-2xl p-6 shadow-xl">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-wide">{t('adminHeading')}</h1>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1">{t('adminSubheading')}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={exportSubmissionsCSV}
              className="px-4 py-2.5 rounded-xl font-bold text-xs bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{t('exportCsv')}</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-3.5 py-2.5 rounded-xl font-semibold text-xs bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200 hover:bg-rose-950 hover:text-rose-300 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-300 cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-300 pb-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'overview' ? 'sleek-glow-btn text-white' : 'sleek-card text-slate-300 dark:text-slate-300 light:text-slate-700'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>{t('tabOverview')}</span>
          </button>

          <button
            onClick={() => setActiveTab('courses')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'courses' ? 'sleek-glow-btn text-white' : 'sleek-card text-slate-300 dark:text-slate-300 light:text-slate-700'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>{t('tabManageCourses')} ({courses.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'projects' ? 'sleek-glow-btn text-white' : 'sleek-card text-slate-300 dark:text-slate-300 light:text-slate-700'
            }`}
          >
            <FolderGit2 className="w-4 h-4" />
            <span>{t('tabManageProjects')} ({projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('blogs')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'blogs' ? 'sleek-glow-btn text-white' : 'sleek-card text-slate-300 dark:text-slate-300 light:text-slate-700'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{t('tabManageBlogs')} ({blogs.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('submissions')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'submissions' ? 'sleek-glow-btn text-white' : 'sleek-card text-slate-300 dark:text-slate-300 light:text-slate-700'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>{t('tabSubmissions')} ({enquiries.length + registrations.length + quotes.length + internships.length})</span>
          </button>
        </div>

        {/* TAB 1: OVERVIEW & STATS */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="sleek-card p-5 rounded-2xl">
                <span className="text-xs font-medium text-slate-400 dark:text-slate-400 light:text-slate-600">Total Inquiries</span>
                <div className="text-3xl font-extrabold text-blue-400 font-mono mt-2">{enquiries.length}</div>
              </div>

              <div className="sleek-card p-5 rounded-2xl">
                <span className="text-xs font-medium text-slate-400 dark:text-slate-400 light:text-slate-600">Bootcamp Registrations</span>
                <div className="text-3xl font-extrabold text-emerald-400 font-mono mt-2">{registrations.length}</div>
              </div>

              <div className="sleek-card p-5 rounded-2xl">
                <span className="text-xs font-medium text-slate-400 dark:text-slate-400 light:text-slate-600">Service Proposals</span>
                <div className="text-3xl font-extrabold text-amber-400 font-mono mt-2">{quotes.length}</div>
              </div>

              <div className="sleek-card p-5 rounded-2xl">
                <span className="text-xs font-medium text-slate-400 dark:text-slate-400 light:text-slate-600">Internship Apps</span>
                <div className="text-3xl font-extrabold text-indigo-400 font-mono mt-2">{internships.length}</div>
              </div>
            </div>

            <div className="sleek-card rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">Recent Activity Log</h3>
              <div className="space-y-3">
                {registrations.slice(0, 3).map((r) => (
                  <div key={r.id} className="p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">{r.studentName}</span> registered for <span className="text-blue-400">{r.courseTitle}</span>
                    </div>
                    <span className="text-slate-500 font-mono text-[11px]">{r.createdAt}</span>
                  </div>
                ))}
                {quotes.slice(0, 3).map((q) => (
                  <div key={q.id} className="p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 text-xs flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-white">{q.clientName}</span> requested proposal for <span className="text-amber-400">{q.serviceCategory}</span>
                    </div>
                    <span className="text-slate-500 font-mono text-[11px]">{q.createdAt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: COURSES MANAGEMENT */}
        {activeTab === 'courses' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Active Academies & Bootcamps</h3>
              <button
                onClick={() => {
                  setEditingCourse(null);
                  setIsCourseModalOpen(true);
                }}
                className="px-4 py-2 rounded-xl font-bold text-xs sleek-glow-btn text-white flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>{t('addNew')} Course</span>
              </button>
            </div>

            <div className="sleek-card rounded-2xl overflow-hidden">
              <table className="w-full text-left text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                <thead className="bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-200 text-slate-400 dark:text-slate-400 light:text-slate-600 font-mono uppercase text-[10px]">
                  <tr>
                    <th className="p-4">Title</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Level</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 dark:divide-slate-800/80 light:divide-slate-200">
                  {courses.map((c) => (
                    <tr key={c.id} className="hover:bg-slate-800/40 dark:hover:bg-slate-800/40 light:hover:bg-slate-100">
                      <td className="p-4 font-semibold text-slate-900 dark:text-white">{c.titleEn}</td>
                      <td className="p-4 uppercase font-mono text-blue-400 text-[11px]">{c.category}</td>
                      <td className="p-4">{c.level}</td>
                      <td className="p-4 font-mono font-bold text-emerald-400">${c.price}</td>
                      <td className="p-4 flex items-center gap-2">
                        <button
                          onClick={() => {
                            setEditingCourse(c);
                            setCourseForm({
                              titleEn: c.titleEn,
                              titleAr: c.titleAr,
                              category: c.category,
                              duration: c.duration,
                              level: c.level,
                              levelAr: c.levelAr,
                              price: c.price,
                              currency: c.currency,
                              rating: c.rating,
                              reviewsCount: c.reviewsCount,
                              image: c.image,
                              scheduleEn: c.scheduleEn,
                              scheduleAr: c.scheduleAr,
                              syllabusEn: c.syllabusEn.join('\n'),
                              syllabusAr: c.syllabusAr.join('\n'),
                              featuresEn: c.featuresEn.join(', '),
                              featuresAr: c.featuresAr.join(', '),
                              active: c.active
                            });
                            setIsCourseModalOpen(true);
                          }}
                          className="p-1.5 rounded bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 hover:bg-slate-700 text-blue-400 cursor-pointer"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => deleteCourse(c.id)}
                          className="p-1.5 rounded bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 hover:bg-rose-950 text-rose-400 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: PROJECTS MANAGEMENT */}
        {activeTab === 'projects' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Portfolio Case Studies</h3>
              <button
                onClick={() => {
                  setEditingProject(null);
                  setIsProjectModalOpen(true);
                }}
                className="px-4 py-2 rounded-xl font-bold text-xs bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>{t('addNew')} Project</span>
              </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 font-mono uppercase text-[10px]">
                  <tr>
                    <th className="p-4">Project Title</th>
                    <th className="p-4">Client</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {projects.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-800/50">
                      <td className="p-4 font-semibold text-white">{p.titleEn}</td>
                      <td className="p-4 text-slate-400">{p.client}</td>
                      <td className="p-4 uppercase font-mono text-cyan-400 text-[11px]">{p.category}</td>
                      <td className="p-4 flex items-center gap-2">
                        <button
                          onClick={() => {
                            setEditingProject(p);
                            setProjectForm({
                              titleEn: p.titleEn,
                              titleAr: p.titleAr,
                              category: p.category,
                              client: p.client,
                              descriptionEn: p.descriptionEn,
                              descriptionAr: p.descriptionAr,
                              techStackStr: p.techStack.join(', '),
                              image: p.image,
                              metricsValue: p.metrics[0]?.value || '',
                              metricsLabelEn: p.metrics[0]?.labelEn || '',
                              metricsLabelAr: p.metrics[0]?.labelAr || ''
                            });
                            setIsProjectModalOpen(true);
                          }}
                          className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 cursor-pointer"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => deleteProject(p.id)}
                          className="p-1.5 rounded bg-slate-800 hover:bg-rose-950 text-rose-400 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: BLOGS MANAGEMENT */}
        {activeTab === 'blogs' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Tech Insights Articles</h3>
              <button
                onClick={() => {
                  setEditingBlog(null);
                  setIsBlogModalOpen(true);
                }}
                className="px-4 py-2 rounded-xl font-bold text-xs bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>{t('addNew')} Article</span>
              </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 font-mono uppercase text-[10px]">
                  <tr>
                    <th className="p-4">Article Title</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Author</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {blogs.map((b) => (
                    <tr key={b.id} className="hover:bg-slate-800/50">
                      <td className="p-4 font-semibold text-white">{b.titleEn}</td>
                      <td className="p-4 uppercase font-mono text-cyan-400 text-[11px]">{b.category}</td>
                      <td className="p-4 text-slate-400">{b.author}</td>
                      <td className="p-4 flex items-center gap-2">
                        <button
                          onClick={() => {
                            setEditingBlog(b);
                            setBlogForm({
                              titleEn: b.titleEn,
                              titleAr: b.titleAr,
                              category: b.category,
                              excerptEn: b.excerptEn,
                              excerptAr: b.excerptAr,
                              contentEn: b.contentEn,
                              contentAr: b.contentAr,
                              author: b.author,
                              authorRole: b.authorRole,
                              date: b.date,
                              readTime: b.readTime,
                              image: b.image,
                              tagsStr: b.tags.join(', ')
                            });
                            setIsBlogModalOpen(true);
                          }}
                          className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 cursor-pointer"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => deleteBlog(b.id)}
                          className="p-1.5 rounded bg-slate-800 hover:bg-rose-950 text-rose-400 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 5: SUBMISSIONS MANAGEMENT */}
        {activeTab === 'submissions' && (
          <div className="space-y-6 animate-fadeIn">
            
            <div className="flex gap-2 border-b border-slate-800 pb-2">
              <button
                onClick={() => setSubmissionSubTab('enquiries')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${submissionSubTab === 'enquiries' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400'}`}
              >
                Inquiries ({enquiries.length})
              </button>
              <button
                onClick={() => setSubmissionSubTab('registrations')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${submissionSubTab === 'registrations' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400'}`}
              >
                Registrations ({registrations.length})
              </button>
              <button
                onClick={() => setSubmissionSubTab('quotes')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${submissionSubTab === 'quotes' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400'}`}
              >
                Service Quotes ({quotes.length})
              </button>
              <button
                onClick={() => setSubmissionSubTab('internships')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${submissionSubTab === 'internships' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400'}`}
              >
                Internships ({internships.length})
              </button>
            </div>

            {submissionSubTab === 'enquiries' && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 font-mono uppercase text-[10px]">
                    <tr>
                      <th className="p-4">Name</th>
                      <th className="p-4">Email</th>
                      <th className="p-4">Category</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {enquiries.map(e => (
                      <tr key={e.id} className="hover:bg-slate-800/50">
                        <td className="p-4 font-semibold text-white">{e.name}</td>
                        <td className="p-4">{e.email}</td>
                        <td className="p-4 font-mono text-cyan-400">{e.category}</td>
                        <td className="p-4 font-bold text-amber-300">{e.status}</td>
                        <td className="p-4">
                          <select
                            value={e.status}
                            onChange={(evt) => updateEnquiryStatus(e.id, evt.target.value as any)}
                            className="bg-slate-950 text-xs text-white p-1 rounded border border-slate-800"
                          >
                            <option value="Unread">Unread</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Resolved">Resolved</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {submissionSubTab === 'registrations' && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 font-mono uppercase text-[10px]">
                    <tr>
                      <th className="p-4">Code</th>
                      <th className="p-4">Student</th>
                      <th className="p-4">Course</th>
                      <th className="p-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {registrations.map(r => (
                      <tr key={r.id} className="hover:bg-slate-800/50">
                        <td className="p-4 font-mono text-cyan-400 font-bold">{r.registrationCode}</td>
                        <td className="p-4 font-semibold text-white">{r.studentName}</td>
                        <td className="p-4">{r.courseTitle}</td>
                        <td className="p-4">
                          <select
                            value={r.status}
                            onChange={(evt) => updateRegistrationStatus(r.id, evt.target.value as any)}
                            className="bg-slate-950 text-xs text-white p-1 rounded border border-slate-800"
                          >
                            <option value="Pending">Pending</option>
                            <option value="Confirmed">Confirmed</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {submissionSubTab === 'quotes' && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 font-mono uppercase text-[10px]">
                    <tr>
                      <th className="p-4">Client</th>
                      <th className="p-4">Service</th>
                      <th className="p-4">Budget</th>
                      <th className="p-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {quotes.map(q => (
                      <tr key={q.id} className="hover:bg-slate-800/50">
                        <td className="p-4 font-semibold text-white">{q.clientName} ({q.companyName})</td>
                        <td className="p-4 font-mono text-cyan-400">{q.serviceCategory}</td>
                        <td className="p-4 text-emerald-400 font-mono">{q.projectBudget}</td>
                        <td className="p-4">
                          <select
                            value={q.status}
                            onChange={(evt) => updateQuoteStatus(q.id, evt.target.value as any)}
                            className="bg-slate-950 text-xs text-white p-1 rounded border border-slate-800"
                          >
                            <option value="New">New</option>
                            <option value="Under Review">Under Review</option>
                            <option value="Proposal Sent">Proposal Sent</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {submissionSubTab === 'internships' && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 font-mono uppercase text-[10px]">
                    <tr>
                      <th className="p-4">Applicant</th>
                      <th className="p-4">Track</th>
                      <th className="p-4">Level</th>
                      <th className="p-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {internships.map(i => (
                      <tr key={i.id} className="hover:bg-slate-800/50">
                        <td className="p-4 font-semibold text-white">{i.fullName}</td>
                        <td className="p-4 font-mono text-cyan-400">{i.track}</td>
                        <td className="p-4">{i.experienceLevel}</td>
                        <td className="p-4">
                          <select
                            value={i.status}
                            onChange={(evt) => updateInternshipStatus(i.id, evt.target.value as any)}
                            className="bg-slate-950 text-xs text-white p-1 rounded border border-slate-800"
                          >
                            <option value="Received">Received</option>
                            <option value="Screening">Screening</option>
                            <option value="Interview Scheduled">Interview Scheduled</option>
                            <option value="Accepted">Accepted</option>
                            <option value="Rejected">Rejected</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

          </div>
        )}

      </div>

      {/* Course Create/Edit Modal */}
      {isCourseModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl max-w-xl w-full p-6 text-slate-100 max-h-[90vh] overflow-y-auto space-y-4">
            <h3 className="text-lg font-bold text-white">{editingCourse ? 'Edit Course' : 'Add New Course'}</h3>
            <form onSubmit={handleSaveCourse} className="space-y-3 text-xs">
              <input
                type="text"
                required
                placeholder="Title (English)"
                value={courseForm.titleEn}
                onChange={e => setCourseForm({ ...courseForm, titleEn: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800"
              />
              <input
                type="text"
                required
                placeholder="Title (Arabic)"
                value={courseForm.titleAr}
                onChange={e => setCourseForm({ ...courseForm, titleAr: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  required
                  placeholder="Price (USD)"
                  value={courseForm.price}
                  onChange={e => setCourseForm({ ...courseForm, price: Number(e.target.value) })}
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800"
                />
                <input
                  type="text"
                  placeholder="Duration (e.g. 10 Weeks)"
                  value={courseForm.duration}
                  onChange={e => setCourseForm({ ...courseForm, duration: e.target.value })}
                  className="p-2.5 rounded-xl bg-slate-950 border border-slate-800"
                />
              </div>
              <textarea
                rows={3}
                placeholder="Syllabus English (One per line)"
                value={courseForm.syllabusEn}
                onChange={e => setCourseForm({ ...courseForm, syllabusEn: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800"
              />
              <textarea
                rows={3}
                placeholder="Syllabus Arabic (One per line)"
                value={courseForm.syllabusAr}
                onChange={e => setCourseForm({ ...courseForm, syllabusAr: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800"
              />
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCourseModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold"
                >
                  Save Course
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Project Create/Edit Modal */}
      {isProjectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl max-w-xl w-full p-6 text-slate-100 max-h-[90vh] overflow-y-auto space-y-4">
            <h3 className="text-lg font-bold text-white">{editingProject ? 'Edit Project' : 'Add New Project'}</h3>
            <form onSubmit={handleSaveProject} className="space-y-3 text-xs">
              <input
                type="text"
                required
                placeholder="Title (English)"
                value={projectForm.titleEn}
                onChange={e => setProjectForm({ ...projectForm, titleEn: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800"
              />
              <input
                type="text"
                required
                placeholder="Client Name"
                value={projectForm.client}
                onChange={e => setProjectForm({ ...projectForm, client: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800"
              />
              <textarea
                rows={2}
                placeholder="Description (English)"
                value={projectForm.descriptionEn}
                onChange={e => setProjectForm({ ...projectForm, descriptionEn: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800"
              />
              <input
                type="text"
                placeholder="Tech Stack (Comma separated)"
                value={projectForm.techStackStr}
                onChange={e => setProjectForm({ ...projectForm, techStackStr: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800"
              />
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsProjectModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Blog Create/Edit Modal */}
      {isBlogModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl max-w-xl w-full p-6 text-slate-100 max-h-[90vh] overflow-y-auto space-y-4">
            <h3 className="text-lg font-bold text-white">{editingBlog ? 'Edit Article' : 'Add New Article'}</h3>
            <form onSubmit={handleSaveBlog} className="space-y-3 text-xs">
              <input
                type="text"
                required
                placeholder="Title (English)"
                value={blogForm.titleEn}
                onChange={e => setBlogForm({ ...blogForm, titleEn: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800"
              />
              <textarea
                rows={2}
                placeholder="Excerpt (English)"
                value={blogForm.excerptEn}
                onChange={e => setBlogForm({ ...blogForm, excerptEn: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800"
              />
              <textarea
                rows={4}
                placeholder="Full Article Content (Markdown / Text)"
                value={blogForm.contentEn}
                onChange={e => setBlogForm({ ...blogForm, contentEn: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800"
              />
              <input
                type="text"
                placeholder="Author Name"
                value={blogForm.author}
                onChange={e => setBlogForm({ ...blogForm, author: e.target.value })}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800"
              />
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsBlogModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold"
                >
                  Save Article
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
