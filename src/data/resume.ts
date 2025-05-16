
import type { LucideIcon } from 'lucide-react';
import { Briefcase, GraduationCap, Building, School } from 'lucide-react';

export interface ResumeItem {
  id: string;
  type: 'work' | 'education';
  title: string;
  institution: string;
  institutionIcon?: LucideIcon;
  date: string;
  description: string | string[];
  icon: LucideIcon;
}

export const resumeData: ResumeItem[] = [
  {
    id: 'work3',
    type: 'work',
    title: 'Senior Software Engineer',
    institution: 'Innovatech Solutions',
    institutionIcon: Building,
    date: 'Jan 2022 - Present',
    description: [
      'Led development of key features for a flagship SaaS product, improving user engagement by 20%.',
      'Mentored junior engineers and conducted code reviews to maintain high code quality.',
      'Architected and implemented scalable microservices using Node.js and Docker.'
    ],
    icon: Briefcase,
  },
  {
    id: 'work2',
    type: 'work',
    title: 'Mid-Level Developer',
    institution: 'Web Creations Co.',
    institutionIcon: Building,
    date: 'Jun 2020 - Dec 2021',
    description: [
      'Developed and maintained responsive websites and web applications for various clients.',
      'Collaborated with designers and project managers to deliver projects on time and within budget.',
      'Integrated third-party APIs for payment processing and social media functionalities.'
    ],
    icon: Briefcase,
  },
  {
    id: 'edu2',
    type: 'education',
    title: 'Master of Science in Advanced Computing',
    institution: 'Tech University',
    institutionIcon: School,
    date: 'Sep 2018 - May 2020',
    description: 'Specialized in Artificial Intelligence and Machine Learning. Thesis on NLP.',
    icon: GraduationCap,
  },
  {
    id: 'work1',
    type: 'work',
    title: 'Junior Web Developer',
    institution: 'Startup Hub',
    institutionIcon: Building,
    date: 'Jul 2017 - Aug 2018',
    description: 'Assisted in building and testing new features for a rapidly growing web platform.',
    icon: Briefcase,
  },
  {
    id: 'edu1',
    type: 'education',
    title: 'Bachelor of Science in Computer Science',
    institution: 'State College',
    institutionIcon: School,
    date: 'Sep 2014 - May 2017',
    description: 'Graduated with honors. Active member of the coding club.',
    icon: GraduationCap,
  },
];
