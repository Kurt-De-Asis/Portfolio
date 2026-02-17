// Project interface
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  category: 'Full Stack' | 'Backend' | 'Frontend' | 'Mobile' | 'Desktop';
}

// Skill interface
export interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Languages';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon?: string;
}

// Education interface
export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements?: string[];
}

// Achievement interface
export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'Academic' | 'Leadership' | 'Recognition' | 'Technical';
}

// Contact form interface
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Personal information interface
export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin?: string;
  resumeUrl: string;
}

// Navigation item interface
export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}