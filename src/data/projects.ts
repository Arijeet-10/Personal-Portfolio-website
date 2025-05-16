
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
    title: 'Expense Tracker Application',
    description: 'Track income and expenses with real-time updates, secure login, and category breakdowns.',
    imageUrl: '/expense tracker.webp',
    imageHint: 'finance tracking dashboard',
    techStack: ['React', 'MongoDB', 'Express', 'Tailwind CSS', 'Node'],
    liveDemoUrl: 'https://exp-track-frontend.onrender.com/',
    githubUrl: 'https://github.com/Arijeet-10/exp-track.git',
    category: 'Web App',
  },
  {
    id: '2',
    title: 'Carrer Guidance AI Platform',
    description: 'AI-based platform offering personalized career recommendations and resources.',
    imageUrl: '/Skill_up.png',
    imageHint: 'task app',
    techStack: ['Python', 'Node.js', 'MongoDB', 'Flask', 'HTML5', 'CSS'],
    githubUrl: 'https://github.com/Arijeet-10/Skill-Up-Website',
    category: 'Web App',
  },
  {
    id: '3',
    title: 'Bookify - A Smart Service Booking Mobile Application',
    description: 'Book and manage services with real-time scheduling and AI-driven suggestions.',
    imageUrl: '/Bookify.png',
    imageHint: 'service booking app',
    techStack: ['Next.js', 'Firebase', 'Typescript', 'React', 'Javascript', 'Tailwind CSS'],
    liveDemoUrl: 'https://bookify-2h66.onrender.com',
    githubUrl: 'https://github.com/Arijeet-10/Bookify',
    category: 'Mobile App',
  },
  {
    id: '4',
    title: 'CodeProgress Tracker',
    description: 'Track and visualize coding progress across multiple competitive platforms.',
    imageUrl: '/Algo_tracker.png',
    imageHint: 'coding progress dashboard',
    techStack: ['React', 'Next.js', 'Firebase', 'Chart.js'],
    liveDemoUrl: 'https://algo-tracker-website.onrender.com',
    githubUrl: 'https://github.com/Arijeet-10/Algo-Tracker-Website',
    category: 'Web App',
  },
  {
    id: '5',
    title: 'Travel Companion Web App',
    description: 'Find places with weather, maps, and images in one simple interface.',
    imageUrl: '/Roam Free.png',
    imageHint: 'travel search dashboard',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'OpenWeather API', 'Google Maps API', 'Unsplash API'],
    liveDemoUrl: 'https://roamfree-travel-app.onrender.com',
    githubUrl: 'https://github.com/Arijeet-10/RoamFree-Travel-App',
    category: 'Web App',
  },
  {
    id: '6',
    title: 'Medical Store Management System',
    description: 'Manage pharmacy stock, billing, and suppliers with an easy dashboard.',
    imageUrl: '/medical.png',
    imageHint: 'pharmacy inventory dashboard',
    techStack: ['MySQL', 'PHP', 'HTML', 'CSS', 'JavaScript'],
    liveDemoUrl: 'https://arijeet-10.github.io/Medical-Store-Management-System/',
    githubUrl: 'https://github.com/Arijeet-10/Medical-Store-Management-System',
    category: 'Web App',
  },
];


export const projectCategories: Project['category'][] = ['Web App', 'Mobile App', 'Tooling', 'Design'];
