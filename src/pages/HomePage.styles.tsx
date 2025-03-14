import { Link } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";

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

export {
  HeroSection,
  HeroTitleContainer,
  HeroTitle,
  HeroSubtitle,
  HeroText,
  CTAButton,
  SectionTitle,
  Section,
  TestimonialsSection,
};
