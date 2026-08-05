import React, { useState } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CoursesSection } from './components/CoursesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { InternshipsSection } from './components/InternshipsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { AdminDashboard } from './components/AdminDashboard';

import { QuoteModal } from './components/QuoteModal';
import { CourseRegistrationModal } from './components/CourseRegistrationModal';
import { SyllabusModal } from './components/SyllabusModal';
import { InternshipModal } from './components/InternshipModal';
import { BlogReaderModal } from './components/BlogReaderModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { SEOInspectorModal } from './components/SEOInspectorModal';
import { AICypherAssistant } from './components/AICypherAssistant';

import { Sparkles, Search, MessageSquare, ShieldCheck } from 'lucide-react';
import { Course, Project, BlogPost } from './types';

const AppContent: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('home');

  // Modal States
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [prefillQuoteCategory, setPrefillQuoteCategory] = useState('');

  const [registrationCourse, setRegistrationCourse] = useState<Course | null>(null);
  const [syllabusCourse, setSyllabusCourse] = useState<Course | null>(null);

  const [internshipModalOpen, setInternshipModalOpen] = useState(false);
  const [prefillTrack, setPrefillTrack] = useState('Frontend');

  const [blogReaderPost, setBlogReaderPost] = useState<BlogPost | null>(null);
  const [caseStudyProject, setCaseStudyProject] = useState<Project | null>(null);

  const [seoModalOpen, setSeoModalOpen] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);

  const handleOpenQuote = (serviceCategory: string = '') => {
    setPrefillQuoteCategory(serviceCategory);
    setQuoteModalOpen(true);
  };

  const handleOpenRegister = (course: Course) => {
    setRegistrationCourse(course);
  };

  const handleOpenSyllabus = (course: Course) => {
    setSyllabusCourse(course);
  };

  const handleOpenInternship = (track: string = 'Frontend') => {
    setPrefillTrack(track);
    setInternshipModalOpen(true);
  };

  const handleOpenBlog = (post: BlogPost) => {
    setBlogReaderPost(post);
  };

  const handleOpenCaseStudy = (project: Project) => {
    setCaseStudyProject(project);
  };

  return (
    <div className="min-h-screen bg-[#0a0c10] dark:bg-[#0a0c10] text-slate-100 dark:text-slate-100 light:bg-slate-50 light:text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
      
      {/* Navigation Header */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        openQuoteModal={handleOpenQuote}
      />

      {/* Dynamic Content View */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <>
            <Hero
              setCurrentTab={setCurrentTab}
              openQuoteModal={handleOpenQuote}
              openAiAssistant={() => setAiModalOpen(true)}
            />
            <ServicesSection openQuoteModal={handleOpenQuote} />
            <CoursesSection
              openRegisterModal={handleOpenRegister}
              openSyllabusModal={handleOpenSyllabus}
            />
            <ProjectsSection openCaseStudyModal={handleOpenCaseStudy} />
            <AboutSection setCurrentTab={setCurrentTab} />
            <InternshipsSection openInternshipModal={handleOpenInternship} />
            <BlogSection openBlogModal={handleOpenBlog} />
            <ContactSection />
          </>
        )}

        {currentTab === 'services' && (
          <ServicesSection openQuoteModal={handleOpenQuote} />
        )}

        {currentTab === 'courses' && (
          <CoursesSection
            openRegisterModal={handleOpenRegister}
            openSyllabusModal={handleOpenSyllabus}
          />
        )}

        {currentTab === 'projects' && (
          <ProjectsSection openCaseStudyModal={handleOpenCaseStudy} />
        )}

        {currentTab === 'internships' && (
          <InternshipsSection openInternshipModal={handleOpenInternship} />
        )}

        {currentTab === 'blog' && (
          <BlogSection openBlogModal={handleOpenBlog} />
        )}

        {currentTab === 'about' && (
          <AboutSection setCurrentTab={setCurrentTab} />
        )}

        {currentTab === 'contact' && (
          <ContactSection />
        )}

        {currentTab === 'admin' && (
          <AdminDashboard />
        )}
      </main>

      {/* Footer */}
      <Footer setCurrentTab={setCurrentTab} />

      {/* FLOATING ACTION BUTTONS */}
      
      {/* Bottom Right: AI Consultant Floating Launcher */}
      <button
        id="floating-ai-assistant-btn"
        onClick={() => setAiModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold shadow-2xl shadow-cyan-500/40 border border-cyan-300 flex items-center gap-2.5 transition-all duration-300 hover:scale-105 cursor-pointer group"
      >
        <Sparkles className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform" />
        <span className="text-xs font-mono tracking-wider font-extrabold hidden sm:inline">CYPHER AI</span>
      </button>

      {/* Bottom Left: SEO Inspector Floating Launcher */}
      <button
        id="floating-seo-inspector-btn"
        onClick={() => setSeoModalOpen(true)}
        className="fixed bottom-6 left-6 z-40 px-3 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 text-cyan-400 text-[11px] font-mono font-bold flex items-center gap-1.5 shadow-xl backdrop-blur-md cursor-pointer transition-all"
      >
        <Search className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">SEO Inspector</span>
      </button>

      {/* MODAL DIALOGS */}
      
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        prefillServiceCategory={prefillQuoteCategory}
      />

      <CourseRegistrationModal
        course={registrationCourse}
        isOpen={!!registrationCourse}
        onClose={() => setRegistrationCourse(null)}
      />

      <SyllabusModal
        course={syllabusCourse}
        isOpen={!!syllabusCourse}
        onClose={() => setSyllabusCourse(null)}
        openRegisterModal={handleOpenRegister}
      />

      <InternshipModal
        isOpen={internshipModalOpen}
        onClose={() => setInternshipModalOpen(false)}
        prefilledTrack={prefillTrack}
      />

      <BlogReaderModal
        post={blogReaderPost}
        isOpen={!!blogReaderPost}
        onClose={() => setBlogReaderPost(null)}
      />

      <CaseStudyModal
        project={caseStudyProject}
        isOpen={!!caseStudyProject}
        onClose={() => setCaseStudyProject(null)}
      />

      <SEOInspectorModal
        isOpen={seoModalOpen}
        onClose={() => setSeoModalOpen(false)}
      />

      <AICypherAssistant
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        openQuoteModal={handleOpenQuote}
      />

    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <DataProvider>
          <AppContent />
        </DataProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
