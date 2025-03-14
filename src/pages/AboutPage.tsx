import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  FaGraduationCap,
  FaLanguage,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";

import {
  PageContainer,
  PageHeader,
  PageTitle,
  ContactContainer,
  ContactForm,
  ContactLabel,
  ProfileContent,
  ProfileImage,
  ProfileSection,
  ProfileDescription,
  ProfileImageContainer,
  LanguagesContainer,
  EducationCard,
  EducationHeader,
  EducationIcon,
  EducationDetails,
  EducationTitle,
  // EducationPeriod,
  EducationDescription,
  LanguageCard,
  LanguageIcon,
  LanguageName,
  ContactCard,
  ContactIcon,
  ContactInfo,
  ContactValue,
  ContactDetailsContainer,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  FormMessage,
  SectionTitle,
  EducationSubtitle,
} from "./AboutPage.styles";

const AboutPage = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{
    text: string;
    isError: boolean;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real application, you would send the form data to your backend
      // For demonstration, we'll simulate a successful submission after a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setFormMessage({
        text: t("about.contact.form.successMessage"),
        isError: false,
      });

      // Clear success message after 5 seconds
      setTimeout(() => setFormMessage(null), 5000);
    } catch (error) {
      setFormMessage({
        text: t("about.contact.form.errorMessage"),
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{t("about.title")}</PageTitle>
      </PageHeader>

      <ProfileSection>
        <ProfileImageContainer>
          <ProfileImage src="./images/profile.jpg" alt="Basit Ali" />
        </ProfileImageContainer>

        <ProfileContent>
          <ProfileDescription>{t("about.description")}</ProfileDescription>
        </ProfileContent>
      </ProfileSection>

      <section>
        <SectionTitle>{t("about.education.title")}</SectionTitle>

        <EducationCard>
          <EducationHeader>
            <EducationIcon>
              <FaGraduationCap size={24} />
            </EducationIcon>

            <EducationDetails>
              <EducationTitle>{t("about.education.degree")}</EducationTitle>
              <EducationSubtitle>
                {t("about.education.university")}
              </EducationSubtitle>
              {/* <EducationPeriod>{t("about.education.period")}</EducationPeriod> */}
            </EducationDetails>
          </EducationHeader>

          <EducationDescription>
            {t("about.education.achievements")}
          </EducationDescription>
        </EducationCard>
      </section>

      <section>
        <SectionTitle>{t("about.languages.title")}</SectionTitle>

        <LanguagesContainer>
          <LanguageCard>
            <LanguageIcon>
              <FaLanguage size={24} />
            </LanguageIcon>
            <LanguageName>{t("about.languages.english")}</LanguageName>
          </LanguageCard>

          <LanguageCard>
            <LanguageIcon>
              <FaLanguage size={24} />
            </LanguageIcon>
            <LanguageName>{t("about.languages.urdu")}</LanguageName>
          </LanguageCard>

          <LanguageCard>
            <LanguageIcon>
              <FaLanguage size={24} />
            </LanguageIcon>
            <LanguageName>{t("about.languages.german")}</LanguageName>
          </LanguageCard>
        </LanguagesContainer>
      </section>

      <ContactContainer>
        <SectionTitle>{t("about.contact.title", "Contact Me")}</SectionTitle>

        <ContactDetailsContainer>
          <ContactCard>
            <ContactIcon>
              <FaEnvelope size={24} />
            </ContactIcon>
            <ContactInfo>
              <ContactLabel>{t("about.contact.email", "Email")}</ContactLabel>
              <ContactValue>
                <a href="mailto:basitk41@gmail.com">basitk41@gmail.com</a>
              </ContactValue>
            </ContactInfo>
          </ContactCard>

          <ContactCard>
            <ContactIcon>
              <FaPhone size={24} />
            </ContactIcon>
            <ContactInfo>
              <ContactLabel>{t("about.contact.phone", "Phone")}</ContactLabel>
              <ContactValue>
                <a href="tel:+491628510633">+49 162 8510633</a>
              </ContactValue>
            </ContactInfo>
          </ContactCard>
        </ContactDetailsContainer>

        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel htmlFor="name">
              {t("about.contact.form.name", "Name")}
            </FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="email">
              {t("about.contact.form.email", "Email")}
            </FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="subject">
              {t("about.contact.form.subject", "Subject")}
            </FormLabel>
            <FormInput
              type="text"
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="message">
              {t("about.contact.form.message", "Message")}
            </FormLabel>
            <FormTextarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              t("about.contact.form.sending", "Sending...")
            ) : (
              <>
                <FaPaperPlane size={16} />
                {t("about.contact.form.send", "Send Message")}
              </>
            )}
          </SubmitButton>

          {formMessage && (
            <FormMessage isError={formMessage.isError}>
              {formMessage.text}
            </FormMessage>
          )}
        </ContactForm>
      </ContactContainer>
    </PageContainer>
  );
};

export default AboutPage;
