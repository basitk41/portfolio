import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";

// Types
export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  text: string;
  rating: number;
  image?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

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

const slideInNext = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInPrev = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Styled Components
const TestimonialsSection = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
`;

const TestimonialSlider = styled.div`
  position: relative;
  overflow: hidden;
  padding: 2rem 0;
`;

const TestimonialCard = styled.div<{
  $active: boolean;
  $direction: "next" | "prev" | null;
}>`
  display: ${(props) => (props.$active ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--bg-secondary);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  animation: ${(props) => {
      if (props.$active && props.$direction === "next") return slideInNext;
      if (props.$active && props.$direction === "prev") return slideInPrev;
      return fadeIn;
    }}
    0.5s ease forwards;
`;

const Avatar = styled.div<{ $image?: string }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 1rem;
  background-image: ${(props) =>
    props.$image ? `url(${props.$image})` : "none"};
  background-size: cover;
  background-position: center;
  background-color: ${(props) =>
    props.$image ? "transparent" : "var(--bg-highlight)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--primary);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const QuoteIcon = styled.div`
  font-size: 2rem;
  color: var(--primary);
  opacity: 0.5;
  margin-bottom: 1rem;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-style: italic;
  color: var(--text-primary);
`;

const TestimonialAuthor = styled.div`
  margin-top: 1rem;
`;

const TestimonialName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.25rem;
  color: var(--text-heading);
`;

const TestimonialPosition = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  color: #ffd700; /* Gold color for stars */
`;

const NavigationButton = styled.button<{ $side: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${(props) => (props.$side === "left" ? "left: -10px;" : "right: -10px;")}
  transform: translateY(-50%);
  border: none;
  background-color: var(--bg-primary);
  color: var(--primary);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background-color: var(--primary);
    color: white;
  }

  @media (max-width: 768px) {
    ${(props) => (props.$side === "left" ? "left: 5px;" : "right: 5px;")}
    width: 36px;
    height: 36px;
  }
`;

const IndicatorsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

const Indicator = styled.button<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  padding: 0;
  background-color: ${(props) =>
    props.$active ? "var(--primary)" : "var(--bg-highlight)"};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary-light);
  }
`;

const TestimonialsCarousel: React.FC<TestimonialsProps> = ({
  testimonials,
}) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);
  const [autoplay, setAutoplay] = useState(true);
  const length = testimonials.length;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (autoplay) {
      timer = setInterval(() => {
        setDirection("next");
        setCurrent((prevCurrent) => (prevCurrent + 1) % length);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [autoplay, length]);

  const nextSlide = () => {
    setAutoplay(false); // Disable autoplay on manual navigation
    setDirection("next");
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setAutoplay(false); // Disable autoplay on manual navigation
    setDirection("prev");
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const goToSlide = (index: number) => {
    setAutoplay(false); // Disable autoplay on manual navigation
    setDirection(index > current ? "next" : "prev");
    setCurrent(index);
  };

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <TestimonialsSection>
      <TestimonialSlider>
        <NavigationButton $side="left" onClick={prevSlide}>
          <FaChevronLeft />
        </NavigationButton>

        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            $active={index === current}
            $direction={direction}
          >
            {testimonial.image ? (
              <Avatar $image={testimonial.image} />
            ) : (
              <Avatar>{testimonial.name.charAt(0)}</Avatar>
            )}

            <QuoteIcon>
              <FaQuoteLeft />
            </QuoteIcon>

            <TestimonialText>{testimonial.text}</TestimonialText>

            <Rating>
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  color={i < testimonial.rating ? "#FFD700" : "#e4e5e9"}
                />
              ))}
            </Rating>

            <TestimonialAuthor>
              <TestimonialName>{testimonial.name}</TestimonialName>
              <TestimonialPosition>
                {testimonial.position}, {testimonial.company}
              </TestimonialPosition>
            </TestimonialAuthor>
          </TestimonialCard>
        ))}

        <NavigationButton $side="right" onClick={nextSlide}>
          <FaChevronRight />
        </NavigationButton>
      </TestimonialSlider>

      <IndicatorsContainer>
        {testimonials.map((_, index) => (
          <Indicator
            key={index}
            $active={index === current}
            onClick={() => goToSlide(index)}
          />
        ))}
      </IndicatorsContainer>
    </TestimonialsSection>
  );
};

export default TestimonialsCarousel;
