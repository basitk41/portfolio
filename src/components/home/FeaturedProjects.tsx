import { useTranslation } from "react-i18next";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

import { projects } from "@/data/projects";
import {
  ProjectsContainer,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  TagsContainer,
  Tag,
  ProjectLinks,
  ProjectLink,
  ViewAllLink,
} from "./FeaturedProjects.styles";

const FeaturedProjects = () => {
  const { t } = useTranslation();

  // Get only featured projects (max 3)
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <>
      <ProjectsContainer>
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage
              style={{
                backgroundImage: `url(${
                  project.image || "./images/project-placeholder.jpg"
                })`,
              }}
            />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{t(project.description)}</ProjectDescription>

              <TagsContainer>
                {project.technologies.slice(0, 4).map((tech, index) => (
                  <Tag key={index}>{tech}</Tag>
                ))}
                {project.technologies.length > 4 && (
                  <Tag>+{project.technologies.length - 4}</Tag>
                )}
              </TagsContainer>

              <ProjectLinks>
                {project.demoUrl && (
                  <ProjectLink
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={14} />
                    {t("projects.viewDemo")}
                  </ProjectLink>
                )}

                {project.codeUrl && (
                  <ProjectLink
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={14} />
                    {t("projects.viewCode")}
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsContainer>

      <ViewAllLink to="/projects">
        {t("projects.title")} <FaArrowRight size={14} />
      </ViewAllLink>
    </>
  );
};

export default FeaturedProjects;
