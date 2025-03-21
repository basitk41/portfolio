import styled from "styled-components";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const PageHeader = styled.header`
  margin-bottom: 3rem;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const PageDescription = styled.p`
  max-width: 700px;
  margin: 0 auto 2rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1.25rem;
  background-color: ${(props) =>
    props.$active ? "var(--primary)" : "var(--bg-alternate)"};
  color: ${(props) => (props.$active ? "white" : "var(--text-primary)")};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.$active ? "var(--primary-dark)" : "var(--bg-highlight)"};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
`;

const ProjectCard = styled.article`
  background-color: var(--bg-secondary);
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.div<{ $image: string }>`
  height: 220px;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0)
    );
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const ProjectCompany = styled.p`
  color: var(--primary);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const ProjectPeriod = styled.p`
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechnologyTag = styled.span`
  background-color: var(--bg-alternate);
  color: var(--text-secondary);
  padding: 0.35rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--primary);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-dark);
    text-decoration: underline;
  }
`;

const HighlightsToggle = styled.button<{ $expanded: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 0.9rem;
  padding: 0.5rem 0;
  cursor: pointer;
  margin: 1rem 0;

  svg {
    transform: ${(props) => (props.$expanded ? "rotate(180deg)" : "rotate(0)")};
    transition: transform 0.3s ease;
  }

  &:hover {
    color: var(--primary);
  }
`;

const HighlightsList = styled.ul<{ $visible: boolean }>`
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
  display: ${(props) => (props.$visible ? "block" : "none")};
`;

const HighlightItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.5;
  font-size: 0.95rem;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  grid-column: 1 / -1;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
  }
`;

export {
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
  ProjectPeriod,
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
};
