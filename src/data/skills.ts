
import type { LucideIcon } from 'lucide-react';
import { Cog, Code2, Database, Palette, Smartphone, Cloud, Brain, Zap } from 'lucide-react';

export interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
}

export const skillsData: Skill[] = [
  { name: 'C++', level: 90, icon: Code2 },
  { name: 'Python', level: 70, icon: Code2 },
  { name: 'React & Next.js', level: 90, icon: Code2 },
  { name: 'Node.js & Express', level: 75, icon: Cog },
  { name: 'SQL , Firebase , MongoDB', level: 70, icon: Database },
  { name: 'UI/UX Design Principles', level: 80, icon: Palette },
  { name: 'Responsive Web Design', level: 95, icon: Smartphone },
  { name: 'Cloud Platforms (AWS/Firebase)', level: 65, icon: Cloud },
];
