export type Language = 'en' | 'ar';
export type Theme = 'dark' | 'light';
export type NavTab = 
  | 'home' 
  | 'services' 
  | 'courses' 
  | 'projects' 
  | 'internships' 
  | 'blog' 
  | 'about' 
  | 'contact' 
  | 'admin';

export interface Course {
  id: string;
  titleEn: string;
  titleAr: string;
  category: 'web' | 'cybersecurity' | 'ai' | 'mobile' | 'cloud';
  descriptionEn: string;
  descriptionAr: string;
  duration: string; // e.g., "12 Weeks"
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  levelAr: string;
  price: number;
  currency: string; // "USD" or "SAR"
  rating: number;
  reviewsCount: number;
  image: string;
  scheduleEn: string;
  scheduleAr: string;
  syllabusEn: string[];
  syllabusAr: string[];
  featuresEn: string[];
  featuresAr: string[];
  active: boolean;
}

export interface Project {
  id: string;
  titleEn: string;
  titleAr: string;
  category: 'fintech' | 'healthcare' | 'ecommerce' | 'ai' | 'cybersecurity';
  client: string;
  descriptionEn: string;
  descriptionAr: string;
  techStack: string[];
  image: string;
  metrics: {
    labelEn: string;
    labelAr: string;
    value: string;
  }[];
  demoUrl?: string;
  fullCaseStudyEn?: string;
  fullCaseStudyAr?: string;
}

export interface BlogPost {
  id: string;
  titleEn: string;
  titleAr: string;
  category: 'Architecture' | 'Artificial Intelligence' | 'Cybersecurity' | 'Cloud & DevOps' | 'Career';
  excerptEn: string;
  excerptAr: string;
  contentEn: string;
  contentAr: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface Service {
  id: string;
  iconName: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  featuresEn: string[];
  featuresAr: string[];
  category: string;
}

export interface ServiceQuote {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  companyName?: string;
  serviceCategory: string;
  projectBudget: string;
  timeline: string;
  projectDetails: string;
  status: 'New' | 'Under Review' | 'Proposal Sent' | 'Closed';
  createdAt: string;
}

export interface CourseRegistration {
  id: string;
  registrationCode: string;
  studentName: string;
  email: string;
  phone: string;
  courseId: string;
  courseTitle: string;
  cohortDate: string;
  paymentMode: 'Card' | 'Bank Transfer' | 'Installments';
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
}

export interface InternshipApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  track: 'Frontend' | 'Backend & Cloud' | 'AI & Data Science' | 'UI/UX Design' | 'Cybersecurity';
  experienceLevel: 'Student' | 'Recent Graduate' | 'Self-Taught' | 'Career Switcher';
  portfolioUrl?: string;
  githubUrl?: string;
  whyCypherDevs: string;
  cvFileName?: string;
  status: 'Received' | 'Screening' | 'Interview Scheduled' | 'Accepted' | 'Rejected';
  createdAt: string;
}

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  category: 'General' | 'Enterprise Development' | 'Training & Academies' | 'Partnerships' | 'Careers';
  message: string;
  status: 'Unread' | 'In Progress' | 'Resolved';
  createdAt: string;
}
