export interface TechStack {
  name: string;
  icon?: string;
}

export interface Chapter {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
  image: string;
  alignment: 'left' | 'right';
}

export interface Project {
  id: string;
  title: string;
  tech: string[];
  description: string;
  link?: string;
  image: string;
  stats?: { label: string; value: string }[];
  videoUrl?: string;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}