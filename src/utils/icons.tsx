import { FaCode, FaServer, FaDatabase, FaTools, FaCloud } from "react-icons/fa";

export const getSkillIcon = (iconName: string) => {
  switch (iconName) {
    case "react":
    case "javascript":
    case "typescript":
    case "nextjs":
    case "gatsby":
    case "frontend":
      return <FaCode />;
    case "nodejs":
    case "express":
    case "nestjs":
    case "graphql":
    case "api":
    case "backend":
    case "prisma":
    case "sequelize":
    case "typeorm":
    case "microservices":
      return <FaServer />;
    case "mongodb":
    case "mysql":
    case "postgresql":
    case "dynamodb":
    case "databases":
      return <FaDatabase />;
    case "jest":
    case "cypress":
    case "git":
    case "storybook":
    case "linux":
    case "testing":
      return <FaTools />;
    case "aws":
    case "azure":
    case "docker":
    case "cicd":
    case "cloud":
      return <FaCloud />;
    default:
      return <FaCode />;
  }
};
