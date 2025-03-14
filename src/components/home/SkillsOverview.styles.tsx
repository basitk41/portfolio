import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tab = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  background-color: ${(props) =>
    props.$active ? "var(--primary)" : "var(--bg-alternate)"};
  color: ${(props) => (props.$active ? "white" : "var(--text-primary)")};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${(props) =>
      props.$active ? "var(--primary-dark)" : "var(--bg-highlight)"};
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SkillCard = styled.div`
  background-color: var(--bg-secondary);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const SkillIcon = styled.div`
  width: 48px;
  height: 48px;
  background-color: var(--bg-alternate);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
  color: var(--primary);
`;

const SkillName = styled.h4`
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const SkillLevel = styled.div`
  width: 100%;
  height: 6px;
  background-color: var(--bg-alternate);
  border-radius: 3px;
  overflow: hidden;
  margin-top: auto;
`;

const SkillProgress = styled.div<{ $level: number }>`
  height: 100%;
  width: ${(props) => props.$level}%;
  background-color: var(--primary);
  border-radius: 3px;
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

export {
  Container,
  TabsContainer,
  Tab,
  SkillsGrid,
  SkillCard,
  SkillIcon,
  SkillName,
  SkillLevel,
  SkillProgress,
  ViewAllLink,
};
