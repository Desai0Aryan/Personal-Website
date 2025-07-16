export interface Skill {
  name: string;
  icon: string;
  category: 'languages' | 'web' | 'tools' | 'cloud' | 'data' | 'database' | 'frameworks' | 'security';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  technologies: string[];
}

export interface NavLink {
  name: string;
  href: string;
}

