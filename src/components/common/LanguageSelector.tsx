import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe, FaChevronDown } from "react-icons/fa";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";
import {
  Container,
  ToggleButton,
  Dropdown,
  DropdownItem,
  languages,
  Icon,
  ChevronIcon,
} from "./LanguageSelector.styles";

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

  useEffect(() => {
    createChat({
      webhookUrl:
        "https://n8n.rest/webhook/78f1134c-f527-4114-9ae6-dd32f434df19/chat",
      showWelcomeScreen: false,
      // @ts-ignore
      defaultLanguage: `${currentLanguage.code}`,
      initialMessages:
        currentLanguage.code === "en"
          ? ["Hi there! 👋", "My name is Basit. How can I assist you today?"]
          : [
              "Hallo! 👋",
              "Mein Name ist Basit. Wie kann ich Ihnen heute helfen?",
            ],
      i18n: {
        // @ts-ignore
        en: {
          title: "",
          subtitle: "Start a chat. I'm here to help you 24/7.",
          footer: "",
          getStarted: "New Conversation",
          inputPlaceholder: "Type your question..",
        },
        // @ts-ignore
        de: {
          title: "",
          subtitle:
            "Starte eine Konversation. Ich bin hier, um Ihnen 24/7 zu helfen.",
          footer: "",
          getStarted: "Neue Konversation",
          inputPlaceholder: "Geben Sie Ihre Frage ein..",
        },
      },
    });
  }, [isOpen]);

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
