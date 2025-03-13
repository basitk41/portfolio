import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "../common/ThemeToggle";
import LanguageSelector from "../common/LanguageSelector";

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

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--bg-secondary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--text-primary);
  text-decoration: none;
  z-index: 300;

  &:hover {
    color: var(--primary);
  }
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 4rem;
    background-color: var(--bg-secondary);
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
    box-shadow: ${(props) =>
      props.isOpen ? "-5px 0 15px rgba(0, 0, 0, 0.1)" : "none"};
    z-index: 300;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  color: ${(props) =>
    props.$active ? "var(--primary)" : "var(--text-primary)"};
  text-decoration: none;
  font-weight: ${(props) => (props.$active ? "600" : "400")};
  padding: 0.5rem;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: ${(props) => (props.$active ? "100%" : "0")};
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--primary);
    transition: width 0.3s;
  }

  &:hover {
    color: var(--primary);

    &:after {
      width: 100%;
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 301;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;
