import React, { useState, useEffect } from "react";
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";

import { ITestimonialsProps } from "@/types";
import {
  TestimonialsSection,
  TestimonialSlider,
  TestimonialCard,
  Avatar,
  QuoteIcon,
  TestimonialText,
  TestimonialAuthor,
  TestimonialName,
  TestimonialPosition,
  Rating,
  NavigationButton,
  IndicatorsContainer,
  Indicator,
} from "./TestimonialsCarousel.styles";

const TestimonialsCarousel: React.FC<ITestimonialsProps> = ({
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
