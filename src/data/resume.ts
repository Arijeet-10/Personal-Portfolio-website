
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
    id: 'work2',
    type: 'work',
    title: 'AI Intern – Health Chatbot Development',
    institution: 'Calcutta University',
    institutionIcon: Building,
    date: 'Mar 2025 – Present',
    description: [
      'Building an AI-powered health chatbot to translate medical conversations between English and Bengali.',
      'Developing NLP models to ensure accurate and context-aware sentence translation.',
      'Aiming to bridge the language gap between doctors and patients for better healthcare communication.'
    ],
    icon: Briefcase,
  },  
  {
    id: 'work1',
    type: 'work',
    title: 'Intern – Smart Traffic Optimization System',
    institution: 'IEDC Lab , UENK',
    institutionIcon: Building,
    date: 'Jun 2024 – Aug 2024',
    description: 'Worked on designing and developing a smart traffic optimization system using real-time data analysis and ML models to improve urban traffic flow.',
    icon: Briefcase,
  },  
  {
    id: 'edu2',
    type: 'education',
    title: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'University of Engineering and Management , Kolkata',
    institutionIcon: School,
    date: 'Aug 2022 - Jul 2026 (Expected)',
    description: 'Pursuing B.Tech in CSE with a focus on full-stack development and AI. Active in coding competitions and tech communities.',
    icon: GraduationCap,
  },  
  {
    id: 'edu1',
    type: 'education',
    title: 'Class 12 - CBSE',
    institution: 'St. Josephs Convent H.S. School (CBSE), Chittaranjan',
    institutionIcon: School,
    date: 'May 2020 - Mar 2022',
    description: 'Completed Class 12 with a focus on Physics, Chemistry, and Mathematics. Participated in science exhibitions and football tournamnets.',
    icon: GraduationCap,
  },  
];
