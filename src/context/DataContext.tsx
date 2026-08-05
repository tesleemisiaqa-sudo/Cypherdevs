import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Course, Project, BlogPost, Service, ServiceQuote, 
  CourseRegistration, InternshipApplication, Enquiry 
} from '../types';
import { 
  initialServices, initialCourses, initialProjects, initialBlogs, 
  initialEnquiries, initialRegistrations, initialQuotes, initialInternships 
} from '../data/initialData';

interface DataContextType {
  services: Service[];
  courses: Course[];
  projects: Project[];
  blogs: BlogPost[];
  enquiries: Enquiry[];
  registrations: CourseRegistration[];
  quotes: ServiceQuote[];
  internships: InternshipApplication[];

  // Actions for Admin & User Forms
  addCourse: (course: Omit<Course, 'id'>) => void;
  updateCourse: (id: string, updated: Partial<Course>) => void;
  deleteCourse: (id: string) => void;

  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, updated: Partial<Project>) => void;
  deleteProject: (id: string) => void;

  addBlog: (blog: Omit<BlogPost, 'id'>) => void;
  updateBlog: (id: string, updated: Partial<BlogPost>) => void;
  deleteBlog: (id: string) => void;

  addEnquiry: (enquiry: Omit<Enquiry, 'id' | 'createdAt' | 'status'>) => void;
  updateEnquiryStatus: (id: string, status: Enquiry['status']) => void;

  addRegistration: (reg: Omit<CourseRegistration, 'id' | 'createdAt' | 'registrationCode' | 'status'>) => string;
  updateRegistrationStatus: (id: string, status: CourseRegistration['status']) => void;

  addQuote: (quote: Omit<ServiceQuote, 'id' | 'createdAt' | 'status'>) => void;
  updateQuoteStatus: (id: string, status: ServiceQuote['status']) => void;

  addInternshipApp: (app: Omit<InternshipApplication, 'id' | 'createdAt' | 'status'>) => void;
  updateInternshipStatus: (id: string, status: InternshipApplication['status']) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [services] = useState<Service[]>(initialServices);

  const [courses, setCourses] = useState<Course[]>(() => {
    const saved = localStorage.getItem('cypherdevs_courses');
    return saved ? JSON.parse(saved) : initialCourses;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('cypherdevs_projects');
    return saved ? JSON.parse(saved) : initialProjects;
  });

  const [blogs, setBlogs] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('cypherdevs_blogs');
    return saved ? JSON.parse(saved) : initialBlogs;
  });

  const [enquiries, setEnquiries] = useState<Enquiry[]>(() => {
    const saved = localStorage.getItem('cypherdevs_enquiries');
    return saved ? JSON.parse(saved) : initialEnquiries;
  });

  const [registrations, setRegistrations] = useState<CourseRegistration[]>(() => {
    const saved = localStorage.getItem('cypherdevs_registrations');
    return saved ? JSON.parse(saved) : initialRegistrations;
  });

  const [quotes, setQuotes] = useState<ServiceQuote[]>(() => {
    const saved = localStorage.getItem('cypherdevs_quotes');
    return saved ? JSON.parse(saved) : initialQuotes;
  });

  const [internships, setInternships] = useState<InternshipApplication[]>(() => {
    const saved = localStorage.getItem('cypherdevs_internships');
    return saved ? JSON.parse(saved) : initialInternships;
  });

  // Save changes to LocalStorage
  useEffect(() => { localStorage.setItem('cypherdevs_courses', JSON.stringify(courses)); }, [courses]);
  useEffect(() => { localStorage.setItem('cypherdevs_projects', JSON.stringify(projects)); }, [projects]);
  useEffect(() => { localStorage.setItem('cypherdevs_blogs', JSON.stringify(blogs)); }, [blogs]);
  useEffect(() => { localStorage.setItem('cypherdevs_enquiries', JSON.stringify(enquiries)); }, [enquiries]);
  useEffect(() => { localStorage.setItem('cypherdevs_registrations', JSON.stringify(registrations)); }, [registrations]);
  useEffect(() => { localStorage.setItem('cypherdevs_quotes', JSON.stringify(quotes)); }, [quotes]);
  useEffect(() => { localStorage.setItem('cypherdevs_internships', JSON.stringify(internships)); }, [internships]);

  // Course handlers
  const addCourse = (courseData: Omit<Course, 'id'>) => {
    const newCourse: Course = { ...courseData, id: `crs-${Date.now()}` };
    setCourses(prev => [newCourse, ...prev]);
  };

  const updateCourse = (id: string, updated: Partial<Course>) => {
    setCourses(prev => prev.map(c => c.id === id ? { ...c, ...updated } : c));
  };

  const deleteCourse = (id: string) => {
    setCourses(prev => prev.filter(c => c.id !== id));
  };

  // Project handlers
  const addProject = (projectData: Omit<Project, 'id'>) => {
    const newProject: Project = { ...projectData, id: `prj-${Date.now()}` };
    setProjects(prev => [newProject, ...prev]);
  };

  const updateProject = (id: string, updated: Partial<Project>) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updated } : p));
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  // Blog handlers
  const addBlog = (blogData: Omit<BlogPost, 'id'>) => {
    const newBlog: BlogPost = { ...blogData, id: `blg-${Date.now()}` };
    setBlogs(prev => [newBlog, ...prev]);
  };

  const updateBlog = (id: string, updated: Partial<BlogPost>) => {
    setBlogs(prev => prev.map(b => b.id === id ? { ...b, ...updated } : b));
  };

  const deleteBlog = (id: string) => {
    setBlogs(prev => prev.filter(b => b.id !== id));
  };

  // Submission handlers
  const addEnquiry = (enquiryData: Omit<Enquiry, 'id' | 'createdAt' | 'status'>) => {
    const now = new Date().toISOString().replace('T', ' ').substring(0, 16);
    const newEnquiry: Enquiry = {
      ...enquiryData,
      id: `enq-${Date.now()}`,
      status: 'Unread',
      createdAt: now
    };
    setEnquiries(prev => [newEnquiry, ...prev]);
  };

  const updateEnquiryStatus = (id: string, status: Enquiry['status']) => {
    setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status } : e));
  };

  const addRegistration = (regData: Omit<CourseRegistration, 'id' | 'createdAt' | 'registrationCode' | 'status'>) => {
    const now = new Date().toISOString().replace('T', ' ').substring(0, 16);
    const code = `CYP-REG-${Math.floor(1000 + Math.random() * 9000)}`;
    const newReg: CourseRegistration = {
      ...regData,
      id: `reg-${Date.now()}`,
      registrationCode: code,
      status: 'Confirmed',
      createdAt: now
    };
    setRegistrations(prev => [newReg, ...prev]);
    return code;
  };

  const updateRegistrationStatus = (id: string, status: CourseRegistration['status']) => {
    setRegistrations(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  };

  const addQuote = (quoteData: Omit<ServiceQuote, 'id' | 'createdAt' | 'status'>) => {
    const now = new Date().toISOString().replace('T', ' ').substring(0, 16);
    const newQuote: ServiceQuote = {
      ...quoteData,
      id: `qte-${Date.now()}`,
      status: 'Under Review',
      createdAt: now
    };
    setQuotes(prev => [newQuote, ...prev]);
  };

  const updateQuoteStatus = (id: string, status: ServiceQuote['status']) => {
    setQuotes(prev => prev.map(q => q.id === id ? { ...q, status } : q));
  };

  const addInternshipApp = (appData: Omit<InternshipApplication, 'id' | 'createdAt' | 'status'>) => {
    const now = new Date().toISOString().replace('T', ' ').substring(0, 16);
    const newApp: InternshipApplication = {
      ...appData,
      id: `int-${Date.now()}`,
      status: 'Received',
      createdAt: now
    };
    setInternships(prev => [newApp, ...prev]);
  };

  const updateInternshipStatus = (id: string, status: InternshipApplication['status']) => {
    setInternships(prev => prev.map(i => i.id === id ? { ...i, status } : i));
  };

  return (
    <DataContext.Provider value={{
      services, courses, projects, blogs, enquiries, registrations, quotes, internships,
      addCourse, updateCourse, deleteCourse,
      addProject, updateProject, deleteProject,
      addBlog, updateBlog, deleteBlog,
      addEnquiry, updateEnquiryStatus,
      addRegistration, updateRegistrationStatus,
      addQuote, updateQuoteStatus,
      addInternshipApp, updateInternshipStatus
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
