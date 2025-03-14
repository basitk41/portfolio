import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: var(--bg-secondary);
  padding: 2rem;
  margin-top: 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled.a`
  color: var(--text-primary);
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary);
  }
`;

const Copyright = styled.p`
  margin: 0;
  color: var(--text-secondary);
  text-align: center;
`;

const MadeWith = styled.p`
  margin: 0.5rem 0 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-align: center;
`;

export {
  FooterContainer,
  FooterContent,
  SocialLinks,
  SocialLink,
  Copyright,
  MadeWith,
};
