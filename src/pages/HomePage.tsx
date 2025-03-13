import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

import FeaturedProjects from "../components/home/FeaturedProjects";
import FeaturedPosts from "../components/home/FeaturedPosts";
import SkillsOverview from "../components/home/SkillsOverview";
import TestimonialsCarousel, {
  Testimonial,
} from "../components/home/TestimonialsCarousel";

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCursor = keyframes`
  from, to { border-color: transparent }
  50% { border-color: var(--primary); }
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(
    135deg,
    var(--bg-primary) 0%,
    var(--bg-secondary) 100%
  );
`;

const HeroTitleContainer = styled.div`
  display: inline-block;
  margin-bottom: 1rem;
`;

interface HeroTitleProps {
  $isTyping: boolean;
}

const HeroTitle = styled.h1<HeroTitleProps>`
  font-size: 3rem;
  color: var(--text-heading);
  display: ${(props) => (props.$isTyping ? "inline-block" : "block")};
  white-space: ${(props) => (props.$isTyping ? "nowrap" : "normal")};
  overflow: hidden;

  ${(props) =>
    props.$isTyping &&
    css`
      border-right: 3px solid var(--primary);
      animation: ${typing} 3.5s steps(40, end),
        ${blinkCursor} 0.75s step-end infinite;
    `}

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
  color: var(--text-secondary);
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 3.5s;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.1rem;
  max-width: 800px;
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 4s;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 4.5s;

  &:hover {
    background-color: var(--primary-dark);
    text-decoration: none;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background-color: var(--primary);
  }
`;

const Section = styled.section`
  padding: 4rem 1rem;
  opacity: 0;
  animation: ${fadeIn} 1s ease forwards;

  &:nth-of-type(2) {
    animation-delay: 0.2s;
  }

  &:nth-of-type(3) {
    animation-delay: 0.4s;
  }

  &:nth-of-type(4) {
    animation-delay: 0.6s;
  }

  &:nth-of-type(5) {
    animation-delay: 0.8s;
  }
`;

const TestimonialsSection = styled(Section)`
  background-color: var(--bg-highlight);
  margin: 2rem 0;
  border-radius: 0;

  @media (min-width: 768px) {
    border-radius: 1rem;
    margin: 2rem;
  }
`;

const HomePage = () => {
  const { t } = useTranslation();
  const [showTypewriter, setShowTypewriter] = useState(true);
  const [titleText, setTitleText] = useState("");
  const fullTitle = t("home.title");

  // Sample testimonials data - in a real app, you would likely fetch this from an API
  // or include it in your i18n files
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      position: "Product Manager",
      company: "TechCorp",
      text: "Working with Basit was an amazing experience. His technical skills are top-notch, and he consistently delivered high-quality code ahead of schedule. I was particularly impressed by his ability to translate complex business requirements into elegant technical solutions.",
      rating: 5,
      image: "/images/testimonials/testimonial1.jpg",
    },
    {
      id: "2",
      name: "Michael Chen",
      position: "CTO",
      company: "StartupX",
      text: "Basit is one of the most talented developers I've had the pleasure to work with. His deep understanding of both frontend and backend technologies made him invaluable to our project. He's not just a coder, but a problem solver who thinks about the bigger picture.",
      rating: 5,
      image: "/images/testimonials/testimonial2.jpg",
    },
    {
      id: "3",
      name: "Emma Rodriguez",
      position: "UX Designer",
      company: "DesignHub",
      text: "I collaborated with Basit on several projects, and his attention to detail when implementing designs is exceptional. He has a great eye for UI nuances and always makes sure the final product matches the design perfectly while still maintaining excellent performance.",
      rating: 5,
      image: "/images/testimonials/testimonial3.jpg",
    },
    {
      id: "4",
      name: "Robert Kim",
      position: "Project Lead",
      company: "Enterprise Solutions",
      text: "Basit brings both technical expertise and leadership to the table. He's proactive in identifying potential issues and suggesting improvements. His communication skills are excellent, making complex technical concepts accessible to non-technical stakeholders.",
      rating: 4,
      image: "/images/testimonials/testimonial4.jpg",
    },
  ];

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
