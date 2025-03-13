import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

import { projects } from "@/data/projects";

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const ProjectCard = styled.article`
  background-color: var(--bg-secondary);
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background-color: var(--bg-alternate);
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
  }

  &:hover:before {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background-color: var(--bg-alternate);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-dark);
    text-decoration: none;
  }
`;

const ViewAllLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  font-weight: 600;
  color: var(--primary);
  text-decoration: none;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    color: var(--primary-dark);

    svg {
      transform: translateX(4px);
    }
  }
`;

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
