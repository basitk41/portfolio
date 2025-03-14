import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";

import { skillCategories } from "@/data/skills";
import {
  Container,
  TabsContainer,
  Tab,
  SkillsGrid,
  SkillCard,
  SkillIcon,
  SkillName,
  SkillLevel,
  ViewAllLink,
  SkillProgress,
} from "./SkillsOverview.styles";
import { getSkillIcon } from "@/utils/icons";

const SkillsOverview = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("frontend");

  const activeSkills =
    skillCategories.find((category) => category.id === activeCategory)
      ?.skills || [];

  return (
    <Container>
      <TabsContainer>
        {skillCategories.map((category) => (
          <Tab
            key={category.id}
            $active={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            {getSkillIcon(category.id)}
            {t(`skills.${category.id}`)}
          </Tab>
        ))}
      </TabsContainer>

      <SkillsGrid>
        {activeSkills.slice(0, 8).map((skill) => (
          <SkillCard key={skill.name}>
            <SkillIcon>{getSkillIcon(skill.icon)}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
            <SkillLevel>
              <SkillProgress $level={skill.level} />
            </SkillLevel>
          </SkillCard>
        ))}
      </SkillsGrid>

      <ViewAllLink to="/skills">
        {t("skills.title")} <FaArrowRight size={14} />
      </ViewAllLink>
    </Container>
  );
};

export default SkillsOverview;
