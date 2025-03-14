import styled from "styled-components";

const PageContainer = styled.div`
  max-width: 900px;
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

const TimelineContainer = styled.div`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 25px;
    width: 3px;
    background-color: var(--bg-highlight);

    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

interface TimelineItemProps {
  $isEven: boolean;
}
const TimelineItem = styled.div<TimelineItemProps>`
  position: relative;
  margin-bottom: 2.5rem;
  padding-left: 75px;

  @media (min-width: 768px) {
    padding-left: 0;
    width: 50%;
    margin-left: ${(props: { $isEven: boolean }) =>
      props.$isEven ? "50%" : "0"};
    padding-right: ${(props: { $isEven: boolean }) =>
      props.$isEven ? "0" : "40px"};
    padding-left: ${(props: { $isEven: boolean }) =>
      props.$isEven ? "40px" : "0"};
  }
`;
interface TimelineIconProps {
  $isEven: boolean;
}
const TimelineIcon = styled.div<TimelineIconProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1;

  @media (min-width: 768px) {
    left: auto;
    right: ${(props: { $isEven: boolean }) =>
      props.$isEven ? "auto" : "-25px"};
    left: ${(props: { $isEven: boolean }) =>
      props.$isEven ? "-25px" : "auto"};
  }
`;

interface TimelineCardProps {
  $isEven: boolean;
}
const TimelineCard = styled.div<TimelineCardProps>`
  background-color: var(--bg-secondary);
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (min-width: 768px) {
    &:before {
      content: "";
      position: absolute;
      width: 15px;
      height: 15px;
      background-color: var(--bg-secondary);
      transform: rotate(45deg);
      top: 20px;
      right: ${(props: { $isEven: boolean }) =>
        props.$isEven ? "auto" : "-7.5px"};
      left: ${(props: { $isEven: boolean }) =>
        props.$isEven ? "-7.5px" : "auto"};
      border-right: ${(props: { $isEven: boolean }) =>
        props.$isEven ? "none" : "1px solid var(--border)"};
      border-top: ${(props: { $isEven: boolean }) =>
        props.$isEven ? "none" : "1px solid var(--border)"};
      border-left: ${(props: { $isEven: boolean }) =>
        props.$isEven ? "1px solid var(--border)" : "none"};
      border-bottom: ${(props: { $isEven: boolean }) =>
        props.$isEven ? "1px solid var(--border)" : "none"};
    }
  }
`;

const JobTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const CompanyName = styled.h3`
  font-size: 1.1rem;
  color: var(--primary);
  margin-bottom: 0.25rem;
  font-weight: 500;
`;

const JobPeriod = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ResponsibilitiesList = styled.ul`
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ResponsibilityItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.5;
`;

const AchievementCard = styled.div`
  background-color: var(--bg-alternate);
  border-left: 3px solid var(--primary);
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0 0.25rem 0.25rem 0;
`;

const AchievementTitle = styled.h5`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const AchievementDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
`;

export {
  TimelineContainer,
  TimelineIcon,
  TimelineCard,
  JobTitle,
  CompanyName,
  JobPeriod,
  SectionTitle,
  ResponsibilitiesList,
  ResponsibilityItem,
  AchievementCard,
  AchievementTitle,
  AchievementDescription,
  PageContainer,
  PageHeader,
  PageTitle,
  TimelineItem,
};
