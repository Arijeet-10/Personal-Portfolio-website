
import type { LucideIcon } from 'lucide-react';
import { Cog, Code2, Database, Palette, Smartphone, Cloud, Brain, Zap } from 'lucide-react';

export interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
}

export const skillsData: Skill[] = [
  { name: 'JavaScript (ES6+)', level: 90, icon: Code2 },
  { name: 'TypeScript', level: 85, icon: Code2 },
  { name: 'React & Next.js', level: 90, icon: Code2 },
  { name: 'Node.js & Express', level: 75, icon: Cog },
  { name: 'Python', level: 70, icon: Code2 },
  { name: 'SQL & NoSQL Databases', level: 70, icon: Database },
  { name: 'UI/UX Design Principles', level: 80, icon: Palette },
  { name: 'Responsive Web Design', level: 95, icon: Smartphone },
  { name: 'RESTful APIs & GraphQL', level: 75, icon: Zap },
  { name: 'Cloud Platforms (AWS/Firebase)', level: 65, icon: Cloud },
  { name: 'Agile Methodologies', level: 85, icon: Brain },
];
