export interface Achievement {
  title: string;
  description: string;
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  position: string;
  period: string;
  responsibilities: string[];
  achievements: Achievement[];
}
