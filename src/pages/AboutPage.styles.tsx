import styled from "styled-components";

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

const EducationPeriod = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
`;

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

export {
  LanguagesContainer,
  ContactContainer,
  ContactDetailsContainer,
  ContactIcon,
  ContactInfo,
  ContactLabel,
  ContactValue,
  ContactForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  FormMessage,
  ContactCard,
  LanguageCard,
  LanguageIcon,
  LanguageName,
  EducationCard,
  EducationHeader,
  EducationIcon,
  EducationDetails,
  EducationTitle,
  EducationDescription,
  EducationSubtitle,
  EducationPeriod,
  SectionTitle,
  PageContainer,
  PageHeader,
  PageTitle,
  ProfileSection,
  ProfileImage,
  ProfileDescription,
  ProfileContent,
  ProfileImageContainer,
};
