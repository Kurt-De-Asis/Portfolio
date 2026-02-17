import { Project, Skill, Education, Achievement, PersonalInfo, NavItem } from '@/types';
import { link } from 'fs';

// Personal Information
export const personalInfo: PersonalInfo = {
  name: 'Kurt Russel De Asis',
<<<<<<< HEAD
  title: 'Software Developer',
=======
  title: 'Software Engineer',
>>>>>>> 2be695b97991fb5b082ea62c34e573dec9a6cee0
  location: 'BLK 11 LOT 36, KANSAS ST. ROSADA SUBD, BRGY. TAGAPO, SANTA ROSA, LAGUNA',
  phone: '+639918690956',
  email: 'kurtrussel644@gmail.com',
  github: 'https://github.com/Kurt-De-Asis',
<<<<<<< HEAD
  resumeUrl: '/Kurt De Asis - CV.pdf'
=======
  resumeUrl: '/resume.pdf'
>>>>>>> 2be695b97991fb5b082ea62c34e573dec9a6cee0
};

// Navigation Items
export const navigation: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'achievements', label: 'Achievements', href: '#achievements' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];

// Skills
export const skills: Skill[] = [
  // Frontend
  { id: 'html', name: 'HTML', category: 'Frontend', level: 'Expert' },
  { id: 'css', name: 'CSS', category: 'Frontend', level: 'Expert' },
  { id: 'javascript', name: 'JavaScript', category: 'Frontend', level: 'Advanced' },
  { id: 'typescript', name: 'TypeScript', category: 'Frontend', level: 'Advanced' },
  { id: 'react', name: 'React', category: 'Frontend', level: 'Advanced' },
  { id: 'nextjs', name: 'Next.js', category: 'Frontend', level: 'Advanced' },
  { id: 'vue', name: 'Vue.js', category: 'Frontend', level: 'Intermediate' },
  { id: 'responsive', name: 'Responsive Design', category: 'Frontend', level: 'Expert' },
  
  // Backend
  { id: 'go', name: 'Go', category: 'Backend', level: 'Advanced' },
  { id: 'python', name: 'Python', category: 'Backend', level: 'Advanced' },
  { id: 'java', name: 'Java', category: 'Backend', level: 'Advanced' },
  { id: 'php', name: 'PHP', category: 'Backend', level: 'Intermediate' },
  { id: 'django', name: 'Django', category: 'Backend', level: 'Intermediate' },
  { id: 'system-opt', name: 'System Optimization', category: 'Backend', level: 'Advanced' },
  
  // Database
  { id: 'mysql', name: 'MySQL', category: 'Database', level: 'Advanced' },
  { id: 'firebase', name: 'Firebase', category: 'Database', level: 'Intermediate' },
  { id: 'db-admin', name: 'Database Administration', category: 'Database', level: 'Advanced' },
  
  // Tools
  { id: 'git', name: 'Git', category: 'Tools', level: 'Expert' },
  
  // Languages
  { id: 'go', name: 'Go', category: 'Languages', level: 'Advanced' },
  { id: 'python', name: 'Python', category: 'Languages', level: 'Advanced' },
  { id: 'java', name: 'Java', category: 'Languages', level: 'Intermediate' },
  { id: 'javascript', name: 'JavaScript', category: 'Languages', level: 'Advanced' },
  { id: 'typescript', name: 'TypeScript', category: 'Languages', level: 'Advanced' },
  { id: 'php', name: 'PHP', category: 'Languages', level: 'Intermediate' }
];

