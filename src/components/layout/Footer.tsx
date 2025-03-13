import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

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

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialLink
            href="https://www.linkedin.com/in/basitk41"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="https://github.com/basitk41"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </SocialLink>
          <SocialLink href="mailto:basitk41@gmail.com" aria-label="Email">
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>

        <Copyright>{t("footer.copyright")}</Copyright>
        <MadeWith>{t("footer.madeWith")}</MadeWith>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
