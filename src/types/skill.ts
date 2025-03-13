export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}
