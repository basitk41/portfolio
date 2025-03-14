import { useTranslation } from "react-i18next";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "@/hooks/useTheme";
import { ToggleContainer, Icons, ToggleThumb } from "./ThemeToggle.styles";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const isLight = theme === "light";

  return (
    <ToggleContainer
      onClick={toggleTheme}
      aria-label={t("common.theme")}
      title={isLight ? t("common.dark") : t("common.light")}
    >
      <Icons theme={theme}>
        <FaSun size={14} />
        <FaMoon size={14} />
      </Icons>
      <ToggleThumb isLight={isLight} />
    </ToggleContainer>
  );
};

export default ThemeToggle;
