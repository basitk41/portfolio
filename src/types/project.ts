export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  role: string;
  company: string;
  period: string;
  image: string;
  demoUrl: string | null;
  codeUrl: string | null;
  featured: boolean;
  highlights: string[];
}
