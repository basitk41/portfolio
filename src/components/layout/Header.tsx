import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "../common/ThemeToggle";
import LanguageSelector from "../common/LanguageSelector";

import {
  HeaderContainer,
  Logo,
  MenuButton,
  Nav,
  NavLinks,
  NavItem,
  NavLink,
  ControlsContainer,
} from "./Header.styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <HeaderContainer>
        <Logo to="/">Basit Ali</Logo>

        <MenuButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>

        <Nav isOpen={isOpen}>
          <NavLinks>
            <NavItem>
              <NavLink to="/" $active={isActive("/")}>
                {t("navigation.home")}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" $active={isActive("/about")}>
                {t("navigation.about")}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/experience" $active={isActive("/experience")}>
                {t("navigation.experience")}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/skills" $active={isActive("/skills")}>
                {t("navigation.skills")}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/projects" $active={isActive("/projects")}>
                {t("navigation.projects")}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/blog" $active={isActive("/blog")}>
                {t("navigation.blog")}
              </NavLink>
            </NavItem>
          </NavLinks>

          <ControlsContainer>
            <ThemeToggle />
            <LanguageSelector />
          </ControlsContainer>
        </Nav>
      </HeaderContainer>
    </>
  );
};

export default Header;
