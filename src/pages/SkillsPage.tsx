import { useState } from "react";
import { useTranslation } from "react-i18next";

import { skillCategories } from "@/data/skills";
import {
  SkillsGrid,
  SkillCard,
  SkillName,
  SkillLevel,
  ProgressBarContainer,
  ProgressBar,
  PageContainer,
  PageHeader,
  PageTitle,
  PageDescription,
  FilterTabs,
  FilterTab,
  LevelDescription,
} from "./SkillsPage.styles";
import { getSkillIcon } from "@/utils/icons";
import { getLevelDescription } from "@/utils/skillsLevel";

const SkillsPage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillCategories.flatMap((category) => category.skills)
      : skillCategories.find((category) => category.id === activeCategory)
          ?.skills || [];

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{t("skills.title")}</PageTitle>
        <PageDescription>{t("skills.description")}</PageDescription>

        <FilterTabs>
          <FilterTab
            $active={activeCategory === "all"}
            onClick={() => setActiveCategory("all")}
          >
            {t("skills.allSkills")}
          </FilterTab>

          {skillCategories.map((category) => (
            <FilterTab
              key={category.id}
              $active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {getSkillIcon(category.id)} {t(`skills.${category.id}`)}
            </FilterTab>
          ))}
        </FilterTabs>
      </PageHeader>

      <SkillsGrid>
        {filteredSkills.map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`}>
            <SkillName>
              {skill.name}
              <SkillLevel>{skill.level}%</SkillLevel>
            </SkillName>

            <ProgressBarContainer>
              <ProgressBar $level={skill.level} />
            </ProgressBarContainer>

            <LevelDescription>
              {getLevelDescription(skill.level)}
            </LevelDescription>
          </SkillCard>
        ))}
      </SkillsGrid>
    </PageContainer>
  );
};

export default SkillsPage;
