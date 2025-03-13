import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FaGlobe, FaChevronDown } from "react-icons/fa";

const languages = [
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
];

const Container = styled.div`
  position: relative;
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--bg-alternate);
  border: 2px solid var(--border);
  border-radius: 0.5rem;
  color: var(--text-primary);
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background: var(--bg-highlight);
    outline: none;
  }
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
`;

const ChevronIcon = styled(Icon)<{ isOpen: boolean }>`
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
`;

const Dropdown = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  min-width: 150px;
  z-index: 10;

  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const DropdownItem = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background: var(--bg-highlight);
  }

  &[aria-selected="true"] {
    background: var(--bg-highlight);
    font-weight: 600;
    color: var(--primary);
  }
`;

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container ref={dropdownRef}>
      <ToggleButton
        onClick={toggleDropdown}
        aria-label={t("common.language")}
        aria-expanded={isOpen}
        aria-controls="language-dropdown"
      >
        <Icon>
          <FaGlobe />
        </Icon>
        <span>{currentLanguage.name}</span>
        <ChevronIcon isOpen={isOpen}>
          <FaChevronDown size={12} />
        </ChevronIcon>
      </ToggleButton>

      <Dropdown isOpen={isOpen} id="language-dropdown" role="menu">
        {languages.map((language) => (
          <DropdownItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            aria-selected={language.code === i18n.language}
            role="menuitem"
          >
            {language.name}
          </DropdownItem>
        ))}
      </Dropdown>
    </Container>
  );
};

export default LanguageSelector;
