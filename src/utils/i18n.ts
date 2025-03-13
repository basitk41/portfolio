// i18n.js or similar config file
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Add this import to bundle locales with your app
import enTranslation from "../../public/locales/en/translation.json";
import deTranslation from "../../public//locales/de/translation.json";
// Add all your locales

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    de: {
      translation: deTranslation,
    },
    // Add all your languages
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
