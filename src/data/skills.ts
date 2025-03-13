import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      {
        name: "React",
        level: 95,
        icon: "react",
      },
      {
        name: "Next.js",
        level: 90,
        icon: "nextjs",
      },
      {
        name: "TypeScript",
        level: 90,
        icon: "typescript",
      },
      {
        name: "JavaScript",
        level: 95,
        icon: "javascript",
      },
      {
        name: "Redux",
        level: 85,
        icon: "redux",
      },
      {
        name: "RTK Query",
        level: 80,
        icon: "redux",
      },
      {
        name: "Apollo Client",
        level: 75,
        icon: "apollo",
      },
      {
        name: "HTML5",
        level: 95,
        icon: "html5",
      },
      {
        name: "CSS3",
        level: 90,
        icon: "css3",
      },
      {
        name: "Tailwind CSS",
        level: 85,
        icon: "tailwind",
      },
      {
        name: "Material UI",
        level: 80,
        icon: "mui",
      },
      {
        name: "Ant Design",
        level: 85,
        icon: "antd",
      },
      {
        name: "Styled Components",
        level: 85,
        icon: "styledcomponents",
      },
      {
        name: "Gatsby",
        level: 75,
        icon: "gatsby",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        level: 85,
        icon: "nodejs",
      },
      {
        name: "Express.js",
        level: 85,
        icon: "express",
      },
      {
        name: "NestJS",
        level: 80,
        icon: "nestjs",
      },
      {
        name: "GraphQL",
        level: 80,
        icon: "graphql",
      },
      {
        name: "REST APIs",
        level: 90,
        icon: "api",
      },
      {
        name: "Prisma",
        level: 75,
        icon: "prisma",
      },
      {
        name: "Sequelize",
        level: 75,
        icon: "sequelize",
      },
      {
        name: "TypeORM",
        level: 70,
        icon: "typeorm",
      },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      {
        name: "MongoDB",
        level: 85,
        icon: "mongodb",
      },
      {
        name: "MySQL",
        level: 80,
        icon: "mysql",
      },
      {
        name: "PostgreSQL",
        level: 80,
        icon: "postgresql",
      },
      {
        name: "DynamoDB",
        level: 70,
        icon: "dynamodb",
      },
    ],
  },
  {
    id: "testing",
    title: "Testing & Tools",
    skills: [
      {
        name: "Jest",
        level: 85,
        icon: "jest",
      },
      {
        name: "Cypress",
        level: 75,
        icon: "cypress",
      },
      {
        name: "Git",
        level: 90,
        icon: "git",
      },
      {
        name: "Storybook",
        level: 80,
        icon: "storybook",
      },
      {
        name: "Linux",
        level: 75,
        icon: "linux",
      },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Architecture",
    skills: [
      {
        name: "AWS",
        level: 70,
        icon: "aws",
      },
      {
        name: "Azure",
        level: 65,
        icon: "azure",
      },
      {
        name: "Microservices",
        level: 75,
        icon: "microservices",
      },
      {
        name: "Docker",
        level: 80,
        icon: "docker",
      },
      {
        name: "CI/CD",
        level: 75,
        icon: "cicd",
      },
      {
        name: "Agile/TDD",
        level: 85,
        icon: "agile",
      },
    ],
  },
];

export default skillCategories;
