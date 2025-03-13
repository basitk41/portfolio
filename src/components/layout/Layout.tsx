import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Main = styled.main`
  min-height: calc(100vh - 160px); // Adjust based on header/footer height
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
