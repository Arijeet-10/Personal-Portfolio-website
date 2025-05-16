
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  techStack: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  category: 'Web App' | 'Mobile App' | 'Tooling' | 'Design';
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform X',
    description: 'A full-featured e-commerce platform with modern UI, payment integration, and admin dashboard.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ecommerce website',
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    liveDemoUrl: '#',
    githubUrl: '#',
    category: 'Web App',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management tool to boost productivity for teams and individuals.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'task app',
    techStack: ['React', 'Firebase', 'Material UI', 'Node.js'],
    liveDemoUrl: '#',
    githubUrl: '#',
    category: 'Web App',
  },
  {
    id: '3',
    title: 'AI Powered Blog Generator',
    description: 'A SAAS platform that uses AI to generate blog content based on user prompts and keywords.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'AI writing',
    techStack: ['Python', 'Flask', 'OpenAI API', 'React', 'Docker'],
    githubUrl: '#',
    category: 'Web App',
  },
  {
    id: '4',
    title: 'Mobile Fitness Tracker',
    description: 'A React Native application for tracking workouts, setting goals, and monitoring progress.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'fitness app',
    techStack: ['React Native', 'Expo', 'Firebase', 'Chart.js'],
    category: 'Mobile App',
  },
  {
    id: '5',
    title: 'Developer Portfolio Template',
    description: 'A customizable and responsive portfolio template for developers, built with Astro and Tailwind.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'portfolio website',
    techStack: ['Astro', 'Tailwind CSS', 'Markdown'],
    liveDemoUrl: '#',
    githubUrl: '#',
    category: 'Tooling',
  },
  {
    id: '6',
    title: 'Creative Agency Website Design',
    description: 'A modern and sleek website design concept for a creative agency, focusing on UX.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'agency design',
    techStack: ['Figma', 'Adobe XD', 'User Research'],
    category: 'Design',
  },
];

export const projectCategories: Project['category'][] = ['Web App', 'Mobile App', 'Tooling', 'Design'];
