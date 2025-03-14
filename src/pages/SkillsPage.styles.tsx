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

const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const FilterTab = styled.button<{ $active: boolean }>`
  padding: 0.75rem 1.5rem;
  background-color: ${(props) =>
    props.$active ? "var(--primary)" : "var(--bg-alternate)"};
  color: ${(props) => (props.$active ? "white" : "var(--text-primary)")};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.$active ? "var(--primary-dark)" : "var(--bg-highlight)"};
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled.div`
  background-color: var(--bg-secondary);
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

const SkillName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillLevel = styled.span`
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--text-secondary);
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: var(--bg-alternate);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const ProgressBar = styled.div<{ $level: number }>`
  height: 100%;
  width: ${(props) => props.$level}%;
  background-color: var(--primary);
  border-radius: 4px;
`;

const LevelDescription = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-align: right;
`;

export {
  PageContainer,
  PageHeader,
  PageTitle,
  PageDescription,
  FilterTabs,
  FilterTab,
  SkillsGrid,
  SkillCard,
  SkillName,
  SkillLevel,
  ProgressBarContainer,
  ProgressBar,
  LevelDescription,
};
