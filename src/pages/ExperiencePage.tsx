import { useTranslation } from "react-i18next";
import { FaBriefcase, FaTasks, FaTrophy } from "react-icons/fa";

import { experiences } from "@/data/experiences";
import {
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
} from "./ExperiencePage.styles";

const ExperiencePage = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{t("experience.title")}</PageTitle>
      </PageHeader>

      <TimelineContainer>
        {experiences.map((exp, index) => (
          <TimelineItem key={exp.id} $isEven={index % 2 === 1}>
            <TimelineIcon $isEven={index % 2 === 1}>
              <FaBriefcase size={20} />
            </TimelineIcon>

            <TimelineCard $isEven={index % 2 === 1}>
              <JobTitle>{exp.position}</JobTitle>
              <CompanyName>{exp.company}</CompanyName>
              <JobPeriod>
                {exp.period} | {exp.location}
              </JobPeriod>

              <SectionTitle>
                <FaTasks size={16} />
                {t("experience.responsibilities")}
              </SectionTitle>

              <ResponsibilitiesList>
                {exp.responsibilities.map((responsibility, i) => (
                  <ResponsibilityItem key={i}>
                    {responsibility}
                  </ResponsibilityItem>
                ))}
              </ResponsibilitiesList>

              {exp.achievements.length > 0 && (
                <>
                  <SectionTitle>
                    <FaTrophy size={16} />
                    {t("experience.achievements")}
                  </SectionTitle>

                  {exp.achievements.map((achievement, i) => (
                    <AchievementCard key={i}>
                      <AchievementTitle>{achievement.title}</AchievementTitle>
                      <AchievementDescription>
                        {achievement.description}
                      </AchievementDescription>
                    </AchievementCard>
                  ))}
                </>
              )}
            </TimelineCard>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </PageContainer>
  );
};

export default ExperiencePage;
