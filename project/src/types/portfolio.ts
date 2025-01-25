export interface Education {
  school: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number | 'Present';
  description?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'ai-data' | 'cloud' | 'tools' | 'other-skills';
  level: number; // 0-100
  icon?: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  instagram: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  resumeUrl: string;
  github: string;
  linkedin: string;
  instagram: string;
}
