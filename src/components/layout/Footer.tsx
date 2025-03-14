import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import {
  FooterContainer,
  FooterContent,
  SocialLinks,
  SocialLink,
  Copyright,
  MadeWith,
} from "./Footer.styles";

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
