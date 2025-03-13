import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { useState } from "react";
import {
  FaGraduationCap,
  FaLanguage,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";

const PageContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const PageHeader = styled.header`
  margin-bottom: 3rem;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ProfileImageContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    margin-right: 3rem;
    margin-bottom: 0;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileContent = styled.div`
  flex: 1;
`;

const ProfileDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin: 2.5rem 0 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: var(--primary);
  }
`;

const EducationCard = styled.div`
  background-color: var(--bg-secondary);
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
`;

const EducationHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const EducationIcon = styled.div`
  padding: 0.75rem;
  background-color: var(--bg-highlight);
  border-radius: 50%;
  margin-right: 1rem;
  color: var(--primary);
`;

const EducationDetails = styled.div`
  flex: 1;
`;

const EducationTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
`;

const EducationSubtitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: var(--text-secondary);
`;

// const EducationPeriod = styled.p`
//   font-size: 0.9rem;
//   color: var(--text-secondary);
//   margin-bottom: 1rem;
// `;

const EducationDescription = styled.p`
  line-height: 1.6;
`;

const LanguagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const LanguageCard = styled.div`
  background-color: var(--bg-secondary);
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
`;

const LanguageIcon = styled.div`
  padding: 0.75rem;
  background-color: var(--bg-highlight);
  border-radius: 50%;
  margin-right: 1rem;
  color: var(--primary);
`;

const LanguageName = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
`;

// Contact Section Styles
const ContactContainer = styled.section`
  margin-bottom: 3rem;
`;

const ContactDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContactCard = styled.div`
  background-color: var(--bg-secondary);
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
`;

const ContactIcon = styled.div`
  padding: 0.75rem;
  background-color: var(--bg-highlight);
  border-radius: 50%;
  margin-right: 1rem;
  color: var(--primary);
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const ContactLabel = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
`;

const ContactValue = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
`;

const ContactForm = styled.form`
  background-color: var(--bg-secondary);
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 0.25rem;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 0.25rem;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--primary-dark);
  }

  &:disabled {
    background-color: var(--text-secondary);
    cursor: not-allowed;
  }
`;

const FormMessage = styled.div<{ isError?: boolean }>`
  padding: 0.75rem;
  margin-top: 1rem;
  border-radius: 0.25rem;
  font-weight: 500;
  text-align: center;
  background-color: ${(props) =>
    props.isError ? "rgba(220, 53, 69, 0.1)" : "rgba(40, 167, 69, 0.1)"};
  color: ${(props) => (props.isError ? "#dc3545" : "#28a745")};
  border: 1px solid ${(props) => (props.isError ? "#dc3545" : "#28a745")};
`;

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