// Projects
export const projects: Project[] = [
  {
    id: 'alumni-et',
    title: 'ALUMNIET - Capstone Commission',
    description: 'A comprehensive alumni management system built for educational institutions to track and engage with alumni networks.',
    technologies: ['Go', 'React', 'MySQL', 'Django'],
    githubUrl: 'https://github.com/Kurt-De-Asis/ALUMNIET---CAPSTONE-COMMISSION',
    category: 'Full Stack'
  },
  {
    id: 'pqet-internship',
    title: 'PQET - Internship Work Project',
    description: 'Professional Quality Enhancement Tool designed to streamline internship management and performance tracking.',
    technologies: ['Python', 'Django', 'MySQL', 'JavaScript'],
    githubUrl: 'https://github.com/Kurt-De-Asis/PQET---INTERNSHIP-WORK-PROJECT',
    category: 'Full Stack'
  },
  {
    id: 'ecommerce-web',
    title: 'E-Commerce Web Application',
    description: 'Modern e-commerce platform with user authentication, product catalog, shopping cart, and checkout flow.',
    technologies: ['React', 'Next.js', 'TypeScript', 'MySQL', 'Firebase'],
    githubUrl: 'https://github.com/Kurt-De-Asis/E-COMMERCEWEB',
    category: 'Full Stack'
  },
  {
    id: 'pos-java',
    title: 'POS System using Java',
    description: 'Point of Sale system built with Java Swing for retail businesses with inventory management and sales tracking.',
    technologies: ['Java', 'Swing', 'MySQL'],
    githubUrl: 'https://github.com/Kurt-De-Asis/POS-using-java',
    category: 'Desktop'
  },
  {
    id: 'web-project',
    title: 'Web Project',
    description: 'General web development project showcasing various frontend and backend technologies.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    githubUrl: 'https://github.com/Kurt-De-Asis/Web-Project',
    category: 'Frontend'
  },
  {
    id: 'virtual-assistant',
    title: 'Virtual Assistant (Python)',
    description: 'AI-powered virtual assistant built with Python for task automation and voice commands.',
    technologies: ['Python', 'Speech Recognition', 'Natural Language Processing'],
    githubUrl: 'https://github.com/Kurt-De-Asis/Virtual-Assistant-Python',
    category: 'Backend'
  },
  {
    id: 'firebase-studio',
    title: 'Zerefilogy',
    description: 'Zerefill is a smart, eco-friendly solution for zero-waste refill stores. It offers a seamless user experience with a digital wallet, QR code-based refilling, and personalized sustainability tracking, all while providing store owners with powerful tools to manage inventory, sales, and users.',
    technologies: ['Firebase', 'React', 'JavaScript', 'Real-time Database', 'Authentication'],
    githubUrl: 'https://studio.firebase.google.com/studio-6147954540',
    category: 'Full Stack'
  }
];

// Education
export const education: Education[] = [
  {
    id: 'bs-it',
    degree: 'Bachelor of Science in Information Technology',
    institution: 'ST. LOUIS ANNE COLLEGES OF SAN PEDRO LAGUNA',
    location: 'San Pedro, Laguna, Philippines',
    startDate: '2022',
    endDate: 'Expected 08/2026',
    description: 'Comprehensive IT program focusing on software development, database management, and system analysis.',
    achievements: [
      '1.50 Minimum Average from 1st year – 4th year 1st Semester',
      'Senior High School Awarded with Honors'
    ]
  }
];

//
export const achievements: Achievement[] = [
  {
    id: 'honors',
    title: 'Senior High School Awarded with Honors',
    description: 'Recognized for academic excellence and outstanding performance throughout senior high school.',
    date: '2022',
    category: 'Academic'
  },
  {
    id: 'president',
    title: 'Computer Studies President, National Service Training Program',
    description: 'Led the Computer Studies department in NSTP activities and community service initiatives.',
    date: '2022-2023',
    category: 'Leadership'
  },
  {
    id: 'outstanding-student',
    title: 'Top 1 Most Outstanding Student',
    description: 'Awarded for exceptional academic performance and leadership qualities.',
    date: '2nd Semester 2023',
    category: 'Recognition'
  },
  {
    id: 'leadership-awardee',
    title: 'Community Leadership Awardee',
    description: 'Recognized for outstanding leadership and community service contributions.',
    date: '2nd Semester 2023',
    category: 'Leadership'
  },
  {
    id: 'rites-coordination',
    title: 'Rites Coordination Awardee',
    description: 'Awarded for exceptional coordination and organization of rites and ceremonies.',
    date: '2nd Semester 2023',
    category: 'Recognition'
  }
];

// Professional Summary
export const professionalSummary = `
Hardworking and passionate software engineer with strong organizational skills and a commitment to excellence. 
Experienced in developing and maintaining software applications with a focus on clean code, user experience, 
and system optimization. Skilled in debugging and optimizing code for efficiency while maintaining high 
standards of quality. Proven ability to collaborate effectively with teams and contribute to achieving 
company goals through technical expertise and problem-solving skills.

Strong foundation in multiple programming languages including Go, Python, Java, and JavaScript, with 
experience in both frontend and backend development. Passionate about creating efficient, scalable 
solutions and continuously improving technical skills to stay current with industry best practices.
`;

// Social Links
export const socialLinks = {
  github: 'https://github.com/Kurt-De-Asis',
  linkedin: 'https://www.linkedin.com/in/de-asis-kurt-russel-dizon-258790343/',
  facebook: 'https://www.facebook.com/profile.php?id=61574673279749',
  email: 'kurtrussel644@gmail.com',
  phone: '+639918690956'
};
