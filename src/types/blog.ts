export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  tags: string[];
  image: string;
  featured: boolean;
}
