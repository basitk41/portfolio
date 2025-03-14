import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from "react-icons/fa";

import { projects } from "@/data/projects";
import {
  PageContainer,
  PageHeader,
  PageTitle,
  PageDescription,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectCompany,
  // ProjectPeriod,
  ProjectDescription,
  TechnologiesContainer,
  TechnologyTag,
  ProjectLinks,
  ProjectLink,
  HighlightsToggle,
  HighlightsList,
  HighlightItem,
  NoResults,
  FilterContainer,
  FilterButton,
} from "./ProjectsPage.styles";

type ProjectCardWithHighlightsProps = {
  project: (typeof projects)[0];
};

const ProjectCardWithHighlights = ({
  project,
}: ProjectCardWithHighlightsProps) => {
  const [showHighlights, setShowHighlights] = useState(false);
  const { t } = useTranslation();

  return (
    <ProjectCard>
      <ProjectImage $image={project.image} />

      <ProjectContent>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectCompany>
          {project.role} @ {project.company}
        </ProjectCompany>
        {/* <ProjectPeriod>{project.period}</ProjectPeriod> */}

        <ProjectDescription>{t(project.description)}</ProjectDescription>

        <TechnologiesContainer>
          {project.technologies.map((tech, index) => (
            <TechnologyTag key={index}>{tech}</TechnologyTag>
          ))}
        </TechnologiesContainer>

        {project.highlights.length > 0 && (
          <>
            <HighlightsToggle
              $expanded={showHighlights}
              onClick={() => setShowHighlights(!showHighlights)}
            >
              {showHighlights
                ? t("projects.hideHighlights")
                : t("projects.showHighlights")}
              <FaChevronDown size={12} />
            </HighlightsToggle>

            <HighlightsList $visible={showHighlights}>
              {project.highlights.map((highlight, index) => (
                <HighlightItem key={index}>{highlight}</HighlightItem>
              ))}
            </HighlightsList>
          </>
        )}

        <ProjectLinks>
          {project.demoUrl && (
            <ProjectLink
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt size={14} /> {t("projects.viewDemo")}
            </ProjectLink>
          )}

          {project.codeUrl && (
            <ProjectLink
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={14} /> {t("projects.viewCode")}
            </ProjectLink>
          )}
        </ProjectLinks>
      </ProjectContent>
    </ProjectCard>
  );
};

const ProjectsPage = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");

  // Get unique companies for filtering
  const companies = Array.from(
    new Set(projects.map((project) => project.company))
  );

  // Filter projects based on selected filter
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.company === filter);

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{t("projects.title")}</PageTitle>
        <PageDescription>{t("projects.description")}</PageDescription>

        <FilterContainer>
          <FilterButton
            $active={filter === "all"}
            onClick={() => setFilter("all")}
          >
            {t("common.all")}
          </FilterButton>

          {companies.map((company) => (
            <FilterButton
              key={company}
              $active={filter === company}
              onClick={() => setFilter(company)}
            >
              {company}
            </FilterButton>
          ))}
        </FilterContainer>
      </PageHeader>

      {filteredProjects.length > 0 ? (
        <ProjectsGrid>
          {filteredProjects.map((project) => (
            <ProjectCardWithHighlights key={project.id} project={project} />
          ))}
        </ProjectsGrid>
      ) : (
        <NoResults>
          <h3>{t("projects.noProjectsFound")}</h3>
          <p>{t("projects.tryDifferentFilter")}</p>
        </NoResults>
      )}
    </PageContainer>
  );
};

export default ProjectsPage;
