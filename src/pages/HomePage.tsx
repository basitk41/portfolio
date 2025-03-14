import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

import FeaturedProjects from "../components/home/FeaturedProjects";
import FeaturedPosts from "../components/home/FeaturedPosts";
import SkillsOverview from "../components/home/SkillsOverview";
import TestimonialsCarousel from "../components/home/TestimonialsCarousel";
import testimonials from "@/data/testimonials";

import {
  HeroSection,
  HeroTitleContainer,
  HeroTitle,
  HeroSubtitle,
  HeroText,
  CTAButton,
  SectionTitle,
  Section,
  TestimonialsSection,
} from "./HomePage.styles";

const HomePage = () => {
  const { t } = useTranslation();
  const [showTypewriter, setShowTypewriter] = useState(true);
  const [titleText, setTitleText] = useState("");
  const fullTitle = t("home.title");

  useEffect(() => {
    // Typewriter effect
    if (showTypewriter) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullTitle.length) {
          setTitleText(fullTitle.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setShowTypewriter(false);
          }, 1000); // Keep the cursor blinking for 1 second after typing is done
        }
      }, 100); // Adjust typing speed here

      return () => clearInterval(typingInterval);
    }
  }, [fullTitle, showTypewriter]);

  return (
    <>
      <HeroSection>
        <HeroTitleContainer>
          {showTypewriter ? (
            <HeroTitle $isTyping={true}>{titleText}</HeroTitle>
          ) : (
            <HeroTitle $isTyping={false}>{fullTitle}</HeroTitle>
          )}
        </HeroTitleContainer>
        <HeroSubtitle>{t("home.subtitle")}</HeroSubtitle>
        <HeroText>{t("home.intro")}</HeroText>
        <CTAButton to="/projects">
          {t("home.cta")} <FaArrowRight />
        </CTAButton>
      </HeroSection>

      <Section>
        <SectionTitle>{t("skills.title")}</SectionTitle>
        <SkillsOverview />
      </Section>

      <Section>
        <SectionTitle>{t("projects.title")}</SectionTitle>
        <FeaturedProjects />
      </Section>

      <TestimonialsSection>
        <SectionTitle>
          {t("testimonials.title", "What People Say")}
        </SectionTitle>
        <TestimonialsCarousel testimonials={testimonials} />
      </TestimonialsSection>

      <Section>
        <SectionTitle>{t("blog.title")}</SectionTitle>
        <FeaturedPosts />
      </Section>
    </>
  );
};

export default HomePage;
